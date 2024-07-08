import { linkedin, github, twitter } from "../assets/images/index.ts";
import { sendDataMail } from "../api_functions/api_function.ts";
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
  /*  brandLinkCompany: () => void; */
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
      warningDiv.classList.add("apply_visibility");

      setTimeout((): void => {
        name.value = "";
        email.value = "";
        message.value = "";
        warningDiv.classList.remove("apply_visibility");
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

    dropWrapper.classList.add("activate_view");
    collapseItem.show();
  }

  suitMessage() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;

    /*  const columnOne = document.createElement("div") as HTMLDivElement; */
    const columnTwo = document.createElement("div") as HTMLDivElement;

    container.className = "msg_and_form_container container-fluid";

    row.className = "msg_together row d-flex flex-column  align-items-center";

    /*  columnOne.className =
      "contact_msg d-flex justify-content-center align-items-center ";

    columnOne.innerHTML = `
    <span class="message_me w-100 ">Let's Build Something Together !
    </span>
    `; */

    columnTwo.className = "main_contact_area";

    const buttonHandWriting = document.createElement(
      "button"
    ) as HTMLButtonElement;

    buttonHandWriting.className = "btn_hand";

    buttonHandWriting.innerHTML = `<div class="hand_writing_img"></div>`;

    const dropWrapper = document.createElement("div") as HTMLDivElement;
    dropWrapper.id = "drop_wrapper";
    dropWrapper.className =
      "collapse drop_wrapper activate_view col-10 col-sm-5";

    const formControl = document.createElement("form") as HTMLFormElement;
    // have to remove .form_msg_control (later_)
    formControl.className = "form_msg_control";

    const contactBoard = document.createElement("div") as HTMLDivElement;
    contactBoard.className = "contact_board";
    const socialActivity = document.createElement("div") as HTMLDivElement;
    socialActivity.className = "social_activity";

    const formSide = document.createElement("div") as HTMLDivElement;
    formSide.className = "form_side";

    contactBoard.appendChild(socialActivity);
    contactBoard.appendChild(formSide);

    // --> social-media
    const socialMsg = document.createElement("div") as HTMLDivElement;
    socialMsg.className = "social_msg";

    const socialMediaWrapper = document.createElement("div") as HTMLDivElement;
    socialMediaWrapper.className = "social_media_wrap";

    const socialMedia = document.createElement("div") as HTMLDivElement;
    socialMedia.className = "social_media";

    const tweetWrapper = document.createElement("div") as HTMLDivElement;
    tweetWrapper.id = "link_tweeter";
    tweetWrapper.className = "tweeter_wrapper link_media";
    tweetWrapper.style.backgroundImage = `${twitter}`;
    tweetWrapper.addEventListener("click", (): void => {
      window.open("https://twitter.com/nest_Ngoueni", "_blank");
    });

    const githubWrapper = document.createElement("div") as HTMLDivElement;
    githubWrapper.id = "link_github";
    githubWrapper.className = "github_wrapper link_media";
    githubWrapper.style.backgroundImage = `${github}`;
    githubWrapper.addEventListener("click", (): void => {
      window.open("https://github.com/BeinRain06", "_blank");
    });

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

    socialMsg.innerHTML = `
      <p class="social_says">social media</p>
    `;

    socialMedia.appendChild(tweetWrapper);
    socialMedia.appendChild(githubWrapper);
    socialMedia.appendChild(linkedinWrapper);
    socialMediaWrapper.appendChild(socialMedia);

    socialActivity.appendChild(socialMsg);
    socialActivity.appendChild(socialMediaWrapper);

    // <-- social-media

    // form-side

    const formContainer = document.createElement("form") as HTMLFormElement;
    formContainer.className = "form_container";

    const sharingMsg = document.createElement("div") as HTMLDivElement;
    sharingMsg.className = "sharing_msg";
    const nameWrapper = document.createElement("div") as HTMLDivElement;
    nameWrapper.id = "name_wrap";
    nameWrapper.className = "name_wrap form_content_control";
    const emailAndSubmit = document.createElement("div") as HTMLDivElement;
    emailAndSubmit.className = "email_and_submit";
    const emailWrapper = document.createElement("div") as HTMLDivElement;
    emailWrapper.id = "email_wrap";
    emailWrapper.className = " email_wrap form_content_control";
    const messageWrapper = document.createElement("div") as HTMLDivElement;
    messageWrapper.id = "message_wrap";
    messageWrapper.className = " message_wrap form_content_control";

    sharingMsg.innerHTML = `<p class="message_me" >Let's Build Something Together !</p>`;

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
          <textarea  id="message" name="message" class="message" placeholder="drop_message" rows="3" cols="30" ></textarea>
    `;

    const submitContainer = document.createElement("div") as HTMLDivElement;
    submitContainer.className = "submit_container";
    submitContainer.innerHTML = `
     <button class="btn_sub_msg">Send</button>
     `;

    const warningDiv = document.createElement("div") as HTMLDivElement;
    warningDiv.id = "warning_submit_msg";
    warningDiv.className = "warning_submit_msg";

    emailWrapper.appendChild(warningDiv);

    formContainer.appendChild(sharingMsg);
    formContainer.appendChild(nameWrapper);
    formContainer.appendChild(emailWrapper);
    formContainer.appendChild(messageWrapper);
    formContainer.appendChild(submitContainer);

    columnTwo.appendChild(contactBoard);
    columnTwo.appendChild(formContainer);

    const name = nameWrapper.querySelector("#signature") as HTMLInputElement;
    const email = emailWrapper.querySelector("#email") as HTMLInputElement;
    const message = messageWrapper.querySelector(
      "#message"
    ) as HTMLTextAreaElement;

    /*  buttonHandWriting.addEventListener(
      "click",
      this.fullShowForm.bind(this, dropWrapper)
    ); */

    formContainer.addEventListener(
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

    row.appendChild(columnTwo);
    container.appendChild(row);

    this.MainContact.innerHTML = "";

    this.MainContact.appendChild(container);
  }

  renderContact() {
    this.suitMessage();
  }
}
