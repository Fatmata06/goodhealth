import React from 'react'
import { Table } from "react-bootstrap";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Dashboard.css'

function Dashboard() {
  const percentage = 66;
<CircularProgressbar value={percentage} text={`${percentage}%`} />;
  return (
    <div className='container'>
      <div className='row cod' >
        <div className='col-2' style={{ width: 190, height: 170 }}>
        <CircularProgressbar value={66} />
        </div>
        <div className='col-2' style={{ width: 190, height: 170 }}>
          <h1>Demain</h1>
          <h1>1</h1>
          <h4>2023-10-18</h4>
        </div>
        <div className='col-2' style={{ width: 190, height: 170 }}>
        <CircularProgressbar value={66} />
        </div>
        <div className='col-2' style={{ width: 190, height: 170 }}>
          <h1>Today</h1>
          <h1>15</h1>
          <h4>2023-10-17</h4>
        </div>
        <div className='col-2' style={{ width: 190, height: 170 }}>
        <CircularProgressbar value={66} />
        </div>
        <div className='col-2' style={{ width: 190, height: 170 }}>
          <h1>Total</h1>
          <h1>16</h1>
          <h4>2023-10-17</h4>
        </div>
      </div>
      <div className='today'>
             <h1 className='titre'style={{ height: 100 }}>Today Appointement</h1>
                
    <Table  bordered className="dad bg-secondary">
      <thead >
        <tr>
          <th >Nom patient </th>
          <th >Date rendez vous</th>
          <th >Heure rendez vous</th>
          <th >Contacts</th>
          <th >Action</th>
        </tr>
      </thead>
      <tbody >
      <tr>
          <td >Nom patient </td>
          <td >Date rendez vous</td>
          <td >Heure rendez vous</td>
          <td >Contacts</td>
          <td >Action</td>
        </tr>
      </tbody>
    </Table> 
        </div>

      
  </div>
        
   
  )
}

export default Dashboard;