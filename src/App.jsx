import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'
import Table  from './components/Table'
import Input from './components/input'
import Card from './components/Card'
import img1 from './img/img1.jpeg'
import img2 from './img/img2.jpeg'
import img3 from './img/img3.jpeg'
import img4 from './img/img4.jpeg'
import img5 from './img/img5.jpeg'

function App() {
    let arr = [ 
      {
        Name : "M.Adil",
        FName : "M.Haroon",
        Age :  15,
        RollNum : 101,
        Class : 8,
        Inst : "SAI"
      },
      {
        Name : " A .Haseeb",
        FName : "M.Haroon",
        Age :  14,
        RollNum : 102,
        Class : 7,
        Inst : "SAI"
      }, 
      {
        Name : "A.Raheem",
        FName : "M.Haroon",
        Age :  12,
        RollNum : 103,
        Class : 6,
        Inst : "SAI"
      },
      {
        Name : "A.Shakoor",
        FName : "M.Haroon",
        Age :  10,
        RollNum : 104,
        Class : 5,
        Inst : "SAI"
      },
      {
        Name : "A.Mannan",
        FName : "M.Haroon",
        Age :  9,
        RollNum : 105,
        Class : 4,
        Inst : "SAI"
      }
    ]
    let arrOfObj = [
      {
        img: <img className='w-100 rounded' src={img1} />,
        id: 1,
        userName: "Haseeb",
        age: 17,
        institute: "SAI",
        isActive: true,
        category: "ABC"
      },
      {
        img: <img src={img2} className='w-100 rounded'/>,
        id: 2,
        userName: "Raheem",
        age: 16,
        institute: "SAI",
        isActive: false,
        category: "DEF"
      },
      {
        img: <img src={img3} className='w-100 rounded'/>,
        id: 3,
        userName: "Shakkor",
        age: 17,
        institute: "SAI",
        isActive: true,
        category: "GHI"
      },
      {
        img: <img src={img4} className='w-100 rounded'/>,
        id: 4,
        userName: "Mannan",
        age: 15,
        institute: "SAI",
        isActive: false,
        category: "JKL"
      },
      {
        img: <img src={img5} className='w-100 rounded'/>,
        id: 5,
        userName: "Yaseen",
        age: 21,
        institute: "SAI",
        isActive: true,
        category: "MNO"
      },
    ] 
  return (
  <div className='text-center'>
    {arr.map((x , i) => {
      return(
        <Table Name = {x.Name} FName = {x.FName} Age = {x.Age} RollNum = {x.RollNum} Class = {x.Class} Inst = {x.Inst}/>
      )
     })}
    
    <Button Button = "ABC" Buttonclick = {() => {alert("ADIL")}}/>
    <Button Button = "MNO" Buttonclick = {() => {alert("HASEEB")}}/>
    <Button Button = "ADS" Buttonclick = {() => {alert("RHEEM")}}/>
    <Button Button = "DSA" Buttonclick = {() => {alert("SHAKOOR")}}/>
    <Button Button = "NGH" Buttonclick = {() => {alert("MANNAN")}}/>

    <Input valInp = "ADC" typeInp = "text" onchangeInp = {() => {alert("ADC")}}/>
    <Input valInp = "123" typeInp = "number" onchangeInp = {() => {alert("123")}}/>
    <Input valInp = "XYZ" typeInp = "password" onchangeInp = {() => {alert("XYZ")}}/>
    <Input valInp = "JKL@mail.com" typeInp = "email" onchangeInp = {() => {alert("JKL@mail.com")}}/>
    <Input valInp = "Haseeb" typeInp = "name" onchangeInp = {() => {alert("Haseeb")}}/>

    {arrOfObj.map((x,i) => {
      return(

        <div >
          <Card img = {x.img} id = {x.id} userName = {x.userName} age = {x.age} institute = {x.institute } isActive = {x.isActive} category = {x.category}/>     
        </div>
      )
    })}

    </div>
  );
}

export default App;
