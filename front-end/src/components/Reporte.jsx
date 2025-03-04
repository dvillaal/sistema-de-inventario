import { useState, useEffect } from "react"
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer"
import productService from '../services/products'

const Reporte = () => {

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        productService
            .getAll()
            .then(initialProducts => {
                setProductos(initialProducts)
            })
    }, [])

    const getCurrentDate = () => {
        const date = new Date();
        return date.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };

    const styles = StyleSheet.create({
        page: { padding: 30, fontSize: 12 },
        header: { textAlign: "center", marginBottom: 20 },
        title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
        date: { fontSize: 12, color: "gray" },
        table: { display: "table", width: "100%", borderStyle: "solid", borderWidth: 1, marginTop: 10 },
        tableRow: { flexDirection: "row" },
        tableHeader: { backgroundColor: "#e4e4e4", fontWeight: "bold" },
        tableCell: { flex: 1, borderRightWidth: 1, borderBottomWidth: 1, padding: 5, textAlign: "center" },
        footer: { position: "absolute", bottom: 30, left: 30, fontSize: 10, color: "gray" },
    })

    const formatCurrency = (value) => {
        return `$${new Intl.NumberFormat("es-ES", { 
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0 
        }).format(value)}`;
    }

    return (
        <Document>
            <Page size="A4" style={styles.page}>
            {/* Encabezado */}
            <View style={styles.header}>
                <Text style={styles.title}>Reporte de Productos</Text>
                <Text style={styles.date}>Fecha: {getCurrentDate()}</Text>
            </View>

            {/* Tabla de usuarios */}
            <View style={styles.table}>
                {/* Encabezados de la tabla */}
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <Text style={styles.tableCell}>Nombre</Text>
                    <Text style={styles.tableCell}>Referencia</Text>
                    <Text style={styles.tableCell}>Categoria</Text>
                    <Text style={styles.tableCell}>Precio</Text>
                    <Text style={styles.tableCell}>Cantidad</Text>
                </View>

                {/* Filas de la tabla (Ejemplo) */}
                {productos.map((product, i) => (
                    <View style={styles.tableRow} key={i}>
                        <Text style={styles.tableCell}>{product.nombre}</Text>
                        <Text style={styles.tableCell}>{product.numeroReferencia}</Text>
                        <Text style={styles.tableCell}>{product.categoria}</Text>
                        <Text style={styles.tableCell}>{formatCurrency(product.precio)}</Text>
                        <Text style={styles.tableCell}>{product.cantidad}</Text>
                    </View>

                ))}
            </View>

            {/* Pie de página */}
            <Text style={styles.footer}>Generado automáticamente por el sistema</Text>
        </Page>
        </Document>
    )

}

export default Reporte