import { Formik } from 'formik';
import * as yup from 'yup';
import StyledForm from './ContactForm.component';
import PropTypes from 'prop-types';

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const nameRegExp = "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegExp,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is Required field'),
  number: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes'
    )
    .required('Number is Required field'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onContactAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    onContactAdd(values);
    resetForm();
  };

  return (
    <StyledForm>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <StyledForm.Form>
          <StyledForm.Label>
            Contact Name:
            <StyledForm.Error name="name" component="span" />
            <StyledForm.Input type="text" name="name" />
          </StyledForm.Label>
          <StyledForm.Label>
            Phone Number:
            <StyledForm.Error name="number" component="span" />
            <StyledForm.Input type="tel" name="number" />
          </StyledForm.Label>
          <StyledForm.Button type="submit">Add Contact</StyledForm.Button>
        </StyledForm.Form>
      </Formik>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onContactAdd: PropTypes.func.isRequired,
};
