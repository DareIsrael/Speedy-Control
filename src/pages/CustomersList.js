
import { useEffect, useState} from "react"
import Customers from "./Customers"


function CustomersList () {

    const [Users, setUsers] = useState(null)
  
    

       useEffect (() => {
          const fetchCustomers = async () => {
  
              const response = await fetch ('https://speedyspell-api.onrender.com/api/user/signup')
              const json = await response.json()
  
              if (response.ok) {
                setUsers(json)
             
              }
          }
  
          fetchCustomers()
       }, [])
  
      return (
       <div className="quick-offer">
       <div className="quick-offer2">
       <h1>Customers</h1>
    
       {Users && Users.map((User, index) => (
        
        <Customers  key = {User._id}  User = { User } index = { index }/>
       
        ))}

       
        
       </div>
       
       </div>
      )
}

export default CustomersList;