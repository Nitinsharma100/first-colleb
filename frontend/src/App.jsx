import React, { useEffect, useState } from 'react'
import ContactForm from './pages/ContactForm'
import BeautifulTable from './pages/BeautifulTable'
import axios from 'axios'

const App = () => {
  const [formData,setFormData] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const {data} = await axios.get('http://localhost:4000/api/getall')
        // console.log(data)
        setFormData(data.items)
      } catch (error) {
        console.log(error)
        alert("Somthing went wrong")
      }
    }
    fetchData()
  },[ContactForm,formData])


  return (
    <div className='flex flex-col'>
      <ContactForm />
      <BeautifulTable formData={formData} />
    </div>
  )
}

export default App
