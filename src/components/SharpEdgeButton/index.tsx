import { ReactNode } from 'react'

interface IProps {
    children: ReactNode
}

export default function SharpEdgeButton({ children }: IProps): JSX.Element {
    return(
        <button className='font-poppins text-headline2 font-semibold bg-black text-white py-[10px] px-10'>
            {children}
        </button>
    )
}