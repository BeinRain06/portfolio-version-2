import { linkedin, github, twitter } from "../assets/images/index.ts";
import "../css-components/contact.css";

export interface IContact {
  MainBody: HTMLElement;
  MainContact: HTMLDivElement;
  suitMessage: () => void;
  brandLinkCompany: () => void;
  renderContact: () => void;
}

export default class Contact implements IContact {
  MainBody: HTMLElement;
  MainContact: HTMLDivElement;

  static instance: Contact = new Contact();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
    this.MainContact = document.getElementById(
      "link_station"
    ) as HTMLDivElement;
  }

  suitMessage() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;
    const column = document.createElement("div") as HTMLDivElement;

    container.className = "msg_container container-fluid";

    row.className =
      "msg_together row d-flex justify-content-center align-items-center";

    column.className = " contact_msg p-2";

    column.innerHTML = `<span class="message_me">Let's Build Something Together !</span>`;

    row.appendChild(column);

    container.appendChild(row);

    this.MainContact.innerHTML = "";

    this.MainContact.appendChild(container);
  }

  brandLinkCompany() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;

    container.className = "brand_container container-fluid";

    row.className = "brand_row row";

    const columnOne = document.createElement("div") as HTMLDivElement;
    const columnTwo = document.createElement("div") as HTMLDivElement;
    const columnThree = document.createElement("div") as HTMLDivElement;

    columnOne.className = "item_brand col-4";
    columnTwo.className = "item_brand col-4";
    columnThree.className = "item_brand col-4";

    const tweetWrapper = document.createElement("div") as HTMLDivElement;
    tweetWrapper.id = "link_tweeter";
    tweetWrapper.className = "tweeter_wrapper link_media";
    tweetWrapper.style.backgroundImage = `${twitter}`;
    tweetWrapper.addEventListener("click", (): void => {
      window.open("https://twitter.com/nest_Ngoueni", "_blank");
    });

    columnOne.appendChild(tweetWrapper);

    const githubWrapper = document.createElement("div") as HTMLDivElement;
    githubWrapper.id = "link_github";
    githubWrapper.className = "github_wrapper link_media";
    githubWrapper.style.backgroundImage = `${github}`;
    githubWrapper.addEventListener("click", (): void => {
      window.open("https://github.com/BeinRain06", "_blank");
    });

    columnTwo.appendChild(githubWrapper);

    const linkedinWrapper = document.createElement("div") as HTMLDivElement;
    linkedinWrapper.id = "link_linkedin";
    linkedinWrapper.className = "linkedin_wrapper link_media";
    linkedinWrapper.style.backgroundImage = `${linkedin}`;
    linkedinWrapper.addEventListener("click", (): void => {
      window.open(
        "https://www.linkedin.com/in/gerard-ngouend-5a0584244/",
        "_blank"
      );
    });

    columnThree.appendChild(linkedinWrapper);

    row.appendChild(columnOne);
    row.appendChild(columnTwo);
    row.appendChild(columnThree);

    container.appendChild(row);

    this.MainContact.appendChild(container);
  }

  renderContact() {
    this.suitMessage();
    this.brandLinkCompany();
  }
}
