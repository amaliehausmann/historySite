import style from "./Header.module.scss";
import { Circle } from "../Circle/Circle";
import { useEffect, useState } from "react";

export function Header({
  title = "header mangler",
  underTitle = "Undertitle mangler",
  withDate,
  theme,
  setDay,
  setMonth,
}) {
  // usestates
  const [currentDay, setCurrentDay] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");

  //   useeffect som kører når setDay eller setMonth opdateres
  useEffect(() => {
    const today = new Date();
    const paddedDay = String(today.getDate()).padStart(2, "0");
    const paddedMonth = String(today.getMonth() + 1).padStart(2, "0");
    setCurrentDay(paddedDay);
    setCurrentMonth(paddedMonth);
    setDay(paddedDay);
    setMonth(paddedMonth);
  }, [setDay, setMonth]);

  //   Sørger for at man kun kan skrive tal i inputfeltet + at inputtet bliver settet som currentDay
  const handleDayChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,2}$/.test(value)) {
      setCurrentDay(value);
    }
  };

  //   Sørger for at man kun kan skrive tal i inputfeltet + at inputtet bliver settet som currentMonth
  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,2}$/.test(value)) {
      setCurrentMonth(value);
    }
  };

  //   Sørger for at setDay bliver padded når inputtet er ude af fokus
  const handleDayBlur = () => {
    const paddedDay = String(currentDay).padStart(2, "0");
    setCurrentDay(paddedDay);
    setDay(paddedDay);
  };

  //   Sørger for at setMonth bliver padded når inputtet er ude af fokus
  const handleMonthBlur = () => {
    const paddedMonth = String(currentMonth).padStart(2, "0");
    setCurrentMonth(paddedMonth);
    setMonth(paddedMonth);
  };

  return (
    <header className={`${style.headerStyling} ${style[theme]}`}>
      <div className={style.triangleLeft}></div>
      <div className={style.triangleRight}></div>
      <div className={style.headerBox}>
        <div className={style.heading}>
          <h1>{title}</h1>
          {withDate && (
            <div className={style.dateStyle}>
              <input
                type="text"
                value={currentDay}
                placeholder={currentDay}
                maxLength={2}
                onChange={handleDayChange}
                onBlur={handleDayBlur}
              />
              <p>/</p>
              <input
                type="text"
                value={currentMonth}
                placeholder={currentMonth}
                maxLength={2}
                onChange={handleMonthChange}
                onBlur={handleMonthBlur}
              />
            </div>
          )}
        </div>
        <h2>{underTitle}</h2>
        <Circle placement="topLeft" size="headerSize" />
        <Circle placement="topRight" size="headerSize" />
        <Circle placement="bottomRight" size="headerSize" />
        <Circle placement="bottomLeft" size="headerSize" />
      </div>
    </header>
  );
}
