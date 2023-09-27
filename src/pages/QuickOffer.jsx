import React from 'react'
import "./QuickOffer.css"

const QuickOffer = ( { cargo , index} ) => {
    return (
        <div>
    <table className='table-1'>
    <tr className="table-header">
        <th>Id</th>
        <th>Name</th>
        <th>Truckload</th>
        <th>Email</th>
        <th>Commodity</th>
        <th>CreatedAt</th>
      </tr>
 
  <tr className='table-header2'>
    <td>{index}</td>
    <td>{cargo.name}</td>
    <td>{cargo.truckload}</td>
    <td>{cargo.email}</td>
    <td>{cargo.commodity}</td>
    <td>{cargo.createdAt}</td>
  </tr>
  
</table>

        </div>
    )
}

export default QuickOffer;
