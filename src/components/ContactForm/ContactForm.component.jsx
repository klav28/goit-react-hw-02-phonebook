import styled from 'styled-components';
import { Field, Form } from 'formik';

const StyledForm = styled.div`
  display: block;
  width: 600px;
  margin: 0 auto;
`;

StyledForm.Form = styled(Form)`
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
  padding: 10px;
`;

StyledForm.Input = styled(Field)`
  font-size: 20px;
  display: block;
  margin-top: 10px;
  width: 100%;
`;

StyledForm.Label = styled.label`
  font-size: 20px;
  color: #444444;
  margin-top: 10px;
`;

export default StyledForm;
