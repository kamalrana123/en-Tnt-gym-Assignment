import React from 'react'
import Input from '../Input'
import { useState } from 'react'
import { useEffect } from 'react'
import { useId } from 'react'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { addGymAppoinments,deleteGymAppoinments,setGymAppoinments } from '../../features/gymAppoinmentsSlice'
import Calendar from 'react-calendar'
function Appoinments() {
    const userData = useSelector((state)=>state.gymAppoinments)
    const dispatch = useDispatch()
    const [showForm,setShowForm] = useState(false)
    const [btnVissible,setBtnvissible] = useState(true)
    const [appointmentDate,setAppoinmentDate] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [date,setDate] = useState(new Date())
    const [time,seTime] = useState("")
    const [location,setLocation] = useState("")
    const [showCalendar,setShowCalendar] = useState(false)
    const [day,setDay] = useState()
    const [month,setMonth] = useState()
    const [year,setYear] = useState()
    const id = useId()
    useEffect(()=>{
      dispatch(setGymAppoinments(JSON.parse(localStorage.getItem('gym'))))

    },[])
    useEffect(()=>{
      setDay(date.getDate())
      setMonth(date.getMonth()+1)
      setYear(date.getFullYear())
    },[date])
  return (
    <>
    <div className='flex justify-around items-center'>
      
    <div className='grid w-auto rounded-lg justify-center grid-cols-3 grid-flow-row gap-4'>
    <div className='flex font-bold text-4xl  items-center h-20 w-1/2 justify-center'>
        {true && (<button onClick={()=>{setShowForm(true); setBtnvissible(false)}}>
         <div className="relative border rounded-full bg-blue-300 w-16 h-16">
         <div className='absolute left-1/4 right-1/4 top-1/2 h-2 bg-blue-600 transform -translate-y-1/2'>
          </div>
          <div className='absolute top-1/4 bottom-1/4 left-1/2 w-2 bg-blue-600 transform -translate-x-1/2'></div>
         </div>
        </button>)}
      </div>
      {showForm && (
          <div className=' bg-gray-800 rounded-lg flex justify-center items-center py-10 px-10'>
            <div>
              <div className='grid'>
            <input type='text'  className='   outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'  required={true} onChange={(e)=>setFirstName(e.target.value)} value={firstName} placeholder='firstName'/>
            <input type='text' className=' mt-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required={true} onChange={(e)=>setLastName(e.target.value)} value={lastName} placeholder='lastName' />
            <input type='text' className=' mt-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required={true} onChange={(e)=>setLocation(e.target.value)} value={location} placeholder='location'/>
            <input type='text' className=' mt-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required={true} onClick={()=>setShowCalendar(true)} value={`${day}-${month}-${year}`} placeholder='date'/>
            </div>
            {showCalendar &&  <div className="dark:bg-gray-900 text-black p-8 rounded  shadow-md">
            <Calendar value={date} onChange={setDate}/>
            <div className="flex  text-white justify-end mt-4">
              <button className=" bg-blue-500 py-2 px-4 rounded mr-4" onClick={() => setShowCalendar(false)}>
                Cancel
              </button>
              <button type='submit' className="bg-green-500 py-2 px-4 rounded" onClick={()=>dispatch(deleteGymAppoinments(userInfo.id))}>
                Save
              </button>
            </div>
          </div>}
            <input type='text' className='mt-2 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required={true} onChange={(e)=>seTime(e.target.value)} value={time} placeholder='time'/>
           
            <div className='flex gap-4 justify-center items-center'>
              <button className='bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white rounded' onClick={()=>setShowForm(false)}>cancel</button>
              <button className='bg-green-500 hover:bg-green-700 py-2 px-4 text-white rounded' onClick={()=>{
                if(firstName==""|| lastName==""||date==""||location==""||time==""){
                  alert("please fll all the fields")
                  return;
                }
                dispatch(addGymAppoinments({firstName:firstName,lastName:lastName,location:location,appoinments:[{date:`${year}-${month}-${day}`,time:time}]}))
                setShowForm(false)
                setFirstName("")
                setLastName("")
                setDate(new Date())
                setLocation("")
                setTimeout("")
                }}>save</button>
            </div>
          </div>
          </div>
        )}
    {userData.map((item)=>(<Card key={item.id} userInfo={item}/>))}
    </div>
    
    </div>
    </>
  )
}

export default Appoinments