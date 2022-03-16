import React, { useState,useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "./Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Helpers/Wrapper";

const AddUser = (props) => {
  const userNameRef=useRef();
  const ageRef=useRef();
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    const userName=userNameRef.current.value;
    const age=ageRef.current.value;
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Input a valid name and age(non-empty values)",
      });
      return;
    }
    //+ sign to convert string to a number
    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Input a valid age(greater than 0)",
      });
      return;
    }
    console.log(userName + age);
    props.onAddUser(userName,age);
    ageRef.current.value='';
    userNameRef.current.value='';
    return;
  };
  const clearError = () => {
    console.log("Dismiss dialog box");
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onClick={clearError}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={userNameRef}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            ref={ageRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </Wrapper>
  );
};

export default AddUser;
