import React from "react";
import { func, string } from "prop-types";

const Toggle = ({ theme, toggleTheme }) => <button onClick={toggleTheme}>{theme}</button>;

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
