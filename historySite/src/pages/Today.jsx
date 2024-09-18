import { PageTitle } from "../components/PageTitle/PageTitle";
import { Header } from "../components/Header/Header";
import { NavBar } from "../components/NavBar/NavBar";
import { ThemeContext } from "../Context/ThemeContext";
import { Button } from "../components/Button/Button";
import { useContext } from "react";

export function Today() {
  const { changeTheme, isLightMode } = useContext(ThemeContext);

  return (
    <div>
      <PageTitle pageTitle="Today"></PageTitle>
      <Header
        title="ON THIS DAY"
        underTitle="What happened on this day - historical events, deaths and births thoughout time"
        theme={isLightMode ? "light" : ""}
      ></Header>
      <NavBar theme={isLightMode ? "light" : ""}></NavBar>
      <Button
        action={() => changeTheme()}
        theme={isLightMode ? "light" : ""}
      ></Button>
    </div>
  );
}
