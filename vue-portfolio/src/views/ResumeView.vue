<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'

const moreElecBtn: Ref<(HTMLDivElement | undefined)[] | undefined> = ref()

const moreSelfBtn: Ref<(HTMLDivElement | undefined)[] | undefined> = ref()

const moreElecCity: Ref<(HTMLDivElement | undefined)[] | undefined> = ref()

const moreSelfCity: Ref<(HTMLDivElement | undefined)[] | undefined> = ref()

const devTitle: Ref<(HTMLDivElement | undefined)[] | undefined> = ref()

const modalVideoRef: Ref<(HTMLDivElement | undefined)[] | undefined> = ref()

const lastVideoRef: Ref<HTMLDivElement | undefined> = ref()

const videoBlurRef: Ref<(HTMLDivElement | undefined)[] | undefined> = ref()

const lastBlurRef: Ref<HTMLDivElement | undefined> = ref()

interface IFrameworkBase {
  inside: {
    id: string
    yearProject: string
    techFeatures: string
    techDetailOne: string
    techDetailTwo: string
  }[]
}

interface IProjects {
  projects: {
    id: string
    name: string
    subject: string
    duty: string
    link?: string
    logo: string
    moreLabel: string
    moreElt: {
      num: string
      approach: string
    }[]
  }[]
}

interface IProjectsSelf {
  projects: {
    id: string
    techno: string
    logo: string
    name: string
    duty: string
    link?: string
    linkVideo?: string
    moreElt: {
      num: string
      approach: string
    }[]
  }[]
}

