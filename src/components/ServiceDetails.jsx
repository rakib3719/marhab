import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ServiceDetails() {
    const [data, setData] = useState({})

// https://www.marhabaservices.com/ae/english

 

const {id} = useParams();
    const getData = async()=>{


      
    const data =await axios.get(`http://localhost:5000/api/shot/services/${id}`);


    setData(data?.data?.data)
    





    }

  
    useEffect(()=>{
        getData();
    }, [])

    console.log(data, 'data')
    

  return (
    <div>
        

        <h4>This is service details</h4>
    </div>
  )
}
