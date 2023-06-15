import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function Home() {
  const[currentOfWeather , setCurrentOfWeather] = useState({});
  const[locationOfWeather , setLocationOfWeather] = useState({});
  const[NameOfCountry,setNameOfCountry] = useState('');
  const[dayNow , setDayNow] =useState('');
  const[dayTomorrow , setDayTomorrow] =useState('');
  const[dayAfterTomorrow , setDayAfterTomorrow] =useState('');
  const[date , setDate]=useState('');
  const[iconToDay , setIconToDay] = useState('');
  const[textToDay , setTextToDay] = useState('');
  const[dataOfNextDay , setDataOfNextDay] = useState('');
  const[dataOfAfterNextDay , setDataOfAfterNextDay] = useState('');




async function getApiOfCountry(e) {
  if (e.key === 'Enter' ) {
      let {data} = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=035a42ca190148c9b45175350230801&q=${NameOfCountry||'cairo'}&days=7`);
  setCurrentOfWeather(data.current);
  setLocationOfWeather(data.location);
  setIconToDay(data.current.condition.icon);
  setTextToDay(data.current.condition.text);
   setDataOfNextDay(data.forecast.forecastday[1].day);
   setDataOfAfterNextDay(data.forecast.forecastday[2].day);

  }


}

let nowDay = new Date();

function displayDay() {
  let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    if (nowDay.getDay()==6) {
        
      setDayTomorrow(days[0]);
      setDayAfterTomorrow(days[1]);      
    }else{
      setDayTomorrow(days[nowDay.getDay()+1]);
    setDayAfterTomorrow(days[nowDay.getDay()+2]);
    }
    
    
  
  setDayNow(days[nowDay.getDay()])
}
function displayMonth() {
  const month=['Jan','Feb','Mar','Apr ','May','Jun ','Jul','Aug','Sep','Oct','Nov','Dec']
  setDate(`${nowDay.getDate()}  ${month[nowDay.getMonth()]}`)
}


useEffect(()=>{
  displayDay()
  displayMonth()
},[])

  return <>

 
      <div className="input-group w-75 m-auto mt-5">
        <input type="text" id="search" onChange={e=>setNameOfCountry(e.target.value)} onKeyDown={getApiOfCountry}    className="form-control rounded bg-dark text-white" placeholder="Search" />
      </div>
      {iconToDay? <div className="container mt-5">
        <div className="row gx-2">
          <div className="col-md-4 ">
            <div className="header bg-dark d-flex justify-content-between text-white pt-3 ps-2 pe-2">
              <p>{dayNow}</p>
              <p>{date}</p>
            </div> 

            <div className="contani ps-2 pt-3 h-100">
            <div className="cont bg-danger d-flex bg-dark rounded- justify-content-between w-75 align-items-center">
            <div className="content1 text-white">
              <p id="thisCountry" className="fs-3">{locationOfWeather.name}</p>
              <p className="fs-1 ">{currentOfWeather.temp_c}<span>&#8451;</span></p>     
            </div>
              <div  className="icon">
              <img className='w-100' src={iconToDay}   alt="" />
            </div>
              </div>
              <div className="text-today m-auto ">
              <p className='text-info border border-danger  rounded-pill px-4 py-1 mt-5      fs-3'>{textToDay}</p>
             </div>
            <div className="container text-white  w-100 mt-5">
              <div className="row">
                <div className="col-4 d-flex ">
                  <div className="ico">     
                   <i className="fa-solid fa-umbrella"></i>
                  </div>
                  <div className="par">
                <p className="ps-2">{`${currentOfWeather.humidity} %`}</p>                      
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <div className="ico">     
                  <i className="fs-5 fa-solid fa-wind"></i>
                  </div>
                  <div className="par">
                  <p className="ps-2">{`${currentOfWeather.wind_kph} km/h`}</p>                      
                  </div>
                </div>
                <div className="col-4 d-flex ">
                  <div className="ico">     
                  <i className="fa-regular fa-compass"></i>
                  </div>
                  <div className="par">
                <p className="ps-2">{`${currentOfWeather.wind_dir} `}</p>                      
                  </div>
                </div>
              </div>
              </div>


            </div>
          </div>
          <div className="col-md-4">
         <div className="header bg-dark d-flex justify-content-center text-white pt-3">
              <p>{dayTomorrow}</p>
              
            </div>
            <div className="contani  ps-2 pt-3 h-100 text-white d-flex align-items-center flex-column al">
              <div className="cont2 w-75 h-75  text-center mt-4 fs-3">
              <img  src={dataOfNextDay.condition.icon} alt="" />
              <p className="fs-1 ">{dataOfNextDay.maxtemp_c}<span>&#8451;</span></p>          

              <p className="fs-4 ">{dataOfNextDay.mintemp_c}<span>&#8451;</span></p>          

              <p className='text-info fs-3'>{dataOfNextDay.condition.text}</p>
                  </div>
                </div>
              </div>
          <div className="col-md-4">
                  <div className="header bg-dark d-flex justify-content-center text-white pt-3">
                      <p>{dayAfterTomorrow}</p>
                    </div>
                    <div className="contani ps-2 pt-3 h-100 text-white d-flex align-items-center flex-column al">
                      <div className="cont2 w-75 h-75  text-center mt-4 fs-3">
                        <img src={dataOfAfterNextDay.condition.icon} alt="" />
                        <p className="fs-1 ">{dataOfAfterNextDay.maxtemp_c}<span>&#8451;</span></p>          

                        <p className="fs-4 ">{dataOfAfterNextDay.mintemp_c}<span>&#8451;</span></p>          
                      <p className='text-info fs-3' id="templ2">{dataOfAfterNextDay.condition.text}</p>
                          </div>
                        </div>
             </div>
            </div>
          </div>:
          <div className="massege"><p className='h1 text-massege'>please enter the Name of country</p>
          </div>
          }
     
    

  </>
}
