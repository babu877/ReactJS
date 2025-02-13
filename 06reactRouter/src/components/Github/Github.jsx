import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/babu877')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
    return (
        <div className='text-center bg-gray-700 text-white p-4 rounded-lg text-3xl '>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300} className='rounded-full'/>
        </div>
    )
}

export default Github