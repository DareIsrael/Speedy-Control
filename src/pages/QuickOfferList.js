import QuickOffer from "./QuickOffer"
import { useEffect, useState} from "react"
import QuickOffer2 from "./QuickOffer2"
import "./QuickOffer.css"


function QuickOfferList () {

    const [cargos, setCargos] = useState(null)
  
    

       useEffect (() => {
          const fetchCargos = async () => {
  
              const response = await fetch ('/api/cargo')
              const json = await response.json()
  
              if (response.ok) {
                  setCargos(json)
             
              }
          }
  
          fetchCargos()
       }, [])
  
      return (
       <div className="quick-offer">
       <div className="quick-offer2">
       <h1>Quick Offer</h1>
    
       {cargos && cargos.map((cargo, index) => (
        
        <QuickOffer  key = {cargo._id}  cargo = { cargo } index = { index }/>
       
        ))}
        
       </div>
       
       </div>
      )
}

export default QuickOfferList;