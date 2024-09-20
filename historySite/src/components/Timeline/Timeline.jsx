import { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import style from "./Timeline.module.scss";
import { Circle } from "../Circle/Circle";

export function Timeline({
  events = [],
  action,
  theme,
}) {

  // Sorterer events så det laveste år står øverst
  const sortedEvents = events.sort((a, b) => a.year - b.year);

  //UseState der styrer mængden af viste events
  const [visibleAmount, setVisibleAmount] = useState(10);

  //UseState der slicer mængden af viste events, baseret på visibleAmount
  const [displayedEvents, setDisplayedEvents] = useState(
    sortedEvents.slice(0, visibleAmount)
  );

  //UseState der viser back top top knappen
  const [showBackToTop, setShowBackToTop] = useState(false);

  //UseState der viser scroll down for more
  const [showScrollDown, setShowScrollDown] = useState(false);

  //useEffect der opdaterer mængden af viste events, hver gang visibleAmount eller sortedEvents opdateres. sortedEvents er en dependency for at vise de 10 første events når siden loades
  useEffect(() => {
    setDisplayedEvents(sortedEvents.slice(0, visibleAmount));
  }, [visibleAmount, sortedEvents]);

  //UseEffect der håndterer når der scrolles baseret på hvor lang nede på siden man er. Når man når bunden opdateres visibleAmount, så 10 mere bliver vist
  useEffect(() => {
    function handleScroll() {
      // Tjekker scroll position ift documentets højde
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      //Viser back to top knap hvis scrolled mere end 30%
      if (scrollPosition > documentHeight * 0.3) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      if (scrollPosition > documentHeight * 0.17) {
        setShowScrollDown(true);
      } else {
        setShowScrollDown(false);
      }

      if (windowHeight + scrollPosition >= documentHeight) {
        setVisibleAmount((prev) => prev + 10);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }

  return (
    <div className={`${style.timelineStyling} ${style[theme]}`}>
      <Button action={action} theme={theme} buttonStyling="themeSwitch">
        <img src="../src/assets/Light.svg" alt="lightbulb icon" />
      </Button>
      <Circle placement="topCircle" size="bigCircle"></Circle>

      {showScrollDown && (
        <div className={style.scrollArrow}>
          <p>Scroll down for more</p>
          <img src="../src/assets/downArrow.svg" alt="" />
        </div>
      )}

      {showBackToTop && (
        <Button action={scrollToTop} theme={theme} buttonStyling="backToTop">
          <img src="../src/assets/Upward Arrow.svg" alt="" />
        </Button>
      )}
      {displayedEvents.length > 0 ? (
        displayedEvents.map((event, index) => (
          <div className={style.timelineCards} key={index}>
            <h3>YEAR: {event.year}</h3>
            <Circle
              placement="lineCircle"
              size="smallCircle"
              theme={theme}
            ></Circle>
            <p>{event.text}</p>
            <div className={style.linkStyling}>
            <img src="../src/assets/Bookmark.svg" alt="" />
            <a
              href={event.pages[0].content_urls.desktop.page}
              target="_blank"
            >
              Read More
            </a>
            </div>
          </div>
        ))
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
}
