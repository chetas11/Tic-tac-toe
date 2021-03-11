import React from 'react'
import Banner from '../images/4inarow.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

toast.configure()




function Home() {
    function notify() {
    toast.info('Coming Soon...', { position: toast.POSITION.TOP_CENTER, autoClose:1000 })
    }

    const history = useHistory();

    const StartGame = () => {
        history.push("/gameoptions")
    }
    
    return (
        <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6"></div>
            <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="row text-center top-container">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-2">
                        <button onClick={notify} className="btn btn-warning start mt-5 mb-5"><i className="far fa-play-circle"></i><br />PLAY</button>
                        </div>
                        <div className="col-10">
                            <img className="Banner img-fluid" src={Banner} />
                        </div>
                    </div>
                    <hr />
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <button onClick={notify} className="btn custom my-2 p-3"><span><i className="fas fa-user"></i> Custom Game</span></button><br />
                        <button onClick={notify} className="btn online my-2 p-3"><span><i className="fas fa-globe"></i> Game Online</span></button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <button onClick={StartGame} className="btn twop my-2 p-3"><span><i className="fas fa-user-friends"></i> Two Players</span></button><br />
                        <button onClick={notify} className="btn training my-2 p-3"><span><i className="fas fa-brain"></i> Training Game</span></button>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6"></div>
        </div>
        </div>
    )
}

export default Home
