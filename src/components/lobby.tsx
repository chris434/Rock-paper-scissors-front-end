import {Button} from './button'
import {useGame} from '../providers/gameProvider'

export function Lobby() {
  const { gameData,setUsername,joinGame } = useGame()
  const {username,userNameError}=gameData


  const onSubmit = (e:any) => {
    e.preventDefault()

 }
  
    return  <>
        <div className='sm:w-6/12 shadow-xl p-6 mt-10'>
        <form onSubmit={onSubmit} className='flex flex-col gap-4 content-center' >
          <label className='text-xl' htmlFor="user-name">user name</label>
            <input onChange={(e)=> setUsername(e.target.value)} value={username} placeholder='user name' className=' border-b-4 border-blue-500 text-xl p-1' id="user-name" type="text" />
            <div className={`text-red-500 ${userNameError ? 'visible' : 'hidden'}`}>{userNameError}</div>
            
          </form>
              <Button onClick={()=>joinGame() }>play with random user</Button>
      
      </div>
   
    
    </>
}