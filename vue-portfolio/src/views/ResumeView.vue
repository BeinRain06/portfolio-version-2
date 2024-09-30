<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'

const moreBtn: Ref<(HTMLDivElement | undefined)[] | undefined> = ref()

const sideElectrical = reactive({
  projects: [
    {
      id: 'elec_one',
      name: 'VACON NXP',
      subject: ' Elaborative maintenance guide for Vacon NXP Frequency Converter',
      duty: 'Come up with an elaborative maintenance manual to prevent Vacon Converter from unexpected failures caused by lack of parameters watch',
      logo: 'Converter',
      moreLabel: 'more infos',
      moreElt: [
        {
          num: '1',
          approach: 'Be Familiar withcon VACON NXP'
        },
        {
          num: '2',
          approach: 'Learn about automation with AC/DC Converter'
        },
        {
          num: '3',
          approach: 'Implement preventive maintenance'
        }
      ]
    },
    {
      id: 'elec_two',
      name: 'System Cut Back',
      subject:
        'rehabilitation of one wire system distribution diagram for thermic tank from System Cut Back Cameroun company',
      duty: 'Come up with a functional diagram implementing the new new devices technology avilable',
      logo: 'SCBC',
      moreLabel: 'more infos',
      moreElt: [
        {
          num: '1',
          approach: 'reconceptualize electrical diagram schema for heating fuel in tank'
        },
        {
          num: '2',
          approach: 'upgrade electrical scheme according to new sensor, or coil available'
        },
        {
          num: '3',
          approach:
            'pack solution as a curative maintenance for efficiency of tank heating system like in the past'
        }
      ]
    }
  ]
})

const sideSelfDev = reactive({
  projects: [
    {
      id: 'dev_one',
      name: 'Reactjs-Context API',
      subject: ' Word-letters-Game',
      duty: 'guess the word hidden by the computer between 08 to 10 letters ',
      link: 'https://words-letters-game.vercel.app/',
      logo: 'word-letters',
      moreLabel: 'more infos',
      moreElt: [
        {
          num: '1',
          approach: 'select game template between 08 to 10 characters '
        },
        {
          num: '2',
          approach:
            'color indice for letter, red(not the right  in this case), yellow(occured many times in this case right or not), green(right in this case) '
        },
        {
          num: '3',
          approach: 'Game Over. You can restart the Game'
        }
      ]
    },
    {
      id: 'dev_two',
      name: 'MERN App',
      subject: 'Tds Restaurant',
      duty: 'Online app foods. Order ready traditiononal cooked foods at home',
      link: 'https://github.com/BeinRain06/Tds_Restaurant_three',
      logo: 'Tds',
      moreLabel: 'more infos',
      moreElt: [
        {
          num: '1',
          approach: 'can order dishes between 04 categories(meats, desserts, vegetarians, seafoods)'
        },
        {
          num: '2',
          approach: 'have the right to order and track at most three order at the same time'
        },
        {
          num: '3',
          approach: 'have the ability to rate dishes'
        }
      ]
    },

    {
      id: 'dev_three',
      name: 'MEVN App',
      subject: 'Blog-app Tech',
      duty: 'Blog about new culture, technologies and trend in I.T',
      link: 'https://github.com/BeinRain06/blog-app-tech',
      logo: 'BlogPinia',
      moreLabel: 'more infos',
      moreElt: [
        {
          num: '1',
          approach: 'createa/login to an account as admin or not'
        },
        {
          num: '2',
          approach: 'create/edit a post page if you are the author'
        },
        {
          num: '3',
          approach: 'filter post by author, by theme '
        }
      ]
    }
  ]
})

const frameworkBase = reactive({
  inside: [
    {
      id: 'framework_one',
      yearProject: '2023',
      techFeatures: 'REACTJs with Context API data management',
      techDetailOne: 'Use Typescript for easy and not confusing type variables declaration',
      techDetailTwo: 'Use Context API Hook with react for data app management'
    },
    {
      id: 'framework_two',
      yearProject: '2024',
      techFeatures: 'MongoDB-Express-React-Node Js (M.E.R.N App) - Full stack app based',
      techDetailOne: 'ExpressJs - NodeJs  for backend development',
      techDetailTwo: 'Mongo DataBase for data app management'
    },
    {
      id: 'framework_three',
      yearProject: '2024',
      techFeatures: 'MongoDB-Express-Vue-Node Js (M.E.V.N App) - Full stack app based',
      techDetailOne: 'ExpressJs - NodeJs  for backend development',
      techDetailTwo: 'VueJs 3 framework for front-end UI design'
    },
    {
      id: 'framework_four',
      yearProject: '2024',
      techFeatures: 'React Native',
      techDetailOne: ' mobile app to ease communication within a small enterprize',
      techDetailTwo: 'in progress ...'
    }
  ]
})

const sideElecProjects: ComputedRef<
  {
    id: string
    name: string
    subject: string
    duty: string
    logo: string
    moreLabel: string
    moreElt: {
      num: string
      approach: string
    }[]
  }[]
