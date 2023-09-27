import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Ocean = ( { ocean , index} ) => {
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
    <td>{ocean.consignorName}</td>
    <td>{ocean.consignorEmail}</td>
    <td>{ocean.consignorPhone}</td>
    <td>{ocean.ConsignorAddress}</td>
    <td>{ocean.consignorPrefSer}</td>
    <td>{ocean.consignorPrefServtime}</td>
    <td>{ocean.truck}</td>
    <td>{ocean.commodity}</td>
    <td>{ocean.distance}</td>
    <td>{formatDistanceToNow(new Date(ocean.createdAt), {addSuffix : true })}</td>
  </tr>
</table>

  </div>
    )
}

export default Ocean;
