import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Card(props){
    const {img,id,userName,age,institute,isActive,category} = props
   return(
    <div className='w-25 border rounded my-3 '>
        <p>{img}</p>
        <p>Id: {id}</p>
        <p>User Name: {userName}</p>
        <p>Age: {age}</p>
        <p>Institute: {institute}</p>
        <p>isActive:{isActive ? "Yes" : "No"}</p>
        <p>Category:{category}</p>
    </div>
   )

}
export default Card