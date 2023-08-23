import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Table(props){
    const {Name , FName , Age , RollNum , Class , Inst} = props
    return(
       <table className='table text-center mt-4'>
         <thead>
             <tr>
                 <th>Name</th>
                 <th>F.Name</th>
                 <th>Age</th>
                 <th>Roll Num</th>
                 <th>Class</th>
                 <th>Inst</th>
             </tr>
         </thead>
         <tbody>
             <td>{Name}</td>
             <td>{FName}</td>
             <td>{Age}</td>
             <td>{RollNum}</td>
             <td>{Class}</td>
             <td>{Inst}</td>
         </tbody>
       </table> 
    )
 }

export default Table