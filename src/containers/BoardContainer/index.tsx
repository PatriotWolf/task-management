import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
    background:linear-gradient(90deg, rgba(200,150,102,1) 0%, rgba(225,179,130,1) 15%,  rgba(225,179,130,1) 85%,rgba(200,150,102,1) 100%);
    box-shadow:0 0 10px 2px #fff;
    width:80%;
    height: 60vh;
    border-radius:5px;
    color:#fff;
    font-weight:bold;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

class BoardContainer extends Component<any,any>{
    render(){
        return <Container>
            </Container>
    }
}

export default BoardContainer