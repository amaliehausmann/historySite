import { PageTitle } from "../components/PageTitle/PageTitle";
import { Header } from "../components/Header/Header";
import { NavBar } from "../components/NavBar/NavBar";
import { ThemeContext } from "../Context/ThemeContext";
import { Button } from "../components/Button/Button";
import { useContext } from "react";

export function Since() {
  const { changeTheme, isLightMode } = useContext(ThemeContext);
  return (
    <div>
      <PageTitle pageTitle="Since"></PageTitle>
      <Header
        title="SINCE:"
        withYear={true}
        underTitle="What happened on this day - Here you can enter a specific year to get only events for that year"
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
