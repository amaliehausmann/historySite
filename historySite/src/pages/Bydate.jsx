import { PageTitle } from "../components/PageTitle/PageTitle";
import { Header } from "../components/Header/Header";
import { NavBar } from "../components/NavBar/NavBar";
import { useQuery } from "@tanstack/react-query";
import { ThemeContext } from "../Context/ThemeContext";
import { Button } from "../components/Button/Button";
import { useContext } from "react";

export function Bydate() {
  const { changeTheme, isLightMode } = useContext(ThemeContext);
  const url =
    "https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/09/18";

  const { isPending, error, data } = useQuery({
    queryKey: ["historyByDate"],
    queryFn: () => fetch(url).then((res) => res.json()),
    staleTime: 1000 * 600,
  });

  console.log(data);

  if (isPending) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error!!!</p>
      </div>
    );
  }

  return (
    <div>
      <PageTitle pageTitle="By Date"></PageTitle>
      <Header
        title="ON:"
        withDate={true}
        underTitle="What happened on this day - Here you can enter a specific date to get only events that happened on this date"
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
