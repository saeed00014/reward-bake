import './home.css'

import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import QomersPage from '../qomers/qomers'

const HomePage = () => {
  const cookState = useSelector((state) => state.cookState)

  const done = Math.trunc(cookState.done/220*100)
  const cooking = Math.trunc(cookState.cooking/220*100)
  const off = Math.trunc(cookState.off/220*100)
  const empty = Math.trunc(cookState.empty/220*100)

  const data = [
    { name: 'done', value: Number(done) },
    { name: 'cooking', value: Number(cooking)  },
    { name: 'off', value: Number(off) },
    { name: 'empty', value: Number(empty) },
  ];
  
  const COLORS = ['green', 'orange', 'gray', 'brown' ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <section className='homeSection'>
      <h1 className='homeTitle'>نگاه کلی</h1>
      <div className="homeContainer">
        <div className="homeProgress">
          <h1>وظعیت کلی قمیرها</h1>
          <div className="homeChartContainer">
            <div className="homeChart">
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx="55%"
                  cy="40%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={150}
                  fill="#22084d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="homeChartDis">
              <h3>پخته شده</h3>
              <h3>در حال پخت</h3>
              <h3>خاموش</h3>
              <h3>خالی</h3>
            </div>
          </div>
        </div>
        <div className="homeProgressDetails">
          <h1>وظعیت هر دهانه</h1>
          <div className="homeProgressDetailsContainer">
            <div className="homeMouthState">
              <div className="homeMouth">
                <div>
                  <p>{cookState.all/2} / {cookState.done} : پخته شده</p>       
                  <span>
                    <i style={{width: `${done}%` , backgroundColor: 'green'}}></i>
                  </span>       
                </div>
              </div>
              <div className="homeMouth">
                <div>
                  <p>{cookState.all/2} / {cookState.cooking} : در حال پخت</p>       
                  <span>
                  <i style={{width: `${cooking}%`, backgroundColor: 'orange'}}></i></span>                   
                </div>
              </div>
              <div className="homeMouth">
                <div>
                  <p>{cookState.all/2} / {cookState.off} : خاموش</p>    
                  <span>
                  <i style={{width: `${off}%`, backgroundColor: 'gray'}}></i></span>                      
                </div>
              </div>
              <div className="homeMouth">
                <div>
                  <p>{cookState.all/2} / {cookState.empty} : خالی</p>  
                  <span>
                  <i style={{width: `${empty}%`, backgroundColor: 'brown'}}></i></span>       
                </div>
              </div>
            </div>
            <Link to='/data' className='homeShowList'>&lt;-- لیست وظعیت همه قمیرها</Link>
          </div>
        </div>
      </div>
      <div className='homeQomers'>

      <QomersPage homeEdition={'yes'}/>

      </div>
    </section>
  )
}

export default HomePage