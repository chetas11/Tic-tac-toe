import React, {useState} from 'react'
import { calculateWinner } from '../helper'
import Board from './Board'
import {usePlayer1, usePlayer2, useGameCount } from './PlayerContext'
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from 'react-router';



let Player1Count = 0
let Player2Count = 0
let count = 0
let flag = false

// styles

const styles = {
    Active: {
        border: '8px solid #FFA200',
        opacity: '1'
    },
    Inactive: {
       border: 'none'
    },
    hide:{
        display: 'none'
    },
    unhide:{
        display: 'block'
    },
    startBtn:{
        opacity: "0",
        background: 'Black',
    },
    
    Player2:{
        width:"50px",
        height:"50px",
        marginTop:"5px",
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
    
    

    if(winner === "❌"){                // Incrementing the score after each game
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
    

    const handleClick = (i) => {                            // render the X and O
        const boardCopy = [...board]
        if(winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? '❌' : '⭕';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);                               // Setting next player

    }

    const rendorMoves = () => (
        <button id="start" className="NextGame" onClick={()=> {
            flag = true;
            setBoard(Array(9).fill(null))                               // for next game clearing the square values
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

    // End Game function to check who is the final Winner

    const EndGame = () => {
        let FinalWinner = document.getElementById("final")
        let Draw = document.getElementById("draw")
        let Home = document.getElementById("home")
        let Settings = document.getElementById("settings")
        let End = document.getElementById("end")
        let noOfGames = document.getElementById("noOfGames")
        let Congo = document.getElementById("congo")
        
        //checking the player count

        if(Player1Count > Player2Count){
            FinalWinner.innerText = `${Player1}, you have won the Tournament`
            FinalWinner.style = styles.unhide
            Congo.style = styles.unhide
        }else if(Player1Count < Player2Count){
            FinalWinner.innerText = `${Player2}, you have won the Tournament`
            FinalWinner.style = styles.unhide
            Congo.style = styles.unhide
        }else{ 
           noOfGames.classList.add("hide")
           Draw.classList.remove("hide")
        }

        //Initializing the starting values

        Player1Count = 0
        Player2Count = 0
        count = 0
        flag = false
        
        //render Home and Settings button

        Home.classList.remove("hide")
        Settings.classList.remove("hide")
        End.classList.add("hide")
    }

    return (
        <>
        <div className="container">
        <div className="row">
            <div className="col-lg-2 col-md-1 col-sm-1"></div>
            <div className="col-lg-8 col-md-10 col-sm-10 col-12">
                <div className="row top-container">
                    <div className="col-lg-7 col-md-12 col-sm-6 col-12 mb-4">
                        { flag ? <Board id="Board" squares={board} onClick={handleClick} /> : null}
                    </div>
                    <div className=" sidebar col-lg-5 col-md-12 col-sm-6 col-12">
                        <h3 className="mt-3">{GameCount} Game Tournament</h3>
                        <h3 id="congo" className="text-center" style={winner? null : styles.hide}>Congratulation!</h3>
                        <p id="final" className="text-center" style={winner? null : styles.hide}>{winner==="❌" ? Player1  : Player2 }, you won Game {count}</p>
                        <h1 id="draw" className="text-center hide">Its a Draw !!!</h1>
                        <p id="noOfGames" className="text-center" style={winner? styles.hide : null }>Playing Game {count}</p>
                        <div className="P1 tab my-3" style={xIsNext ? styles.Active : styles.Inactive } >
                        <div className="row">
                            <div className="col-lg-3 col-md-2 col-sm-6 col-3">
                                <Avatar className="player p1"><i class="fas fa-user"></i></Avatar> 
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-6 col-6">
                                <div className="col">
                                    <small>Player 01</small>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col">
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
                            <div className="col-lg-3 col-md-2 col-sm-6 col-3">
                                <Avatar className="player p2"><i class="fas fa-user"></i></Avatar> 
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-6 col-6">
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
            <div className="col-lg-2 col-md-1 col-sm-1"></div>
        </div>
        </div>
        </>
    )
}

export default Game
