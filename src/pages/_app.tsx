import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoaderProvider from '../contexts/Loader'
import ModalProvider from '../contexts/ModalContext'

export default function App({ Component, pageProps }: AppProps) {
    return(
        <LoaderProvider>
            <ModalProvider>
                <Component {...pageProps} />
                <ToastContainer />
            </ModalProvider>
        </LoaderProvider>
    )
}
