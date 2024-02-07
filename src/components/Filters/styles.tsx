import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid red;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 10px;

  label {
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 5px;
  }
`;

export const Table = styled.table`
  border: 1px solid black;
  margin: 20px;

  tr,
  td,
  th,
  table {
    border: 1px solid black;
  }
`;
