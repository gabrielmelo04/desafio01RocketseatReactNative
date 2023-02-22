import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TasksStyles } from './TasksStyles';

interface Task{
    ativo: boolean,
    texto: string,
    onHandleTaskDelete: () => void;
    onHandleTaskCheck: () => void;
}


export function Tasks({ ativo, texto, onHandleTaskDelete, onHandleTaskCheck }: Task){

    return(
        <View style={TasksStyles.container}>
            <TouchableOpacity style={TasksStyles.check} onPress={onHandleTaskCheck}>
                {
                    ativo ? 

                    <Image
                        style={TasksStyles.check}
                        source={require('../images/checkOn.png')}
                    />
                    :
                    <Image
                        style={TasksStyles.check}
                        source={require('../images/check.png')}
                    />

                }
            </TouchableOpacity>
            <Text style={ativo ? TasksStyles.textCheck :TasksStyles.text}>{texto}</Text>
            <TouchableOpacity onPress={onHandleTaskDelete}>
                <Image
                    style={TasksStyles.trash}
                    source={require('../images/trash.png')}
                />
            </TouchableOpacity>
        </View>
    )
}