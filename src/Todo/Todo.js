import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import Header from './Header';
import MainSection from './MainSection';
import Sidenav from './Sidenav';
import styled from 'styled-components';


function App(props) {
  const navigate = useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }
  const [active,setActive] = useState("INBOX")
  return (
    <Container>
    <div>
      
      {props.name ? (<div>
        
        <Header  name={props.name}/>

        <div>
        </div> 
      <div className="row">
        <div className='col-md-2'>
          <Sidenav change={setActive}/>
        </div>
        <div className='col-md-10'>
          <MainSection active={active}/>
        </div>
        <ButtonClick>
        <button onClick={handleSignOut}>SignOut</button>
        </ButtonClick>
      </div>
      
    
      </div>):"Login Please"}

     
    </div>
    </Container>
  );
}

const Container = styled.div`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%);
height:40vh;
width:530px;
margin:auto;
color:white;
padding:20px;
margin-top:200px;

`
const ButtonClick = styled.button`
width:100px;
background-color:black;
padding:10px;
position:relative;
left:40px;
`
export default App;