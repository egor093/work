import React from 'react'

export default function Card(props) {

    const {body,title} = props.object;

  return (
    <div>
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <div className='content'>
        <p>{body}</p>
      </div>
    </div>
  )
}
