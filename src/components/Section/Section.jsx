import PropTypes from 'prop-types';
import Box from 'components/Box';

function Section({ title, children }) {
  return (
    <Box ml={30}>
      <h2>{title}</h2>
      {children}
    </Box>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
