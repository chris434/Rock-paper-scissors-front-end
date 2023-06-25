
import { faHand, faHandRock, faHandScissors, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useGame} from '../providers/gameProvider'
import { Button } from './button'
import {RestartButtons} from './restartButtons'



type scorePopupType = {
    setPopupOpen: (popupOpen: boolean) => void
}


export function ScorePopup({setPopupOpen}:scorePopupType) {
    const ICONS = { rock: faHandRock, paper: faHand, scissors: faHandScissors }
    const { gameData,changeGameStatus,resetGame,joinGame } = useGame()
    const { game } = gameData
    const {gameOver,winner,users,}=game
    
  
console.log(gameOver)
    return <div className="absolute z-10 w-[90%] sm:w-6/12 h-90 bg-white shadow-2xl left-[5%] sm:left-[25%] right-[5%] sm:right-[25%] top-[25%]  rounded-3xl p-5">
        {gameOver&&<div className="text-center text-2xl font-bold mb-5">game over</div>
        }
       
        <div className="text-center text-2xl">{winner==='draw'?'you drew':gameOver?`${winner} wins the game`:`${winner} win this round`}</div>
        <div className="flex justify-around  mt-10">
         {users.map((user, i) => {
            return <div key={i}>
                <div className='flex flex-col items-center'>
                    <div>{`${user.score} ${user.name}`}</div>
                    
                         <div className='flex gap-5'> 
                        <FontAwesomeIcon className='text-3xl sm:text-6xl text-blue-500' icon={ICONS[user.move]}/>
                        <FontAwesomeIcon className={`text-3xl sm:text-6xl ${user.winner||winner==='draw'?'text-green-500':'text-red-500'}`} icon={user.winner||winner==='draw' ? faCheck : faXmark}/> 
                    </div>
                    
                 
                </div>
               
            </div>

           })}
        </div>
              {gameOver&& <RestartButtons onClick={()=>setPopupOpen(false)}/>}
       
      
    </div>
}