import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput';

export default function App() {

  let [courseGoals, setCourseGoals] = useState([]);
  let [isAddMod, setIsAddMod] = useState(false);

 
  const addGoalHandler = (goalTitle)=> {
    setCourseGoals(courseGoals => [...courseGoals, {key: Math.random().toString(), value: goalTitle}]);
    setIsAddMod(false);
  }
  const closeModal =(()=>{
    setIsAddMod(false);
  })
  const deleteGoal = goalkey => {
    console.log("Goal Key", goalkey);
    setCourseGoals(courseGoals => {
      return courseGoals.filter(item => item.key !== goalkey);
    });
    
  }



  return (  
    <View style={styles.basic}>
      {/* Input And Button Section */}
      <Button title="Add New Course" onPress={ () => setIsAddMod(true)}/>
      <GoalInput visible={isAddMod} onCancle={closeModal} addGoalHandler={addGoalHandler}/>
      {/* List View Section */}
      <FlatList style={styles.ListComponent}
          data= {courseGoals}
          renderItem = {
             itemsData =>(
                <GoalList index={itemsData.item.key} title={itemsData.item.value} deleteGoal={deleteGoal}/>
          )}
       />
      </View>
  );
}

const styles = StyleSheet.create({
  basic: {
    padding: 50
  },

  ListComponent:{
    marginTop: 5,
    marginBottom: 5
  },

  singleItem: {
    
  }


});
