import styled from 'styled-components';

const StyledList = styled.div`
  display: block;
  width: 800px;
  margin: 0 auto;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
  background-color: #f7f7f7;
  outline: solid 1px #444444;
`;

StyledList.Table = styled.table`
  width: 100%;
`;

StyledList.Td = styled.td`
  text-align: center;
  padding: 4px;
`;

StyledList.Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: #e7e7e7;
  }
  &:hover {
    background-color: #aaa;
  }
`;

StyledList.Th = styled.th`
  background-color: #222222;
  color: white;
  padding: 4px;
`;

StyledList.Btn = styled.button`
  background-color: #8d0f0f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  padding: 3px;
  width: 20px;
`;

export default StyledList;
