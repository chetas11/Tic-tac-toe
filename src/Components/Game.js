import React, {useState} from 'react'
import { calculateWinner } from '../helper'
import Board from './Board'
import {usePlayer1, usePlayer2 } from './PlayerContext'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

let Player1Count = 0
let Player2Count = 0

const styles = {
    Active: {
        border: '5px orange solid'
    },
    Inactive: {
       border: 'none'
    },
    hide:{
        display: 'none'
    },
}

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)
    const Player1 = usePlayer1()
    const Player2 = usePlayer2()
    

    if(winner === "X"){
        Player1Count++
    }else if(winner === "O"){
        Player2Count++
    }


    

    const handleClick = (i) => {
        const boardCopy = [...board]
        if(winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);

    }

    const rendorMoves = () => (
        <button className="NextGame" onClick={()=> setBoard(Array(9).fill(null))}><span>Start Game</span></button>
    )

    return (
        <>
        <div className="container">
        <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-6"></div>
            <div className="col-lg-8 col-md-8 col-sm-6">
                <div className="row top-container">
                    <div className="col-lg-7 col-md-7 col-sm-6">
                        <Board squares={board} onClick={handleClick} />
                    </div>
                    <div className=" sidebar col-lg-5 col-md-5 col-sm-6">
                        <h3>5 Games Tournament</h3>
                        <h2 className="text-center" style={winner? null : styles.hide}>Congratulation!</h2>
                        <p className="text-center" style={winner? null : styles.hide}>{winner==="X" ? Player1  : Player2 }, you won Game 3</p>
                        <p className="text-center">Playing Game 3</p>
                        <div className="P1 tab my-3" style={xIsNext ? styles.Active : styles.Inactive } >
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <Avatar></Avatar> 
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="col">
                                    <small>Player 01</small>
                                </div>
                                <div className="col">
                                    <p>{Player1}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="col">
                                    <small>Score</small>
                                </div>
                                <div className="col">
                                    <p>{Player1Count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="P2 tab my-3" style={xIsNext ? styles.Inactive : styles.Active }>
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-6">
                                <Avatar></Avatar> 
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="col">
                                    <small>Player 02</small>
                                </div>
                                <div className="col text-left">
                                    <p>{Player2}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="col">
                                    <small>Score</small>
                                </div>
                                <div className="col">
                                    <p>{Player2Count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                        
                        {rendorMoves()}
                        <button className="end mt-3">End Tournament</button>
                    </div>
                </div> 
            </div>
            <div className="col-lg-2 col-md-2 col-sm-6"></div>
        </div>
        </div>
        </>
    )
}

export default Game
