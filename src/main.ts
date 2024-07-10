import "./style.css";

import Home from "./components/home.ts";
import About from "./components/about.ts";
import Skills from "./components/skills.ts";
import Resume from "./components/resume.ts";
import Contact from "./components/contact.ts";

import { IHome } from "./components/home.ts";
import { IAbout } from "./components/about.ts";
import { ISkills } from "./components/skills.ts";
import { IResume } from "./components/resume.ts";
import { IContact } from "./components/contact.ts";

interface IMain {
  MainBody: HTMLElement;
  home: IHome;
  about: IAbout;
  skills: ISkills;
  resume: IResume;
  contact: IContact;

  switchActiveSection: (
    indexTarget: string,
    bodySectionCollection: NodeListOf<HTMLElement>
  ) => void;
  selectPageToRender: (
    indexTarget: string,
    bodySectionCollection: NodeListOf<HTMLElement>,
    home: IHome,
    about: IAbout,
    skills: ISkills,
    resume: IResume,
    contact: IContact
  ) => void;

  initialLoader: (
    indexTarget: string,
    bodySectionCollection: NodeListOf<HTMLElement>,
    home: IHome,
    about: IAbout,
    skills: ISkills,
    resume: IResume,
    contact: IContact
  ) => void;
}

class MainApp implements IMain {
  MainBody: HTMLElement;
  home: IHome;
  about: IAbout;
  skills: ISkills;
  resume: IResume;
  contact: IContact;

  triggerWrapper: HTMLDivElement;
  triggeredMenu: HTMLInputElement;
  menuContent: HTMLDivElement;
  logoWrapper: HTMLDivElement;
  bodySectionCollection: NodeListOf<HTMLElement>;
  menuLinks: NodeListOf<HTMLElement>;
  navLinksContainer: HTMLUListElement;
  navLinks: NodeListOf<HTMLElement>;

  static instance: MainApp = new MainApp();

  public constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
    this.home = Home.instance;
    this.about = About.instance;
    this.skills = Skills.instance;
    this.resume = Resume.instance;
    this.contact = Contact.instance;

    /* menu*/
    this.triggerWrapper = document.getElementById(
      "menu_wrap"
    ) as HTMLDivElement;
    this.triggeredMenu = document.getElementById(
      "trigger_menu"
    ) as HTMLInputElement;
    this.menuContent = document.getElementById(
      "menu_content"
    ) as HTMLDivElement;
    this.logoWrapper = document.getElementById(
      "logo_wrapper"
    ) as HTMLDivElement;

    /*Body Section*/
    this.bodySectionCollection = document.querySelectorAll(
      ".main_view"
    ) as NodeListOf<HTMLElement>;

    /*menuLinks */
    this.menuLinks = document.querySelectorAll(
      ".menu_link"
    ) as NodeListOf<HTMLElement>;

    /*NavLinks */
    this.navLinksContainer = document.querySelector(
      ".navlink_container"
    ) as HTMLUListElement;

    this.navLinks = document.querySelectorAll(
      ".navlink"
    ) as NodeListOf<HTMLElement>;

    /* --> initial trigger */

    /* this.initialLoader(
      "0",
      this.bodySectionCollection,
      this.home,
      this.about,
      this.skills,
      this.resume,
      this.contact
    ); */

    this.defaultActiveLink();

    /* <-- initial trigger */

    this.triggerWrapper.addEventListener("click", (): void => {
      const logoText = this.logoWrapper.querySelector(
        ".logo_menu_text"
      ) as HTMLSpanElement;
      const check: boolean = this.triggeredMenu.checked;
      if (check === true) {
        this.menuContent.classList.add("currently_view");
        this.logoWrapper.classList.add("currently_view");

        logoText.style.color = "#107c41";
      } else {
        this.menuContent.classList.remove("currently_view");
        this.logoWrapper.classList.remove("currently_view");
        logoText.style.color = "#fff";
      }
    });

    this.navLinksContainer.addEventListener("click", (): void =>
      this.switchActiveLink()
    );
  }

  defaultActiveLink() {
    const fullMenuLinks = Array.from(this.menuLinks) as HTMLElement[];
    const menuLinkHome = fullMenuLinks[0].firstElementChild as HTMLDivElement;
    menuLinkHome.classList.add("active_li");
  }

  switchActiveLink() {
    const fullLinks: HTMLElement[] = Array.from(this.navLinks);

    const fullMenuLinks: HTMLElement[] = Array.from(this.menuLinks);

    const currentLinkShow = document.getElementById(
      "current_link_show"
    ) as HTMLDivElement;

    let previousNavTag = document.querySelector(".active_li") as HTMLLIElement;

    let currentNavTag: HTMLLIElement;

    fullLinks[0].classList.remove("active_li");

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

        this.selectPageToRender(
          newIndexShow,
          this.bodySectionCollection,
          this.home,
          this.about,
          this.skills,
          this.resume,
          this.contact
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
        const logoText = this.logoWrapper.querySelector(
          ".logo_menu_text"
        ) as HTMLSpanElement;

        const check: boolean = this.triggeredMenu.checked;

        if (check === true) {
          /* triggeredMenu.style.backgroundColor = "#848d94"; */
          this.menuContent.classList.remove("currently_view");
          this.logoWrapper.classList.remove("currently_view");
          logoText.style.color = "#fff";

          this.triggeredMenu.checked = false;
        }
        const newIndexShow = currentNavTag.getAttribute("data-index") as string;

        this.selectPageToRender(
          newIndexShow,
          this.bodySectionCollection,
          this.home,
          this.about,
          this.skills,
          this.resume,
          this.contact
        );
      });
    });
  }

  switchActiveSection(
    indexTarget: string,
    bodySectionCollection: NodeListOf<HTMLElement>
  ) {
    const indexNumber: number = +indexTarget;
    console.log(indexNumber);

    const bodyArrSectionCollection: HTMLElement[] = Array.from(
      bodySectionCollection
    );

    bodyArrSectionCollection.forEach((bodySection, i): void => {
      if (indexNumber === i) {
        bodySection.classList.add("active_section");
      } else {
        bodySection.classList.remove("active_section");
      }
    });
  }

  selectPageToRender(
    indexTarget: string,
    bodySectionCollection: NodeListOf<HTMLElement>,
    home: IHome,
    about: IAbout,
    skills: ISkills,
    resume: IResume,
    contact: IContact
  ) {
    switch (indexTarget) {
      case "0":
        this.switchActiveSection(indexTarget, bodySectionCollection);
        console.log("future home");
        home.renderHome();
        break;
      case "1":
        this.switchActiveSection(indexTarget, bodySectionCollection);
        console.log("future about");
        about.renderAbout();
        break;
      case "2":
        this.switchActiveSection(indexTarget, bodySectionCollection);
        console.log("future skills");
        skills.renderSkills();
        break;
      case "3":
        this.switchActiveSection(indexTarget, bodySectionCollection);
        console.log("future resume");
        resume.renderResume();
        break;
      case "4":
        this.switchActiveSection(indexTarget, bodySectionCollection);
        contact.renderContact();
        break;
      default:
        throw Error("Can't find the kinjed page!");
    }
  }

  initialLoader(
    indexTarget: string,
    bodySectionCollection: NodeListOf<HTMLElement>,
    home: IHome,
    about: IAbout,
    skills: ISkills,
    resume: IResume,
    contact: IContact
  ) {
    this.selectPageToRender(
      indexTarget,
      bodySectionCollection,
      home,
      about,
      skills,
      resume,
      contact
    );
  }
}

document.addEventListener("DOMContentLoaded", () => MainApp.instance);
/* const app = MainApp.instance; */
