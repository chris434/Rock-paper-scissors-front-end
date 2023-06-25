
import { Lobby } from '../components/lobby'
import { Game } from '../components/game'
import { PopupLayout } from '../layouts/popupLayout'
import {DisconnectedPopup}from '../components/disconnectPopup'
import {useGame} from '../providers/gameProvider'


export default function Home() {
  const { gameData } = useGame()
  const {gameStatus,disconnectedMessage}=gameData

  
  return (
    <>
      <PopupLayout>
        <header className='shadow-md p-5 '>
  <h1 className=' text-2xl text-center'>Online rock paper scissors</h1>
      </header>
      <main className='flex justify-center ' >
        {(() => {
          switch (gameStatus) {
            case 'searching':
          return <div>Searching for opponent</div>
         case 'found':
              return <Game />
         case 'disconnected':
              return <DisconnectedPopup disconnectionMassage={disconnectedMessage} />
            default:
                return <Lobby/>
          }
        })()}

        </main>
        </PopupLayout>
    </>
    
  )
}
 