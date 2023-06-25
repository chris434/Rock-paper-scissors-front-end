import {ReactNode} from 'react'

type buttonType = {
    onClick?: () => void
    children: ReactNode
    disabled?: boolean
}

export function Button({ onClick,children,disabled }:buttonType) {
    return <button disabled={disabled} onClick={onClick} type='submit' className='mt-10 p-3 hover:bg-white hover:border-blue-500 hover:text-blue-500 border-white border-2 bg-blue-500 text-white'>{children}</button>
}