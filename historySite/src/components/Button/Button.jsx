import style from "./Button.module.scss";

export function Button({ action, theme, children, buttonStyling }) {
  return (
    <button
      onClick={action}
      className={`${style[buttonStyling]} ${style[theme]}`}
    >
      {" "}
      {children}
    </button>
  );
}
