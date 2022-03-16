import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "./Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
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
    props.onAddUser(userName, age);
    setAge("");
    setUserName("");
    return;
  };
  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
    return;
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    return;
  };
  const clearError = () => {
    console.log("Dismiss dialog box");
    setError(null);
  };
  return (
    <div>
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
            onChange={userNameChangeHandler}
            value={userName}
          ></input>
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
