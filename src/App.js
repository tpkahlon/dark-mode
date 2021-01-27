import React from "react";
import { useDarkMode } from "./common/useDarkMode";
import { lightTheme } from "./styles/lightTheme.module.scss";
import { darkTheme } from "./styles/darkTheme.module.scss";
import Toggle from "./components/Toggle";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  if (theme === "dark") {
    document.body.classList.add(darkTheme, "dark");
    document.body.classList.remove(lightTheme, "light");
  }

  if (theme === "light") {
    document.body.classList.add(lightTheme, "light");
    document.body.classList.remove(darkTheme, "dark");
  }

  if (!componentMounted) {
    return <div />;
  }

  return (
    <>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <h1>It's a {theme === "light" ? "light theme" : "dark theme"}!</h1>
      <p>Read the CSS-Tricks article, get a high-level overview of what's going on. Once you feel ready, clone the repository and have fun.</p>
      <p>This is a sample on how to implement modern dark mode feature in projects that have dependency of Sass.</p>
      <p>This example use a demonstration provided by CSS-Tricks as a base and showcase a custom implementation of dark mode that fits in with Sass ecosystem.</p>
      <p>In order to differentiate between two set of variables in Sass, Dark mode specific variables always end with an underscore to keep consistency.</p>
      <p>There is an additional class that hooks on body tag. Use it to target any descendent selector, in case needed.</p>
      <p>This project uses <strong>create-react-app</strong> as a base template.</p>
    </>
  );
}

export default App;
