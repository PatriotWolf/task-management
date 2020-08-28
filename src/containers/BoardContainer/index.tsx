import React, { Component } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StickNoteComponent from 'src/components/StickyNoteComponent';
import EditTaskComponent from "src/components/EditTaskComponent";
import PaginationIndexer from "src/components/PaginationIndexer";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:linear-gradient(90deg, rgba(200,150,102,1) 0%, rgba(225,179,130,1) 15%,  rgba(225,179,130,1) 85%,rgba(200,150,102,1) 100%);
    box-shadow:0 0 10px 2px #fff;
    width:80%;
    height: 60vh;
    border-radius:5px;
    color:#fff;
    
`;

const Paper = styled.div`
    position: relative;
    display: inline-block;
    background:#fff;
    color:#000;
    overflow-y:auto;
    width:200px;
    padding: 1em 2em;
    margin:1em;
    height:20vh;
`;

const PaperContent = styled.div`
    display: flex;
    flex-direction:column;
`;

const PaperTitle = styled.span`
    font-weight:bold;
    display:contents;
`;

const Content = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    overflow-y: auto;
    width:85%;
    height:100%;
    ::-webkit-scrollbar {
        width: 5px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #fff; 
        border-radius: 10px;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #b30000; 
      }
`;

const Delete = styled.span`
    color: #dc3545;
    font-weight: bold;
    position: absolute;
    top: 0;
    right: 10px;
    &:hover {
        cursor:pointer;
        font-size:1.2em;
      }
`;

const EditButton = styled.span`
    color: #28a745;
    font-weight: bold;
    position: absolute;
    bottom: 10px;
    right: 10px;
    &:hover {
        cursor:pointer;
        text-decoration: underline;
      }
`;


class BoardContainer extends Component<any, any>{
    state = {
        activePage:1
    }

    dateString = (date: Date) => {
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }

    onLoadPage = (pageNumber:number) =>{
        this.setState({activePage:pageNumber})
    }

    render() {
        let { task } = this.props;
        let { activePage } = this.state
        const offset = (activePage - 1) * 10;
        let shown = task.slice(offset, offset + 10)
        let isPaginate = task.length > 10;
        return <><Container>
            <Content>
            {
                shown.length > 0 && shown.map((taskData: any) => <Paper key={"paper" + taskData.uuid}
                    
                >   
                    <Delete onClick={()=>this.props.onDeleteTask(taskData.uuid)}>x</Delete>
                    <PaperContent>
                        <PaperTitle>Title:</PaperTitle> {taskData.text.head} <br/>
                        <PaperTitle>Desc:</PaperTitle><br/>{taskData.text.body} <br/>
                        <PaperTitle>Due:</PaperTitle> {this.dateString(taskData.date)}
                    </PaperContent>
                    <EditButton onClick={()=>this.props.onHandleEditTask(taskData)}>Edit</EditButton>
                </Paper>)
            }
            </Content>
            {isPaginate && <PaginationIndexer
            activePage={activePage}
            totalItem={task.length/10}
            onLoadPage={this.onLoadPage}
        />}
        </Container>
       </>
    }
}

export default BoardContainer