import { Link } from "react-router-dom";

const Home = () => {


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