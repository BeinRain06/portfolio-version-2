import "../css-components/resume.css";
export interface IResume {
  MainBody: HTMLElement;
  MainResume: HTMLDivElement;
  backInYearsStory: () => void;
  resumeStatus: () => void;
  renderResume: () => void;
}

export default class Resume implements IResume {
  MainBody: HTMLElement;
  MainResume: HTMLDivElement;

  static instance: Resume = new Resume();

  private constructor() {
    this.MainBody = document.getElementById("main_app") as HTMLElement;
    this.MainResume = document.getElementById("craft_domain") as HTMLDivElement;
  }

  backInYearsStory() {
    const container = document.createElement("div") as HTMLDivElement;

    const row = document.createElement("div") as HTMLDivElement;
    const columnOne = document.createElement("div") as HTMLDivElement;
    const columnTwo = document.createElement("div") as HTMLDivElement;

    container.className = "story_container container-fluid";

    row.className =
      "story_enroll row w-100 d-flex justify-content-center align-items-center py-2 mx-auto";

    columnOne.className = "title_story  col-xs-2 col-sm-1";
    columnOne.innerHTML = `<h4 class="title_underlined px-2" >STory Telling :</h4>`;
    columnTwo.className = "story_wrap col-10";
    columnTwo.innerHTML = `
    <p class="story_content d-flex  justify-content-center  w-100" >
        About 02 years and half, developed skills in ReactJS, TypeScript, and Vanilla JS. React Context API tease me to build easy app storing data under the client side. NodeJS and Express improve this experience at the time surrounded with the external database tool MonGoDB. MonGoDB then along with Json web token on the fire allows me to tackle area of user Authentication under credentials mostly needed effective  inside website application. Here one of our goal is being able to be skilled enough to push out many prototypes that can serve as sample on new products developments. Years Earlier have been orking in electrical field especially area of house wiring.       
    </p>`;

    row.appendChild(columnOne);
    row.appendChild(columnTwo);
    container.appendChild(row);

    this.MainResume.innerHTML = "";

    this.MainResume.appendChild(container);
  }

  resumeStatus() {
    const container = document.createElement("div") as HTMLDivElement;

    const rowOne = document.createElement("div") as HTMLDivElement;
    const rowTwo = document.createElement("div") as HTMLDivElement;
    const columnOne = document.createElement("div") as HTMLDivElement;
    const columnTwo = document.createElement("div") as HTMLDivElement;
    const columnThree = document.createElement("div") as HTMLDivElement;
    const columnFour = document.createElement("div") as HTMLDivElement;

    columnOne.className = "title_road road_res1 col-xs-10";
    columnOne.innerHTML = `<span class="road_label">Stage Learning</span> `;
    columnFour.className = "title_road road_res2 col-xs-10";
    columnFour.innerHTML = `<span class="road_label">Education</span>`;

    columnTwo.className = "content_resume";
    columnThree.className = "content_resume";
    columnTwo.innerHTML = `
    <div class="flash_resume w-100">
      <h5 class="paragraph_title">Tailwind CSS</h5>
      <ul class="paragraph_points  d-flex flex-column text-align-justify gap-2">
        <li class="spot_matter w-100 "> Tailwind with Vanilla Javascript</li>
        <li class="spot_matter w-100 "> Tailwind with NextJS</li>
      </ul>
    </div>
    <div class="flash_resume w-100">
      <h5 class="paragraph_title">NextJS</h5>
      <ul class="paragraph_points d-flex flex-column text-align-justify gap-2">
        <li class="spot_matter w-100"> Pages and Routing in NextJS</li>
        <li class="spot_matter w-100"> Server Side Rendering(SSR)</li>
      </ul>
    </div>`;

    columnThree.innerHTML = `
    <div class="flash_resume w-100">
      <h5 class="paragraph_title">Electrical &   Electronics Engineering</h4>
      <ul class="paragraph_points  d-flex flex-column text-align-justify gap-2">
        <li class="spot_matter w-100"> Technology University Institute (I.U.T Douala) </li>
        <li class="spot_matter w-100"> 2 years degree - Diploma <span class="font-italic">D.U.T option(Industrial IT & Electrical Engineering) </span> - Diplome Universitaire De Technologie</li>
      </ul>
    </div>
    <div class="flash_resume w-100">
      <h5 class="paragraph_title">Electrotechnics</h5>
      <ul class="paragraph_points  d-flex flex-column text-align-justify gap-2">
        <li class="spot_matter w-100"> Coast University Institute (I.U.C Douala)</li>
        <li class="spot_matter w-100">1 year degree - Diploma <span class="font-italic"> bachelor's degree in Electrotechnics </span></li>
      </ul>
    </div>`;

    rowOne.className = "resume_row_one row";
    rowTwo.className = "resume_row_two row";

    rowOne.appendChild(columnOne);
    rowOne.appendChild(columnTwo);
    rowTwo.appendChild(columnThree);
    rowTwo.appendChild(columnFour);

    container.className = "resume_container container-fluid";

    container.appendChild(rowOne);
    container.appendChild(rowTwo);

    this.MainResume.appendChild(container);
  }

  renderResume() {
    this.backInYearsStory();
    this.resumeStatus();
  }
}
