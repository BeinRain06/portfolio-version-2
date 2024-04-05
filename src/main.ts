import "./style.css";

import Home from "./components/about.ts";
import About from "./components/about.ts";
import Skills from "./components/skills.ts";
import Resume from "./components/resume.ts";
import Contact from "./components/contact.ts";
import { IHome } from "./components/home.ts";
import { IAbout } from "./components/about.ts";
import { ISkills } from "./components/skills.ts";
import { IResume } from "./components/resume.ts";
import { IContact } from "./components/contact.ts";

import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

/* document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!) */

const switchActiveSection = (
  indexTarget: string,
  bodySectionCollection: HTMLDivElement[]
): void => {
  const indexNumber: number = +indexTarget;
  console.log(indexNumber);

  bodySectionCollection.forEach((bodySection, i): void => {
    if (indexNumber === i) {
      bodySection.classList.add("active_section");
    } else {
      bodySection.classList.remove("active_section");
    }
  });
};

const selectPageToRender = (
  indexTarget: string,
  bodySectionCollection: HTMLDivElement[],
  home: IHome,
  about: IAbout,
  skills: ISkills,
  resume: IResume,
  contact: IContact
): void => {
  switch (indexTarget) {
    case "0":
      switchActiveSection(indexTarget, bodySectionCollection);
      console.log("future home");
      break;
    case "1":
      switchActiveSection(indexTarget, bodySectionCollection);
      console.log("future about");
      break;
    case "2":
      switchActiveSection(indexTarget, bodySectionCollection);
      console.log("future skills");
      skills.renderSkills();
      break;
    case "3":
      switchActiveSection(indexTarget, bodySectionCollection);
      console.log("future resume");
      resume.renderResume();
      break;
    case "4":
      switchActiveSection(indexTarget, bodySectionCollection);
      contact.renderContact();
      break;
    default:
      throw Error("Can't find the kinjed page!");
  }
};

const mainApp = (): void => {
  const home = Home.instance;
  const about = About.instance;
  const skills = Skills.instance;
  const resume = Resume.instance;
  const contact = Contact.instance;

  /* menu*/
  const triggerWrapper = document.getElementById("menu_wrap") as HTMLDivElement;
  const triggeredMenu = document.getElementById(
    "trigger_menu"
  ) as HTMLInputElement;
  const menuContent = document.getElementById("menu_content") as HTMLDivElement;
  const logoWrapper = document.getElementById("logo_wrapper") as HTMLDivElement;

  /*Body Section*/
  const bodySectionCollection: HTMLDivElement[] = Array.from(
    document.querySelectorAll(".main_view")
  );

  /*menuLinks */
  const menuLinks = document.querySelectorAll(
    ".menu_link"
  ) as NodeListOf<HTMLElement>;

  const fullMenuLinks: HTMLElement[] = Array.from(menuLinks);

  console.log("fullMenuLinks:", fullMenuLinks);

  const menuLinkHome = fullMenuLinks[0].firstElementChild as HTMLDivElement;
  menuLinkHome.classList.add("active_li");

  /*NavLinks */

  const navLinks = document.querySelectorAll(
    ".navlink"
  ) as NodeListOf<HTMLElement>;

  const fullLinks: HTMLElement[] = Array.from(navLinks);

  const currentLinkShow = document.getElementById(
    "current_link_show"
  ) as HTMLDivElement;

  let previousNavTag = document.querySelector(".active_li") as HTMLLIElement;

  let currentNavTag: HTMLLIElement;

  fullLinks[0].classList.add("active_li");

  fullLinks.forEach((linkItem) => {
    linkItem.addEventListener("click", (event): void => {
      currentNavTag = event.currentTarget as HTMLLIElement;
      console.log("currentNavTag:", currentNavTag);

      previousNavTag.classList.remove("active_li");

      const newIndexShow = currentNavTag.getAttribute("data-index") as string;

      const newValueShow = currentNavTag.getAttribute("data-value") as string;

      currentNavTag.classList.add("active_li");

      previousNavTag = currentNavTag;

      currentLinkShow.setAttribute("data-index", newIndexShow);

      const currentLinkText = currentLinkShow.querySelector(
        ".current_link_text"
      ) as HTMLSpanElement;

      currentLinkText.innerText = newValueShow;

      selectPageToRender(
        newIndexShow,
        bodySectionCollection,
        home,
        about,
        skills,
        resume,
        contact
      );
    });
  });

  fullMenuLinks.forEach((linkItem) => {
    linkItem.addEventListener("click", (event): void => {
      currentNavTag = event.currentTarget as HTMLLIElement;
      console.log("currentNavTag:", currentNavTag);

      previousNavTag.classList.remove("active_li");

      currentNavTag.classList.add("active_li");

      previousNavTag = currentNavTag;

      /*remove menu_content */
      const logoText = logoWrapper.querySelector(
        ".logo_menu_text"
      ) as HTMLSpanElement;

      const check: boolean = triggeredMenu.checked;

      if (check === true) {
        triggeredMenu.style.backgroundColor = "#848d94";
        menuContent.classList.remove("currently_view");
        logoWrapper.classList.remove("currently_view");
        logoText.style.color = "#fff";

        triggeredMenu.checked = false;
      }
      const newIndexShow = currentNavTag.getAttribute("data-index") as string;

      selectPageToRender(
        newIndexShow,
        bodySectionCollection,
        home,
        about,
        skills,
        resume,
        contact
      );
    });
  });

  triggerWrapper.addEventListener("click", (): void => {
    const logoText = logoWrapper.querySelector(
      ".logo_menu_text"
    ) as HTMLSpanElement;
    const check: boolean = triggeredMenu.checked;
    if (check === true) {
      triggeredMenu.style.backgroundColor = "#9e9d9d";
      menuContent.classList.add("currently_view");
      logoWrapper.classList.add("currently_view");

      logoText.style.color = "#60c77a";
    } else {
      triggeredMenu.style.backgroundColor = "#848d94";
      menuContent.classList.remove("currently_view");
      logoWrapper.classList.remove("currently_view");
      logoText.style.color = "#fff";
    }
  });
};

document.addEventListener("DOMContentLoaded", mainApp);
