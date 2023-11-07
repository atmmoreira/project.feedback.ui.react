import PropTypes from 'prop-types';

function Header({ title, bgColor, colorText }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: colorText
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  colorText: '#ff6a95'
}

Header.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  colorText: PropTypes.string
}

export default Header;
