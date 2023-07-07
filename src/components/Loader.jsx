import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillLock } from 'react-icons/ai';
import styled from 'styled-components';


const Loader = () => {
  return (
    <DIV>
      <BOX>
      <BsWhatsapp style={{color: "#bec7cb", fontSize: '50px', marginBottom: '25px'}} />
      <DIV_LINE></DIV_LINE>
      <p style={{fontSize:'14px',color: "#4a4e50"}}>Whatsapp</p>
      <P><AiFillLock style={{fontSize: '15px'}} /><P2>End-to-End encrypted</P2></P>
      </BOX>
    </DIV>
  )
}

export default Loader;

const DIV = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    backgroundColor: '#e6ebee'
    
})
const BOX = styled.div({
    padding: '20px 170px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
})

const DIV_LINE = styled.div({
    height: "2px",
    width: '250%',
    backgroundColor: '#cdd1d3',
    marginBottom: '20px'
})

const P = styled.div({
    display: "Flex",
    alignItems: 'center',
    gap: '10px',
})

const P2 = styled.p({
    color: "#63676a",
    fontSize: '12px'
})



