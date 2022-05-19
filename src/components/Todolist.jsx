import React, {useState} from 'react'
import { Todoitems } from './Todoitems'
import "./Todoitems.css";

const Todolist = (props) => {
  return (
    
    props.tasks.map((el) => (
      <div className="list" key={el.id}>
        <Todoitems  items = {el} deletetodo={props.deletetodo}/>
      </div>
    )) 
  )
}

export {Todolist}