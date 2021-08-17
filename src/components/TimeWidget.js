import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Clock from './Clock'
import moon from "../assets/desktop/icon-moon.svg"
import sun from "../assets/desktop/icon-sun.svg"

const GREETINGS = ["MORNING", "AFTERNOON", "EVENING"]

const Wrapper = styled.section`
    margin-bottom: 2.5rem;
    padding: var(--widget-padding);
`
const Content = styled.div`
    color: var(--white);
    margin-bottom: 3rem;

    @media screen and (min-width: 768px){
        margin-bottom: 4rem;
    }

    @media screen and (min-width: 1440px){
        margin-bottom: 0;
    }
`
const Localisation = styled.h2`
    text-transform: uppercase;
`

const Text = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 3px;

    @media screen and (min-width: 768px){
        font-size: 1.125rem;
        letter-spacing: 3.6px;
    }

    @media screen and (min-width: 1440px){
        font-size: 1.25rem;
        letter-spacing: 4px;
    }
`

const MoonSunIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
`

export default function TimeWidget({dayOrNight, detailActive, setDetailActive, currentDate, localisation}) {
    const [greeting, setGreeting] = useState()

    /**
     * 
     * @param {*} hours 
     * @return the appropriate greeting message in function of the current time.
     */
    function getGreeting(hours){
        if(hours >= 5 && hours <= 12)
          return GREETINGS[0]
        else
          return (hours >= 13 && hours <= 18) ? GREETINGS[1] : GREETINGS[2]
    }

    useEffect(() => {}, [dayOrNight])
    
    return (
        <Wrapper>
            <Content>
                <MoonSunIcon src={dayOrNight === 'day'? sun : moon} alt=""/>
                <Text>
                    GOOD {greeting}<span className="optional">, IT'S CURRENTLY</span>
                </Text>
                <Clock
                    currentDate={currentDate}
                    getGreeting={getGreeting}
                    setGreeting={setGreeting}/>
                <Localisation>
                    {localisation
                        ? "IN " + (localisation.city !== ""?  localisation.city : localisation.backupCity) + ", " + localisation.country
                        : null
                    }
                </Localisation>
            </Content>
        </Wrapper>
    )
}
