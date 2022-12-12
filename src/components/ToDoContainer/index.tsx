import { ReactNode } from "react"
import Button from "../Button"

interface IProps {
    children: ReactNode,
    doneList?: boolean
}

export default function ToDoContainer({ children, doneList }: IProps): JSX.Element {
    return(
        <div className={`w-[380px] border-t-[20px] ${doneList ? 'border-green' : 'border-orange'} flex flex-col items-center py-10 px-6 mt-[40px] shadow-lg`}>
            <h3 className='font-poppins font-semibold text-[40px] mb-1'>
                {
                    doneList ?
                        'Done'
                    :
                        'To-do'
                }
            </h3>
            <h4 className='text-title2 font-regular text-center'>
                {
                    doneList ?
                        <>
                            Congratulations!
                            <br/>
                            <span className='font-bold'>You have done 5 tasks</span>
                        </>
                        :
                        <>
                            Take a breath.
                            <br/>
                            Start doing.
                        </>
                }
            </h4>

            <ul>
                {children}
            </ul>

            <Button black>erase all</Button>
        </div>
    )
}