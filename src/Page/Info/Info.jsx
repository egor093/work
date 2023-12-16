import React from 'react'
import './Info.scss'
import Card from '../../Components/Card/Card';
import cards from '../../cards.json'
import { useState } from 'react';

export default function Info() {

    const [arr, setArr] = useState(cards);
    

  return (
     <div className='card'>
      {arr.map((item,index)=>(
        <Card object={item} key={index}/>
      ))}
     </div>
  )
}
