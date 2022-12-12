import Image from 'next/image'
import SharpEdgeButton from '../SharpEdgeButton'

export default function Header(): JSX.Element {
    return(
        <header className='flex justify-between py-[54px]'>
            <Image alt='Logo of the website' src='/Logo.png' width={217} height={50}/>

            <SharpEdgeButton>Entrar</SharpEdgeButton>
        </header>
    )
}