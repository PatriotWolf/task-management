import React from 'react';
import styled from "styled-components";

import InputComponent from "src/components/FormComponents/Input";
import TextAreaComponent from '../FormComponents/TextAreaComponent';

const Container = styled.div`
    position:absolute;
    background: #fff;
    box-shadow:0 0 30px 5px #dadada;
    width:30em;
    height: 40vh;
    border: 2px solid #c7c7c7;
    border-radius:5px;
    font-weight:bold;
    padding:0 2em;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const Head = styled.div`
    display:flex;
    
    flex-direction:column;
    justify-content:space-around;
    padding: 1em 0;
    
    flex-grow:1;
`;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    padding: 0em 0em;
    color:#000;
    flex-grow:10;
`;


const Button = styled.button<any>`
  background:${(props:any)=>props.isPrimary? "#28a745":"#dc3545"};
  border:0;
  width:45%;
  color:#fff;
  font-weight:bold;
  box-shadow:0;
  border-radius:1px;
  padding:20px 10px;
`;
const ButtonSegment = styled.div`
    display:flex;
    justify-content:space-around;
    margin: 10px 0;
`;


function StickNoteComponent(props: any) {
    
    return (
        <Container>
            <Head>
                Title
                <InputComponent text={props.text.head} handleChange={props.handleChangeTitle} />
            </Head>
            <Body>
                Body
                <TextAreaComponent text={props.text.body} handleChange={props.handleChangeBody} />
            </Body>
            <Body>
            Due Date: {props.children}
            </Body>
            
            <ButtonSegment>
            <Button isPrimary={true} onClick={() => props.taskSubmit(true)}>
                { props.isTaskUpdate ? "Update":"Add"}
            </Button>
            <Button isPrimary={false} onClick={() => props.taskSubmit(false)}>
                Close
            </Button>
            </ButtonSegment>
        </Container>
    );
}

export default StickNoteComponent;
