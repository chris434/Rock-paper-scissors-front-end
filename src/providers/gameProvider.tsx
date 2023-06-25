import { useContext, createContext, useEffect,useReducer,Dispatch,ReactNode } from "react";
import { io } from 'socket.io-client'
import { gameReducer } from '../reducers/gameReducer'
import {gameStatusType,actionsType,gameDataType} from '../types/gameData'


type ProviderType = {
  gameData: gameDataType
  dispatch:Dispatch<actionsType>
}

type gameProviderType = {
  children:ReactNode
}

const initialData = {
  socket: {},
  game: {
    allPlayed: false,
    hasMadeMove: true,
    winner:'',
    clientId: '',
    gameOver: false,
    gamePlayed: false,
    users: []},
    username: '',
    gameStatus: 'lobby',
    userNameError: '',
   disconnectedMessage:''
}


const Provider = createContext<ProviderType>({ gameData: { ...initialData,gameStatus:'lobby' },dispatch:()=>{}})
export function GameProvider({ children }:gameProviderType) {

    const [gameData,dispatch]=useReducer(gameReducer,initialData)
 useEffect(() => {
    const socket = io('https://rock-paper-scissors-socket-io.onrender.com/')
  dispatch({type:'addSocket',payload:socket})
    runServer() 

    function runServer() {

  
    socket.on('connect', () => {
      console.log('connected')
    })
      socket.on('opponent-disconnected', (disconnectedMsg) => {
        console.log(disconnectedMsg)
        dispatch({ type: 'opponentDisconnected',payload:disconnectedMsg})
      })

    socket.on('username-error', (errorMsg) => {
  dispatch({type:'addUserNameError',payload:errorMsg})
    })
      socket.on('searching-status', (status) => {
        console.log(status)
      dispatch({type:'setGameStatus',payload:status})
      })
      socket.on('game-data', (game) => {
        console.log(game)
        dispatch({type:'setGame',payload:game})
      })

    

    socket.on("connect_error", (e) => {
console.log(e)
  socket.io.opts.transports = ["polling", "websocket"];
});
  }
  }, [])



    return <Provider.Provider value={{gameData,dispatch}} >
        {children}
    </Provider.Provider>
}

export function useGame() {
  const { gameData, dispatch } = useContext(Provider)

  function changeGameStatus(gameStatus:gameStatusType) {
    dispatch({type:'setGameStatus',payload:gameStatus})
  }
  function setUsername(username:string) {
  dispatch({type:'setUsername',payload:username})
  }
  function resetGame() {
    dispatch({type:'resetGame'})
  }

  const { socket,username } = gameData
  
  function joinGame() {

     if('emit' in socket)
    socket.emit('join-game',username)
  }

  function playMove(move:string) {
   if('emit' in socket)
     socket.emit('play-move', move )
  }

  function resetRound() {
   if('emit' in socket)
      socket.emit('new-round')
  }


  return {gameData,changeGameStatus,joinGame,resetRound,playMove,setUsername,resetGame}
}