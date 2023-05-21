import React from 'react'

function DashBoard() {
    return (
        <div className="p-4 sm:ml-64">
            <div className=''>

                <div className='flex items-center justify-center mb-[20px]'>
                    <h1 className='text-2xl font-bold underline'>Events</h1>
                </div>

                <div className='flex  justify-between flex-wrap mx-9'>
                    <div className='card w-[220px]'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline'>High jump</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/highjump.jpg" alt="ghfgh" />
                        
                    </div>
                    <div className='card w-[220px] '>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline'>Long jump</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/longJump.jpg" alt="ghfgh" />
                        
                    </div>
                    <div className='card w-[220px]'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline'>hudles</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/hudles.jpg" alt="ghfgh" />
                       
                    </div>
                    <div className='card w-[220px]'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline' >Javallin</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/javalin.jpg" alt="ghfgh" />
                        
                    </div>
                </div>

                <div className='flex  justify-between flex-wrap mx-9'>
                    <div className='card w-[220px]'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline'>Hundred meter</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/hunderdmeter.jpg" alt="ghfgh" />
                        
                    </div>
                    <div className='card w-[220px] '>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline'>Two hundred meter</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/twohundred.jpeg" alt="ghfgh" />
                        
                    </div>
                    <div className='card w-[220px]'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline'>Four hundred meter</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/fourhundred.jpg" alt="ghfgh" />
                       
                    </div>
                    <div className='card w-[220px]'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline' >Eight hundred meter</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/eighthundred.jpeg" alt="ghfgh" />
                        
                    </div>
                </div>

                <div className='flex  justify-between flex-wrap mx-9'>
                    <div className='card w-[220px]'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline'>Short put</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/shortput.jpg" alt="ghfgh" />
                        
                    </div>
                    <div className='card w-[220px] '>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline'>Discuss throw</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/discus.jpeg" alt="ghfgh" />
                        
                    </div>
                    <div className='card w-[220px]'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline'>Relay 4*100</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/relayhundred.avif" alt="ghfgh" />
                       
                    </div>
                    <div className='card w-[220px]'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold mt-5 underline' >Relay 4*400</h3>
                        </div>
                        <img className='w-[260px] h-[145px]' src="images/relyfourhundred.jpg" alt="ghfgh" />
                        
                    </div>
                </div>
               
                
            </div>
        </div>
    )
}

export default DashBoard
