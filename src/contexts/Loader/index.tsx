import { createContext, ReactNode, useState } from "react"

interface IProps {
    children: ReactNode
}

interface ILoaderContext {
    isLoading: boolean,
    setIsLoading: (state: boolean) => void
}

export const LoaderContext = createContext<ILoaderContext>({} as ILoaderContext)

const LoaderProvider = ({children}: IProps): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    return(
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    )
}

export default LoaderProvider