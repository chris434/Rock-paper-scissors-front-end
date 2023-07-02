import { Button } from './button'
import {useGame} from '../providers/gameProvider'

export function RestartButtons({onClick=() =>{}}) {
    const {resetGame,joinGame,changeGameStatus}=useGame()
    return     <div className='flex justify-center w-full'>
      
       <div className='flex gap-5'>
                <Button onClick={() => {
                    resetGame()
                    onClick()
                    joinGame()
                    changeGameStatus('searching')
                }}>play again</Button>
                <Button onClick={() => {
                    resetGame()
                   onClick()
                    changeGameStatus('lobby')
             
                }}>home</Button>
      </div>
        </div>
}