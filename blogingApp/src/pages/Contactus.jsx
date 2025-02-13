import React from 'react'
import { useState } from 'react'

function Contactus() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submit = () => {
        console.log(`Message", ${firstName}, ${lastName}, ${email}, ${message}`)
    }

    return (
        <div
            className='flex items-center justify-center w-full p-5'
        >
            <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
                <div className="mb-2  justify-center">
                    <span className="inline-block w-full  text-3xl font-bold">
                        Contact Us
                    </span>
                    <div className='flex '>
                        <input type="text" placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        className='p-3 rounded-lg bg-white text-black outline-none  border border-gray-200 w-full mt-4 mr-2' />
                        <input type="text" placeholder='First Name' 
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        className='p-3 rounded-lg bg-white text-black outline-none  border border-gray-200 w-full mt-4' />
                    </div>

                    <div>
                        <input type="text" placeholder='Email' 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='p-3 rounded-lg bg-white text-black outline-none   border border-gray-200 w-full mt-4' />
                    </div>

                    <div>
                        <textarea type="text" placeholder='Message' 
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className='p-3 rounded-lg bg-white text-black outline-none   border border-gray-200 w-full mt-4 h-[200px]' />
                    </div>

                    <div>
                        <button 
                        onClick={submit}
                        className='p-3 rounded-lg bg-slate-400 text-white outline-none hover:bg-slate-800  border border-primary w-full mt-4'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contactus
