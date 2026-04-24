import App from '../App'
import Contacto from '../pages/Contacto'
import Inicio from '../pages/Inicio'
import Productos from '../pages/Productos'
export let routerApp = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/contacto",
        element: <Contacto />
    },
    {
        path: "/inicio",
        element: <Inicio />
    },
    {
        path: "/productos",
        element: <Productos />
    }
]