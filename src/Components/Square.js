import React from 'react'

const style ={
    background: '#dddddd',
    border: '2px solid #435560',
    fontSize: "30px",
    fontWeight: "800",
    cursor:"pointer",
    outline:'none'
}

function Square({value, onClick}) {
    return (
        <button style={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square
