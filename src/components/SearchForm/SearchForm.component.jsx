import styled from 'styled-components';

const StyledFilter = styled.div`
  display: block;
  width: 800px;
  margin: 20px auto;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
  background-color: #f7f7f7;
  outline: solid 1px #444444;
  padding: 10px 0px;
`;

StyledFilter.Input = styled.input`
  font-size: 20px;
  display: block;
  margin: 10px auto;
  width: 50%;
`;

StyledFilter.Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  color: #444444;
  text-align: center;
  display: block;
  margin: 0 auto;
`;

export default StyledFilter;
