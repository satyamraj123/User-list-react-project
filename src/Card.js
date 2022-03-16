import React from "react";
import styles from './Card.module.css'
const Card=(props)=>{
    //two classes in an element
    return <div className={`${styles.card} ${props.className}`}>{props.children}</div>
}

export default Card;