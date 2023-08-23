import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Input(props) {
    return (
        <div>
            <input type={props.typeInp} className='my-3  rounded p-1' value={props.valInp} onChange={props.onchangeInp} />
        </div>
    )
}

export default Input