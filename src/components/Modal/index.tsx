import { createRef, useContext, useEffect } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

interface IProps {}

const Modal = ({}: IProps) => {
    const modalRef = createRef<HTMLDivElement>()
    const { setIsModalOpen } = useContext(ModalContext)

    useEffect(() => {
        const handleOnClick = (event: MouseEvent) => {
            if(!modalRef.current?.contains(event.target as Element)) {
                setIsModalOpen(false)
            }
        }

        document.addEventListener('mousedown', handleOnClick)

        return () => {
            document.removeEventListener('mousedown', handleOnClick)
        }
    }, [])

    return(
        <div className='w-full h-screen fixed bg-[#00000080]'>
            <section className='w-[721px] bg-white'>

            </section>
        </div>
    )
}

export default Modal