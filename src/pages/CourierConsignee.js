import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const CourierConsignee = ( { courier , index} ) => {


  
    return (
        <div>
    <table className='table-1'>
     
    <tr className="table-header">
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Date</th>
        <th>Time</th>
        <th>CreatedAt</th>
      </tr>
 
  <tr className='table-header2'>
    <td>{index}</td>
    <td>{courier.consigneeName}</td>
    <td>{courier.consigneeEmail}</td>
    <td>{courier.consigneePhone}</td>
    <td>{courier.ConsigneeAddress}</td>
    <td>{courier.consigneePrefSerdate}</td>
    <td>{courier.consigneePrefSertime}</td>
    <td>{formatDistanceToNow(new Date(courier.createdAt), {addSuffix : true })}</td>
  </tr>
</table>

  </div>
    )
}

export default CourierConsignee ;
