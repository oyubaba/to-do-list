import { UsuarioType } from "../../types/usuario.type";
import { useNavigate } from "react-router-dom";
import {
    Text,
    Button,
    Flex,
    Box,
} from '@chakra-ui/react'
import { CgGames } from "react-icons/cg";
import CustomInput from "../../components/Input";

const Cadastro = () => {
    const navigate = useNavigate();
    const cadastrarUsuario = (usuario: UsuarioType) => {
        const listaAtual = localStorage.getItem('listaUsuarios');
        let listaUsuarios = [];

        if (listaAtual) {
            listaUsuarios = JSON.parse(listaAtual);
        }

        localStorage.setItem('listaUsuarios', JSON.stringify([...listaUsuarios, usuario]));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const submitHandler = (e: any) => {
        e.preventDefault();
        const novoUsuario: UsuarioType = {
            nome: e.target[0].value,
            email: e.target[1].value,
            senha: e.target[2].value,
            dataNascimento: e.target[3].value,
            estado: e.target[4].value,
            pais: e.target[5].value
        }
        cadastrarUsuario(novoUsuario);
        navigate('/jogos');
    }

    return (
        <Flex justifyContent="center" backgroundColor="#000" color="#fff" fontFamily="sans-serif" padding="0 100px">
            <Flex w="100%" h="100vh" maxWidth="1000px" alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <CgGames color="#065E7C" size="70px" />
                    <Text fontSize="30px" fontWeight="bold" ml="20px">best browser games</Text>
                </Flex>
                <Flex flexDirection="column" w="650px" h="520px" backgroundColor="#001119" justifyContent="center" alignItems="center" borderRadius="16px">
                    <Text fontSize="30px" fontWeight="bold">Crie sua conta</Text>
                    <form onSubmit={submitHandler}>
                        <Flex>
                        <Box mr="20px">
                        <CustomInput label="Seu nome" type="text" placeholder="Exemplo: exemplo@exemplo.com" />
                        <CustomInput label="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com" />
                        <CustomInput label="Senha" type="password" placeholder="No mínimo 6 caracteres" />
                        </Box>
                        <Box>
                        <CustomInput label="Data de Nascimento" type="date" />
                        <CustomInput label="Estado" type="text" />
                        <CustomInput label="Pais" type="text" />
                        </Box>
                        </Flex>
                        <Button type="submit" w="100%" h="48px" borderRadius="5px" backgroundColor="#750310" color="#fff" cursor="pointer">Criar conta</Button>
                        <Text textAlign="center" cursor="pointer" onClick={() => navigate('/login')}>Já tenho uma conta</Text>
                    </form>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Cadastro;