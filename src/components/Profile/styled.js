import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfosUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  width: auto;
  margin: 1rem 0 0 0.5rem;
  height: 12.5rem;

  h1 {
    font-size: 1.8em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.1em;
    font-weight: bold;
  }

  h4 {
    font-size: 1em;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 0.5rem;
    text-align: center;
  }

  div span {
    color:rgb(50,50,50);
    font-weight: 400;
  }
`;

export const WrapperUsername = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 1em;

  h3 {
    margin-right: 0.5rem;
  }

  a {
    font-size: 1em;
    color: rgb(0, 150, 180);
    font-weight: bold;
  }

  a:hover {
    color: rgb(0,200,250);
  }
`;

export const WrapperOtherInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  h3 {
    font-size: 1em;
    margin-right: 0.5rem;
  }

  span {
    font-size: 1em;
    color: rgb(50, 50, 50);
    font-weight: 400;
  }

  a {
    font-size: 1em;
    color: rgb(0, 150, 180);
    font-weight: bold;
  }

  a:hover {
    color: rgb(0,200,250);
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 12rem;
  margin: 0.5rem;
  margin-top: 1rem;
`;
