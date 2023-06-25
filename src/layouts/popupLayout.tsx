import { useEffect,useState,ReactNode } from 'react'
import { ScorePopup } from '../components/scorePopup'
import { useGame } from '../providers/gameProvider'


type popupLayoutType = {
  children:ReactNode
}

export function PopupLayout({ children }:popupLayoutType) {
  const [popupOpen, setPopupOpen] = useState(false)
  const { gameData,resetRound } = useGame()
  const { game } = gameData
  const {gamePlayed}=game
 
  useEffect(() => {
   
        if (game.gameOver) {
           return setPopupOpen(true)
         } 

        if (game.allPlayed) {
      setPopupOpen(true)
  
        const popupTimeout = setTimeout(() => {
          setPopupOpen(false)
          resetRound()
          

      }, 3000)    
           return ()=>  clearTimeout(popupTimeout) 
}
    // eslint-disable-next-line react-hooks/exhaustive-deps       
},[game ])
    return <div className='w-full'>
        {
            gamePlayed&&popupOpen&& <ScorePopup  setPopupOpen={setPopupOpen} />
        }
        
        <div className={`w-full ${gamePlayed&&popupOpen ? 'opacity-25':''}`}>
          
        {children}
    </div>
   </div> 
}