> = computed(() => {
  const sidePro = sideElectrical.projects
  return sidePro
})

const frameTechnologies: ComputedRef<
  {
    id: string
    yearProject: string
    techFeatures: string
    techDetailOne: string
    techDetailTwo: string
  }[]
> = computed(() => {
  const frameTech = frameworkBase.inside
  return frameTech
})

const selfDevProjects: ComputedRef<
  {
    id: string
    name: string
    subject: string
    duty: string
    link: string
    logo: string
    moreLabel: string
    moreElt: {
      num: string
      approach: string
    }[]
  }[]
> = computed(() => {
  const sideDev = sideSelfDev.projects
  return sideDev
})

function playMoreElecInfoContent(i: string) {
  /*  const btnTarget: (HTMLDivElement | undefined)[] | (undefined )) = moreBtn.value[+i]; */

  console.log('moreBtn :', moreBtn)

  if (moreBtn.value[+i]?.classList.contains('active_info')) {
    moreBtn.value[+i]?.classList.remove('active_info')
  } else {
    moreBtn.value[+i]?.classList.add('active_info')
  }
}
</script>

<template>
  <section id="resume_page">
    <div class="resume_domain">
      <!-- years story -->
      <div class="story_container p-1">
        <div
          class="story_enroll w-100 p-2 mx-auto d-flex flex-column justify-content-center align-items-center"
        >
          <div class="title_story">
            <h4 class="font_Cabin_500"><strong>Summary</strong></h4>
          </div>
          <div class="story_wrap d-flex justify-content-center">
            <p class="story_content font_Open_Sans_400 pt-4">
              Hye Guys! My Name is NGOUEND RAOUL GERARD and i really glad to meet you. Back in my
              Three years University. I study basics electrical and automation engineering,
              obtaining an <span>associate's degree</span> after two years and a
              <span>bacheloror in Electrotechnics</span> in the end years. I successfully work on
              the field for quite plenty 07 years after that, though didn't manage to become an
              electrical engineering. During this course i loved dive in subject related with
              automation , having difficulties to have an internship in enterprize with some good
              automation devices. I turn myself to learn a subject that is quite familiar and that
              can be accessible at low cost or obviously let'say some kind of free. Then i dive into
              coding since 03 years , having made some side projects to master fundamentals skills
              of web developments. This is a delight to share them with others crews on the field
              web development from front-end development to full-stack dev.
            </p>
          </div>
        </div>
      </div>

      <!-- resume container-->
      <div class="resume_container container-fluid">
        <div class="resume_row_one row">
          <!-- primar education -->
          <div class="primar_education w-100 my-2">
            <div class="primar_title_wrapper">
              <div class="edu_former justify-self-center">
                <h5 class="education_title font_Satisfy my-2">Education</h5>
              </div>
            </div>
            <div
              class="primar_education_content d-flex flex-column justify-center items-center gap-2"
            >
              <table class="primar_table">
                <tbody class="w-100">
                  <tr class="academic_primar_year py-1">
                    <td>
                      <span class="p-1">2010-2012</span>
                    </td>
                  </tr>
                  <tr class="primar_table_row p-4">
                    <td class="school_certificate w-70 mx-auto">
                      <div
                        class="w-100 d-flex flex-column justify-content-center align-items-center gap-2 md: flex-row"
                      >
                        <span class="text-success fw-bold">D.U.T </span>
                        <span>( Diplome Universitaire de Technologie/ Associate's Degree )</span>
                      </div>
                    </td>
                  </tr>
                  <tr class="primar_table_row p-4">
                    <td class="my_department w-70 my-0 mx-auto">
                      <div
                        class="w-100 d-flex flex-column justify-content-center align-items-center md: flex-row"
                      >
                        <span class="school_name cabin-500 fw-bolder m-0" style="color: #333">
                          G.E.I.I
                        </span>
                        <span>
                          (Genie Electrique et Informatique Industrielle/Industrial Automation And
                          Electrical Engineering)</span
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="primar_table_row p-4">
                    <td class="info_tech_content">
                      <div
                        class="d-flex flex-column justify-content-center align-items-center gap-1 md: flex-row"
                      >
                        <span class="text-success">University of Douala/I.U.T</span>
                        <span> Douala Carrefour Ange Raphaël ·+237 2 33 40 11 28</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="primar_table">
                <tbody class="w-100">
                  <tr class="academic_primar_year py-1">
                    <td>
                      <span class="p-1">2010-2012</span>
                    </td>
                  </tr>
                  <tr class="primar_table_row p-4">
                    <td class="school_certificate w-70 mx-auto">
                      <div
                        class="w-100 d-flex flex-column justify-content-center align-items-center gap-2 md: flex-row"
                      >
                        <span class="text-success fw-bold">E.T </span>
                        <span
                          >( Licence en Electrotechnique/ Bachelor in Electrotechnics science)</span
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="primar_table_row p-4">
                    <td class="my_department w-70 my-0 mx-auto">
                      <span class="school_name cabin-500 fw-bolder m-0" style="color: #333">
                        E.T: ElectroTechnics</span
                      >
                    </td>
                  </tr>
                  <tr class="primar_table_row p-4">
                    <td class="info_tech_content">
                      <div
                        class="d-flex flex-column justify-content-center align-items-center gap-1 md: flex-row"
                      >
                        <span class="text-success">University of Dschang/IUC </span>
                        <span> Colline de Foto · +237 233 45 13 81</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- experiences -->
          <div class="experience_duty w-100 my-2">
            <div class="primar_title_wrapper my-4">
              <div class="edu_former justify-self-center">
                <h5 class="experience_title font_Satisfy my-2">Experiences</h5>
              </div>
            </div>

            <div class="experience_wrap">
              <div
                class="experience_ct w-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="experience_sample flex_col_center">
                  <div class="experience_sample_title text_size_one">
                    <span class="fw-bold text-lg">EXPERIENCE PROFESSIONELLE / WORK EXPERIENCE</span>
                  </div>
                  <div class="experience_sample_content w-100 margin_exp_sample text_size_one">
                    <div class="company_base w-100">
                      <span class="years_intern my-2 fw-bold text-success">2013 -2014</span>
                      <div class="company_reference my-1">
                        <span class="w-full fw-bold">
                          CAMINSER (CAMEROUN INDUSTRIES SERVICES) S.A.R.L · BP 3483 Douala
                        </span>
                      </div>
                      <ul class="experience_tasks flex_col_center py-2 px-4">
                        <li class="w-100">Install Electrical devices for customers clients</li>
                        <li class="w-100">
                          Design Electrical schemes for electrical gas station board
                        </li>
                      </ul>
                    </div>
                    <div class="experience_projects px-1">
                      <span class="fw-bold">SIDE PROJECTS</span>
                      <div class="projects_list w-100 mt-3">
                        <div
                          class="project_card"
                          :key="project.id"
                          v-for="(project, i) in sideElecProjects"
                        >
                          <ul class="project_box flex flex-column w-100" style="list-style: none">
                            <li class="w-100">
                              <div class="img_card_work">
                                <span
                                  class="w-100 h-100"
                                  style="display: grid; place-items: center"
                                  >{{ project.name }}</span
                                >
                              </div>
                            </li>
                            <li class="project_content text_size_one mt-3">
                              <span class="title_project fw-bold">
                                {{ project.subject }}
                              </span>
                              <p class="gen_purpose">
                                {{ project.duty }}
                              </p>
                            </li>
                            <li
                              class="project_logo_wrap w-100 d-flex flex justify-content-center align-items-center"
                            >
                              <div class="project_logo text_size_three">{{ project.logo }}</div>
                            </li>
                            <li class="more_info_elt">
                              <div
                                class="more_info_wrap"
                                ref="moreBtn"
                                @click="() => playMoreElecInfoContent(`${i}`)"
                              >
                                <span>{{ project.moreLabel }}</span>
                                <div class="more_info_symbol">&raquo;</div>
                              </div>
                            </li>
                          </ul>

                          <div class="more_content_wrap text_size_three w-100 my-2">
                            <div class="entitled_more py-2">
                              <span class="font_Satisfy">Expectations</span>
                            </div>
                            <ul class="more_content_ct p-0 mt-2">
                              <li
                                class="entity_more flex_col_center w-100 p-1 justify-content-center mx-auto"
                              >
                                <div class="entity_box_number my-2">
                                  <div class="triangular_base_box">
                                    <div class="entity_number">{{ project.moreElt[0].num }}</div>
                                  </div>
                                </div>
                                <div class="entity_text">
                                  <p class="entity_text_paragraph text-center">
                                    {{ project.moreElt[0].approach }}
                                  </p>
                                </div>
                              </li>
                              <li
                                class="entity_more flex_col_center w-100 p-1 justify-content-center mx-auto"
                              >
                                <div class="entity_box_number my-2">
                                  <div class="triangular_base_box">
                                    <div class="entity_number">{{ project.moreElt[1].num }}</div>
                                  </div>
                                </div>
                                <div class="entity_text">
                                  <p class="entity_text_paragraph text-center">
                                    {{ project.moreElt[1].approach }}
                                  </p>
                                </div>
                              </li>
                              <li
                                class="entity_more flex_col_center w-100 p-1 justify-content-center mx-auto"
                              >
                                <div class="entity_box_number my-2">
                                  <div class="triangular_base_box">
                                    <div class="entity_number">{{ project.moreElt[2].num }}</div>
                                  </div>
                                </div>
                                <div class="entity_text">
                                  <p class="entity_text_paragraph text-center">
                                    {{ project.moreElt[2].approach }}
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="experience_sample_content w-100 margin_exp_sample text_size_one">
                    <div class="company_base w-100">
                      <span class="years_intern my-2 fw-bold text-success">2014 -2019</span>
                      <div class="company_reference my-1">
                        <span class="w-full fw-bold"> SELF ELECTRICAL ENTREPRENEUR </span>
                      </div>
                      <ul class="experience_tasks flex_col_center py-2 px-4">
                        <li class="w-100">Install Electrical devices for customers clients</li>
                        <li class="w-100">2D electrical distribution diagram</li>
                        <li class="w-100">single-line electrical distribution diagram</li>
                      </ul>
                      <div
                        class="side_dream w-100 d-flex flex-column justify-content-start align-items-left gap-2"
                      >
                        <span class="fw-bold">side commitment</span>
                        <p>
                          attend more than 03 times to pass exam for
                          <span class="fw-bold">polytechnic of Yaounde</span> as an aspiring
                          electrical engineer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="experience_sample_content w-100 margin_exp_sample text_size_one">
                    <div class="company_base w-100">
                      <span class="years_intern my-2 fw-bold text-success">2021</span>
                      <div class="company_reference my-1">
                        <span class="w-full fw-bold">
                          SEAT (SYSTEME ENERGIE & APPLICATION TECHNIQUE) S.A.R.L · BP 16508 Douala
                        </span>
                      </div>
                      <ul class="experience_tasks flex_col_center py-2 px-4">
                        <li class="w-100">
                          Install Electrical devices for new built infrastructures - akwa
                        </li>
                        <li class="w-100">Install Electrical devices for hotels</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--HERE WE ARE -->

                <div class="experience_sample flex_col_center">
                  <div class="experience_sample_title text_size_one">
                    <span class="fw-bold text-lg">SELF TAUGHT DEVELOPMENT</span>
                  </div>
                  <div class="experience_sample_content w-100 margin_exp_sample text_size_one">
                    <div
                      class="framework_base w-100"
                      :key="framework.id"
                      v-for="framework in frameTechnologies"
                    >
                      <span class="years_intern my-2 fw-bold text-success">{{
                        framework.yearProject
                      }}</span>
                      <div class="company_reference my-1">
                        <span class="w-full fw-bold">
                          {{ framework.techFeatures }}
                        </span>
                      </div>
                      <ul class="experience_tasks flex_col_center py-2 px-4">
                        <li class="w-100">
                          {{ framework.techDetailOne }}
                        </li>
                        <li class="w-100">
                          {{ framework.techDetailTwo }}
                        </li>
                      </ul>
                    </div>
                    <div class="experience_projects px-1 margin_exp_sample_self">
                      <span class="fw-bold">SIDE PROJECTS</span>
                      <div class="projects_list w-100 mt-3">
                        <div
                          class="project_card"
                          :key="project.id"
                          v-for="(project, i) in selfDevProjects"
                          :data-cardself="i"
                        >
                          <ul class="project_box flex flex-column w-100" style="list-style: none">
                            <li class="w-100">
                              <div class="img_card_work">
                                <span
                                  class="w-100 h-100 d-flex justify-content-center align-items-center"
                                  >{{ project.name }}</span
                                >
                              </div>
                            </li>
                            <li class="project_content text_size_one mt-3">
                              <span class="title_project fw-bold">
                                {{ project.subject }}
                              </span>
                              <p class="gen_purpose">
                                {{ project.duty }}
                              </p>
                              <a
                                :href="project.link"
                                class="gen_link"
                                style="color: #4e6e97; font-weight: bold; transform: skewX(-3deg)"
                                >{{ project.link }}</a
                              >
                            </li>
                            <li
                              class="project_logo_wrap w-100 d-flex flex justify-content-center align-items-center"
                            >
                              <div class="project_logo text_size_three">{{ project.logo }}</div>
                            </li>
                            <li class="more_info_elt">
                              <div
                                class="more_info_wrap"
                                ref="moreBtn"
                                @click="() => playMoreElecInfoContent(`${i}`)"
                              >
                                <span>{{ project.moreLabel }}</span>
                                <div class="more_info_symbol">&raquo;</div>
                              </div>
                            </li>
                          </ul>

                          <div class="more_content_wrap text_size_three w-100 my-2">
                            <div class="entitled_more py-2">
                              <span class="font_Satisfy">Expectations</span>
                            </div>
                            <ul class="more_content_ct p-0 mt-2">
                              <li
                                class="entity_more flex_col_center w-100 p-1 justify-content-center mx-auto"
                              >
                                <div class="entity_box_number my-2">
                                  <div class="triangular_base_box">
                                    <div class="entity_number">{{ project.moreElt[0].num }}</div>
                                  </div>
                                </div>
                                <div class="entity_text">
                                  <p class="entity_text_paragraph text-center">
                                    {{ project.moreElt[0].approach }}
                                  </p>
                                </div>
                              </li>
                              <li
                                class="entity_more flex_col_center w-100 p-1 justify-content-center mx-auto"
                              >
                                <div class="entity_box_number my-2">
                                  <div class="triangular_base_box">
                                    <div class="entity_number">{{ project.moreElt[1].num }}</div>
                                  </div>
                                </div>
                                <div class="entity_text">
                                  <p class="entity_text_paragraph text-center">
                                    {{ project.moreElt[1].approach }}
                                  </p>
                                </div>
                              </li>
                              <li
                                class="entity_more flex_col_center w-100 p-1 justify-content-center mx-auto"
                              >
                                <div class="entity_box_number my-2">
                                  <div class="triangular_base_box">
                                    <div class="entity_number">{{ project.moreElt[2].num }}</div>
                                  </div>
                                </div>
                                <div class="entity_text">
                                  <p class="entity_text_paragraph text-center">
                                    {{ project.moreElt[2].approach }}
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="resume_row_two row">
          <!-- self taught cursus -->
          <div class="self_taught_cursus">
            <div class="edu_former">
              <h5 class="education_title font_Satisfy my-2">Self Taught Developer</h5>
            </div>
            <div class="w-100 d-flex justify-content-start relative">
              <span class="about_journey font_Satisfy">Journey</span>
            </div>
            <ul class="flash_resume w-100">
              <li class="skill_label font_Cabin_500"><span class="p-1">CSS</span></li>
              <li class="period_works"><span class="duration_times">03 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >October 2021 - January 2022</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label font_Cabin_500"><span class="p-1">Javascript</span></li>
              <li class="period_works"><span class="duration_times">06 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >February 2022 - July 2022</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label font_Cabin_500">
                <span class="p-1">Vanilla Javascript</span>
              </li>
              <li class="period_works"><span class="duration_times">02 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >October 2022 - December 2022</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label font_Cabin_500"><span class="p-1">React JS</span></li>
              <li class="period_works"><span class="duration_times">06 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >January 2023 - June 2023</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label font_Cabin_500"><span class="p-1">Bootstrap</span></li>
              <li class="period_works"><span class="duration_times">01 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >September 2023 - October 2023</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label font_Cabin_500">
                <span class="text_size p-1">React, -Bootstrap, - styled-components, - BackEnd</span>
              </li>
              <li class="period_works"><span class="duration_times">05 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >November 2023 - March 2024</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label font_Cabin_500"><span class="p-1">Tailwind CSS</span></li>
              <li class="period_works"><span class="duration_times">01 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >April 2024 - May 2024</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label font_Cabin_500"><span class="p-1">VueJS</span></li>
              <li class="period_works"><span class="duration_times">02 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >May 2024 - June 2024</span
                >
              </li>
            </ul>
          </div>
          <!-- language mastery -->
          <div class="language_mastering mt-4">
            <div class="lan_former">
              <h5 class="language_title font_Satisfy p-1 my-2 mx-4">Language</h5>
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
                <span class="language_text_enum lan_enum">English</span>
                <div class="language_text_level lan_level w-100 d-flex justify-content-between">
                  <span> written</span>
                  <span> spoken (mid)</span>
                </div>
              </div>
            </div>
            <div class="language_potential_desk">
              <div class="taught_language_one">
                <ul
                  class="essence_lan d-flex flex-column justify-content-center align-items-center gap-2"
                >
                  <li class="m-0">French :</li>
                  <li
                    class="lan_square_list w-50 mx-auto p-1 d-flex justify-content-center gap-1 md:gap-4"
                  >
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                  </li>
                  <li class="level_lan">Full-Professionnal</li>
                </ul>
              </div>

              <div class="taught_language_two">
                <ul
                  class="essence_lan d-flex flex-column justify-content-center align-items-center gap-2"
                >
                  <li class="m-0">English :</li>
                  <li
                    class="lan_square_list w-50 mx-auto p-1 d-flex justify-content-center gap-1 md:gap-4"
                  >
                    <div class="lan_square_item active_square"></div>
                    <div class="lan_square_item active_square"></div>
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                  </li>
                  <li class="level_lan">Intermediarie-Professionnal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
li.no_list_style {
  list-style: none;
}

.font_Satisfy {
  font-family: 'Satisfy', cursive;
  font-weight: 400;
  font-style: normal;
}

.font_Garamond_400 {
  font-family: 'EB Garamond', serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.font_Cabin_500 {
  font-family: 'Cabin', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
}

.font_Open_Sans_400 {
  font-family: 'Open Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
}

.text_size {
  font-size: 12px;
}

.text_size_one {
  font-size: calc(11px + 0.15vw);
}

.text_size_two {
  font-size: calc(12px + 0.25vw);
}

.text_size_three {
  font-size: calc(14px + 0.3vw);
}

.margin_exp_sample {
  margin: 0.5rem auto;
}

.margin_exp_sample_self {
  margin: 2.5rem auto 0;
}
.lan_enum {
  padding: 0 0.25rem;
  color: #505050;
  font-size: calc(13px + 0.15vw);
  font-weight: bold;
}

.lan_level {
  padding: 0 0.25rem;
  color: #444;
  font-size: calc(12px + 0.3vw);
}

.edu_former {
  width: 12rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 128, 0.705);
  display: flex;
  justify-content: center;
}

.lan_former {
  width: 12rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 128, 0.705);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.language_mastering .language_title {
  width: 8rem;
}

@media (min-width: 160px) {
  .flex_col_center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /*resume_wrapper*/
  .resume_domain {
    position: relative;
    left: 0;
    width: 100vw;
    padding: 0.5rem 1rem 1rem;
    margin: 0 auto;
    background-color: #f4f4f4;
  }

  /* Summary */
  .story_container {
    display: none;
    position: relative;
    width: 100%;
    max-width: 950px;
    margin: 0.25rem auto 4rem;
  }

  .title_story {
    width: 200px;
    padding: 0.25rem 1rem;
    margin: 1rem 0;
    color: #fff;
    background-color: #c4c1c1;
    text-align: center;
  }

  .title_underlined {
    font-size: calc(15px + 0.3vw);
    text-decoration: underline;
  }

  .story_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    line-height: 1.5;
    font-size: calc(14px + 0.2vw);
    text-align: justify;
  }

  /*software cursus*/

  .resume_container {
    position: relative;
    top: 0.25rem;
    width: 100%;
    padding: 0;
    margin: 2rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }

  /* --> primary education */
  .primar_education_content {
    width: 86%;
    margin: 2rem auto 1rem;
  }

  .primar_title_wrapper {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .primar_table {
    width: 100%;
    min-height: 200px;
    padding: 0.5rem 1rem;
    margin: 1.5rem 0;
    background-color: #e0e0e0;
  }

  .academic_primar_year {
    color: #d3d0d0;
    background-color: #34803b;
    font-weight: bold;
  }

  .primar_table_row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    font-size: calc(12px + 0.35vw);
  }

  .primar_table_row .info_tech_title {
    width: 5rem;
    padding: 0;
    margin-right: 1rem;
    color: #4f4f52;
    font-weight: bold;
  }

  .primar_table_row .info_tech_content {
    width: 100%;
    padding: 0 0.5rem;
  }
  /* <-- primary education */

  /* --> self-taught cursus */
  .self_taught_cursus {
    width: 100vw;
    padding: 0.5rem 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .primar_education .education_title,
  .experience_duty .experience_title,
  .self_taught_cursus .education_title,
  .language_mastering .language_title {
    width: 100%;
    padding: 0.35rem 0.25rem;
    color: #fff;
    background-color: rgb(200, 200, 205);
    font-size: calc(15px + 0.15vw);
    text-align: center;
  }

  .self_taught_cursus .about_journey {
    width: 100%;
    position: relative;
    top: 1rem;
    left: 1rem;
    color: #333;
    padding: 0.5rem 0;
    margin: 1.5rem 0;
    font-size: calc(13px + 0.25vw);
  }

  .self_taught_cursus .flash_resume {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .self_taught_cursus .flash_resume:nth-child(odd) {
    background-color: #e6ebfc;
  }
  .self_taught_cursus .flash_resume:nth-child(even) {
    background-color: #eee;
  }

  .flash_resume .skill_label {
    width: 10rem;
    color: #bdbdbd;
    list-style: square;
    text-align: center;
    font-size: calc(12px + 0.15vw);
  }

  .flash_resume .period_works {
    list-style: circle;
    padding: 0.15rem 0.35rem;
    margin: 0;
    text-align: center;
  }

  .period_works .duration_times {
    padding: 0.25rem;
    color: #fff;
    background-color: rgb(187, 102, 154);
    font-size: calc(10px + 0.15vw);
    border-radius: 3px;
  }

  .period_works .specific_date {
    font-size: calc(11px + 0.25vw);
    font-weight: bold;
  }
  /* <-- self-taught cursus */

  /* --> experience section */
  .experience_sample {
    width: 100%;
    padding: 0.5rem;
  }

  .company_base {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 0 auto;
  }

  .company_base .experience_tasks {
    width: 100%;
    list-style: square;
    gap: 0.5rem;
  }

  .project_card .project_box .img_card_work,
  .project_card .project_box .project_logo_wrap {
    font-family: 'Poetsen One', sans-serif;
    font-style: normal;
    font-size: var(--var-font-size);
  }

  .project_box {
    width: 100%;
    padding: 0;
    margin: 0.5rem 0;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 8rem min-content 1rem 1rem;
  }

  .project_box .img_card_work {
    position: relative;
    width: 90%;
    height: 100%;
    margin: 0 auto 0.5rem;
    border-radius: 5px;
    border: 1px solid #333;
  }

  .project_box .img_card_work::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
    margin: 0 auto;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    border: 1px solid #333;
    text-align: center;
    display: grid;
    place-items: center;
  }

  .project_box .project_content {
    width: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project_box .more_info_elt {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .project_card[data-cardself='0'] .img_card_work {
    background: url('../assets/images/projects/mobile-Words-Letters-Game.png') no-repeat center
      center/cover;
    margin: 0.75rem 0 1rem;
    outline: 2px solid #1d831d;
    outline-offset: 4px;
    transition: all 1s ease-in-out;
  }

  .project_card[data-cardself='1'] .img_card_work {
    background: url('../assets/images/projects/tds-retaurant.png') no-repeat center center/cover;
    margin: 0.75rem 0 1rem;
    outline: 2px solid #9c3f88;
    outline-offset: 4px;
    transition: all 1s ease-in-out;
  }

  .project_card[data-cardself='2'] .img_card_work {
    background: url('../assets/images/projects/blog-app-tech.png') no-repeat center center/cover;
    margin: 0.75rem 0 1rem;
    outline: 2px solid #7c929e;
    outline-offset: 4px;
    transition: all 1s ease-in-out;
  }

  .project_card[data-cardself='0'] .img_card_work:hover,
  .project_card[data-cardself='1'] .img_card_work:hover,
  .project_card[data-cardself='2'] .img_card_work:hover {
    color: #fff;
  }

  .project_card[data-cardself='0'] .img_card_work::before,
  .project_card[data-cardself='1'] .img_card_work::before,
  .project_card[data-cardself='2'] .img_card_work::before {
    width: calc(100%);
    height: calc(100%);
    border: 1px solid transparent;
  }

  .more_info_wrap {
    font-size: calc(14px + 0.3vw);
    cursor: pointer;
    display: inline-flex;
    gap: 0.5rem;
    transform: rotateZ(-360deg);
    transition: all 0.45s ease 500ms;
    z-index: 3;
  }

  .more_info_wrap:hover {
    color: #15911b;
    font-weight: bold;
  }

  .more_info_wrap.active_info {
    transform: rotateZ(360deg);
  }

  .more_info_symbol {
    position: relative;
    top: 2px;
    height: 100%;
    margin: 0 0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg);
    z-index: 1;
  }

  .more_info_wrap.active_info .more_info_symbol {
    transform: rotate(-90deg);
  }

  .more_content_wrap {
    width: 100%;
    height: 0;
    padding: 0.25rem;
    visibility: hidden;
    display: grid;
    /*   grid-template-columns: 0; */
    transition: all 1s ease-in-out;
  }

  .more_info_wrap.active_info + .more_content_wrap {
    visibility: visible;
    /*  grid-template-columns: 200px; */
    height: auto;
    transition: all 1.1s ease-in-out;
  }

  .entity_box_number {
    position: relative;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 5px;
    border: 1px solid transparent;
    border-bottom: 2px solid #333;
  }

  .entity_box_number .triangular_base_box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
    background-color: #6e0797;
    border-radius: 5px;
  }

  .entity_box_number .entity_number {
    position: relative;
    top: -2px;
    left: 50%;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-50%) rotate(-45deg);
  }

  /* <-- experience section */

  /* --> language potential  */
  .language_mastering {
    width: 100vw;
    height: 210px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .language_potential_mob {
    width: 100%;
    padding: 1rem 2rem;
    margin: 1.5rem auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*  gap: 0.5rem; */
  }

  .language_potential_desk {
    display: none;
  }
  /* <-- language potential */
}

@media (min-width: 460px) {
  .edu_former {
    width: 20rem;
  }

  .lan_former {
    width: 20rem;
    justify-content: center;
  }

  .language_mastering .language_title {
    width: 18rem;
  }

  .text_size {
    font-size: calc(18px + 0.3vw);
  }

  .story_container {
    width: 94%;
    margin: 2rem auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .primar_education .education_title,
  .experience_duty .experience_title,
  .self_taught_cursus .education_title,
  .language_mastering .language_title {
    width: 80%;
    font-size: calc(20px + 0.35vw);
  }

  /* --> primary education */
  .primar_education_content {
    width: 86%;
    margin: 3.5rem auto 1rem;
  }

  .primar_title_wrapper {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .primar_table {
    width: 100%;
    min-height: 200px;
    padding: 0.5rem 1rem;
    margin: 1.5rem 0;
    background-color: #e0e0e0;
  }

  .primar_table_row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .primar_table_row .info_tech_content {
    width: 72%;
    margin: 0 auto;
  }
  /* <-- primary education */

  /* --> self-taught cursus */
  .self_taught_cursus {
    width: 90vw;
    margin: 0 auto;
  }

  .self_taught_cursus .about_journey {
    font-size: calc(15px + 0.3vw);
  }

  .self_taught_cursus .flash_resume {
    height: 15rem;
  }

  .flash_resume .skill_label {
    width: 40%;
    padding-bottom: 0.5rem;
    font-size: calc(20px + 0.3vw);
  }

  .flash_resume .period_works {
    padding: 0.5rem 0.35rem;
    margin: 1rem 0;
  }

  .period_works .duration_times {
    padding: 0.5rem 0.25rem;
    font-size: calc(14px + 0.2vw);
  }

  .period_works .specific_date {
    font-size: calc(14px + 0.3vw);
  }
  /* <-- self-taught cursus */

  /* --> language potential desk */
  .language_potential_mob {
    display: none;
  }

  .language_potential_desk {
    position: relative;
    top: 2rem;
    width: 100vw;
    height: 130px;
    padding: 0;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    font-size: calc(13px + 0.15vw);
    gap: 0.15rem;
  }

  .taught_language_one,
  .taught_language_two {
    position: relative;
    width: 50%;
    height: 100px;
    margin: 0 auto;
  }

  .taught_language_one .essence_lan {
    width: 210px;
    padding: 0.35rem 0.25rem;
    background-color: #ccd1cd;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
  }

  .taught_language_two .essence_lan {
    width: 210px;
    padding: 0.35rem 0.25rem;
    color: #fff;
    background-color: #6f1277;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
  }

  .taught_language_one .lan_square_item {
    position: relative;
    width: 14px;
    height: 7px;
    border: 1px solid #333;
  }

  .taught_language_two .lan_square_item {
    position: relative;
    width: 14px;
    height: 7px;
    border: 1px solid #e4e4f4;
  }

  .taught_language_one .lan_square_item {
    background-image: linear-gradient(to right top, #103705, #2c6110, #4f8d16, #79bb18, #a8eb12);
  }

  .taught_language_one .lan_square_item:last-child {
    background-color: transparent;
    background-image: none;
  }

  .taught_language_two .lan_square_item.active_square {
    background-image: linear-gradient(to right top, #103705, #2c6110, #4f8d16, #79bb18, #a8eb12);
  }

  .taught_language_two .lan_square_item:nth-child(3)::before {
    content: '';
    position: absolute;
    width: 65%;
    height: 100%;
    background-image: linear-gradient(to right top, #103705, #2c6110, #4f8d16, #79bb18, #a8eb12);
  }

  /* <-- language potential desk */
}

@media (min-width: 768px) {
  .text_size_one {
    font-size: calc(13px + 0.1vw);
  }
  .text_size_three {
    font-size: calc(14px + 0.15vw);
  }

  .margin_exp_sample {
    margin: 2.5rem auto 0.5rem;
  }

  .edu_former {
    width: 25rem;
  }

  .lan_former {
    width: 25rem;
    margin: 0.5rem auto 2rem;
  }

  .text_size {
    font-size: calc(20px + 0.3vw);
  }

  .story_container {
    margin: 0 auto;
  }

  .resume_domain {
    padding: 4.5rem 1rem 1rem;
  }

  .primar_table_row {
    font-size: calc(14px + 0.25vw);
  }

  .primar_table_row .info_tech_content {
    width: 90%;
    margin: 0 auto;
  }

  /* <-- self-taught cursus */
  .self_taught_cursus {
    width: 86vw;
    max-width: 900px;
    margin: 4rem auto 3rem;
  }

  .self_taught_cursus .about_journey {
    left: 1.5rem;
    font-size: calc(15px + 0.3vw);
  }

  .self_taught_cursus .flash_resume:nth-child(odd) {
    border-left: 0.1rem solid #fccfaa;
    border-right: 0.1rem solid #fccfaa;
  }
  .self_taught_cursus .flash_resume:nth-child(even) {
    border-left: 0.1rem solid #afafafc7;
    border-right: 0.1rem solid #afafafc7;
  }
  /* <-- self-taught cursus */

  .primar_education .education_title,
  .experience_duty .experience_title,
  .self_taught_cursus .education_title,
  .language_mastering .language_title {
    width: 80%;
    height: 3.2rem;
    padding: 0;
    display: grid;
    place-items: center;
  }

  /* --> experiences */

  .experience_wrap {
    width: 88%;

    margin: 0 auto;
  }

  .company_base {
    align-items: left;
    margin: 0;
  }

  .project_box {
    width: 100%;
    padding: 0;
    margin: 1rem 0 0;
    display: grid;
    place-content: center;
    grid-template-columns: 25% 50% 10% 15%;
    grid-auto-rows: 10rem;
    gap: 1rem;
  }

  .project_box .img_card_work {
    position: relative;
    width: 90%;
    height: 100%;
    margin: 0 auto 0.5rem;
    border-radius: 5px;
    border: 1px solid #333;
  }

  .project_box .project_content {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }

  .project_box .project_logo_wrap {
    margin-left: 2rem;
  }

  .project_box .more_info_elt {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .more_info_wrap {
    position: relative;
    right: calc(10%);
    font-size: calc(12px + 0.3vw);
  }

  /* --> language potential desk */
  .language_mastering {
    height: 350px;
  }

  .language_potential_desk {
    width: 90vw;
    max-width: 900px;
    justify-content: space-between;
    font-size: calc(15px + 0.18vw);
    gap: 0.5rem;
  }

  .taught_language_one .essence_lan {
    width: 390px;
  }

  .taught_language_two .essence_lan {
    width: 390px;
  }

  .taught_language_one .lan_square_item {
    position: relative;
    width: 14px;
    height: 7px;
    border: 1px solid #333;
  }

  .taught_language_two .lan_square_item {
    position: relative;
    width: 14px;
    height: 7px;
    border: 1px solid #e4e4f4;
  }
  /* <-- language potential desk */
}
</style>
