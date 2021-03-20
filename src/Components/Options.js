import React from 'react'
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import {usePlayer1, usePlayer2, useUpdatePlayer1, useUpdatePlayer2, useGameCount, useUpdateGameCount} from './PlayerContext'
import PlayerImage1 from '../images/player1.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

// Game Options 

function Options() {

    function notify() {
    toast.error('Please Enter Player1/Player2', { position: toast.POSITION.TOP_CENTER, autoClose:1000 })
    }

    const history = useHistory();
    const Player1 = usePlayer1()
    const Player2 = usePlayer2()
    const setPlayer1 = useUpdatePlayer1()
    const setPlayer2 = useUpdatePlayer2()
    const GameCount = useGameCount()
    const GameCountupdate  = useUpdateGameCount()


    const handleClick = () => {
        if(Player1 && Player2){
            history.push("/game")
        }else{
            notify()
        }
        
    }

    const SelectValue = () => {
        let ele = document.getElementsByName('flexRadioDefault'); 
              
        for(let i = 0; i < ele.length; i++) { 
            if(ele[i].checked) 
            GameCountupdate(+ele[i].value)  
        } 
    }



    return (
        <div className="container">
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-body">
                    <h2 className="text-center">Number of game</h2>
                    <div className="gameNumbers">
                        <input class="form-check-input" value="2" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>&nbsp;&nbsp;
                        <label class="form-check-label" for="flexRadioDefault1">2 Games</label>
                    </div>
                    <div className="gameNumbers">
                        <input class="form-check-input" value="3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />&nbsp;&nbsp;
                        <label class="form-check-label" for="flexRadioDefault1">3 Games</label>
                    </div>
                    <div className="gameNumbers">
                        <input class="form-check-input" value="5" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />&nbsp;&nbsp;
                        <label class="form-check-label"  for="flexRadioDefault1">5 Games</label>
                    </div>
                    <div className="gameNumbers">
                        <input class="form-check-input" value="10" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />&nbsp;&nbsp;
                        <label class="form-check-label"  for="flexRadioDefault1">10 Games</label>
                    </div>
                </div>
                <hr className="m-0" />
                    <div className="row p-3">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <button id="end" data-dismiss="modal" className="ModalCancel">CANCEL</button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                            <button onClick={SelectValue} data-dismiss="modal" className="ModalOK">OK</button>   
                        </div>
                    </div>
                </div>
            </div>
            </div>
        <div className="row">
            <div className="col-xl-4 col-lg-2 col-md-2 col-sm-1"></div>
            <div className="col-xl-4 col-lg-8 col-md-8 col-sm-10">
                <div className="row top-container">
                    <div className="P1 tab mb-3 pb-1">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
                                <Avatar src={PlayerImage1} className="player p1"><i className="fas fa-user"></i></Avatar> 
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-6">
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
                            <div className="col-xl-2 col-lg-2  col-md-2 col-sm-2 col-3">
                                <Avatar  className="player p2"><i className="fas fa-user"></i></Avatar> 
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-6">
                                <div className="col">
                                    <p>Player 02</p>
                                </div>
                                <div className="col">
                                    <input onChange={(e) => setPlayer2(e.target.value)} value={Player2} className='form-control input mt-1'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Games tab mb-3 pb-1" data-toggle="modal" data-target="#exampleModalCenter"> 
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
                                <Avatar className="player games mt-2"><i className="fas fa-trophy"></i></Avatar> 
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-9">
                                <div className="col">
                                    <p>Number of games</p>
                                </div>
                                <div className="col">
                                    {GameCount} Games <br />
                                    <small>Click to select the number of games</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Turn tab mb-3 pb-1">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-3">
                                <Avatar  className="player games" ><i className="fas fa-running"></i></Avatar> 
                            </div>
                            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-6">
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
            <div className="col-xl-4 col-lg-2 col-md-2 col-sm-1"></div>
        </div>
        </div>
    )
}

export default Options
