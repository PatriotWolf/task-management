import React, { Component } from "react";
import styled from "styled-components";

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
class HomeContainer extends Component<any, any>{
  state = {
    showModal: true,
    text: {
      head:"",
      body:""
    }
  }

  toggleModal = (condition: boolean) => {
    this.setState({ showModal: condition })
  }
  
  taskSubmit = (isSubmitTask: boolean) => {
    if(isSubmitTask){

    } else{
      
    }
    this.setState({ showModal: false })
  }

  handleChangeTitle = (event: any) => {
    this.setState({ text:{...this.state.text,head:event.target.value}});
  }

  handleChangeBody = (event: any) => {
    this.setState({ text: {...this.state.text, body:event.target.value} });
  }

  render() {
    const { showModal, text } = this.state;
    return <Container>

      <BoardContainer />
      <Button onClick={() => this.toggleModal(true)}>
        new task
          </Button>
      {showModal && <StickNoteComponent
        text={text}
        taskSubmit={this.taskSubmit}
        handleChangeTitle={this.handleChangeTitle}
        handleChangeBody={this.handleChangeBody}
        />
      }
    </Container>
  }
}

export default HomeContainer