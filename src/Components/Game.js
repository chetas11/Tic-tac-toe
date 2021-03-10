import React, {useState} from 'react'
import { calculateWinner } from '../helper'
import Board from './Board'
import {usePlayer1, usePlayer2, useGameCount } from './PlayerContext'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router';



let Player1Count = 0
let Player2Count = 0
let count = 0
let flag = false

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
    startBtn:{
        opacity: "0",
        background: 'Black',
    }
}

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)
    const Player1 = usePlayer1()
    const Player2 = usePlayer2()
    const GameCount = useGameCount()
    const history = useHistory()
    
    

    if(winner === "❌"){
        Player1Count++
    }else if(winner === "⭕"){
        Player2Count++
    }

    const backtoHome = () => {
        history.push("/")
    }

    const gameSettings = () => {
        history.push("/gameoptions")
    }
    

    const handleClick = (i) => {
        const boardCopy = [...board]
        if(winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? '❌' : '⭕';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);

    }

    const rendorMoves = () => (
        <button id="start" className="NextGame" onClick={()=> {
            flag = true;
            setBoard(Array(9).fill(null))
            let startButton = document.getElementById("start")
            startButton.innerText = "Next Game"
            if(count+1 >= GameCount){
                count++
                startButton.hidden  = true
            }else{
                count++
            }
        }}><span>Start Game</span></button>
    )

    const EndGame = () => {
        let FinalWinner = document.getElementById("final")
        let Draw = document.getElementById("draw")
        let Home = document.getElementById("home")
        let Settings = document.getElementById("settings")
        let End = document.getElementById("end")
        let noOfGames = document.getElementById("noOfGames")

        
        if(Player1Count > Player2Count){
            FinalWinner.innerText = `${Player1}, you have won the Tournament`
        }else if(Player1Count < Player2Count){
            FinalWinner.innerText = `${Player2}, you have won the Tournament`
        }else{
           Draw.classList.remove("hide")  
           FinalWinner.classList.add("hide")
           noOfGames.classList.add("hide")
        }

        Player1Count = 0
        Player2Count = 0
        count = 0
        flag = false

        Home.classList.remove("hide")
        Settings.classList.remove("hide")
        End.classList.add("hide")
    }

    return (
        <>
        <div className="container">
        <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-6"></div>
            <div className="col-lg-8 col-md-8 col-sm-6 col-12">
                <div className="row top-container">
                    <div className="col-lg-7 col-md-7 col-sm-6 col-12 mb-4">
                        { flag ? <Board id="Board" squares={board} onClick={handleClick} /> : null}
                    </div>
                    <div className=" sidebar col-lg-5 col-md-5 col-sm-6 col-12">
                        <h3 className="mt-3">{GameCount} Game Tournament</h3>
                        <h3 id="congo" className="text-center" style={winner? null : styles.hide}>Congratulation!</h3>
                        <p id="final" className="text-center" style={winner? null : styles.hide}>{winner==="❌" ? Player1  : Player2 }, you won Game {count}</p>
                        <h1 id="draw" className="text-center hide">Its a Draw !!!</h1>
                        <p id="noOfGames" className="text-center" style={winner? styles.hide : null }>Playing Game {count}</p>
                        <div className="P1 tab my-3" style={xIsNext ? styles.Active : styles.Inactive } >
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-6 col-2">
                                <Avatar></Avatar> 
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-7">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-4">
                                    <small>Player 01</small>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-4">
                                    <p>{Player1}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-3">
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
                            <div className="col-lg-2 col-md-2 col-sm-6 col-2">
                                <Avatar></Avatar> 
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-7">
                                <div className="col">
                                    <small>Player 02</small>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col text-left">
                                    <p>{Player2}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-3">
                                <div className="col-lg-12 col-md-12 col-sm-12 col">
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
                        <button id="end" onClick={EndGame} className="end mt-3">End Tournament</button>
                        <button id="home" onClick={backtoHome} className="mt-3 hide NextGame">Home</button>
                        <button id="settings" onClick={gameSettings} className="end mt-3 hide">Game settings</button>
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
