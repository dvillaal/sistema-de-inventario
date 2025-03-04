import Administrador from "./Administrador";
import Asesor from "./Asesor";
import Bodeguero from "./Bodeguero";
import { useState, useEffect } from "react";
import SendEmail from "./SendEmail";

const Rol = ({ rol }) => {
    const [showEmail, setShowEmail] = useState(false);

    useEffect(() => {
        if (rol === "admin" && !showEmail) {
            setShowEmail(true);
        }
    }, [rol, showEmail]);

    if (rol === "asesor") return <Asesor />;
    if (rol === "bodeguero") return <Bodeguero />;

    return (
        <div>
            <Administrador />
            {showEmail && <SendEmail />}
        </div>
    );
};

export default Rol;