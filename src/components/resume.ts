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

    columnOne.className = "title_story  col-xs-2 col-sm-2";
    columnOne.innerHTML = `<h4 class="title_underlined px-2" >STory Telling :</h4>`;
    columnTwo.className = "story_wrap col-10";
    columnTwo.innerHTML = `
    <p class="story_content d-flex  justify-content-center  w-100" >
        10 Years performing on electrical  
        wiring house. Missing creativity and self-work organizing, jump in web development . Lovely community like
        frontendmentor, freeCodeCamp, youtube; continuously resources like MDN Mozilla MDN ,
        w3Schools, StackOverflow, and many else, drives our learning journey in unpredictable but fast roads that we can't imagine.
        I pause to say Thanks You to all these Teams. But litterally creativity is not an aspect that is bound to something or someone. In tha matter we set up will to be part of te game! 
    </p>`;

    row.appendChild(columnOne);
    row.appendChild(columnTwo);
    container.appendChild(row);

    this.MainResume.innerHTML = "";

    this.MainResume.appendChild(container);
  }

  resumeStatus() {
    const container = document.createElement("div") as HTMLDivElement;

    const row = document.createElement("div") as HTMLDivElement;
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

    row.className = "resume_row row";

    row.appendChild(columnOne);
    row.appendChild(columnTwo);
    row.appendChild(columnThree);
    row.appendChild(columnFour);

    container.className = "resume_container container-fluid";

    container.appendChild(row);

    this.MainResume.appendChild(container);
  }

  renderResume() {
    this.backInYearsStory();
    this.resumeStatus();
  }
}
