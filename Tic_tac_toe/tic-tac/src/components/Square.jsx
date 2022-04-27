import React from 'react'

const style = {
    background: "lightcoral",
    border: "2px solid brown",
    fontSize: "20px",
    fontWeight: "700",
}

const Square = ({onClick,value}) => {
  return (
    <button style={style} onClick={onClick}>
        {value}
    </button>
  )
}

export default Square