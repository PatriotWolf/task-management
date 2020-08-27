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

`;

const Paper = styled.div`
    display:flex;
    flex-direction:column;
    background:#fff;
    color:#000;
    padding: 2em;
    margin:1em;
    height:20vh;
`;

class BoardContainer extends Component<any, any>{
    dateString = (date: Date) => {
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        return mm+'/'+dd+'/'+yyyy;
    }
    render() {
        let { task } = this.props
        return <Container>
            {
                task.length > 0 && task.map((taskData: any, index: number) => <Paper key={"paper" + index}>
                    <span>Title: {taskData.text.head}</span>
                    <span>Desc:{taskData.text.head}</span>
                    <span>Due: {this.dateString(taskData.date)}</span>
                </Paper>)
            }
        </Container>
    }
}

export default BoardContainer