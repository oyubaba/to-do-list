import { Flex, Text } from "@chakra-ui/react";
import { CgGames } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <Flex h="70px" backgroundColor="#00111A" justifyContent="center" alignItems="center">
            <Flex w="100vw" maxW="1100px" alignItems="center" justifyContent="space-between">
                <Flex color="#fff" alignItems="center">
                    <CgGames color="#065E7C" size="40px" />
                    <Text fontSize="20px" fontWeight="bold" ml="10px">best browser games</Text>
                </Flex>
                <Flex alignItems="center">
                {/* <Input placeholder='Busque por jogos' backgroundColor="#0D1D25" color="#7C7C8A" w="350px" h="40px" mr="20px"/> */}
                <FaUser color="#fff" />
                </Flex>
            </Flex>

        </Flex>
    )
}

export default Header;