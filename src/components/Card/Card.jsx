import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteGymAppoinments,updateGymAppoinments } from '../../features/gymAppoinmentsSlice'
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker'
function Card({
  userInfo,
  isCalendar=false}) {
  const [firstName,setFirstName] = useState(userInfo.firstName)
  const [lastName,setLastName] = useState(userInfo.lastName)
  const [location,setLocation] = useState(userInfo.location)
  const [isReadOnly, setIsReadOnly] = useState(true)
  const [isConfirmationVisible,setConfirmationVisible] =useState(false)
  const [showCalendar,setShowCalendar] = useState(false)
  const dispatch = useDispatch();
  const [addNewAppoinment,setNewAppoinment] = useState(false) 
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
            <Calendar/>
            <div className="flex  text-white justify-end mt-4">
              <button className=" bg-blue-500 py-2 px-4 rounded mr-4" onClick={() => setShowCalendar(false)}>
                Cancel
              </button>
              <button className="bg-green-500 py-2 px-4 rounded" onClick={()=>dispatch(deleteGymAppoinments(userInfo.id))}>
                Save
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
      {addNewAppoinment && (<div className='flex gap-2 py-2'>
      <input onClick={()=>setShowCalendar(true)} type="text" placeholder='date'/>
      <input placeholder='time'/>
    </div>)}
    </div>
    
    <div className="flex justify-end">
      
        {(!isCalendar)?(<>
      <button onClick={()=>setNewAppoinment(!addNewAppoinment)} className={`${addNewAppoinment?"bg-green-500 hover:bg-green-700":"bg-blue-500 hover:bg-blue-700"} text-white font-semibold py-2 rounded px-4 mr-2`}>{addNewAppoinment?"Save":"Add Appointment"}</button> 
      <button className={`${isReadOnly?"bg-blue-500 hover:bg-blue-700":"bg-green-500 hover:bg-green-700"}text-white font-semibold py-2 px-4 rounded mr-2`} onClick={()=>{(!isReadOnly?()=>{(!isReadOnly)?null:useDispatch(updateGymAppoinments({...userInfo,firstName:firstName,lastName:lastName}));}:null);setIsReadOnly(!isReadOnly)}} >{isReadOnly ? "✏️":"📁"  }</button>
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