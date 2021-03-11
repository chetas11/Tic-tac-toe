import React from 'react'
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import {usePlayer1, usePlayer2, useUpdatePlayer1, useUpdatePlayer2, useGameCount, useUpdateGameCount} from './PlayerContext'

const styles = {
    width:"50px",
    height:"50px",
    marginTop:"10px",
}

// Game Options 

function Options() {

    const history = useHistory();
    const Player1 = usePlayer1()
    const Player2 = usePlayer2()
    const setPlayer1 = useUpdatePlayer1()
    const setPlayer2 = useUpdatePlayer2()
    const GameCount = useGameCount()
    const GameCountupdate  = useUpdateGameCount()


    const handleClick = () => {
        history.push("/game")
    }

    return (
        <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6"></div>
            <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="row top-container">
                    <div className="P1 tab mb-3 pb-1">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                <Avatar style={styles}></Avatar> 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-4 col-7">
                                <div className="col">
                                    <p>Player 01</p>
                                </div>
                                <div className="col">
                                    <input onChange={(e) => setPlayer1(e.target.value)}  value={Player1} className='form-control input mt-1'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="P2 tab mb-3 pb-1">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                <Avatar style={styles}></Avatar> 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-4 col-7">
                                <div className="col">
                                    <p>Player 02</p>
                                </div>
                                <div className="col">
                                    <input onChange={(e) => setPlayer2(e.target.value)} value={Player2} className='form-control input mt-1'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Games tab mb-3 pb-1"> 
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                <Avatar style={styles}><i class="fas fa-trophy"></i></Avatar> 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-4 col-7">
                                <div className="col">
                                    <p>Number of games</p>
                                </div>
                                <div className="col">
                                    <input onChange={(e) => GameCountupdate(e.target.value)} value={GameCount} className='form-control input mt-1'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Turn tab mb-3 pb-1">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                                <Avatar style={styles} ><i class="fas fa-running"></i></Avatar> 
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-4 col-7">
                                <div className="col">
                                    <p>Who starts</p>
                                </div>
                                <div className="col">
                                    Alternative turn
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <button onClick={handleClick} className="startgame"><span>Start Game</span></button>
                </div> 
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6"></div>
        </div>
        </div>
    )
}

export default Options
