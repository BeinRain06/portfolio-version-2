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

    columnOne.className = "title_story";

    columnOne.style.width = "200px";

    columnOne.innerHTML = `<h4 class=" font_Cabin_500" ><strong>Summary</strong></h4>`;
    columnTwo.className = "story_wrap w-100 d-flex  justify-content-center";
    columnTwo.innerHTML = `
    <p class="story_content font_Open_Sans_400" >
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
    const columnThree = document.createElement("div") as HTMLDivElement;
    const columnFour = document.createElement("div") as HTMLDivElement;

    columnOne.className = "primar_education w-100 my-2";

    columnOne.innerHTML = `
      <div class="primar_title_wrapper"><div class="edu_former justify-self-center"><h5 class="education_title font_Satisfy my-2">Education</h5></div></div>
      <div class="primar_education_content flex flex-col justify-center items-center">
        <table class="primar_table ">
          <tbody class="w-100">
            <tr class="academic_primar_year py-1">
              <td>
                <span class="p-1">2010-2012</span>
              </td>
            </tr>
            <tr class="primar_table_row">
              <td class="my_school w-80 d-flex justify-content-center align-items-center px-2 gap-2 my-0 mx-auto" style=" font-size:calc(15px + 0.12vw);> 
              <span class="school_title fw-bold gap-1">School :</span>
              <span class="school_name cabin-500 fw-bolder" style="color:#333;"> Technology University Institute (I.U.T - Douala)</span>
              </td>
            </tr>
            <tr class="primar_table_row">
              <th class="info_tech_title">
                Field
              </th>
              <td class="info_tech_content">
                <span>Industrial Automation And Electrical Engineering (G.E.I.I)</span>
                <span>( Genie Electrique et Informatique Industrielle )</span>
              </td>
            </tr>
            <tr class="primar_table_row">
              <th class="info_tech_title">
                Certificate
              </th>
              <td class="info_tech_content">
                <span>University Technology Diploma :</span>
                <span>Option Industrial Automation And Electrical Engineering</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="primar_table">
          <tbody class="w-100">
           <tr class="academic_primar_year">
             <td><span class="p-1">2012-2013</span></td>
           </tr>
            <tr class="primar_table_row">
              <td class="my_school w-80 d-flex justify-content-center align-items-center px-2 gap-2 my-0 mx-auto" style=" font-size:calc(15px + 0.12vw);> 
              <span class="school_title fw-bold">School :</span>
              <span class="school_name cabin-500 fw-bolder" style="color:#333;"> Coast University Institute (I.U.C - Douala)</span>
              </td>
            </tr>
            <tr class="primar_table_row">
              <th class="info_tech_title">
                Field
              </th>
              <td class="info_tech_content">
                <span>ElectroTechnics</span>
              </td>
            </tr>
            <tr class="primar_table_row">
              <th class="info_tech_title">
                Certificate
              </th>
              <td class="info_tech_content">
                <span>Professionnal University 3rd Degree in Electsrotechnics</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    columnTwo.className = "experience_duty w-100 my-2";

    columnTwo.innerHTML = `
      <div class="primar_title_wrapper my-4"><div class="edu_former justify-self-center"><h5 class="experience_title font_Satisfy my-2">Experiences</h5></div></div>
    `;

    columnThree.className = "self_taught_cursus";

    columnThree.innerHTML = `
    <div class=" edu_former"><h5 class="education_title font_Satisfy my-2">Self Taught Developer</h5></div>
    <div class="w-100 d-flex justify-content-start relative">
       <span class= "about_journey font_Satisfy ">Journey</span>
    </div>
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

    columnFour.className = "language_mastering mt-4";

    columnFour.innerHTML = `
    <div class="lan_former">
      <h5 class="language_title font_Satisfy  p-2 my-2 mx-4">Language</h5>
    </div>
     <div class="language_potential_mob">
        <div class="language_specific w-100">
        <span class="language_text_enum lan_enum">French</span>
        <div class="language_text_level lan_level w-100 d-flex justify-content-between">
          <span> written</span>
          <span>spoken</span>
        </div>
      </div>

      <div class="language_specific w-100">
        <span  class="language_text_enum lan_enum" >English</span>
        <div class="language_text_level lan_level w-100 d-flex justify-content-between">
           <span> written</span>
            <span> spoken (mid)</span>
        </div>
      </div>
     </div>
     <div class= "language_potential_desk">
       <div class="taught_language_one">
         <ul class="essence_lan d-flex flex-column justify-content-center align-items-center gap-2">
           <li class="m-0"> French :</li>
           <li class="lan_square_list w-50 mx-auto p-1 d-flex justify-content-center gap-1 md:gap-4">
             <div class="lan_square_item "></div>
             <div class="lan_square_item"></div>
             <div class="lan_square_item"></div>
             <div class="lan_square_item"></div>
             <div class="lan_square_item"></div>
           </li>
           <li class="level_lan" >Full-Professionnal</li>
         </ul>
       </div>

       <div class="taught_language_two">
         <ul class="essence_lan d-flex flex-column justify-content-center align-items-center gap-2">
           <li class="m-0"> English :</li>
           <li class="lan_square_list w-50 mx-auto p-1 d-flex justify-content-center gap-1 md:gap-4">
             <div class="lan_square_item active_square"></div>
             <div class="lan_square_item active_square"></div>
             <div class="lan_square_item"></div>
             <div class="lan_square_item"></div>
             <div class="lan_square_item"></div>
           </li>
           <li class="level_lan" >Intermediarie-Professionnal</li>
         </ul>
       </div>
       
     </div>
    `;

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
