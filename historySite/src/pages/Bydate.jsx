import { PageTitle } from "../components/PageTitle/PageTitle";
import { Header } from "../components/Header/Header";
import { NavBar } from "../components/NavBar/NavBar";
import { useQuery } from "@tanstack/react-query";
import { ThemeContext } from "../Context/ThemeContext";
import { useContext, useState } from "react";
import { TimelineWrapper } from "../components/TimelineWrapper/TimelineWrapper";
import { Timeline } from "../components/Timeline/Timeline";

export function Bydate() {
  const { changeTheme, isLightMode } = useContext(ThemeContext);

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");

  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`;

  const { data } = useQuery({
    queryKey: ["historyByDate", month, day],
    queryFn: () => fetch(url).then((res) => res.json()),
    staleTime: 1000 * 600,
  });

  const events = data && data.events ? data.events : [];

  return (
    <div>
      <PageTitle pageTitle="By Date"></PageTitle>
      <Header
        title="ON:"
        withDate={true}
        underTitle="What happened on this day - Here you can enter a specific date to get only events that happened on this date"
        theme={isLightMode ? "light" : ""}
        setDay={setDay}
        setMonth={setMonth}
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
