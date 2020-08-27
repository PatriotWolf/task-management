import React, { Component } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BoardContainer from 'src/containers/BoardContainer';
import StickNoteComponent from 'src/components/StickyNoteComponent';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:99vh;
`;
const Button = styled.button`
  background:none;
  border-color:#fff;
  border-radius:5px;
  padding:5px 10px;
  color:#fff;
`;

interface Task {
  [index: number]:{
    head:string,
    body:string,
  }
}

interface State {
  showModal?: boolean,
  text: {
    head:string,
    body:string
  },
  date:Date,
  task: Task[]
}

class HomeContainer extends Component<any, State>{
  
  state: Readonly<State> = {
    showModal: true,
    text: {
      head:"",
      body:""
    },
    date:new Date(),
    task:[]
  }

  toggleModal = (condition: boolean) => {
    this.setState({ showModal: condition })
  }
  
  taskSubmit = (isSubmitTask: boolean) => {
    let { text, task, date } = this.state;
    
    if(isSubmitTask){
      if(text.head.length && text.body.length){
        let newTask = [...task,{text:text, date}]
        this.setState({ showModal: false, text:{head:"",body:""},task:newTask })
      }
    } else{
      this.setState({ showModal: false, text:{head:"",body:""} })
    }
    
  }

  handleChangeTitle = (event: any) => {
    this.setState({ text:{...this.state.text,head:event.target.value}});
  }

  handleChangeBody = (event: any) => {
    this.setState({ text: {...this.state.text, body:event.target.value} });
  }

  setStartDate = (date:any) =>{
    this.setState({date:date})
  }

  render() {
    const { showModal, text, date, task } = this.state;
    return <Container>
      <BoardContainer task={task} />
      <Button onClick={() => this.toggleModal(true)}>
        new task
      </Button>
      {showModal && <StickNoteComponent
        text={text}
        date=""
        taskSubmit={this.taskSubmit}
        handleChangeTitle={this.handleChangeTitle}
        handleChangeBody={this.handleChangeBody}
        >
          <DatePicker selected={date} onChange={(date:any) => this.setStartDate(date)} />
        </StickNoteComponent>
      }
    </Container>
  }
}

export default HomeContainer