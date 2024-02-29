import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Jogos from "./pages/Jogos/Jogos";
import NovoJogo from "./pages/NovoJogo/NovoJogo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Jogos />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <Cadastro />
    },
    {
        path: "/jogos",
        element: <Jogos />
    },
    {
        path: "/novo-jogo",
        element: <NovoJogo />
    },
])

export default router;