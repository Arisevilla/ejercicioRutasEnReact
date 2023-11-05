import { createBrowserRouter } from "react-router-dom";
import { Home } from "../layouts/Home";
import { QuienesSomos } from "../layouts/QuienesSomos";
import { ProductosServicios } from "../layouts/ProductosServicios";
import { Contacto } from "../layouts/Contacto";
import { Agradecimiento } from "../layouts/Agradecimiento";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },

    {
        path:"/quienessomos",
        element:<QuienesSomos/>
    },

    {
        path:"/productos",
        element:<ProductosServicios/>
    },

    {
        path:"/contacto",
        element:<Contacto/>
    },

    {
        path:"/agradecimiento",
        element:<Agradecimiento/>
    },

])
export {router}