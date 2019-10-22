import React from 'react';
import  {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const GoalList = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.deleteGoal.bind(this, props.index)}>
            <View style={styles.listItems}>
                <Text style={styles.singleItem}> {props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItems: {
        width: '95%',
        flexDirection: 'column',
        backgroundColor: '#dfe1e5', 
        borderWidth: 1, 
        borderRadius: 5,
        marginTop: 5,
        padding: 10,
    },
})
export default GoalList;

