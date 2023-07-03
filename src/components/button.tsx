import {ReactNode} from 'react'

type buttonType = {
    onClick?: () => void
    children: ReactNode
    disabled?: boolean
    selected: Boolean
}

export function Button({ onClick, children, disabled, selected = false }: buttonType) {
 
    return <button  disabled={disabled} onClick={onClick} type='submit' className={`${disabled?'opacity-25 cursor-not-allowed':'hover:bg-white hover:border-blue-500 hover:text-blue-500'} ${selected?'bg-white border-blue-500 text-blue-500':'border-white  bg-blue-500 text-white'} mt-10 p-3 border-2`} >{children}</button>
}