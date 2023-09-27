import Air from "./Air"
import { useEffect, useState} from "react"
import AirConsignee from "./AirConsignee"
function AirList () {

    const [airs, setAirs] = useState(null)
  
    

       useEffect (() => {
          const fetchAirs = async () => {
  
              const response = await fetch ('/api/air')
              const json = await response.json()
  
              if (response.ok) {
                  setAirs(json)
             
              }
          }
  
          fetchAirs()
       }, [])
  
      return (
       <div className="quick-offer">
       <div className="quick-offer2">
       <h1>Consignor</h1>
    
       {airs && airs.map((air, index) => (
        
        <Air  key = {air._id}  air = { air } index = { index }/>
       
        ))}

        <h1>Consignee</h1>

        {airs && airs.map((air, index) => (
        
        <AirConsignee  key = {air._id}  air = { air } index = { index }/>
       
        ))}
        
       </div>
       
       </div>
      )
}

export default AirList;