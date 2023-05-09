import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

const StyledForm = styled.div`
  display: block;
  width: 600px;
  margin: 0 auto;
`;

StyledForm.Form = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  outline: solid 1px gray;
  padding: 10px;
`;

StyledForm.Input = styled(Field)`
  font-size: 20px;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

StyledForm.Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  color: #444444;
`;

StyledForm.Error = styled(ErrorMessage)`
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  color: red;
  padding-left: 20px;
`;

StyledForm.Button = styled.button`
  padding: 5px;
  font-size: 20px;
  font-weight: 700;
  width: 50%;
  margin: 0 auto;
  margin-top: 10px;
`;

export default StyledForm;
