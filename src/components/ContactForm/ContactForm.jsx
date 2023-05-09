import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import StyledForm from './ContactForm.component';

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
    .required(),
  number: yup
    .string()
    .matches(
      phoneRegExp,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
            <StyledForm.Input type="text" name="name" />
            <ErrorMessage name="name" />
          </StyledForm.Label>
          <StyledForm.Label>
            Phone Number:
            <StyledForm.Input type="tel" name="number" />
            <ErrorMessage name="number" />
          </StyledForm.Label>
          <button type="submit">Add Contact</button>
        </StyledForm.Form>
      </Formik>
    </StyledForm>
  );
};
