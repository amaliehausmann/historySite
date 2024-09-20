import { PageTitle } from "../components/PageTitle/PageTitle";
import { Header } from "../components/Header/Header";
import { NavBar } from "../components/NavBar/NavBar";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { TimelineWrapper } from "../components/TimelineWrapper/TimelineWrapper";
import { Timeline } from "../components/Timeline/Timeline";

export function Today() {
  const { changeTheme, isLightMode } = useContext(ThemeContext);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const today = new Date();
  const thisDate = String(today.getDate()).padStart(2, "0");
  const thisMonth = String(today.getMonth() + 1).padStart(2, "0");

  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${thisMonth}/${thisDate}`;

  const { data } = useQuery({
    queryKey: ["historyToday", thisMonth, thisDate],
    queryFn: () => fetch(url).then((res) => res.json()),
    staleTime: 1000 * 600,
  });

  //   Sørger for at events altid er et array
  const events = data && data.events ? data.events : [];

  return (
    <div>
      <PageTitle pageTitle="Today"></PageTitle>
      <Header
        setDay={setDay}
        setMonth={setMonth}
        title="ON THIS DAY"
        underTitle="What happened on this day - historical events, deaths and births thoughout time"
        theme={isLightMode ? "light" : ""}
      ></Header>
      <NavBar theme={isLightMode ? "light" : ""}></NavBar>
      <TimelineWrapper theme={isLightMode ? "light" : ""}>
        <Timeline
          events={events}
          action={() => changeTheme()}
          theme={isLightMode ? "light" : ""}
        ></Timeline>
      </TimelineWrapper>
    </div>
  );
}
