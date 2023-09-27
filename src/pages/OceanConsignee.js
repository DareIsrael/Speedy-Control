import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const OceanConsignee = ( { ocean , index} ) => {
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
    <td>{ocean.consigneeName}</td>
    <td>{ocean.consigneeEmail}</td>
    <td>{ocean.consigneePhone}</td>
    <td>{ocean.ConsigneeAddress}</td>
    <td>{ocean.consigneePostcode}</td>
    <td>{ocean.consigneePrefSertime}</td>
    <td>{formatDistanceToNow(new Date(ocean.createdAt), {addSuffix : true })}</td>
  </tr>
</table>

  </div>
    )
}

export default OceanConsignee;
