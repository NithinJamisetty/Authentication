import React from 'react'
import styled from 'styled-components'

export default function Sidenav(props) {
  return (
    <Container>
    <ul>
        <li onClick={()=>{props.change("INBOX")}}>
            <div>Inbox</div>
        </li>
        <li onClick={()=>{props.change("TODAY")}}>
            <div>Today</div>
        </li>
        <li onClick={()=>{props.change("NEXT")}}>
            <div>Next 7 Days</div>
        </li>
        
    </ul>
    </Container>
  )
}

const Container = styled.div`
`