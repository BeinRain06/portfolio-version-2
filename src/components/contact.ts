import { linkedin, github, twitter } from "../assets/images/index.ts";
import "../css-components/contact.css";

export interface IContact {
  MainBody: HTMLElement;
  MainContact: HTMLDivElement;
  suitMessage: () => void;
  brandLinkCompany: () => void;
  handleMessageMe: (e: any) => void;
  renderContact: () => void;
}

interface FormElements extends HTMLFormControlsCollection {
  message: HTMLInputElement;
  signature: HTMLInputElement;
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

  handleMessageMe(this: HTMLFormElement, e: Event) {
    e.preventDefault();
    console.log("e.currentTarget :", e.currentTarget);

    console.log("this", this);
    /* const triggerer = e.currentTarget?.elements as FormElements; */

    /* const message = triggerer.message as HTMLInputElement;
    const signature = triggerer.message as HTMLInputElement;

    const warningDiv = document.getElementById(
      "warning_sending_msg"
    ) as HTMLDivElement;

    if (message.value !== "" || signature.value !== "") {
      console.log("featured ith API coming soon !");
    } else {
      warningDiv.classList.add("apply_it_visible");
      setTimeout((): void => {
        warningDiv.classList.remove("apply_it_visible");
      }, 3000);
    } */
  }

  suitMessage() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;

    const columnOne = document.createElement("div") as HTMLDivElement;
    const columnTwo = document.createElement("div") as HTMLDivElement;

    container.className = "msg_container container-fluid";

    row.className =
      "msg_together row d-flex flex-column justify-content-center align-items-center";

    columnOne.className =
      "contact_msg d-flex justify-content-center align-items-center p-2";

    columnOne.innerHTML = `
    <span class="message_me w-100 ">Let's Build Something Together !
    </span>
    `;

    columnTwo.className = "form_msg_wrapper ";

    columnTwo.innerHTML = `
    <button class="btn_hand " data-bs-toggle="collapse" data-bs-target="#drop_wrapper" aria-expanded="false" aria-controls="drop_wrapper">
      <div class="hand_writing_img"></div>
    </button>
    <div id="warning_sending_msg" class="warning_sending_msg">
      <p>Please one or two field are still empty!</p>
    </div>
    <div id="drop_wrapper" class="collapse drop_wrapper col-xs-8 col-sm-4">
    <form class="form_msg_control">
      <div class="form_content_control">
          <label for="new_message" >Leave a Message</label>
          <input type="text" id="new_message" name="message" class="new_message" placeholder="drop a message" />
        </div>
        <div class="form_content_control ">
          <label for="signature_user" >Guess Name</label>
          <input type="text" id="signature_user" class="signature_user" name="signature" placeholder="signature"/>
        </div>
        <div class="form_content_submit w-100 d-flex justify-content-end py-2">
          
          <button type="submit" id="submit_btn_msg" class="submit_btn_msg" ><div class="w-100 h-100 d-flex justify-content-center align-items-center">send</div></button>
        </div>
    </form>
    </div>
    `;

    const newMessage: HTMLInputElement | null =
      columnTwo.querySelector("#new_message");

    const buttonHand: HTMLButtonElement | null =
      columnTwo.querySelector(".btn_hand");

    buttonHand?.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("newMessge:", newMessage);
      newMessage?.focus();
      newMessage?.select();
    });

    const formControl: HTMLElement | null =
      columnTwo.querySelector(".form_msg_control");

    formControl?.addEventListener("submit", (e: any): void => {
      e.preventDefault();
      console.log("typeof e :", typeof e);
      console.log("e.currentTarget:", e.currentTarget);
      console.log("this:", this);
    });

    row.appendChild(columnOne);
    row.appendChild(columnTwo);
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
