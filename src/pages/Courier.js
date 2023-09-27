import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Courier = ( { courier , index} ) => {
    return (
        <div>
    <table className='table-1'>
     
    <tr className="table-header">
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Time</th>
        <th>Date</th>
        <th>height</th>
        <th>width</th>
        <th>Depth</th>
        <th>Commodity</th>
        <th>Distance</th>
        <th>CreatedAt</th>
      </tr>
 
  <tr className='table-header2'>
    <td>{index}</td>
    <td>{courier.consignorName}</td>
    <td>{courier.consignorEmail}</td>
    <td>{courier.consignorPhone}</td>
    <td>{courier.ConsignorAddress}</td>
    <td>{courier.consignorPrefSerdate}</td>
    <td>{courier.consignorPrefSertime}</td>
    <td>{courier.height}</td>
    <td>{courier.width}</td>
    <td>{courier.depth}</td>
    <td>{courier.commodity}</td>
    <td>{courier.distance}</td>
    <td>{formatDistanceToNow(new Date(courier.createdAt), {addSuffix : true })}</td>
  </tr>
</table>

  </div>
    )
}

export default Courier ;
