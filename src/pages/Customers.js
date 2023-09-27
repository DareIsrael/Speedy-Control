const Customers = ( { User , index} ) => {
    return (
        <div>
    <table className='table-1'>
     
    <tr className="table-header">
        <th>Id</th>
        <th>F-Name</th>
        <th>L-Name</th>
        <th>C-Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>City</th>
        <th>Country</th>
        <th>CreatedAt</th>
      </tr>
 
  <tr className='table-header2'>
    <td>{index}</td>
    <td>{User.fName}</td>
    <td>{User.lName}</td>
    <td>{User.cName}</td>
    <td>{User.email}</td>
    <td>{User.phone}</td>
    <td>{User.city}</td>
    <td>{User.country}</td>
    <td>{User.createdAt}</td>
  </tr>
</table>

  </div>
    )
}

export default Customers;
