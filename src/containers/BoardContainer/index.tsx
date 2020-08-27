import React, { Component } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StickNoteComponent from 'src/components/StickyNoteComponent';
import EditTaskComponent from "src/components/EditTaskComponent";

const Container = styled.div`
    background:linear-gradient(90deg, rgba(200,150,102,1) 0%, rgba(225,179,130,1) 15%,  rgba(225,179,130,1) 85%,rgba(200,150,102,1) 100%);
    box-shadow:0 0 10px 2px #fff;
    width:80%;
    height: 60vh;
    border-radius:5px;
    overflow-y: auto;
    color:#fff;
    font-weight:bold;
    display:flex;
    flex-wrap: wrap;
`;

const Paper = styled.div`
    position: relative;
    display: inline-block;
    
    background:#fff;
    color:#000;
    width:20vw;
    padding: 2em;
    margin:1em;
    height:20vh;
`;

const Content = styled.div`
    display:flex;
    flex-direction:column;
`;

const Delete = styled.span`
    color: #dc3545;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 10px;
    &:hover {
        cursor:pointer;
      }
`;

const EditButton = styled.span`
    color: #28a745;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 10px;
    &:hover {
        cursor:pointer;
      }
`;


class BoardContainer extends Component<any, any>{

    dateString = (date: Date) => {
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }


    render() {
        let { task } = this.props;
        return <Container>
            {
                task.length > 0 && task.map((taskData: any) => <Paper key={"paper" + taskData.uuid}
                    
                >   
                    <Delete onClick={()=>console.log("delete")}>x</Delete>
                    <Content>
                        <span>Title: {taskData.text.head}</span>
                        <span>Desc:{taskData.text.body}</span>
                        <span>Due: {this.dateString(taskData.date)}</span>
                    </Content>
                    <EditButton onClick={()=>this.props.onHandleEditTask(taskData)}>edit</EditButton>
                </Paper>)
            }
        </Container>
    }
}

export default BoardContainer