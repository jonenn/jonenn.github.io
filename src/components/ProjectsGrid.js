import { Project } from "./Project";
import "../styles/ProjectsGrid.css";
import monet from "../images/monet.png";
import musique from "../images/musique.png";
import renoir from "../images/renoir.png";
import simon from "../images/simon.png";

const ProjectsGrid = ({ currentState }) => {
   let portfolioClass = "portfolio";
   if (currentState) {
      portfolioClass += " active";
   } else {
      portfolioClass = "portfolio";
   }
   return (
      <div className={portfolioClass}>
         <h1 className="portfolio__title">My Portfolio</h1>
         <section className="portfolio__wrapper">
            <Project
               title="musique - The web's music player"
               image={musique}
               goto="https://jonenn.github.io/musique/"
            />
            <Project
               title="Simon Game"
               image={simon}
               goto="https://jonenn.github.io/SimonGame/"
            />
            {/* <Project title="Converter" image={converter} /> */}
            <Project
               title="Renoir's Gallery"
               image={renoir}
               goto="https://jonenn.github.io/Renoir/"
            />
            <Project
               title="Claude Monet"
               image={monet}
               goto="https://jonenn.github.io/Monet/"
            />
         </section>
      </div>
   );
};

export { ProjectsGrid };
