import React,{useState,useEffect}from "react";
import "./MainFile.css"

export default function MainFile() {
  const [data,setData]=useState([])
  const[show,setShow]=useState("")
 
  async function fetchData () {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const jsonData= await data.json()
    console.log(jsonData)
    setData(jsonData)
  }
  useEffect(()=>{
    fetchData()
  },[])
  function HandleClick(body){
     setShow(body)
  }
  return (
    <div className="container">
      <div className="childOne">
        <h1>Post List</h1>
       {
         data.map((ele,index)=>{
          return(
              <h2  onClick={()=>{HandleClick(ele.body)}}>
                {ele.title}
              </h2>
          )
         })
       }
        </div>
        <div className="childTwo">
            <h1>Post Detail</h1>
        {show}
       </div>
    </div>
  );
}