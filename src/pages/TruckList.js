import Truck from "./Truck"
import { useEffect, useState} from "react"
import TruckConsignee from "./TruckConsignee"
function TruckList () {

    const [trucks, setTrucks] = useState(null)
  
    

       useEffect (() => {
          const fetchTrucks = async () => {
  
              const response = await fetch ('https://speedyspell-api.onrender.com/api/truck')
              const json = await response.json()
  
              if (response.ok) {
                  setTrucks(json)
             
              }
          }
  
          fetchTrucks()
       }, [])
  
      return (
       <div className="quick-offer">
       <div className="quick-offer2">
       <h1>Consignor</h1>
    
       {trucks && trucks.map((truck, index) => (
        
        <Truck  key = {truck._id}  truck = { truck } index = { index }/>
       
        ))}

        <h1>Consignee</h1>

        {trucks && trucks.map((truck, index) => (
        
        <TruckConsignee  key = {truck._id}  truck = { truck } index = { index }/>
       
        ))}
        
       </div>
       
       </div>
      )
}

export default TruckList;