import { PDFViewer  } from "@react-pdf/renderer"
import Reporte from "./Reporte"

const GeneratePdf = () => (
    <div style={{ width: "65vh", height: "50vh" }}>
        <PDFViewer width="100%" height="100%">
            <Reporte />
        </PDFViewer>
    </div>
)

export default GeneratePdf