import React, { useState } from 'react'
import Header from './Header';
import MainSection from './MainSection';
import Sidenav from './Sidenav';
import styled from 'styled-components';

function App() {
  const [active,setActive] = useState("INBOX")
  return (
        <Container>
    <div>
      <Header/>
      <div className="row">
        <div className='col-md-2'>
          <Sidenav change={setActive}/>
        </div>
        <div className='col-md-10'>
          <MainSection active={active}/>
        </div>
      </div>
    </div>
      </Container>
  );
}
const Container = styled.div`
`

export default App;