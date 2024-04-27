import { linkedin, github, twitter } from "../assets/images/index.ts";
import { getInfosMail, sendDataMail } from "../api_functions/api_function.ts";
import "../css-components/contact.css";
import { Collapse } from "bootstrap";

export interface IContact {
  MainBody: HTMLElement;
  MainContact: HTMLDivElement;
  url: string;
  suitMessage: () => void;
  sendOurMailReview: (
    name: HTMLInputElement,
    email: HTMLInputElement,
    message: HTMLTextAreaElement,
    warningDiv: HTMLDivElement,
    dropWrapper: HTMLDivElement,
    e: SubmitEvent
  ) => void;
  fullShowForm: (dropWrapper: HTMLDivElement) => void;
  brandLinkCompany: () => void;
  renderContact: () => void;
}

export default class Contact implements IContact {
  MainBody: HTMLElement;
  MainContact: HTMLDivElement;
  url: string;

  static instance: Contact = new Contact();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
    this.MainContact = document.getElementById(
      "link_station"
    ) as HTMLDivElement;
    this.url =
      "https://script.google.com/macros/s/AKfycbypH2BtAHlCavQC5M35GMVIYS4NKpllq5XnRp1c-YWk70TLZAbqG8AQftGl5MwLjwZgVQ/exec" as string;
  }

  sendOurMailReview(
    name: HTMLInputElement,
    email: HTMLInputElement,
    message: HTMLTextAreaElement,
    warningDiv: HTMLDivElement,
    dropWrapper: HTMLDivElement,
    e: SubmitEvent
  ) {
    // \w - alias for [a-zA-Z_0-9]
    // "whitespace"?  - allow whitespace after word, set is as optional
    const regExName = /^[a-zA-Z]{1,2}(\w+ ?)+$/;
    const regEXEmail =
      /^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.[a-zA-Z]{2,5}$/;

    e.preventDefault();

    console.log("e.currentTarget:", e.currentTarget);

    const nameGuess: string = name.value;
    const emailGuess: string = email.value;
    const messageGuess: string = message.value;

    const checkName = regExName.test(name.value);
    const checkEmail = regEXEmail.test(email.value);

    let errorWarningMsg: string;
    const p = document.createElement("p") as HTMLParagraphElement;
    p.className =
      "w-100 h-100 d-flex justify-content-center align-items-center m-0";

    if (nameGuess === "" || emailGuess === "" || messageGuess === "") {
      warningDiv.innerHTML = "";
      errorWarningMsg = "Please review and fill the empty field!";
      p.innerHTML = errorWarningMsg;
      warningDiv?.appendChild(p);
      warningDiv.classList.add("apply_it_visible");

      setTimeout((): void => {
        name.value = "";
        email.value = "";
        message.value = "";
        warningDiv.classList.remove("apply_it_visible");
      }, 5000);

      return;
    }

    if (checkName && checkEmail) {
      const myObjDataMail = {
        name: nameGuess,
        email: emailGuess,
        message: messageGuess,
      };

      console.log("myObjDataMail:", myObjDataMail);

      setTimeout((): void => {
        name.value = "";
        email.value = "";
        message.value = "";

        const collapseItem = new Collapse(dropWrapper);

        collapseItem.hide();
      }, 3000);

      // Method POST Email
      sendDataMail(myObjDataMail, this.url);
    } else if (!checkName && !checkEmail) {
      warningDiv.innerHTML = "";
      errorWarningMsg = "There is an error. Check field name and email!";
      p.innerHTML = errorWarningMsg;
      warningDiv.appendChild(p);

      warningDiv.classList.add("apply_it_visible");

      name.style.border = "2px solid brown";

      setTimeout((): void => {
        name.style.borderColor = "2px solid transparent";
        name.value = "";
        email.value = "";
        message.value = "";
        warningDiv.classList.remove("apply_it_visible");
      }, 5000);

      return;
    } else if (!checkName) {
      warningDiv.innerHTML = "";
      errorWarningMsg = "input field name error!";
      p.innerHTML = errorWarningMsg;
      warningDiv.appendChild(p);
      warningDiv.classList.add("apply_it_visible");

      name.style.border = "2px solid brown";

      setTimeout((): void => {
        name.style.borderColor = "2px solid transparent";
        name.value = "";
        email.value = "";
        message.value = "";
        warningDiv.classList.remove("apply_it_visible");
      }, 5000);

      return;
    } else if (!checkEmail) {
      warningDiv.innerHTML = "";
      errorWarningMsg = "input field email error!";
      p.innerHTML = errorWarningMsg;
      warningDiv.appendChild(p);
      warningDiv.classList.add("apply_it_visible");

      email.style.border = "2px solid brown";

      setTimeout((): void => {
        email.style.borderColor = "2px solid transparent";
        name.value = "";
        email.value = "";
        message.value = "";
        warningDiv.classList.remove("apply_it_visible");
      }, 5000);

      return;
    }
  }

  fullShowForm(dropWrapper: HTMLDivElement) {
    const collapseItem = new Collapse(dropWrapper);

    if (dropWrapper.classList.contains("activate_view")) {
      dropWrapper.classList.remove("activate_view");
      collapseItem.hide();
    } else {
      dropWrapper.classList.add("activate_view");
      collapseItem.show();
    }
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

    const buttonHandWriting = document.createElement(
      "button"
    ) as HTMLButtonElement;

    buttonHandWriting.className = "btn_hand";

    buttonHandWriting.innerHTML = `<div class="hand_writing_img"></div>`;

    const dropWrapper = document.createElement("div") as HTMLDivElement;
    dropWrapper.id = "drop_wrapper";
    dropWrapper.className = "collapse drop_wrapper  col-10 col-sm-5";

    const formControl = document.createElement("form") as HTMLFormElement;

    formControl.className = "form_msg_control";

    const nameWrapper = document.createElement("div") as HTMLDivElement;
    nameWrapper.id = "name_wrap";
    nameWrapper.className = "form_content_control";
    const emailWrapper = document.createElement("div") as HTMLDivElement;
    emailWrapper.id = "email_wrap";
    emailWrapper.className = "form_content_control";
    const messageWrapper = document.createElement("div") as HTMLDivElement;
    messageWrapper.id = "message_wrap";
    messageWrapper.className = "form_content_control";

    nameWrapper.innerHTML = `
    <label for="signature" >Guess Name</label>
          <input type="text" id="signature" class="signature_guess" name="signature" placeholder="signature"/>
    `;
    emailWrapper.innerHTML = `
    <label for="email" >email</label>
          <input type="text" id="email" class="email_guess" name="email" placeholder="email_address"/>
    `;
    messageWrapper.innerHTML = `
    <label for="message" >Leave a Message</label>
          <textarea  id="message" name="message" class="message" placeholder="drop a message" rows="3" cols="30" ></textarea>
    `;

    const warningDiv = document.createElement("div") as HTMLDivElement;
    warningDiv.id = "warning_sending_msg";
    warningDiv.className =
      "warning_sending_msg d-flex justify-content-center align-items-center";

    const formContentSubmit = document.createElement("div") as HTMLDivElement;
    formContentSubmit.className = "form_content_submit w-100 d-flex py-2";

    const buttonSubmit = document.createElement("button") as HTMLButtonElement;
    buttonSubmit.id = "submit_btn_msg";
    buttonSubmit.setAttribute("type", "submit");
    buttonSubmit.className = "submit_btn_msg";

    buttonSubmit.innerHTML = `<div class="w-100 h-100 d-flex justify-content-center align-items-center">send</div>`;

    formContentSubmit.appendChild(warningDiv);
    formContentSubmit.appendChild(buttonSubmit);
    formControl.appendChild(nameWrapper);
    formControl.appendChild(emailWrapper);
    formControl.appendChild(messageWrapper);
    formControl.appendChild(formContentSubmit);
    dropWrapper.appendChild(formControl);

    columnTwo.appendChild(buttonHandWriting);
    columnTwo.appendChild(dropWrapper);

    const name = nameWrapper.querySelector("#signature") as HTMLInputElement;
    const email = emailWrapper.querySelector("#email") as HTMLInputElement;
    const message = messageWrapper.querySelector(
      "#message"
    ) as HTMLTextAreaElement;

    buttonHandWriting.addEventListener(
      "click",
      this.fullShowForm.bind(this, dropWrapper)
    );

    formControl.addEventListener(
      "submit",
      this.sendOurMailReview.bind(
        this,
        name,
        email,
        message,
        warningDiv,
        dropWrapper
      )
    );

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

    row.className =
      "brand_row row d-flex justify-content-center align-items-center";

    const columnOne = document.createElement("div") as HTMLDivElement;
    const columnTwo = document.createElement("div") as HTMLDivElement;
    const columnThree = document.createElement("div") as HTMLDivElement;

    columnOne.className = "item_brand col-3";
    columnTwo.className = "item_brand col-3";
    columnThree.className = "item_brand col-3";

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
