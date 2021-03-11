import React, { useContext, useState } from 'react'

// Context to pass the data 

const Player1Context = React.createContext()
const Player2Context = React.createContext()
const Player1UpdateContext = React.createContext()
const Player2UpdateContext = React.createContext()
const GameCountContext = React.createContext()
const GameCountUpdateContext = React.createContext()

export function usePlayer1(){
    return useContext(Player1Context)
}

export function usePlayer2(){
    return useContext(Player2Context)
}

export function useUpdatePlayer1(){
    return useContext(Player1UpdateContext)
}

export function useUpdatePlayer2(){
    return useContext(Player2UpdateContext)
}

export function useGameCount(){
    return useContext(GameCountContext)
}

export function useUpdateGameCount(){
    return useContext(GameCountUpdateContext)
}

export function PlayerProvider({ children }){
    const [Player1, setPlayer1] = useState("")
    const [Player2, setPlayer2] = useState("")
    const [GameCount, setGameCount] = useState(1)

    return(
        <Player1Context.Provider value={Player1}>
            <Player2Context.Provider value={Player2}>
                <Player1UpdateContext.Provider value={setPlayer1}>
                    <Player2UpdateContext.Provider value={setPlayer2}>
                        <GameCountContext.Provider value={GameCount}>
                            <GameCountUpdateContext.Provider value={setGameCount}>
                                {children}
                            </GameCountUpdateContext.Provider>
                        </GameCountContext.Provider>
                    </Player2UpdateContext.Provider>
                </Player1UpdateContext.Provider>
            </Player2Context.Provider>
        </Player1Context.Provider>
    )
}

