import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid rgb(100, 100, 100);
  border-radius: 0.35em;
  padding: 1%;
  margin: 0.5em calc(10% / 6);
  width: 30%;
  height: auto;
`;

export const WrapperTitle = styled.h2`
  font-size: 1.2em;
  font-weight: 700;
  margin: 0.5em 0;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;

  h4 {
    font-size: 1em;
    font-weight: 500;
  }

  a {
    padding: 0;
    margin: 0 0.1em;
    font-size:0.9em;
    font-weight: 500;
    color: rgb(0,150,180);
  }

  a:hover {
    color: rgb(0,200,250);
  }
`;
