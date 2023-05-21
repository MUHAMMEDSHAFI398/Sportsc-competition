import React, { useState } from 'react'
import validate from '../Validation/FormValidation';
import eventValidate from '../Validation/EventValidation';
import { registrationAPI } from '../Services/Services';
import { message } from 'antd'

function Register() {

    const initialValue = { events: "" }
    const formInitialValue = {
        name: "", phone: "", age: ""
    };
    const [event, setEvent] = useState(initialValue)
    const [events, setEvents] = useState([])
    const [formValues, setFormValues] = useState(formInitialValue);
    const [error, setErrors] = useState({});
    const [eventErrors, seteventErrors] = useState({});

    const onChangeHandle = (e) => {

        e.preventDefault();
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        setErrors({ ...error, [name]: "" });
    };

    const handleChange = (e) => {

        e.preventDefault();
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
        seteventErrors({ ...eventErrors, [name]: "" });
    };

    const addEventsHandle = (e) => {
          console.log(events)
        e.preventDefault();
        const eventErrors = eventValidate(events,event);

        if (Object.keys(eventErrors ).length !== 0) {
          seteventErrors (eventErrors );
        } else {

        setEvents([...events, event]);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        if (Object.keys(errors).length !== 0) {
            setErrors(errors);
        } else {
            const data = {
                ...formValues,
                events
            }
            registrationAPI(data).then((response)=>{
                if(response.data.status){
                    message.success('Successfully registered')
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

    return (
        <div className='p-4 sm:ml-64'>
            <div className='px-[70px] py-[25px] rounded-[15px] border border-black'>
                <div className='flex justify-center'>
                    <h1 className='text-[30px] underline'>Registration</h1>
                </div>
                   
                <div className='flex flex-wrap justify-between items-center mt-[15px]'>
                    <div className='flex flex-col'>
                        <input
                            placeholder='Student name'
                            className='w-[305px] h-[35px] rounded-[8px] border border-black'
                            type="text"
                            name='name'
                            required
                            onChange={onChangeHandle}
                        />
                        {error.name && (<p className="ms-2 text-red-500 ">{error.name}</p>)}
                    </div>
                    <div className='flex flex-col'>
                        <input
                            placeholder='Phone number'
                            className='w-[305px] h-[35px] rounded-[8px] border border-black'
                            type="number"
                            name='phone'
                            required
                            onChange={onChangeHandle}
                        />
                        {error.phone && (<p className="ms-2 text-red-500 ">{error.phone}</p>)}
                    </div>
                    <div className='flex flex-col'>
                        <input
                            placeholder='Age'
                            className='w-[305px] h-[35px] rounded-[8px] border border-black'
                            type="number"
                            name='age'
                            required
                            onChange={onChangeHandle}
                        />
                        {error.age && (<p className="ms-2 text-red-500 ">{error.age}</p>)}
                    </div>

                </div>

                <div className='flex flex-wrap justify-center items-center mt-[35px]'>

                    <div className='px-[13px] py-[13px] rounded-[15px] border border-black'>

                        <div className='flex justify-center'>
                            <h1 className='text-[20px] underline'>Add-events</h1>
                        </div>

                        <select
                            name="events"
                            id="events"
                            value={event.events}
                            onChange={handleChange}
                            placeholder='Events'
                            className='w-[305px] h-[35px] rounded-[8px] border border-black'
                        >
                            {/* <option disabled value='' >Events</option> */}
                            <option value='High jump' >High jump</option>
                            <option value='Long jump' >Long jump</option>
                            <option value='Lodfng jump' >Lodfng jump</option>
                            <option value='Long jumpq' >Long jumpq</option>
                            <option value='Long jumpw' >Long jumpw</option>
                            <option value='Long jumpe' >Long jumpe</option>
                        </select>
                        <button
                            onClick={addEventsHandle}
                            className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] ml-4'>
                            Add
                        </button>
                        {
                            events.map((obj) => {
                                return (
                                    <div className='flex justify-center'>
                                        <div className='flex justify-between w-[270px] h-[35px] bg-gray-500 rounded-[8px] mt-3 px-[12px]'>
                                            <p className='mt-2'>{obj.events}</p>
                                            <i className='fas fa-times ml-3 mt-3 cursor-pointer' onClick={() => {
                                                return setEvents(
                                                    events.filter((object) => object.events !== obj.events)
                                                );
                                            }}></i>
                                        </div>
                                    </div>
                                )
                            })

                        }
                        {eventErrors.events && (<p className="ms-2 text-red-500">{eventErrors.events}</p>)}
                    </div>

                </div>
                <div className='flex justify-center mt-5'>
                    <button
                        onClick={handleSubmit}
                        type='submit'
                        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-[8px] w-[70px] h-[35px] ml-4'>
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Register
