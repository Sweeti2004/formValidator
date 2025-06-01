import React from 'react'

const Button = (props) => {
      const handleClick=()=>{
        props.changeColor(props.color)
      }
     
  return (
    <div>
      <button onClick={handleClick} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:props.color}}>{props.btnText}</button>
    </div>
  )
}

export default Button
