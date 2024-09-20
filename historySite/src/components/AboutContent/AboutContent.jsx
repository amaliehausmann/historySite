import style from "./AboutContent.module.scss";
import { Button } from "../Button/Button";

export function AboutContent({ action, theme }) {
  return (
    <div className={`${style.aboutContentStyling} ${style[theme]}`}>
      <Button action={action} theme={theme} buttonStyling="themeSwitch">
        <img src="../src/assets/Light.svg" alt="lightbulb icon" />
      </Button>
      <section>
        <h1>Om Os</h1>
        <p>
          Velkommen til On This Day – et sted, der både tager dig tilbage i
          tiden
          <span className={style.BoldText}>
            {" "}
            og sparer dig for den frygtede, tidsmaskinerelaterede hovedpine!
          </span>{" "}
          Vi ved, hvad du tænker:
          <span className={style.italicText}>
            {" "}
            "Endnu en hjemmeside, hvor man kan finde ud af, hvad der skete på en
            given dato? Det har verden virkelig manglet!"
          </span>{" "}
          Og til det siger vi: <span className={style.BoldText}> JA.</span> Her
          går vi all-in på de store og små begivenheder, som nogen et sted måske
          engang har interesseret sig for… eller ikke.
        </p>

        <p>
          Har du nogensinde spekuleret på, hvad der skete den dag, du mistede
          den ene sok, der forsvandt i vaskemaskinen? Eller den dag, du spiste
          en hel pizza alene og tænkte:{" "}
          <span className={style.italicText}>
            "Hmm, har jeg lige gjort noget historisk?"
          </span>{" "}
          Frygt ej, vi er her for dig.{" "}
          <span className={style.BoldText}>Spoiler alert: </span> På den dag
          blev verdens største kugle af garn også samlet!
        </p>

        <h2>Hvad vi laver (uanset om nogen spurgte)</h2>

        <p>
          Forestil dig en flok historieelskende hamstere, der pisker rundt i små
          hjul inde i en server et sted og samler historiske begivenheder, som
          du aldrig troede, du havde brug for at vide. Ja, sådan fungerer vores
          side. Vi har hyret de skarpeste hoveder (og skarpeste hamstere) til at
          grave sig igennem historiens arkiver, alt imens de skændes om, hvad
          der egentlig skete først: Hønen eller ægget.{" "}
          <span className={style.BoldText}>Spoiler alert:</span> Det er stadig
          uafklaret.
        </p>

        <p>
          Vi har fundet alt fra skæve konger, der faldt af deres heste, til
          episke sandwichopdagelser. Fordi vi alle ved, at historien ikke kun
          handler om krige og revolutioner – den handler også om den dag, nogen
          fandt på at kombinere peanutbutter og syltetøj.{" "}
          <span className={style.BoldText}>Legendarisk!</span>
        </p>

        <h2>Hvordan vi gør det?</h2>

        <p>
          Godt spørgsmål! Svaret er dog så kompliceret, at det ville tage et
          helt essay skrevet af en overkvalificeret professor at forklare...
          eller måske bare en Google-søgning. Men det korte svar er:{" "}
          <span className={style.BoldText}>magisk hamsterkraft.</span> Med en
          præcis blanding af algoritmer, ren viljestyrke og en masse kaffe (til
          os, ikke hamstrene), trawler vi gennem tidens kluddermor for at bringe
          dig det saftigste, mest bizarre og sommetider vigtigste, der skete på
          netop den dato, du klikker på.
        </p>

        <p>
          Så næste gang du har brug for at imponere folk ved en fest med dine
          vilde historiske facts om den dag, den første elastik blev opfundet,
          eller da en fugl landede på en præsidents hoved, så ved du, hvor du
          skal hen!
        </p>

        <h2>Hvorfor vi gør det? Fordi... hvorfor ikke?</h2>

        <p>
          Let’s face it:{" "}
          <span className={style.BoldText}>Historien er sjov.</span> Hvem elsker
          ikke en god historie om, hvordan nogen engang troede, at jorden var
          flad (nej, ikke igen), eller at en hel by blev bange for en sky af
          græshopper? Vi gør det her, fordi vi mener, at historien er for vigtig
          til at blive glemt – især de små ting, der får os til at grine, rulle
          med øjnene eller bare sige:{" "}
          <span className={style.italicText}>
            {" "}
            "Det kan simpelthen ikke passe!"
          </span>
        </p>

        <p>
          Og husk, selv de mest tilfældige dage har efterladt et aftryk i
          historien. Hvem ved? Måske din fødselsdag er den dag, nogen opfandt
          den første oplukker eller opdagede, at enhjørninger... desværre ikke
          findes.
        </p>

        <h2>Men hvad med fremtiden?</h2>

        <p>
          Åh, vi har også store planer for fremtiden! Vi har nemlig overvejet at
          ansætte nogle flere hamstere, måske få dem til at lære skak eller bare
          fortsætte med at grave i historiebøgerne for at finde flere
          ligegyldige (men vigtige!) facts. Hvem ved, måske laver vi endda en
          "Hvad sker der i morgen?" funktion. Men indtil videre handler det kun
          om <span className={style.BoldText}> fortiden.</span> Fordi fortiden
          er... ja, lige der, bag os. Så hvorfor ikke tage en tur ned ad memory
          lane med os?
        </p>
      </section>
    </div>
  );
}
