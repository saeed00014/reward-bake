import React, { useEffect, useState } from 'react'
import './home.css'

import Forges from '../components/forges/forges'
import Header from '../components/header/header'
import { useDispatch } from 'react-redux'
import { manageState, addList } from '../store/stateSlice'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import QomersPage from '../qomers/qomers'
import { cleareState } from '../store/stateSlice'

const HomePage = () => {
  const [done1, setDone1] = useState(true)
  const [cooking1, setCooking1] = useState(false)
  const [off1, setOff1] = useState(false)
  const [empty1, setEmpty1] = useState(false)
  const dispatch = useDispatch()

  const cookState = useSelector((state) => state.cookState)
  const list = useSelector((state) => state.list)

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
      {/*<div className='homeListContainer'>
        <div className="homeListContainer2">
          <p>Click to show List</p>
          <div className='homeListContent'>
            <h3 flash-rev={done1.toString()} onClick={() => setDone1(!done1)}>
              Done
              <span></span>
            </h3>
            <ul className={done1 ? 'showList' : 'homeList'}>
              {list.doneList.map((doneItem) => {
                return (
                  <li key={doneItem.symbol}>{doneItem.num}</li>
                )
              })}
            </ul>
          </div>
          <div className='homeListContent'>
            <h3 flash-rev={cooking1.toString()} onClick={() => setCooking1(!cooking1)}>
              Cooking
              <span></span>
            </h3>
            <ul className={cooking1 ? 'showList' : 'homeList'}>
              {list.cookingList.map((doneItem) => {
                return (
                  <li key={doneItem.symbol}>{doneItem.num}</li>
                )
              })}
            </ul>
          </div>
          <div className='homeListContent'>
            <h3 flash-rev={off1.toString()} onClick={() => setOff1(!off1)}>
              Off
              <span></span>
            </h3>
            <ul className={off1 ? 'showList' : 'homeList'}>
              {list.offList.map((doneItem) => {
                return (
                  <li>{doneItem.num}</li>
                )
              })}
            </ul>
          </div>
          <div className='homeListContent'>
            <h3 flash-rev={empty1.toString()} onClick={() => setEmpty1(!empty1)}>
              Empty
              <span></span>
            </h3>
            <ul className={empty1 ? 'showList' : 'homeList'}>
              {list.emptyList.map((doneItem) => {
                return (
                  <li>{doneItem.num}</li>
                )
              })}
            </ul>
          </div>
        </div>
            </div>*/}

    </section>
  )
}

export default HomePage