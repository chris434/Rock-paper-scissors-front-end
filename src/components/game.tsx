import {useState}from 'react'
import { Button } from './button'
import {useGame} from '../providers/gameProvider'

const MOVE_OPTIONS=['rock','paper','scissors']

export function Game() {

    const { gameData,playMove } = useGame()
    const {game}=gameData
    const {hasMadeMove}=game
    
    return <section className='h-[80vh] flex flex-col justify-between mt-10 mb-10 p-5 border-blue-500 sm:border-2'>
        <div>
             <div className="flex justify-between gap-5 w-full">
                {game?.users.map(user => {
             
                return <div key={user.id}>
                    <span className="font-bold">{` ${user.score}`}</span>
                    {user.name}
                    {game.clientId === user.id&& ' (you)'}
            </div>
            })}
            </div>
            <div className="m-5">{game?.hasMadeMove?'opponent made their move':'...waiting for opponent to make there move'}</div>
       </div>
       
        <div className="flex justify-between w-full gap-5 items-end">
            {MOVE_OPTIONS.map(move => {
                return <Button onClick={()=> playMove(move)} key={move} >{move}</Button>
            })}
         
        </div>
    </section>
}