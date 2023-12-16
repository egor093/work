import React from 'react'
import './Create.scss'
import { useState } from 'react';
import Card from '../../Components/Card/Card';
import cards from '../../cards.json'

export default function Create() {

    const [arr, setArr] = useState(cards);

    function addPost(){
        const copyArr = [...arr];
        copyArr.unshift(obj);
        console.log(copyArr);
      }
      function start(id) {
        <Card id = {id}/>
      }

  return (
    <>
    <div>
        <span>title</span><input type="text" />
        <span>text</span><input type="text" />
      <button onClick={()=>addPost() && start(0)}>add post</button>
    </div>
    </>
  )
}
