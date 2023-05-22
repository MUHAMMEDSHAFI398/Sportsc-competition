import React, { useEffect, useState } from 'react'
import { AddResultAPI, getParticipantsAPI } from '../Services/Services'
import { message } from 'antd'
import validate from '../Validation/ResultValdation'
import { useNavigate } from 'react-router-dom';

function AddResult() {
    const [highJump, sethighJump] = useState([{ name: "", chessno: "" }])
    const [longJump, setlongJump] = useState([{ name: "", chessno: "" }])
    const [hurdles, sethurdles] = useState([{ name: "", chessno: "" }])
    const [javalinThrow, setjavalinThrow] = useState([{ name: "", chessno: "" }])
    const [hundredMeter, setHhundredMeter] = useState([{ name: "", chessno: "" }])
    const [twoHundredMeter, settwoHundredMeter] = useState([{ name: "", chessno: "" }])
    const [fourHundredMeter, setfourHundredMeter] = useState([{ name: "", chessno: "" }])
    const [eighHundredMeter, seteighHundredMeter] = useState([{ name: "", chessno: "" }])
    const [shortPut, setshortPut] = useState([{ name: "", chessno: "" }])
    const [discusThrow, setdiscusThrow] = useState([{ name: "", chessno: "" }])
    const [relayHundred, setrelayHundred] = useState([{ name: "", chessno: "" }])
    const [relayFourHundred, setrelayFourHundred] = useState([{ name: "", chessno: "" }])


    const intialValues = { first: "", second: "", third: "" }
    const [formValues, setFormValues] = useState(intialValues);
    const [error, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getParticipantsAPI().then((response) => {
            if (response.data.status) {
                sethighJump(response.data.highJump)
                setlongJump(response.data.longJump)
                sethurdles(response.data.hurdles)
                setjavalinThrow(response.data.javalinThrow)
                setHhundredMeter(response.data.hundredMeter)
                settwoHundredMeter(response.data.twoHUndredMeter)
                setfourHundredMeter(response.data.fourHundredMeter)
                seteighHundredMeter(response.data.eightHundredMeter)
                setshortPut(response.data.shortPut)
                setdiscusThrow(response.data.discusThrow)
                setrelayHundred(response.data.relayHundred)
                setrelayFourHundred(response.data.relayFourHundred)
            }
        }).catch((err) => {
            console.log(err)
            navigate('/error')

        })
    }, [])

    const handleChange = (e) => {

        e.preventDefault();
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: parseInt(value) });
    };
    const handleSubmit = (event) => {
        const data = {
            ...formValues,
            event: event
        }
        const errors = validate(data)
        if (Object.keys(errors).length !== 0) {
            setErrors(errors);
            if(errors.first || errors.second || errors.third){
            message.error("Plese fill the required place")
            }else if(errors.multple)
            message.error(`${errors.multple}`)
        }else{
            AddResultAPI(data).then((response) => {
                if (response.data.status) {
                    message.success("Result added successfully")
                    setFormValues(intialValues)
                }
            }).catch((err)=>{
                console.log(err)
                navigate('/error')
            })
        }    
        
    }

    return (
        <div className='p-4 sm:ml-64'>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-white border border-black">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border border-black">Events</th>
                            <th className="py-2 px-4 border border-black">First</th>
                            <th className="py-2 px-4 border border-black">Second</th>
                            <th className="py-2 px-4 border border-black">Third</th>
                            <th className="py-2 px-4 border border-black">Submit</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="py-2 px-4 border border-black">High-jump</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                    <option defaultValue value="">Select</option>
                                    {
                                        highJump.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        highJump.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        highJump.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("highJump")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>


                        <tr>
                            <td className="py-2 px-4 border border-black">Long-jump</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        longJump.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        longJump.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        longJump.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("longJump")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td className="py-2 px-4 border border-black">hurdles</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                    hurdles.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        hurdles.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        hurdles.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("hurdles")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-black">Javalin throw</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                    javalinThrow.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        javalinThrow.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        javalinThrow.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("javallin")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-black">Hundred meter</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                    hundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        hundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        hundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("hundredMeter")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td className="py-2 px-4 border border-black">Two hundred meter</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                    twoHundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        twoHundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        twoHundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("twoHundredMeter")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-black">four hundred meter</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                    fourHundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        fourHundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        fourHundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("fourHundredMeter")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td className="py-2 px-4 border border-black">Eight hundred meter</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                    eighHundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        eighHundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        eighHundredMeter.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("eighHundredMeter")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td className="py-2 px-4 border border-black">Short put</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                    shortPut.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        shortPut.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        shortPut.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("shortPut")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-black">Discus throw</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                    discusThrow.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        discusThrow.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        discusThrow.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("discusThrow")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>
                        
                        <tr>
                            <td className="py-2 px-4 border border-black">Relay 4*100</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                    relayHundred.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        relayHundred.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>

                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        relayHundred.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("relayHundred")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td className="py-2 px-4 border border-black">Relay 4*400</td>
                            <td className="py-2 px-4 border border-black">
                                <select
                                    onChange={handleChange}
                                    className='w-[275px] h-[27px] border border-black rounded' name="first" id="first"
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                    relayFourHundred.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black">
                                <select className='w-[275px] h-[27px] border border-black rounded' name="second" id="second"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        relayFourHundred.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <select className='w-[275px] h-[27px] border  border-black rounded' name="third" id="third"
                                    onChange={handleChange}
                                >
                                     <option defaultValue value="">Select</option>
                                    {
                                        relayFourHundred.map((person) => (
                                            <option key={person.name} value={person.chessno}>{person.name}(Chess No {person.chessno})</option>
                                        )
                                        )
                                    }
                                </select>
                            </td>
                            <td className="py-2 px-4 border border-black ">
                                <button
                                    onClick={() => handleSubmit("relayFourHundred")}
                                    className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] '
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>

                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default AddResult
