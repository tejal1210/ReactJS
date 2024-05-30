import React from 'react'
// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data=useLoaderData()
    // const [data, setData]=useState(0);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((data)=>{
    //         setData(res)
    //         console.log(data);
    //     })
    //     .catch((e)=>{
    //         console.log(e)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default GitHub

export const githubInfo = async () =>{
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        return response.json()
}
