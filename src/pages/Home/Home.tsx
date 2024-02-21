import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {

    // const navigate = useNavigate();

    // useEffect(() => {
    //     const usuarioLogado = localStorage.getItem('usuarioLogado');
    //     if(usuarioLogado) {
    //         navigate('/jogos');
    //     }
    // }, [navigate]);

    return <div>
        <Link to="/login">
            <button>Já tenho cadastro</button>
        </Link>
        <Link to="/cadastro">
            <button>Sou novo aqui</button>
        </Link>
    </div>
}

export default Home;