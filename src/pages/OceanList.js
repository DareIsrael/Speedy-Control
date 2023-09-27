import Ocean from "./Ocean"
import { useEffect, useState} from "react"
import OceanConsignee from "./OceanConsignee"
function OceanList () {

    const [oceans, setOceans] = useState(null)
  
    

       useEffect (() => {
          const fetchOceans = async () => {
  
              const response = await fetch ('/api/ocean')
              const json = await response.json()
  
              if (response.ok) {
                  setOceans(json)
             
              }
          }
  
          fetchOceans()
       }, [])
  
      return (
       <div className="quick-offer">
       <div className="quick-offer2">
       <h1>Consignor</h1>
    
       {oceans && oceans.map((ocean, index) => (
        
        <Ocean  key = {ocean._id}  ocean = { ocean } index = { index }/>
       
        ))}

        <h1>Consignee</h1>

        {oceans && oceans.map((ocean, index) => (
        
        <OceanConsignee  key = {ocean._id}  ocean = { ocean } index = { index }/>
       
        ))}
        
       </div>
       
       </div>
      )
}

export default OceanList;