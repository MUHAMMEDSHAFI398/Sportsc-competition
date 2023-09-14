import React, { useEffect, useState } from 'react'
import { getResultAPI } from '../Services/Services'
import html2pdf from 'html2pdf.js';


function NoticeBoards() {

    const [highJump, sethighJump] = useState([{ name: "", chessno: "" }])
    const [longJump, setlongJump] = useState([{ name: "", chessno: "" }])
    const [hurdles, sethurdles] = useState([{ name: "", chessno: "" }])
    const [javalin, setjavalin] = useState([{ name: "", chessno: "" }])
    const [hundredMeter, setHhundredMeter] = useState([{ name: "", chessno: "" }])
    const [twoHundredMeter, settwoHundredMeter] = useState([{ name: "", chessno: "" }])
    const [fourHundredMeter, setfourHundredMeter] = useState([{ name: "", chessno: "" }])
    const [eightHundredMeter, seteightHundredMeter] = useState([{ name: "", chessno: "" }])
    const [shortPut, setshortPut] = useState([{ name: "", chessno: "" }])
    const [discusThrow, setdiscusThrow] = useState([{ name: "", chessno: "" }])
    const [relayHundred, setrelayHundred] = useState([{ name: "", chessno: "" }])
    const [relayFourHundred, setrelayFourHundred] = useState([{ name: "", chessno: "" }])

    useEffect(() => {
        getResultAPI().then((response) => {
            sethighJump(response.data.resultData.highJump)
            setlongJump(response.data.resultData.longJump)
            sethurdles(response.data.resultData.hurdles)
            setjavalin(response.data.resultData.javallin)
            setHhundredMeter(response.data.resultData.hundredMeter)
            settwoHundredMeter(response.data.resultData.twoHundredMeter)
            setfourHundredMeter(response.data.resultData.fourHundredMeter)
            seteightHundredMeter(response.data.resultData.eighHundredMeter)
            setshortPut(response.data.resultData.shortPut)
            setdiscusThrow(response.data.resultData.discusThrow)
            setrelayHundred(response.data.resultData.relayHundred)
            setrelayFourHundred(response.data.resultData.relayFourHundred)
        })
        console.log(highJump)
    }, [])

    const handleDownloadPDF = () => {
        const element = document.getElementById('pdf-content');        

        html2pdf()
            .set({
                filename: 'document.pdf',
                margin: 1.3,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { dpi: 192, letterRendering: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            })
            .from(element).save();
    };

    return (
        <div className='p-4 sm:ml-64'>
            <div id="pdf-content" className=''> 
                <div className='flex items-center justify-center mb-[20px]'>
                    <h1 className='text-2xl font-bold underline'>Results</h1>
                </div>
                <button className='downloadbtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' id='downloadbtn' onClick={handleDownloadPDF}>Download PDF</button>
                <div className='flex  justify-between flex-wrap mx-9'>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>High jump</h3>
                        </div>
                        <div className='mt-3 ml-2'>
                            <p><strong>1.</strong> {highJump[0]?.name ? highJump[0].name : "Not Added"}  {highJump[0]?.chessno ? `(Chess no ${highJump[0].chessno})` : ""}</p>
                            <p><strong>2.</strong> {highJump[1]?.name ? highJump[1].name : "Not Added"}  {highJump[1]?.chessno ? `(Chess no ${highJump[1].chessno})` : ""}</p>
                            <p><strong>3.</strong> {highJump[2]?.name ? highJump[2].name : "Not Added"}  {highJump[2]?.chessno ? `(Chess no ${highJump[2].chessno})` : ""}</p>
                        </div>

                    </div>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>Long Jump</h3>
                        </div>
                        <div>
                            <div className='mt-3 ml-2'>
                                <p><strong>1.</strong> {longJump[0]?.name ? longJump[0].name : "Not Added"}  {longJump[0]?.chessno ? `(Chess no ${longJump[0].chessno})` : ""}</p>
                                <p><strong>2.</strong> {longJump[1]?.name ? longJump[1].name : "Not Added"}  {longJump[1]?.chessno ? `(Chess no ${longJump[1].chessno})` : ""}</p>
                                <p><strong>3.</strong> {longJump[2]?.name ? longJump[2].name : "Not Added"}  {longJump[2]?.chessno ? `(Chess no ${longJump[2].chessno})` : ""}</p>
                            </div>
                        </div>


                    </div>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>hurdles</h3>
                        </div>
                        <div>
                            <div className='mt-3 ml-2'>
                                <p><strong>1.</strong> {hurdles[0]?.name ? hurdles[0].name : "Not Added"} {hurdles[0]?.chessno ? `(Chess no ${hurdles[0].chessno})` : ""}</p>
                                <p><strong>2.</strong> {hurdles[1]?.name ? hurdles[1].name : "Not Added"} {hurdles[1]?.chessno ? `(Chess no ${hurdles[1].chessno})` : ""}</p>
                                <p><strong>3.</strong> {hurdles[2]?.name ? hurdles[2].name : "Not Added"} {hurdles[2]?.chessno ? `(Chess no ${hurdles[2].chessno})` : ""}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex  justify-between flex-wrap mx-9 mt-2'>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>Jvavlin throw</h3>
                        </div>
                        <div className='mt-3 ml-2'>
                            <p><strong>1.</strong> {javalin[0]?.name ? javalin[0].name : "Not Added"}  {javalin[0]?.chessno ? `(Chess no ${javalin[0].chessno})` : ""}</p>
                            <p><strong>2.</strong> {javalin[1]?.name ? javalin[1].name : "Not Added"}  {javalin[1]?.chessno ? `(Chess no ${javalin[1].chessno})` : ""}</p>
                            <p><strong>3.</strong> {javalin[2]?.name ? javalin[2].name : "Not Added"}  {javalin[2]?.chessno ? `(Chess no ${javalin[2].chessno})` : ""}</p>
                        </div>

                    </div>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>Hundred meter</h3>
                        </div>
                        <div>
                            <div className='mt-3 ml-2'>
                                <p><strong>1.</strong> {hundredMeter[0]?.name ? hundredMeter[0].name : "Not Added"}  {hundredMeter[0]?.chessno ? `(Chess no ${hundredMeter[0].chessno})` : ""}</p>
                                <p><strong>2.</strong> {hundredMeter[1]?.name ? hundredMeter[1].name : "Not Added"}  {hundredMeter[1]?.chessno ? `(Chess no ${hundredMeter[1].chessno})` : ""}</p>
                                <p><strong>3.</strong> {hundredMeter[2]?.name ? hundredMeter[2].name : "Not Added"}  {hundredMeter[2]?.chessno ? `(Chess no ${hundredMeter[2].chessno})` : ""}</p>
                            </div>
                        </div>

                    </div>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>Two hundred meter</h3>
                        </div>
                        <div>
                            <div className='mt-3 ml-2'>
                                <p><strong>1.</strong> {twoHundredMeter[0]?.name ? twoHundredMeter[0].name : "Not Added"} {twoHundredMeter[0]?.chessno ? `(Chess no ${twoHundredMeter[0].chessno})` : ""}</p>
                                <p><strong>2.</strong> {twoHundredMeter[1]?.name ? twoHundredMeter[1].name : "Not Added"} {twoHundredMeter[1]?.chessno ? `(Chess no ${twoHundredMeter[1].chessno})` : ""}</p>
                                <p><strong>3.</strong> {twoHundredMeter[2]?.name ? twoHundredMeter[2].name : "Not Added"} {twoHundredMeter[2]?.chessno ? `(Chess no ${twoHundredMeter[2].chessno})` : ""}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex  justify-between flex-wrap mx-9  mt-2'>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>Four hundred meter</h3>
                        </div>
                        <div className='mt-3 ml-2'>
                            <p><strong>1.</strong> {fourHundredMeter[0]?.name ? fourHundredMeter[0].name : "Not Added"}  {fourHundredMeter[0]?.chessno ? `(Chess no ${fourHundredMeter[0].chessno})` : ""}</p>
                            <p><strong>2.</strong> {fourHundredMeter[1]?.name ? fourHundredMeter[1].name : "Not Added"}  {fourHundredMeter[1]?.chessno ? `(Chess no ${fourHundredMeter[1].chessno})` : ""}</p>
                            <p><strong>3.</strong> {fourHundredMeter[2]?.name ? fourHundredMeter[2].name : "Not Added"}  {fourHundredMeter[2]?.chessno ? `(Chess no ${fourHundredMeter[2].chessno})` : ""}</p>
                        </div>
                    </div>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>Eight hundred meter</h3>
                        </div>
                        <div>
                            <div className='mt-3 ml-2'>
                                <p><strong>1.</strong> {eightHundredMeter[0]?.name ? eightHundredMeter[0].name : "Not Added"}  {eightHundredMeter[0]?.chessno ? `(Chess no ${eightHundredMeter[0].chessno})` : ""}</p>
                                <p><strong>2.</strong> {eightHundredMeter[1]?.name ? eightHundredMeter[1].name : "Not Added"}  {eightHundredMeter[1]?.chessno ? `(Chess no ${eightHundredMeter[1].chessno})` : ""}</p>
                                <p><strong>3.</strong> {eightHundredMeter[2]?.name ? eightHundredMeter[2].name : "Not Added"}  {eightHundredMeter[2]?.chessno ? `(Chess no ${eightHundredMeter[2].chessno})` : ""}</p>
                            </div>
                        </div>

                    </div>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>Short put</h3>
                        </div>
                        <div>
                            <div className='mt-3 ml-2'>
                                <p><strong>1.</strong> {shortPut[0]?.name ? shortPut[0].name : "Not Added"}  {shortPut[0]?.chessno ? `(Chess no ${shortPut[0].chessno})` : ""}</p>
                                <p><strong>2.</strong> {shortPut[1]?.name ? shortPut[1].name : "Not Added"}  {shortPut[1]?.chessno ? `(Chess no ${shortPut[1].chessno})` : ""}</p>
                                <p><strong>3.</strong> {shortPut[2]?.name ? shortPut[2].name : "Not Added"}  {shortPut[2]?.chessno ? `(Chess no ${shortPut[2].chessno})` : ""}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex  justify-between flex-wrap mx-9 mt-2'>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>Discuss Throw</h3>
                        </div>
                        <div className='mt-3 ml-2'>
                            <p><strong>1.</strong> {discusThrow[0]?.name ? discusThrow[0].name : "Not Added"}  {discusThrow[0]?.chessno ? `(Chess no ${discusThrow[0].chessno})` : ""}</p>
                            <p><strong>2.</strong> {discusThrow[1]?.name ? discusThrow[1].name : "Not Added"}  {discusThrow[1]?.chessno ? `(Chess no ${discusThrow[1].chessno})` : ""}</p>
                            <p><strong>3.</strong> {discusThrow[2]?.name ? discusThrow[2].name : "Not Added"}  {discusThrow[2]?.chessno ? `(Chess no ${discusThrow[2].chessno})` : ""}</p>
                        </div>

                    </div>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>Relay hundred</h3>
                        </div>
                        <div>
                            <div className='mt-3 ml-2'>
                                <p><strong>1.</strong> {relayHundred[0]?.name ? relayHundred[0].name : "Not Added"}  {relayHundred[0]?.chessno ? `(Chess no ${relayHundred[0].chessno})` : ""}</p>
                                <p><strong>2.</strong> {relayHundred[1]?.name ? relayHundred[1].name : "Not Added"}  {relayHundred[1]?.chessno ? `(Chess no ${relayHundred[1].chessno})` : ""}</p>
                                <p><strong>3.</strong> {relayHundred[2]?.name ? relayHundred[2].name : "Not Added"}  {relayHundred[2]?.chessno ? `(Chess no ${relayHundred[2].chessno})` : ""}</p>
                            </div>
                        </div>
                    </div>
                    <div className='card w-[360px] h-[160px] shadow-xl'>
                        <div className='flex justify-center'>
                            <h3 className='font-bold mt-5 underline'>Relay four hundred</h3>
                        </div>
                        <div>
                            <div className='mt-3 ml-2'>
                                <p><strong>1.</strong> {relayFourHundred[0]?.name ? relayFourHundred[0].name : "Not Added"}  {relayFourHundred[0]?.chessno ? `(Chess no ${relayFourHundred[0].chessno})` : ""}</p>
                                <p><strong>2.</strong> {relayFourHundred[1]?.name ? relayFourHundred[1].name : "Not Added"}  {relayFourHundred[1]?.chessno ? `(Chess no ${relayFourHundred[1].chessno})` : ""}</p>
                                <p><strong>3.</strong> {relayFourHundred[2]?.name ? relayFourHundred[2].name : "Not Added"}  {relayFourHundred[2]?.chessno ? `(Chess no ${relayFourHundred[2].chessno})` : ""}</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default NoticeBoards
