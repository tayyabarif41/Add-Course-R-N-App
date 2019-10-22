import React, {useState} from 'react';
import {TextInput, Button, View, StyleSheet, Modal} from 'react-native';


const GoalInput = props => {
    
    const [enteredGoal, setGoal]= useState('');
    
    const goalInputHandler = (enteredValue) => {
    setGoal(enteredValue);
    }

    const addGoalHandler =(() =>{
        props.addGoalHandler(enteredGoal);
        setGoal('');
    })
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.InputSection}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.alignBtn}>
                    <View style={styles.btn}>
                        <Button title="Add" onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title="Cancel" color="red" onPress={props.onCancle}/>
                    </View>
                </View>
            </View>    
         </Modal>
    )
}

const styles = StyleSheet.create({
    InputSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: { 
        width: '80%',
        padding: 10, 
        borderColor: '#dfe1e5', 
        borderWidth: 1, 
        borderRadius: 5,
        marginBottom: 10
    },
    alignBtn :{
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btn:{
        width: '40%',
    }
   
})
export default GoalInput;