import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getRandomQuote } from "../API/QuotableAPI"

export default function QuoteWidget() {
    const Wrapper = styled.section`
        padding: var(--widget-padding);
    `

    const Content = styled.article`
        color: var(--white);
    `

    const RefreshBtn = styled.button`
    
    `

    const [quote, setQuote] = useState()

    function newRandomQuote(){
        getRandomQuote()
        .then(data => setQuote(data))
        .catch(error => console.error(error))
      }

    const onClickRefreshQuote = () => newRandomQuote()
    

    useEffect(() => newRandomQuote(), [])

    return (
        <Wrapper>
           {quote
           ?    (<Content>
                    <p>{quote.content}</p>
                    <em>{quote.author}</em>
                </Content>)
            : null}
            <RefreshBtn
                onClick={() => onClickRefreshQuote()}/>
        </Wrapper>
    )
}
