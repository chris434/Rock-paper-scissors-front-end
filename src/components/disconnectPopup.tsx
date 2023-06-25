import { RestartButtons } from './restartButtons'
type disconnectionMassageType = {
    disconnectionMassage:string
} 

export function DisconnectedPopup({ disconnectionMassage }:disconnectionMassageType) {
    return <div className="sm:w-6/12 shadow-xl p-6 mt-10">
       <div className="text-center text text-2xl">{disconnectionMassage}</div> 
        <RestartButtons/>
    </div>
}