import styled from "styled-components";

export const Wrapper = styled.form`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:space-between;
  padding:0.25em;

  input {
    border: 1px solid rgb(100,100,100);
    border-radius: 0.5em;
    font-size: 1em;
    width:100%;
    padding: 0.5em;
    height: 2.5em;
    font-weight: 500;

    &:focus {
      outline: 0;
      box-shadow: inset 0 0.2em 0.5em rgba(0,150,180,0.3);
    }
  }

  button {
    background-color: rgb(50,150,180);
    color: white;
    font-size: 1em;
    font-weight: 600;
    padding:0.65em 1em;
    margin: 0 0.5em;
    border-radius: 0.5em;

    &:hover {
      background-color: rgb(0,200,250);
      box-shadow: 0 0.2em 0.5em rgba(150,150,150, 0.5);
    }
  }
`