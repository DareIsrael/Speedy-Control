import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Air = ( { air , index} ) => {
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
        <th>Commodity</th>
        <th>Distance</th>
        <th>CreatedAt</th>
      </tr>
 
  <tr className='table-header2'>
    <td>{index}</td>
    <td>{air.consignorName}</td>
    <td>{air.consignorEmail}</td>
    <td>{air.consignorPhone}</td>
    <td>{air.ConsignorAddress}</td>
    <td>{air.consignorPrefSer}</td>
    <td>{air.consignorPrefServtime}</td>
    <td>{air.height}</td>
    <td>{air.width}</td>
    <td>{air.commodity}</td>
    <td>{air.distance}</td>
    <td>{formatDistanceToNow(new Date(air.createdAt), {addSuffix : true })}</td>
  </tr>
</table>

  </div>
    )
}

export default Air;
