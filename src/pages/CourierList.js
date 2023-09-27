import Air from "./Air"
import { useEffect, useState} from "react"
import Courier from "./Courier"
import CourierConsignee from "./CourierConsignee"

function CourierList () {

    const [couriers, setCouriers] = useState(null)
  
    

       useEffect (() => {
          const fetchCouriers = async () => {
  
              const response = await fetch ('/api/courier')
              const json = await response.json()
  
              if (response.ok) {
                setCouriers(json)
             
              }
          }
  
          fetchCouriers()
       }, [])
  
      return (
       <div className="quick-offer">
       <div className="quick-offer2">
       <h1>Consignor</h1>
    
       {couriers && couriers.map((courier, index) => (
        
        <Courier  key = {courier._id}  courier = { courier } index = { index }/>
       
        ))}

        <h1>Consignee</h1>

        {couriers && couriers.map((courier, index) => (
        
        <CourierConsignee  key = {courier._id}  courier = { courier } index = { index }/>
       
        ))}
        
       </div>
       
       </div>
      )
}

export default CourierList;