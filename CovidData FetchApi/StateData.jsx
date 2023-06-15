import React, { useEffect, useState }  from "react";
import "../CovidData FetchApi/state.css"



const StateData=()=>{

        const [user, setUser] = useState({});
      
        const fetchData = () => {
          return fetch("https://data.covid19india.org/v4/min/data.min.json")
                .then((response) => 
                  response.json())
                .then((data) => {
                
                  setUser(data)})
                .catch((error)=>console.log(error))
        }
      
        useEffect(() => {
          fetchData();
        },[])
      const displayData = () =>{
        const result = [];
        for(const curEle in user){
          console.log(curEle);
          const sele = (
          <tr key={curEle}>
          <td>{user[curEle].delta.tested}</td>
          <td> {user[curEle].delta.vaccinated1}</td>
          <td> {user[curEle].delta.vaccinated2}</td>
          <td>{user[curEle].delta.recovered}</td>
          <td>{user[curEle].meta.date}</td>
          <td>{user[curEle].meta.last_updated}</td>
          </tr> );
          result.push(sele)
        }
        return result;
      }
          return(
        <>
            <h1 className="header">INDIA COVID-19 Dashboard</h1>
            <div className="main_div">
             <table className="table">
              
               <tr>
                  <th>Tested</th>
                    <th> Vaccinated1</th>
                      <th> Vaccinated2</th>
                      <th> Recovered</th>
                    <th> Dates</th>
                    <th>Last Updated</th>
                </tr> 
              
{
    user && displayData()
}          
       
          
             </table>

            </div>
        </>
    )
}
    
export default StateData;