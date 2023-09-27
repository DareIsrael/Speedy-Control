import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TruckConsignee = ( { truck , index} ) => {
    return (
        <div>
    <table className='table-1'>
     
    <tr className="table-header">
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Post Code</th>
        <th>Date</th>
        <th>CreatedAt</th>
      </tr>
 
  <tr className='table-header2'>
    <td>{index}</td>
    <td>{truck.consigneeName}</td>
    <td>{truck.consigneeEmail}</td>
    <td>{truck.consigneePhone}</td>
    <td>{truck.ConsigneeAddress}</td>
    <td>{truck.consigneePostcode}</td>
    <td>{truck.consigneePrefSertime}</td>
    <td>{formatDistanceToNow(new Date(truck.createdAt), {addSuffix : true })}</td>
  </tr>
</table>

  </div>
    )
}

export default TruckConsignee;
