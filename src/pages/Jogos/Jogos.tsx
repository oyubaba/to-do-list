import React, { useEffect, useState } from "react";
import jogosMock from "../../mocks/jogos.mock";
import Header from "../../components/Header";
import { Box, Button, Card, CardBody, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Jogos = () => {
    const [filtro, setFiltro] = useState<string>('');
    const [filtroCategoria, setFiltroCategoria] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('jogosMock', JSON.stringify(jogosMock));
    }, []);

    const listaDeJogos = () => {
        let listaJogos = [...jogosMock];
        const jogosAtuais = localStorage.getItem('jogosAtuais');
        if (jogosAtuais) {
            listaJogos = JSON.parse(jogosAtuais)
        }
        return listaJogos.filter(jogo => jogo.nome.toLowerCase().includes(filtro.toLowerCase()) && jogo.status.toLowerCase().includes(filtroCategoria.toLowerCase()));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const submitHandler = (e: any) => {
        e.preventDefault();
        const novoFiltro = e.target[0].value;
        const novaCategoria = e.target[1].value;
        setFiltro(novoFiltro);
        setFiltroCategoria(novaCategoria);
    }

    return (
        <Box backgroundColor="#00070A" color="#fff" fontFamily="sans-serif">
            <Header />
            <Flex flexDirection="column" p="20px" alignItems="center" min-height="100vh">
                <Box maxW="1100px">
                    <h2>Jogos</h2>
                    <form onSubmit={submitHandler}>
                        <Flex justifyContent="space-between">
                            <Flex>
                                <Input type='text' h="40px" w="200px" backgroundColor="#0D1D25" color="#fff" placeholder="Nome do jogo" mr="20px" />
                                <Select placeholder='Select option' h="40px" w="200px" backgroundColor="#0D1D25" color="#fff" mr="30px">
                                    <option value="completo">completo</option>
                                    <option value="inacabada">incompleto</option>
                                </Select>
                                <Button cursor="pointer" type="submit" w="150px" h="40px" borderRadius="5px" backgroundColor="#750310" color="#fff">Pesquisar</Button>
                            </Flex>
                            <Box>
                                <Button cursor="pointer" w="150px" h="40px" borderRadius="5px" backgroundColor="#750310" color="#fff" onClick={() => navigate('/novo-jogo')}>Cadastrar jogo</Button>
                            </Box>
                        </Flex>
                    </form>
                    <Flex flexWrap="wrap" mt="30px">
                        {listaDeJogos().length > 0 ? (
                            listaDeJogos().map((jogo, index) => (
                                <Card cursor="pointer" key={index} backgroundColor="#000000" w="250px" m="5px">
                                    <CardBody>
                                        <Box p="10px">
                                            <Text fontSize="20px" fontWeight="bold">{jogo.nome}</Text>
                                            <Text>{jogo.descricao}</Text>
                                            <Text>{jogo.status}</Text>
                                            <Text>{jogo.data}</Text>
                                        </Box>
                                    </CardBody>
                                </Card>
                            ))
                        ) : (
                            <p>Nenhum jogo encontrado, tente outro filtro</p>
                        )}
                    </Flex>
                </Box>

            </Flex>
        </Box>
    )
}

export default Jogos;
