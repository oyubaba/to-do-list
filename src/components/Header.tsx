import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CgGames } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [isOpenUserIcon, setIsOpenUserIcon] = useState(false);

    useEffect(() => {
        const usuarioLogado = localStorage.getItem('isLogged');
        if (usuarioLogado) {
            const userNameString = localStorage.getItem('UserLoggedName');
            if (userNameString !== null) {
                const userName = JSON.parse(userNameString);
                setUserName(userName);
            }
        }
    }, []);

    return (
        <Flex h="70px" backgroundColor="#00111A" justifyContent="center" alignItems="center">
            <Flex w="100vw" maxW="1100px" alignItems="center" justifyContent="space-between">
                <Flex color="#fff" alignItems="center">
                    <CgGames color="#065E7C" size="40px" />
                    <Text fontSize="20px" fontWeight="bold" ml="10px">Tarefas</Text>
                </Flex>
                <Flex alignItems="center">
                    <FaUser color="#fff" onClick={() => {
                        if(userName) {
                            setIsOpenUserIcon(!isOpenUserIcon)
                        } else {
                            navigate('/login');
                        }
                    }} cursor="pointer" />
                    {isOpenUserIcon && userName && (
                        <Flex position="absolute" top="45px" w="130px" backgroundColor="#0D1D25">
                            <Text p="10px">Olá, {userName}</Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>

        </Flex>
    )
}

export default Header;