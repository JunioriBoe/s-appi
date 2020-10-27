import React, {Component} from 'react'
import './Weather.css'

class Weather extends Component {
  render() {
      return(
        <div className="Weather">
          <div className="Weather_focused">
            <div className="Weather_day">pe</div>
            <div className="Weather_time">12:00</div>
            <div className="Weather_day">14°</div>
             <img src='http://openweathermap.org/img/wn/09d.png' alt="logo" />
          </div>

          <div className="Weather_forecast">

            <div className="Weather_box">
              <div className="Weather_day">ma</div>
              <div className="Weather_time">10:00</div>
              <div className="Weather_day">16°</div>
              <img src='http://openweathermap.org/img/wn/09d.png' alt="logo" />
            </div>
             <div className="Weather_box">
               <div className="Weather_day">ma</div>
               <div className="Weather_time">11:00</div>
               <div className="Weather_day">15°</div>
               <img src='http://openweathermap.org/img/wn/09d.png' alt="logo" />
             </div>
              <div className="Weather_box">
                <div className="Weather_day">ma</div>
                <div className="Weather_time">12:00</div>
                <div className="Weather_day">14°</div>
                <img src='http://openweathermap.org/img/wn/09d.png' alt="logo" />
              </div>

          </div>

        </div>
      )
  }
}

export default Weather
