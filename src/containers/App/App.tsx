import React from 'react';
import styled from 'styled-components';

import HomeContainer from "src/containers/Home";

const Container = styled.div`
  background:linear-gradient(90deg, rgba(18,52,59,1) 0%, rgba(45,84,94,1) 10%, rgba(45,84,94,1) 90%,rgba(18,52,59,1) 100%);
  witdh:100%;
  height:100vh;
  font-size:20px;
`;

const Star = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${() => starGenerate(14000)};
`;

const starGenerate = (total: number) => {
  let value = `${Math.floor((Math.random() * 2000) + 1)}px ${Math.floor((Math.random() * 4000) + 1)}px #FFF,`;
  for (let i = 0; i < total; i++) {
    value = value + `${Math.floor((Math.random() * 4000) + 1)}px ${Math.floor((Math.random() * 4000) + 1)}px #FFF ${(i !== (total - 1)) ? "," : ""}`
  }
  return value
}

function App (){
    return (
      <Container>
        <Star />
        <HomeContainer/>
      </Container>
    );
}

export default App;
