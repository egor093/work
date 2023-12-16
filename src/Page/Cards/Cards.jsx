import React from 'react'
import './Cards.scss'
import { useState } from 'react'
import Card from '../../Components/Card/Card'

export default function Cards(props) {

    const {arr} = props;

    const [count,setCount] = useState(0);
    

    function handlePrev() {
        if (count == 0) {
            setCount(arr.length - 1);
        }
        setCount((prevCount)=> prevCount - 1);
    }
    function handleNext(){
        if (count === arr.length - 1){
            setCount(0);
            return;
        }
        setCount((prevCount)=> prevCount + 1);
    }

  return (
    <div>
      <button onClick={handleNext}>Next</button>
      <Card object={props.arr[count]}/>
      <button onClick={handlePrev}>Prev</button>
    </div>
  )
}
