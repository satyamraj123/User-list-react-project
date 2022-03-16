import React from "react";
import Card from "./Card";
import styles from "./userList.module.css";

const UsersList = (props) => {
  if (props.users.length === 0) return <div></div>;
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((userItem) => {
          return (
            <li>
              {userItem.name} ({userItem.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
