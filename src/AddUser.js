import React,{useState} from "react";
import styles from './AddUser.module.css'
import Card from "./Card";
import Button from "./Button";
const AddUser=(props)=>{
    const [userName,setUserName]=useState('');
    const [age,setAge]=useState(0);

    const addUserHandler=(event)=>{
        event.preventDefault();
        if(userName.trim().length===0||age.trim().length==0){
            return;
        }
        //+ sign to convert string to a number
        if(+age<1){
            return;
        }
        console.log(userName+age);
        setAge('');
        setUserName('');
        return;
    }
    const userNameChangeHandler=(event)=>{
        setUserName(event.target.value);
        return;
    }
    const ageChangeHandler=(event)=>{
        setAge(event.target.value);
        return;
    }
return <Card className={styles.input}>
<form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input id='username' type='text' onChange={userNameChangeHandler} value={userName}></input>
    <label htmlFor="age">Age(Years)</label>
    <input id='age' type='number' onChange={ageChangeHandler} value={age}></input>
    <Button type="submit">Add User</Button>
</form></Card>;
}

export default AddUser;