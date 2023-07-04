import { type } from "os"

export type gameStatusType = 'lobby' | 'searching' | 'found'|'disconnected'

type gameType = {
        allPlayed:boolean
        opponentHasMadeMove: boolean,
       currentUserHasMadeMove:boolean,
        winner:string,
        clientId: string
        gameOver: boolean
    gamePlayed: boolean
        users: {
            id: string,
            name: string
            score: string,
            move: 'rock'|'paper'|'scissors',
            winner:boolean

        }[]
  
    }

export type gameDataType = {
    socket: object|{emit:(title:string,msg?:string)=>void}
    game: gameType
    username: string
    gameStatus: gameStatusType
    userNameError: string
    disconnectedMessage: string
    popup:boolean
}

type action<T,U> = {
    type: T
    payload:U
}
type resetAction = {
    type:'resetGame'
}


export type actionsType = action<'addSocket',object>|action<'addUserNameError',string>|action<'setGameStatus',gameStatusType>|action<'setGame',gameType>|action<'setUsername',string>|action<'opponentDisconnected',string>|action<'setPopup',boolean>|resetAction;