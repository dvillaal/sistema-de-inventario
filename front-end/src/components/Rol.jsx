import Administrador from "./Administrador"
import Asesor from "./Asesor"
import Bodeguero from "./Bodeguero"

const Rol = ({ rol }) => {

    if (rol === 'asesor') {
        return (
            <Asesor />
        )
    } else if (rol === 'admin') {
        return (
        <Administrador />
        )
    } else if (rol === 'bodeguero'){
        return (
            <Bodeguero />
        )
    }
}

export default Rol