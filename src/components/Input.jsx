import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Input({
    className="",
    inputType = "text",
    placeholder="",
    value="",
    ...props
}) 

{
    const [name,setName] = useState("")
    const [isSet,setIsSet] = useState(false);
    useEffect(()=>{
        setName(value)
    },[])
    const myfun = ()=>{
        setIsSet(!isSet)
    }
  return (
    <div className={`${isSet?"w-full":"w-1/2"}`}>
   <input className={
    `${className}px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`} 
    placeholder={placeholder} 
    value={name} 
    type={inputType}
    onClick={myfun}
    onMouseMove={myfun}
    onChange={(e)=>{console.log(e.target.value );setName(e.target.value)}}>
    </input>
    </div>
  )
}

export default Input