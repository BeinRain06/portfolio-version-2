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
      "story_enroll row w-100 d-flex flex-column justify-content-center align-items-center ";

    columnOne.className = "title_story  text-center mt-3";
    columnOne.innerHTML = `<h4 class="title_underlined font_Cabin_500" >Summary</h4>`;
    columnTwo.className = "story_wrap";
    columnTwo.innerHTML = `
    <p class="story_content font_Open_Sans_400 d-flex  justify-content-center" >
        About 02 years and half, developed skills in ReactJS, TypeScript, and Vanilla JS. React Context API tease me to build easy app storing data under the client side. NodeJS and Express improve this experience at the time surrounded with the external database tool MonGoDB. MonGoDB then along with Json web token on the fire allows me to tackle area of user Authentication under credentials mostly needed effective  inside website application. Here one of our goal is being able to be skilled enough to push out many prototypes that can serve as sample on new products developments. Years Earlier have been working in electrical field especially area of house wiring.       
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

    columnOne.className = "self_taught_cursus";

    columnOne.innerHTML = `
    <div class=" edu_former"><h5 class="education_title font_Satisfy my-2">Education</h5></div>
    <span class= "about_journey w-100 font_Satisfy h6 py-2">Self-taught developer</span>
    <ul class="flash_resume w-100"> 
       <li class="skill_label font_Cabin_500"><span class="p-1 ">CSS</span></li>
       <li class="period_works"><span class="duration_times">03 months</span></li>
        <li class="period_works"><span class="specific_date no_list_style font_Open_Sans_400">October 2021 - January 2022</span></li>
    </ul>
    <ul class="flash_resume w-100">
       <li class="skill_label font_Cabin_500"><span class="p-1 ">Javascript</span></li>
       <li class="period_works"><span class="duration_times">06 months</span></li>
        <li class="period_works"><span class="specific_date no_list_style font_Open_Sans_400">February 2022 - July 2022</span></li>
    </ul>
    <ul class="flash_resume w-100">
       <li class="skill_label font_Cabin_500"> <span class="p-1 ">Vanilla Javascript</span></li>
       <li class="period_works"> <span class="duration_times">02 months</span></li>
        <li class="period_works "><span class="specific_date no_list_style font_Open_Sans_400">October 2022 - December 2022</span></li>
    </ul>
    <ul class="flash_resume w-100">
       <li class="skill_label font_Cabin_500"> <span class="p-1 ">React JS</span></li>
       <li class="period_works"><span class="duration_times">06 months</span></li>
        <li class="period_works"><span class="specific_date no_list_style font_Open_Sans_400">January 2023 - June 2023</span></li>
    </ul>
    <ul class="flash_resume w-100">
       <li class="skill_label font_Cabin_500"><span class="p-1 ">Bootstrap</span></li>
       <li class="period_works"><span class="duration_times">01 months</span></li>
        <li class="period_works"> <span class="specific_date no_list_style font_Open_Sans_400">September 2023 - October 2023</span></li>
    </ul>
     <ul class="flash_resume w-100">
       <li class="skill_label font_Cabin_500"><span class="text_size p-1 ">React, -Bootstrap, - styled-components, - BackEnd</span></li>
       <li class="period_works"><span class="duration_times">05 months</span></li>
        <li class="period_works"><span class="specific_date no_list_style font_Open_Sans_400">November 2023 - March 2024</span></li>
    </ul>
     <ul class="flash_resume w-100">
       <li class="skill_label font_Cabin_500"><span class="p-1 ">Tailwind CSS</span></li>
       <li class="period_works"><span class="duration_times">01 months</span></li>
        <li class="period_works"> <span class="specific_date no_list_style font_Open_Sans_400">April 2024 - May 2024</span></li>
    </ul>
     <ul class="flash_resume w-100">
      <li class="skill_label font_Cabin_500"><span class="p-1 ">VueJS</span></li>
      <li class="period_works"><span class="duration_times">02 months</span></li>
      <li class="period_works">
        <span class="specific_date no_list_style font_Open_Sans_400">May 2024 - June 2024</span>
      </li>
    </ul>
    `;

    columnTwo.className = "language_mastering mt-4";

    columnTwo.innerHTML = `
    <div class="lan_former">
      <h5 class="language_title font_Satisfy p-2 my-2 mx-auto">Language</h5>
    </div>
      <div class="language_specific">
        <span class="language_text_enum lan_enum">French</span>
        <div class="language_text_level lan_level w-100 d-flex justify-content-between">
          <span> written</span>
          <span>spoken</span>
        </div>
        
      </div>
      <div class="language_specific">
        <span  class="language_text_enum lan_enum" >English</span>
        <div class="language_text_level lan_level w-100 d-flex justify-content-between">
           <span> written</span>
            <span> spoken (mid)</span>
        </div>
       
      </div>
    `;

    rowOne.className = "resume_row_one row";
    rowTwo.className = "resume_row_two row";

    rowOne.appendChild(columnOne);
    rowTwo.appendChild(columnTwo);

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
