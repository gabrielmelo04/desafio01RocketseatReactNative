import { View, Text, TouchableOpacity, FlatList, Image, TextInput, Keyboard, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { Tasks } from '../../components/Tasks';
import { HomeStyles } from './HomeStyles';

interface Tasks{
    ativo: boolean,
    texto: string,
}

export default function Home(){

    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [newTask, setNewTask] = useState('');
    const [valueCheck, setValueCheck] = useState(0);

    function handleCurrent(){
        setValueCheck(0);
        tasks.map((task) => {
            if(task.ativo === true){
                setValueCheck((e) => e + 1);
            }
        });
    }

    function handleTaskAdd(){

        let newObjectTask:Tasks ={
            ativo: false,
            texto: newTask
        }

        if(!newTask){
            Alert.alert('Erro - Tarefa', 'Por favor, digite uma tarefa ');
            return;
        }

        setTasks(prevState => [...prevState, newObjectTask]);
        setNewTask('');
        Keyboard.dismiss();
        handleCurrent();
    }

    function handleTaskCheck(name:string){

        tasks.map((list) => {

            if(list.texto === name){
                list.ativo = !list.ativo
            }

        });

        handleCurrent();

    }

    function handleTaskCheckDelete(name:string){

        tasks.map((list) => {

            if(list.texto === name){
                list.ativo = false
            }

        });

        handleCurrent();

    }

    function handleTaskDelete(name:string){

        if(name){

            Alert.alert("Remover Tarefa", `Remover Tarefa ${name} ?`,[
                {
                    text: 'Sim',
                    onPress: () => {
                        handleTaskCheckDelete(name)
                        setTasks(prevState => prevState.filter(task => task.texto !== name))
                    }
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]);

        }
        
    }

    return(
        <View style={HomeStyles.container}>
            <View style={HomeStyles.header}>
                <Image
                    style={HomeStyles.logo}
                    source={require('../../images/Logo.png')}
                />
            </View>
            <View style={HomeStyles.containerInput}>
                <TextInput 
                    style={HomeStyles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor="#808080"
                    value={newTask}
                    onChangeText={(e) => setNewTask(e)}
                />
                <TouchableOpacity style={HomeStyles.btnPlus} onPress={handleTaskAdd}>
                    <Image
                        style={HomeStyles.iconePlus}
                        source={require('../../images/plus.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={HomeStyles.accountants}>
                <>
                    <Text style={HomeStyles.textCreate}>Criadas</Text>
                    <Text style={HomeStyles.counter}>
                        {
                            tasks.length
                        }
                    </Text>
                </>
                <>
                    <Text style={HomeStyles.textCompleted}>Concluídas</Text>
                    <Text style={HomeStyles.counter}>
                        {
                            valueCheck
                        }
                    </Text>
                </>
            </View>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.texto}
                renderItem={({ item } ) => (
                    < Tasks 
                        ativo={item.ativo} 
                        texto={item.texto}
                        onHandleTaskDelete={() => handleTaskDelete(item.texto)}
                        onHandleTaskCheck={() => handleTaskCheck(item.texto)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={HomeStyles.list}>
                        <Image
                            style={HomeStyles.iconeLista}
                            source={require('../../images/Clipboard.png')}
                        />
                        <Text style={[HomeStyles.textEmpty, { fontWeight: 'bold' }]}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={HomeStyles.textEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />
        </View>
    )
}
