import style from "./TimelineWrapper.module.scss";

export function TimelineWrapper({ theme, children }) {
  return <div className={`${style.wrapperStyling} ${style[theme]}`}>
    <div className={style.topBox}></div>
    {children}</div>;
}
