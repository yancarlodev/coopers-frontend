import Image from 'next/image'
import Button from '../components/Button'
import Header from '../components/Header'
import Modal from '../components/Modal'
import SEO from '../components/SEO'
import ToDoContainer from '../components/ToDoContainer'
import styles from '../styles/Main.module.sass'

export default function Home() {
  return (
    <div className={styles.container}>
        <SEO title='Coopers' description='Organize your daily jobs. The only way to get things done'/>

        <div className={styles.mainWrapper}>
            <Header/>

            <main className='w-full flex flex-col items-center'>
                <div className='relative w-full'>
                    <img src='/BG.png' className='absolute top-[-160px] -right-[160px] -z-10'/>
                </div>

                <section className='flex justify-between w-full'>
                    <div className='flex flex-col gap-11 pt-14'>
                        <h1 className='font-bold text-[80px] leading-[84px]'>
                            Organize
                            <br/>
                            <span className='font-regular text-green'>your daily jobs</span>
                        </h1>

                        <h2 className='text-title2 font-semibold'>The only way to get things done</h2>

                        <Button onClick={() => window.scrollBy(0, 800)}>Go to To-do list</Button>
                    </div>
                    
                    <Image src='/foto.png' alt='Inside a house with furniture lighting and a TV' width={443} height={481.5} quality={100}/>
                </section>

                <button aria-label='Icon to scroll' onClick={() => window.scrollBy(0, 800)}>
                        <img src='/icon-scroll.png' alt='Scroll icon' className='mt-11 mb-28'/>
                </button>

                <section className='w-full'>
                    <div className='flex flex-col items-center gap-9 mb-[180px]'>
                        <h2 className='text-[60px] font-semibold underline underline-offset-8 decoration-green text-white'>To-do List</h2>
                        <h3 className='text-white text-title2 font-medium w-[600px] text-center'>Drag and drop to set your main priorities, check when done and create what´s new.</h3>
                    </div>

                    <div className='absolute'>
                        <div className='bg-black w-[4000px] h-[370px] rotate-[-4deg] relative bottom-[530px] left-[-200px] -z-20'></div>
                    </div>
                    

                    <div className='relative w-full'>
                        <img src='/BG3.png' className='absolute top-[200px] -left-[95px] -z-10'/>
                    </div>

                    <div className='w-full flex justify-center gap-10'>
                        <ToDoContainer>
                            
                        </ToDoContainer>

                        <ToDoContainer doneList>
                            
                        </ToDoContainer>
                    </div>
                </section>
            </main>

            <footer className='mt-[600px] pb-[60px] flex flex-col items-center'>
                <div className='absolute'>
                    <div className='bg-black w-[4000px] h-[360px] rotate-[-2deg] relative bottom-[50px] left-[-100px] -z-20'></div>
                </div>

                <h4 className='text-white text-title2 font-semibold mb-5'>
                    Need help?
                </h4>
                <h4 className='text-white text-title2 font-semibold mb-4'>coopers@coopers.pro</h4>

                <p className='text-white text-headline2 font-medium'>© 2021 Coopers. All rights reserved.</p>

                <div className='absolute'>
                    <div className='bg-green w-[550px] h-[370px] rotate-[-1deg] relative bottom-[-150px] left-0 -z-20'></div>
                </div>
            </footer>
        </div>
    </div>
  )
}
