import React from 'react'

import './data.css'
import { forges } from '../forges'

const DataPage = () => {
  return (
    <section className="data">
      <div className="dataContainer">
        {forges.map((forge) => {

          const handleMap = (index) => {
            {forge[index].map((info) => {
              const styles = {
                backgroundColor: `${info.state}`
              }
              return (
                <div style={styles} className="dataInfoContent">
                  <div>
                    <h3>{info.num}</h3>
                    <h3>{info.name}</h3>
                    <h3>{info.quantity}</h3>
                  </div>
                  <h3>{info.state}</h3>
                </div>
              )
            })}
          }
          
          return (
            <div className="dataContent">
                <h3 className='dataForgeName'>{forge[0].name}</h3>
                <div className="dataInfoContainer">
                {forge[1].map((info) => {
              const styles = {
                backgroundColor: `${info.state}`
              }
              return (
                <div style={styles} className="dataInfoContent">
                  <div>
                    <h3>{info.num}</h3>
                    <h3>{info.name}</h3>
                    <h3>{info.quantity}</h3>
                  </div>
                  <h3>{info.state}</h3>
                </div>
              )
            })}
                {forge[2].map((info) => {
              const styles = {
                backgroundColor: `${info.state}`
              }
              return (
                <div style={styles} className="dataInfoContent">
                  <div>
                    <h3>{info.num}</h3>
                    <h3>{info.name}</h3>
                    <h3>{info.quantity}</h3>
                  </div>
                  <h3>{info.state}</h3>
                </div>
              )
            })}
                {forge[3].map((info) => {
              const styles = {
                backgroundColor: `${info.state}`
              }
              return (
                <div style={styles} className="dataInfoContent">
                  <div>
                    <h3>{info.num}</h3>
                    <h3>{info.name}</h3>
                    <h3>{info.quantity}</h3>
                  </div>
                  <h3>{info.state}</h3>
                </div>
              )
            })}
                {forge[4].map((info) => {
              const styles = {
                backgroundColor: `${info.state}`
              }
              return (
                <div style={styles} className="dataInfoContent">
                  <div>
                    <h3>{info.num}</h3>
                    <h3>{info.name}</h3>
                    <h3>{info.quantity}</h3>
                  </div>
                  <h3>{info.state}</h3>
                </div>
              )
            })}
                </div>
            </div>
            )
          })}
      </div>
    </section>
  )
}

export default DataPage