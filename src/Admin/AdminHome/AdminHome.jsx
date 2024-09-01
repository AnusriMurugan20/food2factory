import React from 'react';
import { useRef } from 'react';
import '../AdminHome/AdminHome.css'
import AdminTopBox from '../AdminTopBox/AdminTopBox';
import AdminChartBox from '../AdminChartBox/AdminChartBox';
import { chartBoxRevenue,chartBoxConversion,chartBoxUsers,chartBoxVolunteers,barChartBoxDonations,barChartBoxVisits } from '../Data/AdminData';
import AdminBarChart from '../AdminBarChart/AdminBarChart';
import AdminPieChart from '../AdminPieChart/AdminPieChart';
import AdminBigChart from '../AdminBigChart/AdminBigChart';
const AdminHome = () => {
  const myRef = useRef(null);
  return (
    <div ref={myRef}>
    <div className='admin-home'>
      <div className="box box1">
        <AdminTopBox/>
      </div>
      <div className="box box2"><AdminChartBox {...chartBoxUsers}/></div>
      <div className="box box3"><AdminChartBox {...chartBoxRevenue}/></div>
      <div className="box box4"><AdminPieChart /></div>
      <div className="box box5"><AdminChartBox {...chartBoxVolunteers}/></div>
      <div className="box box6"><AdminChartBox {...chartBoxConversion}/></div>
      <div className="box box7"><AdminBigChart/> </div>
      <div className="box box8"><AdminBarChart {...barChartBoxVisits}/></div>
      <div className="box box9"><AdminBarChart {...barChartBoxDonations}/></div>
    </div>
    </div>
  );
}

export default AdminHome;