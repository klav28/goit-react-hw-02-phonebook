import PropTypes from 'prop-types';
import StyledList from './ContactList.component';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledList>
      <h2>Contacts</h2>
      <StyledList.Table>
        <thead>
          <tr>
            <StyledList.Th>Name</StyledList.Th>
            <StyledList.Th>Phone Number</StyledList.Th>
            <StyledList.Th>Delete</StyledList.Th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(el => (
            <StyledList.Tr key={el.id}>
              <StyledList.Td>{el.name}</StyledList.Td>
              <StyledList.Td>{el.number}</StyledList.Td>
              <StyledList.Td>
                <StyledList.Btn onClick={onDeleteContact} id={el.id}>
                  X
                </StyledList.Btn>
              </StyledList.Td>
            </StyledList.Tr>
          ))}
        </tbody>
      </StyledList.Table>
    </StyledList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
