import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { useSelector, useDispatch } from 'react-redux'
import { setGymAppoinments } from '../../features/gymAppoinmentsSlice'
import Card from '../Card/Card'
function GymCalendar() {
  const dispatch =useDispatch()
  const userData = useSelector((state)=>state.gymAppoinments)
  const [date,setDate] = useState(new Date())
  const [day,setDay] = useState(date.getDate())
  const [month,setMonth]= useState(date.getMonth()+1)
  const [year,setYear] = useState(date.getFullYear())
  useEffect(()=>{
    dispatch(setGymAppoinments(JSON.parse(localStorage.getItem('gym'))))
  },[])
  useEffect(()=>{
   setDay(date.getDate())
   setMonth(date.getMonth()+1)
   setYear(date.getFullYear())
  },[date])
  return (
    <div className=' grid grid-flow-col'>
      <div className=''>
        <Calendar onChange={setDate} value={date}/>
      </div>
      <div className='grid grid-flow-row grid-cols-3 gap-4  px-9 ' >
        {userData.map((item)=>{
          item.appoinments.map((appo)=>{console.log(appo.date)})
          const obj = item.appoinments.find((appo)=>((`${year}-${month}-${day}`)==appo.date))
          console.log(obj)
          {return obj?<Card key={item.id} userInfo={item} isCalendar={true}/>:null}
      })}
      </div>
    </div>
  )
}

export default GymCalendar