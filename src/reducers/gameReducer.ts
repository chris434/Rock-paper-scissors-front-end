
import {actionsType,gameDataType} from '../types/gameData'


export function gameReducer(state: gameDataType, action: actionsType ):any {
    switch (action.type) {
        case 'addSocket':
            return state = { ...state, socket: action.payload }
        case 'setUsername':
            return state = { ...state, username: action.payload }
        case 'addUserNameError':
            return state = { ...state, userNameError: action.payload }
        case 'setGameStatus':
            return state = { ...state, gameStatus: action.payload }
        case 'setGame':
            return state = { ...state, game: action.payload }
        case 'resetGame':
            return state = {
                ...state, game: { allPlayed: false, hasMadeMove: false, winner: '', clientId: '', gameOver: false, gamePlayed: false, users: [] }
            }
        case 'opponentDisconnected':
            return state = { ...state, gameStatus: 'disconnected',disconnectedMessage:action.payload }
    
        default:
           return state=state
    }
}