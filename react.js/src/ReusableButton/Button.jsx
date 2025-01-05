import PropTypes from "prop-types";

const Button = ({ label, onClick, variant = "primary", disabled = false }) => {
  // Define styles for different button variants
  const buttonStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  // Select the style based on the `variant` prop
  const selectedStyle = buttonStyles[variant] || buttonStyles.primary;

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${selectedStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Define PropTypes for the Button component
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  disabled: PropTypes.bool,
};

export default Button;
