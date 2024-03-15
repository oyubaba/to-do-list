import { useNavigate } from "react-router-dom";
import { LoginType } from "../../types/login.type";
import {
    FormControl,
    FormLabel,
    Input,
    Text,
    Button,
    Flex,
} from '@chakra-ui/react'
import { CgGames } from "react-icons/cg";


const Login = () => {

    const navigate = useNavigate();

    const realizarLogin = (novoUsuario: LoginType) => {
        const listaAtual = localStorage.getItem('listaUsuarios');
        let listaUsuariosCadastros = [];

        if (listaAtual) {
            listaUsuariosCadastros = JSON.parse(listaAtual);
        }

        const usuarioExiste = listaUsuariosCadastros.find((usuario: LoginType) => usuario.email === novoUsuario.email && usuario.senha === novoUsuario.senha)

        if (usuarioExiste) {
            alert(`Seja bem-vindo(a) ${usuarioExiste.nome}`)
            navigate('/jogos');
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioExiste))
        } else {
            alert('Usuário ou senha inválidos')
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const submitHandler = (e: any) => {
        e.preventDefault();
        const loginUsuario: LoginType = {
            email: e.target[0].value,
            senha: e.target[1].value
        }
        realizarLogin(loginUsuario);
    }
    return (
        <Flex justifyContent="center" backgroundColor="#000" color="#fff" fontFamily="sans-serif" padding="0 100px">
            <Flex w="100%" h="100vh" maxWidth="1000px" alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <CgGames color="#065E7C" size="70px" />
                    <Text fontSize="30px" fontWeight="bold" ml="20px">Tarefas</Text>
                </Flex>
                <Flex flexDirection="column" w="450px" h="520px" backgroundColor="#001119" justifyContent="center" alignItems="center" borderRadius="16px">
                    <Text fontSize="30px" fontWeight="bold">Faça login</Text>
                    <form onSubmit={submitHandler}>
                        <FormControl mb="25px">
                            <FormLabel>Email</FormLabel>
                            <Input type='email' h="48px" w="300px" backgroundColor="#0D1D25" color="#fff" placeholder="Exemplo: exemplo@exemplo.com" />
                        </FormControl>
                        <FormControl mb="25px">
                            <FormLabel>Senha</FormLabel>
                            <Input type='password' h="48px" w="300px" backgroundColor="#0D1D25" color="#fff" placeholder="No mínimo 6 caracteres" />
                        </FormControl>
                        <Button type="submit" w="100%" h="48px" borderRadius="5px" backgroundColor="#750310" color="#fff">Entrar</Button>
                        <Text textAlign="center" cursor="pointer" onClick={() => navigate('/cadastro')}>Criar uma conta</Text>
                    </form>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Login;