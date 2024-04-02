import "../css-components/contact.css";

export interface IContact {
  MainBody: HTMLElement;
  suitMessage: () => void;
  brandLinkCompany: () => void;
  renderContact: () => void;
}

export default class Contact implements IContact {
  MainBody: HTMLElement;

  static instance: Contact = new Contact();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
  }

  suitMessage() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;
    const column = document.createElement("div") as HTMLDivElement;

    column.className = " contact_msg p-2";

    column.innerHTML = `<span class="message_me text-black">Let's Build Something Together !</span>`;

    row.className =
      "msg_together row d-flex justify-content-center align-items-center";

    row.appendChild(column);

    container.className = "msg_container container-fluid";

    container.appendChild(row);

    this.MainBody.innerHTML = "";
    this.MainBody.appendChild(container);
  }

  brandLinkCompany() {
    const container = document.createElement("div") as HTMLDivElement;
    const row = document.createElement("div") as HTMLDivElement;

    row.className = "brand_row row";
    row.innerHTML = `
    <div class="item_brand col-4">
    <a href="#">Twitter</a>
    </div>
    <div class="item_brand col-4">
    <a href="#">Twitter</a>
    </div>
    <div class="item_brand col-4">
    <a href="#">Twitter</a>
    </div>
    `;

    container.className = "brand_container container-fluid";
    container.appendChild(row);

    this.MainBody.appendChild(container);
  }

  renderContact() {
    this.suitMessage();
    this.brandLinkCompany();
  }
}
