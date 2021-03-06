import React, { Component } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BoardContainer from 'src/containers/BoardContainer';
import StickNoteComponent from 'src/components/StickyNoteComponent';
import { create_UUID } from "src/util/creatUUID";
import { generateTaskArr } from "src/util/taskArrayGenerator";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:99vh;
`;

const ButtonSegment = styled.div`
  display:flex;
  width:80%;
  justify-content: space-between;
  margin-bottom:10px;
  font-weight:bold;
  font-size:2.5em;
  color:#fff;
`;

const Button = styled.button`
  background:none;
  border-color:#fff;
  border-radius:5px;
  padding:5px 10px;
  font-weight:bold;
  font-size:0.8em;
  color:#fff;
  &:hover {
    cursor:pointer;
    box-shadow:0px 0px 10px #fff;
  }
`;

interface Task {

  text: {
    head: string,
    body: string,
  },
  date: Date,
  uuid: string

}

interface State {
  showModal?: boolean,
  text: {
    head: string,
    body: string
  },
  currTaskId: string | null,
  isTaskUpdate: boolean,
  date: Date,
  task: Task[]
}

class HomeContainer extends Component<any, State>{

  state: Readonly<State> = {
    showModal: false,
    text: {
      head: "",
      body: ""
    },
    currTaskId: null,
    date: new Date(),
    isTaskUpdate: false,
    task: []
  }

  toggleModal = (condition: boolean) => {
    this.setState({ showModal: condition })
  }

  taskSubmit = (isSubmitTask: boolean) => {
    let { text, task, date, isTaskUpdate, currTaskId } = this.state;

    if (isSubmitTask) {
      if (text.head.length && text.body.length) {
        if (!isTaskUpdate) {
          let newTask = [{ text: text, date, uuid: create_UUID() }, ...task]
          this.setState({ showModal: false, text: { head: "", body: "" }, task: newTask })
        } else {
          console.log(currTaskId)
          let foundIndex = task.findIndex((o: any) => o.uuid === currTaskId)
          task[foundIndex] = { text: text, date, uuid: create_UUID() };
          console.log(task)
          this.setState({ showModal: false, isTaskUpdate: false, text: { head: "", body: "" }, task: task })

        }

      }
    } else {
      this.setState({ showModal: false, text: { head: "", body: "" } })
    }

  }

  handleChangeTitle = (event: any) => {
    this.setState({ text: { ...this.state.text, head: event.target.value } });
  }

  handleChangeBody = (event: any) => {
    this.setState({ text: { ...this.state.text, body: event.target.value } });
  }

  setStartDate = (date: any) => {
    this.setState({ date: date })
  }

  onHandleEditTask = (task: any) => {
    console.log(task)
    this.setState({
      showModal: true,
      isTaskUpdate: true,
      text: task.text,
      currTaskId: task.uuid,
      date: task.date,
    })
  }

  generateTask = () => {
    this.setState({ task: generateTaskArr() })
  }
  onDeleteTask = (uuid: string) => {
    const newArray = this.state.task.filter(obj => obj.uuid != uuid);
    this.setState({ task: newArray })

  }
  render() {
    const { showModal, text, date, task, isTaskUpdate } = this.state;
    return <Container>
      <ButtonSegment>
        <Button onClick={() => this.toggleModal(true)}>
          New Task
      </Button>
      My Task
      <Button onClick={() => this.generateTask()}>
          Generate Stack
      </Button>
      </ButtonSegment>
      <BoardContainer task={task} onHandleEditTask={this.onHandleEditTask} onDeleteTask={this.onDeleteTask} />

      {showModal && <StickNoteComponent
        text={text}
        date=""
        isTaskUpdate={isTaskUpdate}
        taskSubmit={this.taskSubmit}
        handleChangeTitle={this.handleChangeTitle}
        handleChangeBody={this.handleChangeBody}
      >
        <DatePicker selected={date} onChange={(date: any) => this.setStartDate(date)} />
      </StickNoteComponent>
      }
    </Container>
  }
}

export default HomeContainer