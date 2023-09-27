import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AirConsignee = ( { air , index} ) => {
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
    <td>{air.consigneeName}</td>
    <td>{air.consigneeEmail}</td>
    <td>{air.consigneePhone}</td>
    <td>{air.ConsigneeAddress}</td>
    <td>{air.consigneePostcode}</td>
    <td>{air.consigneePrefSertime}</td>
    <td>{formatDistanceToNow(new Date(air.createdAt), {addSuffix : true })}</td>
  </tr>
</table>

  </div>
    )
}

export default AirConsignee;
