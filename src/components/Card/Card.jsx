import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteGymAppoinments,updateGymAppoinments } from '../../features/gymAppoinmentsSlice'
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker'
function Card({
  userInfo,
  isCalendar=false}) {
  const [date,setDate] = useState(new Date())
  const [day,setDay] = useState()
  const [month,setMonth] = useState()
  const [year,setYear] = useState()
  const [firstName,setFirstName] = useState(userInfo.firstName)
  const [lastName,setLastName] = useState(userInfo.lastName)
  const [location,setLocation] = useState(userInfo.location)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [isConfirmationVisible,setConfirmationVisible] =useState(false)
  const [showCalendar,setShowCalendar] = useState(false)
  const dispatch = useDispatch();
  const [addNewAppoinment,setNewAppoinment] = useState(false) 
  const [time,setTime] = useState()
  useEffect(()=>{
    setDay(date.getDate())
    setMonth(date.getMonth()+1)
    setYear(date.getFullYear())
  },[date])
  return (
   <>
   <div className="max-w-md mx-auto w-full bg-white rounded-md overflow-hidden shadow-md">
 
  <div className="bg-gray-800 text-white py-4 px-6">
    <h2 className="text-xl font-semibold">
      <div className="flex justify-self-center">
        
        <input type="text" readOnly={isReadOnly} onChange={(e)=>setFirstName(e.target.value)} value={firstName} className={` ${isReadOnly?null:'border'}  outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}/>
        <input type="text" readOnly={isReadOnly} onChange={(e)=>setLastName(e.target.value)} value={lastName} className={` ${isReadOnly?null:'border'}  outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}/>
      </div>
    </h2>
    <p onChange={(e)=>setLocation(e.target.value)} className="text-sm">Location: {location}</p>
  </div>

 
  <div className="p-6">
    
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Appointments</h3>
      <ul>
      <div>
       {!isCalendar? userInfo.appoinments.map((item)=>( 
       <div key={item.id} className="flex gap-2 py-2">
          <div><input value={item.date} readOnly={isReadOnly} onClick={()=>setShowCalendar(true)} type="text"/>{showCalendar && (<div className="fixed inset-0 flex items-center justify-center">
          <div className="dark:bg-gray-900 text-black p-8 rounded shadow-md">
            <Calendar value={date} onChange={setDate}/>
            <div className="flex  text-white justify-end mt-4">
              <button className=" bg-blue-500 py-2 px-4 rounded mr-4" onClick={() => setShowCalendar(false)}>
                Cancel
              </button>
              <button className="bg-green-500 py-2 px-4 rounded" onClick={()=>setShowCalendar(false)}>
                ok
              </button>
            </div>
          </div>
        </div>)}</div>
          <div><input type='text' value={item.time}></input></div>
        </div>)):userInfo.appoinments.map((item)=>(<div>
          <ul>
            <li>{item.date} {item.time}</li>
          </ul>
        </div>))}
      </div> 
      </ul>
      {addNewAppoinment && (<div className='flex bg-gray-800 rounded-lg text-white gap-2 py-2'>
      <div className='grid grid-flow-row grid-cols-2' >
      <label>EnterDate:</label>
      <input className='bg-gray-800 rounded-lg w-1/2 hover:bg-gray-800' value={`${year}-${month}-${day}`} onClick={()=>setShowCalendar(true)} type="text" placeholder='date'/>
      <label>EnterDate:</label>
      <input className='bg-gray-800 rounded-lg w-1/2 hover:bg-gray-800' value={time} onChange={(e)=>setTime(e.target.value)} placeholder='time'/>
      </div>
    </div>)}
    </div>
    
    <div className="flex justify-end">
      
        {(!isCalendar)?(<>
      <button hidden={addNewAppoinment} onClick={()=>setNewAppoinment(!addNewAppoinment)} className={`${addNewAppoinment?"bg-green-500 hover:bg-green-700":"bg-blue-500 hover:bg-blue-700"} text-white font-semibold py-2 rounded px-4 mr-2`}>add new appoinments</button> 
      <button hidden={!addNewAppoinment} onClick={()=>{dispatch(
        updateGymAppoinments({...userInfo,appoinments:[...userInfo.appoinments,{date:`${year}-${month}-${day}`,time:time}]}))
        setNewAppoinment(!addNewAppoinment)
        }} className={`${addNewAppoinment?"bg-green-500 hover:bg-green-700":"bg-blue-500 hover:bg-blue-700"} text-white font-semibold py-2 rounded px-4 mr-2`}>save </button> 
      
      <button hidden={!isReadOnly} className={`${isReadOnly?"bg-blue-500 hover:bg-blue-700":"bg-green-500 hover:bg-green-700"}text-white font-semibold py-2 px-4 rounded mr-2`} onClick={()=>{setIsReadOnly(!isReadOnly)}} >✏️</button>
      <button hidden={isReadOnly} className={`${isReadOnly?"bg-blue-500 hover:bg-blue-700":"bg-green-500 hover:bg-green-700"}text-white font-semibold py-2 px-4 rounded mr-2`} onClick={()=>{
        dispatch(updateGymAppoinments({...userInfo,firstName:firstName,lastName:lastName}))
        setIsReadOnly(!isReadOnly)
        }} >📁</button>
      
      
      <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded mr-2" onClick={()=>setConfirmationVisible(true)}>Delete</button>
          {isConfirmationVisible && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="dark:bg-gray-900 text-white p-8 rounded shadow-md">
            <p>Are you sure you want to delete this component?</p>
            <div className="flex justify-end mt-4">
              <button className="mr-4" onClick={() => setConfirmationVisible(false)}>
                Cancel
              </button>
              <button className="text-red-500 " onClick={()=>dispatch(deleteGymAppoinments(userInfo.id))}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}</>):(<div className='flex'><label >Completed</label><input type='checkbox'></input></div>)}
    </div>
  </div>
</div>
    </>
  )
}

export default Card