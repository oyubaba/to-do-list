import { Box, Button, Flex, FormLabel, Select, Text, Textarea } from "@chakra-ui/react";
import Header from "../../components/Header";
import CustomInput from "../../components/Input";
import categoriasMock from "../../mocks/categorias.mock";
import { JogoType } from "../../types/jogo.type";
import { useNavigate } from "react-router-dom";

const NovoJogo = () => {

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const novoJogo: JogoType = {
            nome: e.target[0].value,
            categoria: e.target[1].value,
            url: e.target[2].value,
            urlDemostracao: e.target[3].value,
            imagem: e.target[4].value,
            descricao: e.target[5].value
        }

        let jogosMock: JogoType[] = [];

        const jogosMockString = localStorage.getItem('jogosMock');

        if (jogosMockString) {
            console.log('entrou aqui 1')
            jogosMock = JSON.parse(jogosMockString);
        }

        jogosMock.push(novoJogo);

        localStorage.setItem('jogosMock', JSON.stringify(jogosMock));
        console.log('entrou aqui 2', jogosMock)

        navigate('/jogos');
    }


    return (
        <Box backgroundColor="#00070A" color="#fff" fontFamily="sans-serif" h="100vh">
            <Header />

            <Flex w="100%" justifyContent="center" alignItems="center">

                <form onSubmit={handleSubmit}>
                    <Flex flexDirection="column" maxW="800px">
                        <Text fontWeight="bold" fontSize="22px">Adicionar novo jogo</Text>
                        <Flex justifyContent="space-between" alignItems="center">
                            <CustomInput width="260px" label="Nome" type="text" placeholder="Exemplo: Star Wars" />
                            <Select
                                size="md"
                                h="40px"
                                backgroundColor="#0D1D25"
                                colorScheme="#ffffff9e"
                                color="#ffffff9a"
                                textColor="white"
                                border="none"
                                outline="none"
                            >
                                {categoriasMock.map(categoria => (
                                    <option key={categoria.codigo} value={categoria.nome} style={{ color: 'white' }}>
                                        {categoria.nome}
                                    </option>
                                ))}
                            </Select>
                            <CustomInput width="260px" label="URL de acesso" type="text" placeholder="Exemplo: www.teste.com.br" />

                        </Flex>
                        <Flex justifyContent="space-between">
                            <CustomInput width="390px" label="URL de demonstração" type="text" placeholder="Exemplo: www.teste.com.br" />
                            <CustomInput width="390px" label="URL da imagem" type="text" />
                        </Flex>
                        <Flex>
                            <Box>
                                <FormLabel>Descrição</FormLabel>
                                <Textarea backgroundColor="#0D1D25" width="800px" height="150px" />
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex w="100%" justifyContent="end">
                        <Button type="submit" w="200px" h="48px" borderRadius="5px" backgroundColor="#750310" color="#fff" cursor="pointer">Cadastrar</Button>
                    </Flex>
                </form>

            </Flex>
        </Box>
    )
}

export default NovoJogo;