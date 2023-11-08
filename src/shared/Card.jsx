import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // CSS-Class condition   return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff", // Properties Condition
        color: reverse ? "#fff" : "#000", // Properties Condition
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
