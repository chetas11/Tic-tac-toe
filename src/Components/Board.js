import React from 'react'
import Square from './Square'


const style = {
    border: '4px solid #6e7c7c',
    borderRadius: '10px',
    width:'350px',
    height:'350px',
    margin: '100px auto 0px auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

function Board({squares, onClick}) {
    return (
        <div style={style}>
            {squares.map((square, i)=> (
                <Square key={i} value={square} onClick={()=>onClick(i)} />
            ))}
        </div>
    )
}

export default Board
