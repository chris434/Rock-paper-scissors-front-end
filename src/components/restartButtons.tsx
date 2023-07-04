import { Button } from './button'
import {useGame} from '../providers/gameProvider'

export function RestartButtons() {
    const {resetGame,joinGame,changeGameStatus,changePopup}=useGame()
    return     <div className='flex justify-center w-full'>
      
       <div className='flex gap-5'>
                <Button onClick={() => {
                    resetGame()
                    joinGame()
                changeGameStatus('searching')
                      changePopup(false)
                }}>play again</Button>
                <Button onClick={() => {
                    resetGame()
                changeGameStatus('lobby')
                changePopup(false)
             
                }}>home</Button>
      </div>
        </div>
}