import React, { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles"
import QuoteWidget from "./components/QuoteWidget"
import TimeWidget from "./components/TimeWidget"
import { getTimeFromIPAddress } from "./API/WorldTimeAPI"
import { getLocalisationFromAPI } from './API/IPGeolocalisationAPI'
import styled from "styled-components"
import bgDayMobile from "./assets/mobile/bg-image-daytime.jpg"
import bgDayTablet from "./assets/tablet/bg-image-daytime.jpg"
import bgDayDesktop from "./assets/desktop/bg-image-daytime.jpg"
import bgNightMobile from "./assets/mobile/bg-image-nighttime.jpg"
import bgNightTablet from "./assets/tablet/bg-image-nighttime.jpg"
import bgNightDesktop from "./assets/desktop/bg-image-nighttime.jpg"

function App() {
  const [dayOrNight, setDayOrNight] = useState('night')     //adjust the interface to day or night mode
  const [detailActive, setDetailActive] = useState(false)   //toggle the TimeDetail block
  const [localisation, setLocalisation] = useState()
  const [currentDate, setCurrentDate] = useState()

  useEffect(() => {
    if(!currentDate){
      if(!localisation){
        setLocalisation(getLocalisationFromAPI()
                          .then(data => {
                            setLocalisation({
                              city: data.city,
                              country: data.country_code,
                              timezone: data.time_zone,
                              backupCity: data.time_zone.split('/')[1],
                            })
                          }).catch(error => console.error(error)))
    }

      getTimeFromIPAddress()
              .then(data => setCurrentDate({
                            timezone: data.abbreviation,
                            dayOfWeek: data.day_of_week,
                            dayOfYear: data.day_of_year,
                            weekNb: data.week_number,
                            hours: new Date(data.datetime).getHours(),
                            minutes: new Date(data.datetime).getMinutes()
                          }))
              .catch(error => "error")
    }
  }, [])

  const App = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: ${dayOrNight? `url(${bgDayMobile})` : `url(${bgNightMobile})`};

    @media screen and (min-width: 768px){
      background-image: ${dayOrNight? `url(${bgDayTablet})` : `url(${bgNightTablet})`};
    }

    @media screen and (min-width: 1440px){
      background-image: ${dayOrNight? `url(${bgDayDesktop})` : `url(${bgNightDesktop})`};
    }
  `

  const Dashboard = styled.main`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    flex-direction: column;
    justify-content: ${detailActive ? 'flex-end' : 'space-between'};
    align-items: flex-start;
  `

  return (
    <React.Fragment>
      <GlobalStyles />
      <App className="App">
        <Dashboard>
          <QuoteWidget />
          <TimeWidget
            detailActive={detailActive}
            setDetailActive={setDetailActive}
            dayOrNight={dayOrNight}
            currentDate={currentDate}
            localisation={localisation}/>
        </Dashboard>
      </App>
    </React.Fragment>
  );
}

export default App;
