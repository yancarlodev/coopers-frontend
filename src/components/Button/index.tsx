import { ReactNode } from 'react'

interface IProps {
    children: ReactNode,
    black?: boolean,
    onClick?: () => void
} 

export default function Button({ children, black, onClick }: IProps): JSX.Element {
    return(
        <button onClick={onClick} className={`${black ? 'bg-black' : 'bg-green'} text-white text-title2 font-semibold rounded-[10px] w-max py-[18px] px-14`}>
            {children}
        </button>
    )
}