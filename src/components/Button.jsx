import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Button (props){
    return(
       <button onClick={props.Buttonclick} value={props.ButtonValue}  className='mx-2 mt-3 btn btn-info'>{props.Button}</button>
    )
}

export default Button