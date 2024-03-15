import { Box, Button, Flex, FormLabel, Text, Textarea } from "@chakra-ui/react";
import Header from "../../components/Header";
import CustomInput from "../../components/Input";
import { TarefaType } from "../../types/jogo.type";
import { useNavigate } from "react-router-dom";

const NovoJogo = () => {

    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const novaTarefa: TarefaType = {
            nome: e.target[0].value,
            descricao: e.target[1].value,
            data: e.target[2].value,
            status: e.target[3].value,
        }

        let tarefasMock: TarefaType[] = [];

        const jogosMockString = localStorage.getItem('jogosMock');

        if (jogosMockString) {
            console.log('entrou aqui 1')
            tarefasMock = JSON.parse(jogosMockString);
        }

        tarefasMock.push(novaTarefa);

        localStorage.setItem('jogosMock', JSON.stringify(tarefasMock));

        navigate('/jogos');
    }


    return (
        <Box backgroundColor="#00070A" color="#fff" fontFamily="sans-serif" h="100vh">
            <Header />

            <Flex w="100%" justifyContent="center" alignItems="center">

                <form onSubmit={handleSubmit}>
                    <Flex flexDirection="column" maxW="800px">
                        <Text fontWeight="bold" fontSize="22px">Adicionar nova tarefa</Text>
                        <Flex justifyContent="space-between" alignItems="center">
                            <CustomInput width="250px" label="Nome" type="text" />
                            <CustomInput width="250px" label="Data" type="text" />
                            <CustomInput width="250px" label="Status" type="text" />
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