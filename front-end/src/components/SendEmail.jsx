import { useEffect, useState } from "react";
import emailService from "../services/email";
import productService from "../services/products";

const SendEmail = () => {
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        if (emailSent) return

        productService.getAll().then((productos) => {
            const productsToShow = productos.filter((product) => product.cantidad < 10);

            if (productsToShow.length > 0) {
                const productList = productsToShow
                    .map((p) => `- ${p.nombre}: ${p.cantidad} unidades`)
                    .join("\n");

                emailService
                    .sendEmail({
                        to: "davidvillaalzate@gmail.com",
                        subject: "🔴 Alerta: Productos con pocas unidades",
                        message: `Los siguientes productos tienen pocas unidades en stock:\n\n${productList}\n\nPor favor, revisa el inventario.`,
                    })
                    .then(() => setEmailSent(true))
                    .catch((error) => console.error("Error al enviar correo:", error))
            }
        })
    }, [emailSent])

    return null
}

export default SendEmail;