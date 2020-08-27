import React from "react";

import styled from "styled-components";

const Input = styled.textarea`
    display: block;
    width: 100%;
    box-sizing:border-box;
    padding: .375rem .75rem;
    resize: none;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

function TextAreaComponent (props:any) {
    return  <Input
    rows={5}
    placeholder="Hover to focus!"
    value={props.text}
    onChange={props.handleChange}
  />
}

export default TextAreaComponent