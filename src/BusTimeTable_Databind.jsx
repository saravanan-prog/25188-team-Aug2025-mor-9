export default function BusTimeTable_Databind(){

     const  bus_name1="19A";
     const bus_time1="8.00";
     const bus_name2="119G";
     const bus_time2="9.00";
     const bus_name3="21G";
     const bus_time3="10.00";
     const bus_name4="49k";
     const bus_time4="11.00";
     const bus_name5="19k";
     const bus_time5="12.00";
     const bus_time6="4.00";
     const bus_time7="5.00";

    return(
        <div>
           <center><u><h1> Bus Time Table </h1></u>
          <table border="2px" width="800px" height="300px">
            <tr>
              <th>Bus_Name</th>
              
              <th colSpan="4">A.M</th>
              <th colSpan="3">P.M</th>
             
            </tr>

            <tr>
              <td>{bus_name1}</td>
              <td>{bus_time1}</td>
              <td>{bus_time2}</td>
              <td>{bus_time3}</td>
              <td>{bus_time4}</td>
              <td>{bus_time5}</td>
              <td>{bus_time6}</td>
              <td>{bus_time7}</td>
              

              
            </tr>
            <tr>
             <td>{bus_name2}</td>
              <td>{bus_time7}</td>
              <td>{bus_time2}</td>
              <td>{bus_time3}</td>
              <td>{bus_time4}</td>
              <td>{bus_time5}</td>
              <td>{bus_time2}</td>
              <td>{bus_time3}</td>
              
            </tr>

            <tr>
             <td>{bus_name3}</td>
              <td>{bus_time6}</td>
              <td>{bus_time7}</td>
              <td>{bus_time2}</td>
              <td>{bus_time3}</td>
              <td>{bus_time6}</td>
              <td>{bus_time7}</td>
              <td>{bus_time4}</td>
              
            </tr>

             <tr>
              <td>{bus_name5}</td>
              <td>{bus_time1}</td>
              <td>{bus_time2}</td>
              <td>{bus_time3}</td>
              <td>{bus_time4}</td>
              <td>{bus_time5}</td>
              <td>{bus_time6}</td>
              <td>{bus_time7}</td>   
            </tr>

             <tr>
             <td>{bus_name4}</td>
              <td>{bus_time7}</td>
              <td>{bus_time2}</td>
              <td>{bus_time3}</td>
              <td>{bus_time4}</td>
              <td>{bus_time5}</td>
              <td>{bus_time2}</td>
              <td>{bus_time3}</td>
              
            </tr>
          </table>
            
        </center>
        </div>
    )

}