const sideElectrical: IProjects = reactive({
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

const sideSelfDev: IProjectsSelf = reactive({
  projects: [
    {
      id: 'dev_one',
      techno: 'MEVN App',
      logo: 'BlogPania',
      name: 'BLOG-APP-TECH',
      duty: 'Blog about new culture, technologies and trend in I.T',
      link: 'https://github.com/BeinRain06/blog-app-tech',
      linkVideo: '',
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
    },

    {
      id: 'dev_two',
      techno: 'Reactjs-Context API',
      logo: 'word-letters',
      name: 'Word-letters-Game',
      duty: 'guess the word hidden by the computer between 08 to 10 letters ',
      link: 'https://words-letters-game.vercel.app/',
      linkVideo: '',
      moreElt: [
        {
          num: '1',
          approach: 'selec template between 08 to 10 characters '
        },
        {
          num: '2',
          approach:
            'letter, red(wrong in place), yellow(many times appearance wrong or not), green(right place) '
        },
        {
          num: '3',
          approach: 'Game Over. You can restart the Game'
        }
      ]
    },

    {
      id: 'dev_three',
      techno: 'MERN App',
      logo: 'Tds',
      name: 'TDS-RESTAURANT',
      duty: 'Online app foods. Order ready traditional cooked foods at home',
      link: 'https://github.com/BeinRain06/Tds_Restaurant_three',
      linkVideo: '',
      moreElt: [
        {
          num: '1',
          approach: '04 categories(meats, desserts, vegetarians, seafoods)'
        },
        {
          num: '2',
          approach: 'order and track at most three order at the same time'
        },
        {
          num: '3',
          approach: 'rate dishes'
        }
      ]
    }
  ]
})

const frameworkBase: IFrameworkBase = reactive({
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
    techno: string
    logo: string
    name: string
    duty: string
    link?: string
    linkVideo?: string
    moreElt: {
      num: string
      approach: string
    }[]
  }[]
> = computed(() => {
  const sideDev = sideSelfDev.projects
  return sideDev
})

function playMoreInfoContent(i: string, label: string) {
  if (label === 'elec') {
    moreElecBtn.value?.forEach((item, j) => {
      if (j === +i) {
        item?.classList.toggle('active_note')
      } else {
        item?.classList.remove('active_note')
      }
    })

    moreElecCity.value?.forEach((item, j) => {
      if (j === +i) {
        item?.classList.toggle('active_info')
      } else {
        item?.classList.remove('active_info')
      }
    })

    moreSelfBtn.value?.forEach((item) => item?.classList.remove('active_note'))
  }

  if (label === 'self') {
    console.log('moreSelfBtn value :', moreSelfBtn.value)
    console.log('devTitle :', devTitle.value)

    moreSelfBtn.value?.forEach((item, j) => {
      if (j === +i) {
        item?.classList.toggle('active_note')
        item?.parentElement?.classList.toggle('active_note')
      } else {
        item?.classList.remove('active_note')
        item?.parentElement?.classList.remove('active_note')
      }
    })

    devTitle.value?.forEach((item, j) => {
      if (j === +i) {
        item?.classList.toggle('active_note')
      } else {
        item?.classList.remove('active_note')
      }
    })

    moreSelfCity.value?.forEach((item, j) => {
      if (j === +i) {
        item?.classList.toggle('active_info')
      } else {
        item?.classList.remove('active_info')
      }
    })
  }
}

function handleModalVideo(i: number, label: string) {
  if (label === 'open') {
    modalVideoRef.value?.forEach((item, j) => {
      if (j === +i) {
        item?.classList.add('active_video')
        lastVideoRef.value = item
      } else {
        item?.classList.remove('active_video')
      }
    })

    videoBlurRef.value?.forEach((item, j) => {
      if (j === +i) {
        item?.classList.add('active_video')
        lastBlurRef.value = item
      } else {
        item?.classList.remove('active_video')
      }
    })
  } else {
    lastVideoRef.value?.classList.remove('active_video')
    lastBlurRef.value?.classList.remove('active_video')
  }
}
</script>

<template>
  <section id="resume_page">
    <div class="resume_domain open-sans-400">
      <!-- years story -->
      <div class="story_container p-1">
        <div
          class="story_enroll w-100 p-2 mx-auto d-flex flex-column justify-content-center align-items-center"
        >
          <div class="title_story eb-garamond-600">Summary</div>
          <div class="story_wrap d-flex justify-content-center">
            <p class="story_content pt-4">
              Hye Guys! My Name is NGOUEND RAOUL GERARD i am really glad to meet you. Having some
              previous technical experience. I studied basics electrical and automation engineering
              two years , and got an <span>associate's degree</span>. Afterwards one year later i
              obtain a <span>bachelor in Electrotechnics</span> . I worked for practically 7 good
              years at least full times on the field and has been drowned to not see myself growing
              because of the basics tasks i was used to perform all days. I wished i could join
              industries based automation , but my efforts to land internship on those do not
              succeed. I decide then to learn a skill that is quite familiar with automation ,
              allowing accessibility at low cost. I end up choosing software development. And since
              03 years, i have made my journey with side projects built-on html, css, javascript,
              react, vuejs and libraries as bootstrap and tailwindcss. I'm committed , like working
              with team and looking to become a full-stack developer.
            </p>
          </div>
        </div>
      </div>

      <!-- resume container-->
      <div class="resume_container">
        <div class="resume_row_one w-100">
          <!-- primar education -->
          <div class="primar_education margin_section w-100">
            <div class="primar_title_wrapper">
              <div class="edu_former justify-self-center">
                <h4 class="education_title font_Satisfy my-2">Education</h4>
              </div>
            </div>
            <div
              class="primar_education_content d-flex flex-column justify-content-center align-items-center gap-2"
            >
              <table class="primar_table">
                <tbody class="w-100">
                  <tr class="academic_primar_year">
                    <td>
                      <h6 class="title_year p-1">2010-2012</h6>
                    </td>
                  </tr>
                  <tr class="primar_table_row">
                    <td class="info_tech_content">
                      <div
                        class="w-100 d-flex flex-column justify-content-center align-items-center gap-2 md: flex-row"
                      >
                        <div class="grade_certification">D.U.T</div>
                        <h3 style="color: var(--bg-principal)">
                          ( Diplome Universitaire de Technologie/ Associate's Degree )
                        </h3>
                      </div>
                    </td>
                  </tr>
                  <tr class="primar_table_row">
                    <td class="info_tech_content">
                      <div class="my_department">
                        <div class="school_grade fw-bold" style="color: var(--text-color-label)">
                          G.E.I.I
                        </div>
                        <h6
                          class="acronym_grade_meaning pt-2"
                          style="color: var(--bg-secondary-color)"
                        >
                          (Genie Electrique et Informatique Industrielle/Industrial Automation And
                          Electrical Engineering)
                        </h6>
                      </div>
                    </td>
                  </tr>
                  <tr class="primar_table_row">
                    <td class="info_tech_content">
                      <div
                        class="school_location px-4 py-0 md:py-2 mx-auto d-flex flex-column justify-content-center align-items-center gap-1 md: flex-row"
                      >
                        <span style="color: var(--text-highlight-skill); font-weight: bolder"
                          >University of Douala/I.U.T</span
                        >
                        <h6 style="color: var(--text-color-two)">
                          Douala Carrefour Ange Raphaël ·+237 2 33 40 11 28
                        </h6>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="primar_table">
                <tbody class="w-100">
                  <tr class="academic_primar_year">
                    <td>
                      <h6 class="title_year p-1">2012-2013</h6>
                    </td>
                  </tr>
                  <tr class="primar_table_row">
                    <td class="info_tech_content">
                      <div
                        class="w-100 d-flex flex-column justify-content-center align-items-center gap-2 md: flex-row"
                      >
                        <div class="grade_certification">E.T</div>
                        <h3 style="color: var(--bg-principal)">
                          ( Licence en Electrotechnique/ Bachelor in Electrotechnics science)
                        </h3>
                      </div>
                    </td>
                  </tr>
                  <tr class="primar_table_row">
                    <td class="info_tech_content">
                      <div class="my_department">
                        <div class="school_grade fw-bold" style="color: var(--text-color-label)">
                          Bachelor E.T
                        </div>
                        <h6
                          class="acronym_grade_meaning pt-2"
                          style="color: var(--bg-secondary-color)"
                        >
                          ElectroTechnics
                        </h6>
                      </div>
                    </td>
                  </tr>
                  <tr class="primar_table_row">
                    <td class="info_tech_content">
                      <div
                        class="school_location px-4 py-0 md:py-2 mx-auto d-flex flex-column justify-content-center align-items-center gap-1 md: flex-row"
                      >
                        <span style="color: var(--text-highlight-skill); font-weight: bolder"
                          >University of Dschang/IUC
                        </span>
                        <h6 style="color: var(--text-color-two)">
                          Colline de Foto · +237 233 45 13 81
                        </h6>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- experiences -->
          <div class="experience_duty margin_section">
            <div class="primar_title_wrapper my-4">
              <div class="edu_former justify-self-center">
                <h4 class="experience_title font_Satisfy my-2">Experiences</h4>
              </div>
            </div>

            <div class="experience_wrap">
              <div class="experience_ct">
                <div class="experience_sample flex_col_center w-100">
                  <div class="title_sub_section">
                    <p class="fw-bold">EXPERIENCE PROFESSIONELLE / WORK EXPERIENCE</p>
                  </div>
                  <div class="experience_sample_content pt-4 pb-2">
                    <div class="company_base">
                      <span class="years_intern my-2 title_year">2013 -2014</span>
                      <div class="company_reference pt-2 pb-4">
                        <span class="title_worked_with">
                          CAMINSER (CAMEROUN INDUSTRIES SERVICES) S.A.R.L · BP 3483 Douala
                        </span>
                      </div>
                      <ul class="experience_tasks flex_col_center px-4">
                        <li class="w-100">Install Electrical devices for customers clients</li>
                        <li class="w-100">
                          Design Electrical schemes for electrical gas station board
                        </li>
                      </ul>
                    </div>
                    <div class="experience_elec px-1 mt-4">
                      <h5 class="fw-bold">SIDE PROJECTS</h5>
                      <div class="projects_list w-100" style="padding: 1rem 0 0.5rem">
                        <div
                          class="card_elec"
                          :key="project.id"
                          v-for="(project, i) in sideElecProjects"
                        >
                          <ul
                            class="card_elec_frame flex flex-column w-100"
                            style="list-style: none"
                          >
                            <li class="w-100 h-100 py-2">
                              <div class="img_card_work">
                                <span
                                  class="w-100 h-100"
                                  style="display: grid; place-items: center"
                                  >{{ project.name }}</span
                                >
                              </div>
                            </li>
                            <li class="project_content mt-3">
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
                              <div class="project_logo text_project_logo">{{ project.logo }}</div>
                            </li>
                            <li class="more_info_elt">
                              <div
                                class="more_info_wrap"
                                @click="() => playMoreInfoContent(`${i}`, 'elec')"
                                ref="moreElecBtn"
                              >
                                <span>{{ project.moreLabel }}</span>
                                <div class="more_info_symbol">&raquo;</div>
                              </div>
                            </li>
                          </ul>

                          <div class="modal_more_elec" ref="moreElecCity">
                            <div class="modal_elec_frame text_project_logo w-100 my-2">
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
                  <div class="experience_sample_content pt-4 pb-2 w-100">
                    <div class="company_base w-100">
                      <span class="years_intern my-2 title_year">2014 -2019</span>
                      <div class="company_reference pt-2 pb-4">
                        <span class="title_worked_with"> SELF ELECTRICAL ENTREPRENEUR </span>
                      </div>
                      <ul class="experience_tasks flex_col_center px-4">
                        <li class="w-100">Install Electrical devices for customers clients</li>
                        <li class="w-100">2D electrical distribution diagram</li>
                        <li class="w-100">single-line electrical distribution diagram</li>
                      </ul>
                      <div
                        class="side_dream w-100 pt-2 d-flex flex-column justify-content-start align-items-left"
                        style="font-size: calc(12px + 0.15vw)"
                      >
                        <span class="fw-bold text-black-50 mb-0">side commitment</span>
                        <span class="mx-1">Attend Engineer's schools exams training 04 years</span>
                      </div>
                    </div>
                  </div>
                  <div class="experience_sample_content pt-4 pb-2 w-100">
                    <div class="company_base w-100">
                      <span class="years_intern mt-4 mb-2 title_year">2021</span>
                      <div class="company_reference pt-2 pb-4">
                        <span class="title_worked_with w-100">
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

                <!--SELF TAUGHT DEVELOPMENT-->
                <div class="experience_sample flex_col_center w-100 my-4">
                  <div class="title_sub_section">
                    <p class="fw-bold">SELF TAUGHT DEVELOPMENT</p>
                  </div>
                  <div class="experience_sample_content pt-4 pb-2 w-100">
                    <div
                      class="framework_base w-100 py-4"
                      :key="framework.id"
                      v-for="framework in frameTechnologies"
                    >
                      <span class="years_intern my-2 fw-bold title_year">{{
                        framework.yearProject
                      }}</span>
                      <div class="company_reference my-1">
                        <span class="w-full fw-bold title_self_dev">
                          {{ framework.techFeatures }}
                        </span>
                      </div>
                      <ul class="experience_tasks flex_col_center gap-2 py-2 px-4">
                        <li class="w-100">
                          {{ framework.techDetailOne }}
                        </li>
                        <li class="w-100">
                          {{ framework.techDetailTwo }}
                        </li>
                      </ul>
                    </div>

                    <!-- SIDE PROJECTS DEV STACK -->
                    <div class="experience_pro w-100 d-flex flex-column align-items-center gap-2">
                      <h5 class="fw-bold pt-4">SIDE PROJECTS</h5>

                      <!--stack projects-->
                      <div class="projects_list w-100">
                        <div class="project_dev_frame">
                          <div
                            class="card_stack"
                            :key="project.id"
                            v-for="(project, i) in selfDevProjects"
                            :data-cardself="i"
                          >
                            <div
                              :id="project.name"
                              class="modal_video_blur"
                              ref="videoBlurRef"
                            ></div>
                            <div class="card_profile">
                              <div class="card_stick" :data-stack="project.id">
                                <div class="card_img"></div>
                                <div class="card_mini_name">
                                  <h5 class="first_mini">{{ project.name }}</h5>
                                  <h5 class="second_mini">{{ project.logo }}</h5>
                                </div>
                              </div>
                              <div class="holder_link">
                                <div class="holder_title">
                                  <h3 class="label_project">{{ project.name }}</h3>
                                </div>
                                <div class="holder_hot_link">
                                  <span style="font-size: calc(12px + 0.25vw)">Link :</span
                                  ><a :src="project.link" target="_blank">{{ project.link }}</a>
                                </div>
                              </div>
                            </div>
                            <div class="card_dev">
                              <div class="card_dev_title">
                                <h6 class="dev_title_logo">{{ project.logo }}</h6>
                                <h6 class="dev_title_name" ref="devTitle">{{ project.name }}</h6>
                              </div>
                              <div class="card_dev_info" :data-stack="project.id">
                                <div class="card_link_video">
                                  <div class="link_video_wrap">
                                    <div
                                      style="cursor: pointer"
                                      @click="() => handleModalVideo(i, 'open')"
                                    >
                                      live
                                    </div>
                                    <div class="modal_video_box" ref="modalVideoRef">
                                      <div class="close_video_toggler">
                                        <div
                                          class="btn_video_close"
                                          :aria-controls="project.name"
                                          aria-expanded="false"
                                          :aria-label="project.name"
                                          @click="() => handleModalVideo(i, 'close')"
                                        >
                                          <i>&times;</i>
                                        </div>
                                      </div>

                                      <!-- <video
                                        class="video_to_play"
                                        controls
                                        src="../assets/videos/video-1.mkv"
                                        poster="../assets/images/projects/blog-app-tech-d-mode.png"
                                      >
                                        <a href="../assets/videos/video-1.mkv">WEBM</a>
                                      </video>-->

                                      <div class="video_to_play">
                                        <div>not available</div>
                                        <div
                                          class="w-100 h-100 d-flex justify-content-center align-items-center"
                                        >
                                          <a
                                            :src="project.link"
                                            target="_blank"
                                            class="underline"
                                            style="color: var(--text-placeholder)"
                                            alt="no video link"
                                            >Visit Link</a
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="card_dev_summary">
                                  <div class="dev_summary_wrap">
                                    <p>{{ project.duty }}</p>
                                  </div>
                                </div>
                                <div class="card_dev_link">
                                  <div class="link_text_wrap">
                                    <div class="card_link_text">
                                      <span>Link :</span
                                      ><a :src="project.link" target="_blank">{{ project.link }}</a>
                                    </div>
                                  </div>
                                </div>
                                <div class="card_note_more">
                                  <div
                                    class="more_link"
                                    ref="moreSelfBtn"
                                    @click="() => playMoreInfoContent(`${i}`, 'self')"
                                  >
                                    <span>more</span>
                                    <span class="note_arrow">&raquo;</span>
                                  </div>
                                  <!--modal not more-->
                                  <div class="modal_more_note">
                                    <ul class="more_note_expand">
                                      <li class="note_expand_character">
                                        <div class="entity_box_number">
                                          <div class="triangular_base_box">
                                            <div class="entity_number">
                                              {{ project.moreElt[0].num }}
                                            </div>
                                          </div>
                                        </div>
                                        <div class="entity_text">
                                          <div class="entity_text_paragraph">
                                            {{ project.moreElt[0].approach }}
                                          </div>
                                        </div>
                                      </li>
                                      <li class="note_expand_character">
                                        <div class="entity_box_number">
                                          <div class="triangular_base_box">
                                            <div class="entity_number">
                                              {{ project.moreElt[1].num }}
                                            </div>
                                          </div>
                                        </div>
                                        <div class="entity_text">
                                          <div class="entity_text_paragraph">
                                            {{ project.moreElt[1].approach }}
                                          </div>
                                        </div>
                                      </li>
                                      <li class="note_expand_character">
                                        <div class="entity_box_number">
                                          <div class="triangular_base_box">
                                            <div class="entity_number">
                                              {{ project.moreElt[2].num }}
                                            </div>
                                          </div>
                                        </div>
                                        <div class="entity_text">
                                          <div class="entity_text_paragraph">
                                            {{ project.moreElt[2].approach }}
                                          </div>
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
              </div>
            </div>
          </div>
        </div>

        <div class="resume_row_two w-100">
          <!-- self taught cursus -->
          <div class="self_taught_cursus w-100">
            <div class="edu_former">
              <h4 class="education_title font_Satisfy my-2">Self Taught Developer</h4>
            </div>
            <div class="w-100 d-flex justify-content-start relative">
              <span class="about_journey font_Satisfy">Journey</span>
            </div>
            <ul class="flash_resume w-100">
              <li class="skill_label"><div class="p-1">CSS</div></li>
              <li class="period_works"><span class="duration_times">03 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >October 2021 - January 2022</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label"><div class="p-1">Javascript</div></li>
              <li class="period_works"><span class="duration_times">06 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >February 2022 - July 2022</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label">
                <div class="p-1">Vanilla Javascript</div>
              </li>
              <li class="period_works"><span class="duration_times">02 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >October 2022 - December 2022</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label"><div class="p-1">React JS</div></li>
              <li class="period_works"><span class="duration_times">06 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >January 2023 - June 2023</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label"><div class="p-1">Bootstrap</div></li>
              <li class="period_works"><span class="duration_times">01 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >September 2023 - October 2023</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label">
                <div class="text_size p-1">React, -Bootstrap, - styled-components, - BackEnd</div>
              </li>
              <li class="period_works"><span class="duration_times">05 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >November 2023 - March 2024</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label"><div class="p-1">Tailwind CSS</div></li>
              <li class="period_works"><span class="duration_times">01 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >April 2024 - May 2024</span
                >
              </li>
            </ul>
            <ul class="flash_resume w-100">
              <li class="skill_label"><div class="p-1">VueJS</div></li>
              <li class="period_works"><span class="duration_times">02 months</span></li>
              <li class="period_works">
                <span class="specific_date no_list_style font_Open_Sans_400"
                  >May 2024 - June 2024</span
                >
              </li>
            </ul>
          </div>
          <!-- language mastery -->
          <div class="language_mastering">
            <div class="lan_former">
              <h4 class="language_title font_Satisfy p-1 my-2 mx-4">Language</h4>
            </div>
            <div class="language_potential_mob">
              <div class="language_specific w-100">
                <span class="language_text_enum">French</span>
                <div class="language_text_level lan_level w-100 d-flex justify-content-between">
                  <span> written</span>
                  <span>spoken</span>
                </div>
              </div>

              <div class="language_specific w-100">
                <span class="language_text_enum">English</span>
                <div class="language_text_level lan_level w-100 d-flex justify-content-between">
                  <span> written</span>
                  <span> spoken (mid)</span>
                </div>
              </div>
            </div>
            <div class="language_potential_desk">
              <div class="taught_language_one">
                <div
                  class="essence_lan d-flex flex-column justify-content-center align-items-center gap-2"
                >
                  <div class="m-0">French :</div>
                  <div
                    class="lan_square_list w-50 mx-auto p-1 d-flex justify-content-center gap-1 md:gap-4"
                  >
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                  </div>
                  <div class="level_lan">Full-Professionnal</div>
                </div>
              </div>

              <div class="taught_language_two">
                <div
                  class="essence_lan d-flex flex-column justify-content-center align-items-center gap-2"
                >
                  <div class="m-0">English :</div>
                  <div
                    class="lan_square_list w-50 mx-auto p-1 d-flex justify-content-center gap-1 md:gap-4"
                  >
                    <div class="lan_square_item active_square"></div>
                    <div class="lan_square_item active_square"></div>
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                    <div class="lan_square_item"></div>
                  </div>
                  <div class="level_lan">Intermediarie-Professionnal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul.experience_tasks {
  list-style: circle;
}

li.no_list_style {
  list-style: none;
}

.grade_certification {
  width: 6.5rem;
  padding: 5px 10px;
  margin-bottom: 0.5rem;
  color: var(--text-color-three);
  /* background-color: var(--bg-secondary-color); */
  background-color: transparent;
  font-size: calc(14px + 0.18vw);
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0px 1px 5px var(--text-color-three);
}

.lan_level {
  padding: 0 0.25rem;
  color: #444;
  font-size: calc(12px + 0.3vw);
}

.edu_former {
  width: 12rem;
  padding: 0.5rem;
  /* background-color: var(--bg-shift-secondary-color); */
  background-color: var(--text-highlight-skill);
  display: flex;
  justify-content: center;
}

.lan_former {
  width: 12rem;
  padding: 0.5rem;
  /* background-color: rgba(0, 0, 128, 0.705); */
  /*  background-color: var(--bg-shift-secondary-color); */
  background-color: var(--text-highlight-skill);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.language_mastering .language_title {
  width: 8rem;
}

.gen_link {
  width: 100%;
  padding: 0.25rem;
  display: grid;
  place-items: start;
}

/* modal more utilities  */

.entity_box_number {
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 5px;
  border: 1px solid transparent;
  border-bottom: 2px solid #333;
  flex-shrink: 0;
}

.entity_box_number .triangular_base_box {
  position: absolute;
  top: -2px;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
  background-color: #6e0797;
  background-color: #9056a7;
  border-radius: 5px;
}

ul.more_note_expand li:nth-child(2) .triangular_base_box,
ul.more_content_ct li:nth-child(2) .triangular_base_box {
  background-color: #a15252;
}

ul.more_note_expand li:nth-child(3) .triangular_base_box,
ul.more_content_ct li:nth-child(3) .triangular_base_box {
  background-color: #bec46c;
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
  transform: translateX(-46%) rotate(-45deg);
}

@media (min-width: 160px) {
  li {
    font-size: calc(14px + 0.12vw);
  }

  p {
    font-size: calc(14px + 0.2vw);
  }

  h3 {
    font-size: calc(15px + 0.25vw);
  }

  h4 {
    font-size: calc(15px + 0.15vw);
  }

  h5 {
    font-size: calc(14px + 0.06vw);
  }

  h6 {
    font-size: calc(12px + 0.12vw);
  }

  span {
    font-size: 12px;
  }

  p.gen_purpose {
    font-size: calc(13px + 0.1vw);
  }

  .title_project {
    color: var(--bg-variant-color);
    font-size: calc(12px + 0.12vw);
    font-weight: bold;
  }

  .title_sub_section {
    width: 100%;
    margin: 0 auto;
    padding: 0.25rem;
    color: var(--text-color-two);
    font-size: calc(14px + 0.15vw);
    font-weight: bold;
    display: grid;
    place-items: center;
  }

  .text_size {
    font-size: 12px;
  }

  .title_self_dev {
    color: var(--bg-variant-color);
    font-size: calc(13px + 0.2vw);
    opacity: 0.88;
  }

  .text_project_logo {
    font-size: calc(14px + 0.3vw);
  }
  /*
new text size add */

  .text_sub_detail {
    font-size: calc(11px + 0.1vw);
  }

  .title_year {
    color: var(--text-highlight-skill);
    font-size: calc(12px + 0.25vw);
    font-weight: bold;
  }

  .title_worked_with {
    color: var(--text-highlight-skill);
    font-size: calc(14px + 0.3vw);
    font-weight: bold;
  }

  .margin_section {
    margin: 2rem 0 1rem;
  }

  .flex_col_center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /*resume_wrapper*/
  .resume_domain {
    position: relative;
    top: 0;
    width: 100vw;
    padding: 0.5rem 0 1rem;
    margin: 0 auto;
    color: var(--text-color-three);
    background-color: var(--bg-primary-color);
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
    color: var(--text-color-primar);
    font-size: 26px;
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
    /*  color: var(--text-color-three); */
    line-height: 1.5;
    text-align: justify;
  }

  /*software cursus*/

  .resume_container {
    position: relative;
    top: 0.25rem;
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
  }

  /* --> primary education */
  .primar_education_content {
    width: 100%;
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
    padding: 0.5rem 2%;
    margin: 0.75rem 0;
    display: grid;
    /* background-color: #e0e0e0; */
  }

  .academic_primar_year {
    /* color: #d3d0d0; */
    /* background-color: #34803b; */
    display: block;
    color: var(--text-color-title);
    background-color: var(--bg-title);
    padding: 1rem 0 0.75rem;
    border-top-left-radius: 5px;
    font-weight: bold;
  }

  .primar_table_row {
    width: 100%;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
    font-size: calc(13px + 0.25vw);
  }

  .primar_table_row .info_tech_content {
    width: 90%;
    margin: 0 auto;
    padding: 0 0.5rem;
  }

  .primar_table_row .info_tech_content:nth-child(3) {
    background-color: var(--text-color-label);
    border-radius: 5px;
  }

  .info_tech_content span {
    color: var(--text-color-content);
  }

  .info_tech_content .my_department {
    width: 100%;
    padding: 16px 0 20px;
    color: var(--bg-shift-secondary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* <-- primary education */

  /* --> self-taught cursus */
  .self_taught_cursus {
    padding: 0.5rem;
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
    background-color: var(--bg-title-2);
    text-align: center;
    border-radius: 5px;
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
    border-radius: 5px;
    padding: 0 0 0.25rem;
    margin: 0.75rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .self_taught_cursus .flash_resume:nth-child(odd) {
    background-color: #154c7970;
  }
  .self_taught_cursus .flash_resume:nth-child(even) {
    background-color: #154c7970;
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
  .experience_ct {
    width: 100%;
    padding: 0.5rem 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .company_base {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }

  .company_base .experience_tasks {
    width: 100%;
    list-style: square;
    gap: 1rem;
  }

  /* EX Project BOX */

  .card_elec .card_elec_frame .img_card_work,
  .card_elec .card_elec_frame .project_logo_wrap {
    font-family: 'Poetsen One', sans-serif;
    font-style: normal;
    font-size: var(--var-font-size);
  }

  .card_elec_frame {
    width: 100%;
    padding: 1rem;
    margin: 0.5rem 0;
    background-color: var(--bg-navbar);
    font-size: calc(11px + 0.24vw);
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 9.2rem min-content 1rem 1rem;
    place-items: center;
    gap: 1rem;
  }

  .card_elec_frame .img_card_work {
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid var(--text-color-label);
  }

  .card_elec_frame .img_card_work::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
    margin: 0 auto;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    border: 1px solid var(--text-color-label);
    text-align: center;
    display: grid;
    place-items: center;
  }

  .card_elec_frame .project_content {
    width: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card_elec_frame .more_info_elt {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .card_elec[data-cardself='0'] .img_card_work {
    background: url('../assets/images/projects/mobile-Words-Letters-Game.png') no-repeat center
      center/cover;
    outline: 2px solid #1d831d;
    outline-offset: 4px;
    transition: all 1s ease-in-out;
  }

  .card_elec[data-cardself='1'] .img_card_work {
    background: url('../assets/images/projects/tds-retaurant.png') no-repeat center center/cover;
    outline: 2px solid #9c3f88;
    outline-offset: 4px;
    transition: all 1s ease-in-out;
  }

  .card_elec[data-cardself='2'] .img_card_work {
    background: url('../assets/images/projects/blog-app-tech.png') no-repeat center center/cover;
    outline: 2px solid #7c929e;
    outline-offset: 4px;
    transition: all 1s ease-in-out;
  }

  .card_elec[data-cardself='0'] .img_card_work:hover,
  .card_elec[data-cardself='1'] .img_card_work:hover,
  .card_elec[data-cardself='2'] .img_card_work:hover {
    color: #fff;
  }

  .card_elec[data-cardself='0'] .img_card_work::before,
  .card_elec[data-cardself='1'] .img_card_work::before,
  .card_elec[data-cardself='2'] .img_card_work::before {
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
    transition: all 1.35s ease 1s;
    z-index: 3;
  }

  .more_info_wrap:hover {
    color: #15911b;
    font-weight: bold;
  }

  .more_info_wrap.active_note {
    transform: rotateZ(360deg);
  }

  .more_info_wrap .more_info_symbol {
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

  .more_info_wrap.active_note .more_info_symbol {
    transform: rotate(-90deg);
  }

  .modal_more_elec {
    width: 100%;
    margin: 1rem 0 0.5rem;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 0;
    overflow: hidden;
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1) 1.2s;
  }

  .modal_more_elec.active_info {
    display: grid;
    grid-template-rows: 24rem;
  }

  .modal_more_elec .modal_elec_frame {
    width: 100%;
    padding: 0.5rem;
    margin-inline: auto;
    background-color: var(--bg-tertiary-color);
    visibility: hidden;
    display: grid;
    overflow: hidden;
    transition: all 3s linear;
  }

  .modal_more_elec.active_info .modal_elec_frame {
    visibility: visible;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    transition: all 1s linear 100ms;
  }

  /* EX Project BOX */

  /* --> Card frame stack-dev project */

  .project_dev_frame {
    width: 100%;
    height: auto;
    background-color: inherit;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 450ms ease;
  }

  .card_stack {
    width: 100%;
    padding: 1.5rem 0 1rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    border-radius: 3px;
    box-shadow: 0px 0px 10px var(--bg-secondary-color);
    box-shadow: 0px 0px 10px var(--text-highlight-skill);
  }

  .card_profile {
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .card_stick {
    width: 100%;
    padding: 1rem 1rem;
    /*  height: 16rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    border-radius: 14px;
    /*  box-shadow: 0px 0px 3px hsl(231, 29%, 33%);*/

    border: 1px solid #6663638e;
  }

  .card_stick .card_img {
    width: 100%;
    aspect-ratio: 16/11;
    background-image: url('../assets/images/projects/blog-app-tech-d-mode.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top -22px left -2px;
    border-radius: 4px;
    /* border: 1px solid #444; */
  }

  .card_stick[data-stack='dev_one'] .card_img {
    background-image: url('../assets/images/projects/blog-app-tech-d-mode.png');
  }

  .card_stick[data-stack='dev_two'] .card_img {
    background-image: url('../assets/images/projects/mobile-Words-Letters-Game.png');
  }

  .card_stick[data-stack='dev_three'] .card_img {
    background-image: url('../assets/images/projects/tds-retaurant.png');
  }

  .card_stick .first_mini {
    position: relative;
    top: -0.5rem;
  }

  .card_stick .second_mini {
    display: none;
  }

  .holder_link {
    display: none;
  }

  .card_stack h5 {
    font-family: 'Poetsen One', sans-serif;
    font-style: normal;
    font-size: calc(14px + 0.25vw);
    letter-spacing: 1px;
  }

  .card_stack a {
    cursor: pointer;
    font-size: calc(11px + 0.1vw);
    color: var(--text-highlight-skill);
    font-weight: bold;
    text-decoration: underline;
    transition: all 1s ease;
  }

  .card_stack a:hover {
    color: var(--bg-variant-color);
  }

  .card_stack p {
    font-size: calc(14px + 0.15vw);
  }

  .card_dev {
    width: 100%;
    display: grid;
    place-items: center;
  }

  .card_dev .card_dev_title {
    display: none;
    width: 50%;
  }

  .card_dev_info {
    width: 100%;
    height: 15rem;
    display: grid;
    grid-template-areas:
      'link-video link-video'
      'link-text link-text'
      'summary  summary'
      'note-more  note-more';
    grid-template-rows: 3.25rem 4rem 5rem 3.4rem;
    grid-template-columns: 50% 50%;
    gap: 0.25rem;
    margin-top: 5px;
  }

  .card_link_video {
    grid-area: link-video;
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem 0.5rem;
    display: grid;
    place-items: center;
  }

  .card_dev_link {
    grid-area: link-text;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    display: block;
  }

  .card_dev_summary {
    grid-area: summary;
    width: 100%;
    height: 100%;
    padding: 0 1rem;

    /*  border-radius: 12px;
    border: 1px solid #555; */
    display: grid;
    place-items: center;
  }

  .card_note_more {
    grid-area: note-more;
    position: relative;
    width: 100%;
    height: 3.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    transition: all 650ms ease 1.1s;
  }

  .card_note_more.active_note {
    align-items: end;
  }

  .card_link_video .link_video_wrap {
    width: 80%;
    height: 100%;
    display: grid;
    place-items: center;
    border-radius: 5px;

    box-shadow: 0px 0px 3px #8bd5e979;
  }

  .card_dev_link .link_text_wrap {
    width: 96%;
    height: 100%;
    padding: 0.25rem 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 1s ease-in-out;
  }

  .link_text_wrap .card_link_text {
    width: 100%;
    display: flex;
    align-items: start;
    gap: 5px;
  }

  .card_dev_summary .dev_summary_wrap {
    width: 90%;
    height: max-content;
    padding: 0.5rem 0.5rem;
    border-radius: 12px;
    display: flex;
    justify-content: start;
    text-align: center;
  }

  .more_link {
    width: 6rem;
    height: min-content;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    z-index: 0;
    transition: all 1s ease-in-out;
  }

  .more_link.active_note {
    position: relative;
    top: 1.3rem;
    width: 100%;
    height: 60%;
    color: var(--text-color-two);
    background-color: #222;
    cursor: pointer;
    border-radius: 5px;
    z-index: 3;
  }

  .more_link .note_arrow {
    position: relative;
    top: 2px;
    transform: rotate(-90deg);
    z-index: 1;
  }

  .more_link.active_note .note_arrow {
    transform: rotate(90deg);
  }
  /* modal more note */

  .modal_more_note {
    width: 100%;
    position: absolute;
    top: 0;
    height: 2.8rem;
    z-index: 2;
    visibility: hidden;
    opacity: 0;
    transition: all 900ms ease-in-out;
  }

  .more_link.active_note + .modal_more_note {
    width: 100%;
    position: absolute;
    top: -10rem;
    height: 12.8rem;
    z-index: 2;
    visibility: visible;
    opacity: 1;
  }

  .more_note_expand {
    width: 100%;
    height: 100%;
    padding: 0.5rem 1.5rem;
    color: #333;
    background-color: var(--bg-principal);
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 4rem 4rem 4rem;
    gap: 0;
  }

  .more_note_expand .note_expand_character {
    width: 100%;
    margin: 0 auto;
    color: var(--text-color-two);
    font-size: calc(14px + 0.12vw);
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
  }

  /* modal video container */
  .modal_video_blur {
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
    overflow-y: hidden;
    z-index: 1;
  }

  .modal_video_blur.active_video {
    position: fixed;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #2222223a;
    transform: translateX(-12%);
    overflow-y: hidden;
    z-index: 5;
  }

  .modal_video_box {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 5%);
    width: 100%;
    aspect-ratio: 16/12;
    padding: 0.25rem 1rem 1rem;
    background-color: var(--text-highlight-skill);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition: all 1s ease-in-out 480ms;
  }

  .modal_video_box.active_video {
    opacity: 1;
    visibility: visible;
  }

  .close_video_toggler {
    width: 100%;
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .btn_video_close {
    width: 1.1em;
    height: 1.1em;
    display: grid;
    place-items: center;
    border-radius: 50%;
    cursor: pointer;
  }

  .video_to_play {
    width: 100%;
    height: calc(100% - 1.5em);
    padding: 0.5rem 0.75rem 0.25rem 0.75rem;
    background-color: #222;
    border-radius: 5px;
  }

  /* <-- Card frame stack-dev project */

  /* --> language potential  */
  .language_mastering {
    width: 100%;
    height: 210px;
    margin: 2.5rem auto 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .language_potential_mob {
    width: 100%;
    padding: 1rem 2rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*  gap: 0.5rem; */
  }

  .language_potential_mob .language_specific {
    padding: 5px 10px;
    margin: 10px 0;
    background-color: var(--bg-navbar);
    border-radius: 5px;
  }

  .language_specific .language_text_enum {
    padding: 0 0.25rem;
    color: var(--bg-border-layout);
    font-size: calc(13px + 0.15vw);
    font-weight: bold;
  }

  .language_potential_desk {
    display: none;
  }
  /* <-- language potential */
}

@media (min-width: 380px) {
  .card_dev_info {
    width: 100%;
    height: 15rem;
    display: grid;
    grid-template-areas:
      'link-video link-text'
      'summary  summary'
      'note-more  note-more';
    grid-template-rows: 6.6rem 5rem 3.4rem;
    grid-template-columns: 50% 50%;
    gap: 0;
    margin-top: 5px;
  }

  .card_link_video {
    padding: 0 1rem;
  }

  .card_link_video .link_video_wrap {
    width: 80%;
    height: auto;
    max-width: 220px;
    aspect-ratio: 16/9;
  }
}

@media (min-width: 500px) {
  h4 {
    font-size: calc(20px + 0.35vw);
  }

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
    /* background-color: #e0e0e0; */
  }

  .primar_table_row {
    padding: 0;
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
    height: max-content;
  }

  .flash_resume .skill_label {
    width: 40%;
    padding-bottom: 0.5rem;
    font-size: calc(18px + 0.15vw);
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

  /* --> Card frame stack-dev project */

  /* .experience_pro .active_video {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    overflow-y: hidden;
  } */

  .card_stack {
    padding: 0.5rem 0 0.5rem;
    display: flex;
    flex-direction: row;
  }

  .card_stack a {
    font-size: calc(10px + 0.1vw);
  }

  .card_profile {
    width: 50%;
    padding: 0 0 0 1rem;
    margin: 0 auto;
    flex-shrink: 0;
  }

  .card_stick {
    padding: 0.5rem 0.75rem;
    height: 14rem;
  }

  .card_stick .card_img {
    aspect-ratio: 16/11;
    max-height: 192px;
  }

  .card_stick .first_mini {
    position: relative;
    top: -0.5rem;
    display: none;
  }

  .card_stick .second_mini {
    display: flex;
  }

  .card_dev {
    width: 50%;
    padding: 0 0.5rem 0 0;
  }

  .card_dev .card_dev_title {
    width: 80%;
    height: 1.8rem;
    color: inherit;
    margin: 8px 0 4px;
    display: grid;
    place-items: center;
  }

  .card_dev_title .dev_title_logo {
    display: none;
  }

  .card_dev_info {
    position: relative;
    width: 100%;
    height: 14rem;
    padding-right: 0.25rem;
    display: grid;
    grid-template-areas:
      'summary  summary'
      'link-video link-text'
      'note-more note-more';
    grid-template-rows: 5rem 5rem 2rem;
    grid-template-columns: 40% 60%;
    gap: 0.5rem;
    margin-top: 0;
  }

  .card_link_video {
    margin: 0.5rem 0;
    padding: 0;
  }

  .card_dev_link {
    grid-area: link-text;
    width: 100%;
    height: 100%;
    padding: 0.5rem 0.25rem 0.5rem 0;
    margin: 0.5rem 0;
    display: block;
  }

  .card_note_more {
    display: flex;
    justify-content: end;
  }

  .card_note_more.active_note[data-v-a5cd2c92] {
    align-items: start;
  }

  .link_text_wrap .card_link_text {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 0;
  }

  .card_dev_summary {
    padding: 0;
  }

  .card_link_video .link_video_wrap {
    width: 70%;
    max-width: 220px;
    aspect-ratio: 16/14;
  }

  .more_link.active_note + .modal_more_note {
    top: -11rem;
    height: 13.5rem;
  }

  .more_note_expand .note_expand_character {
    font-size: calc(10px + 0.15vw);
  }

  .modal_video_box {
    left: 0%;
    width: calc(200% + 1.9rem);
    height: 17.2rem;
    transform: translate(-52%, 0);
    aspect-ratio: unset;
    bottom: -4px;
  }

  .close_video_toggler {
    width: calc(100% + 1.5rem);
    height: 1.75em;
    align-items: start;
  }

  .video_to_play {
    padding: 0;
    height: calc(100% - 1.75em);
  }

  /* <-- Card frame stack-dev project */

  /* --> language potential desk */
  .language_potential_mob {
    display: none;
  }

  .language_potential_desk {
    position: relative;
    top: 2rem;
    width: 100vw;
    padding: 0.5rem;
    font-size: calc(13px + 0.15vw);
    display: grid;
    grid-template-columns: auto 40% 40% auto;
    grid-template-rows: 130px;
  }

  .language_potential_desk .taught_language_one {
    padding: 0.5rem 1rem;
    display: grid;
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }

  .language_potential_desk .taught_language_two {
    padding: 0.5rem 1rem;
    display: grid;
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }

  .taught_language_one .essence_lan,
  .taught_language_two .essence_lan {
    width: 100%;
    padding: 0.35rem 0.25rem;
    /*background-color: #154c79b0;*/
    background-color: #154c79cc;
  }

  .taught_language_two .essence_lan {
    color: #fff;
    background-color: #6f1277;
  }

  .taught_language_one .lan_square_item,
  .taught_language_two .lan_square_item {
    position: relative;
    width: 14px;
    height: 7px;
    border: 1px solid #333;
  }

  .taught_language_two .lan_square_item {
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
  li {
    font-size: 15px;
  }

  .title_self_dev {
    font-size: calc(15px + 0.15vw);
  }

  .title_sub_section {
    font-size: calc(20px + 0.25vw);
  }

  .text_project_logo {
    font-size: calc(13px + 0.15vw);
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

  .margin_section {
    margin: 5rem 0 1rem;
  }

  .primar_table_row {
    padding: 0.5rem;
    font-size: calc(14px + 0.25vw);
  }

  .primar_table_row .info_tech_content {
    width: 90%;
    margin: 0 auto;
  }

  .info_tech_content .my_department {
    width: max-content;
    max-width: 430px;
    margin: 0 auto;
    padding: 0 0.5rem;
  }

  .experience_sample {
    padding: 1rem 0.5rem;
    margin: 1rem auto;
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

  /*.self_taught_cursus .flash_resume:nth-child(odd) {
    border-left: 0.1rem solid #fccfaa;
    border-right: 0.1rem solid #fccfaa;
  }
  .self_taught_cursus .flash_resume:nth-child(even) {
    border-left: 0.1rem solid #afafafc7;
    border-right: 0.1rem solid #afafafc7;
  }*/

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
    margin: 0;
  }

  /* EX Project Box */

  .card_elec_frame {
    padding: 1rem 0.5rem;
    margin: 1rem 0 0;
    font-size: calc(12px + 0.15vw);
    display: grid;
    place-content: center;
    grid-template-columns: 20% 40% 10% 15%;
    grid-auto-rows: max-content;
    gap: 2rem;
  }

  .card_elec_frame div.image_box {
    padding: 0.25rem;
    display: grid;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }

  .card_elec_frame .project_content {
    width: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }

  .card_elec_frame .project_logo_wrap {
    margin-left: 2rem;
  }

  .card_elec_frame .more_info_elt {
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

  /* EX Project Box */

  /* --> language potential desk */
  .language_mastering {
    height: 350px;
  }

  .language_potential_desk {
    font-size: calc(15px + 0.18vw);
    gap: 0.5rem;
  }

  /* <-- language potential desk */
}

@media (min-width: 920px) {
  .project_dev_frame {
    max-width: 1040px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    gap: 1.5rem;
  }

  .card_stack {
    padding: 1.25rem 0.5rem;
    padding: 1.25rem 0.5rem;
    border-radius: 10px;
    background-color: #154c794b;
    box-shadow: unset;
  }

  .card_stack a {
    font-size: calc(12px + 0.15vw);
  }

  .card_stick {
    padding: 0.5rem 0.75rem;
    height: 15.5rem;
  }

  .dev_title_name {
    color: inherit;
    z-index: 0;
    transition: all 450ms ease;
  }

  .dev_title_name.active_note {
    color: var(--text-color-two);
    z-index: 10;
    transition: all 450ms ease 850ms;
  }

  .card_link_video .link_video_wrap {
    width: 70%;
    height: 80px;
    max-width: 220px;
    aspect-ratio: unset;
  }

  .more_link.active_note {
    position: relative;
    top: 0.5rem;
  }

  .more_link.active_note + .modal_more_note {
    top: -13.25rem;
    height: 14.75rem;
  }

  .more_note_expand {
    padding: 1.5rem 1.5rem 0.5rem;
    grid-template-rows: 3.6rem 3.6rem 3.6rem;
  }

  .modal_video_box {
    width: calc(200% + 2.2rem);
    height: 17.2rem;
    transform: translate(-51%, 0);
  }
}

@media (min-width: 1200px) {
  .story_wrap {
    line-height: 1.9;
  }

  .modal_video_box {
    height: 27.8rem;
  }

  .close_video_toggler {
    width: 100%;
    height: 3em;
  }

  .btn_video_close {
    width: 1.4em;
    height: 1.4em;
    font-size: calc(16px + 0.25vw);
  }

  .video_to_play {
    width: 100%;
    height: calc(100% - 3em);
    padding: 0.5rem 0.75rem 0.25rem 0.75rem;
    border-radius: 5px;
  }
}
</style>
