import PropTypes from 'prop-types';
import StyledFilter from './SearchForm.component';

export const SearchForm = ({ onFilterChange }) => {
  return (
    <StyledFilter>
      <StyledFilter.Label>
        Filter by Names:
        <StyledFilter.Input type="text" name="find" onChange={onFilterChange} />
      </StyledFilter.Label>
    </StyledFilter>
  );
};

SearchForm.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
