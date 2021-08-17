import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Time = styled.h1`

`

const Timezone = styled.span`
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: var(--fw-regular);
    letter-spacing: 1.5px;

    @media screen and (min-width: 768px){
        font-size: 2rem;
        line-height: 1.75rem;
    }

    @media screen and (min-width: 1440px){
        font-size: 2.5rem;
        line-height: 1.75rem;
    }
`

export default function Clock({currentDate, setGreeting, getGreeting}) {
    const [minutes, setMinutes] = useState()
    const [hours, setHours] = useState()

    /**
     * add 1s and update the minutes/hours accordingly.
     */
    function udpateTime(){
        if(minutes + 1 === 60)
            setHours((hours + 1) % 24)
        setMinutes((minutes + 1) % 60)
    }

    /**
     * @param {*} minutes
     * @returns a string with a length equals to 2. interval [00 - 59].
     */
    function minutesFormat(minutes){
        return minutes < 10 ? "0" + minutes : minutes + ""
    }

    useEffect(() => {
        if(currentDate && (!hours && !minutes)){
          setHours(currentDate.hours)
          setMinutes(currentDate.minutes)
        }

        setGreeting(getGreeting(hours))
      }, [hours])

    return (
        <Time>
            {currentDate
                ? hours + ":" + minutesFormat(minutes)
                : null
            } <Timezone>{currentDate? currentDate.timezone : null}</Timezone>
        </Time>
    )
}
