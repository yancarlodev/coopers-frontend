import { createRef, useContext, useEffect } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import { LoaderContext } from '../../contexts/Loader'
import api from '../../utils/api'
import { errorToast } from '../../utils/errorToast'
import { successToast } from '../../utils/successToast'

interface IProps {}

const Modal = ({}: IProps) => {
    const modalRef = createRef<HTMLDivElement>()
    const { setIsModalOpen } = useContext(ModalContext)
    const { setIsLoading } = useContext(LoaderContext)

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

    const handle = (): void => {
        setIsLoading(true)

        api.post('/')
        .then((response) => {
            setIsModalOpen(false)
            successToast(response.data.message)
        })
        .catch((error) => {
            errorToast(`${error?.response?.data?.message}!` || 'Something goes wrong, please try again!')
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    return(
        <>
        </>
    )
}

export default Modal