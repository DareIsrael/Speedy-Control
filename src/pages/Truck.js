import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Truck = ( { truck , index} ) => {
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
        <th>Truck type</th>
        <th>Commodity</th>
        <th>Distance</th>
        <th>CreatedAt</th>
      </tr>
 
  <tr className='table-header2'>
    <td>{index}</td>
    <td>{truck.consignorName}</td>
    <td>{truck.consignorEmail}</td>
    <td>{truck.consignorPhone}</td>
    <td>{truck.ConsignorAddress}</td>
    <td>{truck.consignorPrefSer}</td>
    <td>{truck.consignorPrefServtime}</td>
    <td>{truck.truck}</td>
    <td>{truck.commodity}</td>
    <td>{truck.distance}</td>
    <td>{formatDistanceToNow(new Date(truck.createdAt), {addSuffix : true })}</td>
  </tr>
</table>

  </div>
    )
}

export default Truck;
