import React from 'react'
import Input from '../Input'
import { useState } from 'react'
import { useEffect } from 'react'
import { useId } from 'react'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { addGymAppoinments,deleteGymAppoinments,setGymAppoinments } from '../../features/gymAppoinmentsSlice'
import { nanoid } from '@reduxjs/toolkit'
function Home() {
    // const [userData,setUserData] =useState([])
    const userData = useSelector((state)=>state.gymAppoinments)
    const dispatch = useDispatch()
    const id = useId()
    useEffect(()=>{
      dispatch(setGymAppoinments(JSON.parse(localStorage.getItem('gym'))))
    },[])
  return (
    <>
    
    <div className='flex justify-center'>
    <div className='grid w-auto rounded-lg justify-center grid-cols-2 grid-flow-row gap-4'>
    {userData.map((item)=>(<Card key={item.id} userInfo={item}/>))}
    </div>
    
    </div>
    </>
  )
}

export default Home