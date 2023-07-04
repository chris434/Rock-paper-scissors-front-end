import {useState,ReactNode } from 'react'
import { ScorePopup } from '../components/scorePopup'
import { useGame } from '../providers/gameProvider'


type popupLayoutType = {
  children:ReactNode
}

export function PopupLayout({ children }:popupLayoutType) {
  const { gameData } = useGame()
  const { game } = gameData
  const {allPlayed}=game
 

    return <div className='w-full'>
        {
           allPlayed&& <ScorePopup  />
        }
        
        <div className={`w-full ${allPlayed? 'opacity-25':''}`}>
          
        {children}
    </div>
   </div> 
}