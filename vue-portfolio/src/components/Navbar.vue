<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const inputBox = <any>ref()
const menuBox = <any>ref()

let target_Path = <any>ref()

let refLiMobNames = <any>ref([])
let refLiNames = <any>ref([])
const linkNames = <any>ref(['skills', 'resume', 'contact', 'about', 'home'])

onMounted(() => {
  refLiNames.value.forEach((element: HTMLElement, i: number) => {
    if (i === 4) {
      element.classList.add('active_li')
    }
  })
})

function setLiMobNames(element: undefined) {
  if (element) {
    refLiMobNames.value.push(element)
  }
}

function setLiNames(element: undefined) {
  if (element) {
    refLiNames.value.push(element)
  }
}

function runActiveLi(i: number, screen: string) {
  if (screen === 'mobile') {
    refLiNames.value.forEach((item: HTMLElement) => {
      if (item.classList.contains('active_li')) {
        item.classList.remove('active_li')
      }
    })
  } else if (screen === 'desktop') {
    refLiMobNames.value.forEach((item: HTMLElement) => {
      let newItem: HTMLElement | null = item.firstElementChild
      if (newItem.classList.contains('active_li')) {
        newItem.classList.remove('active_li')
      }
    })
  }

  refLiMobNames.value.forEach((item: HTMLElement | null, j: number) => {
    if (i === j) {
      let newItem: HTMLElement | null = item.firstElementChild

      newItem.classList.add('active_li')
    } else {
      newItem.classList.remove('active_li')
    }
  })

  refLiNames.value.forEach((item: HTMLElement, j: number) => {
    if (i === j) {
      console.log(item)
      item.classList.add('active_li')
    } else {
      item.classList.remove('active_li')
    }
  })
}

function targetPage(i: number, section: string, screen: string) {
  console.log(refLiNames.value)
  if (screen === 'mobile') {
    menuBox.value.classList.remove('currently_view')
    inputBox.value.checked = false
  }

  runActiveLi(i, screen)

  switch (section) {
    case 'home':
      target_Path = router.push({ path: '/' })
      break
    case 'about':
      target_Path = router.push({ path: '/about' })
      break
    case 'resume':
      target_Path = router.push({ path: '/resume' })
      break
    case 'skills':
      target_Path = router.push({ path: '/skills' })
      break
    case 'contact':
      target_Path = router.push({ path: '/contact' })
      break
    default:
      throw Error('There is Something wrong targeting the page')
  }

  return target_Path.value
}
function toggleMenuContent(e: Event) {
  let newTarget: HTMLElement | null = e.currentTarget
  if (newTarget.checked) {
    menuBox.value.classList.add('currently_view')
  } else {
    menuBox.value.classList.remove('currently_view')
  }
}
</script>
<template>
  <header>
    <nav id="navbar_container" class="navbar_container">
      <div class="menu">
        <div id="logo_wrapper" class="logo_wrapper">
          <span class="logo_menu_text w-100 d-flex justify-content-center align-items-center p-2"
            >DevPortFolio
          </span>
          <figure class="logo_menu">
            <!-- <img
              src="./src/assets/images/apple-touch-icon.png"
              alt="Oops overview"
              class="logo_img"
            /> -->
          </figure>
        </div>
        <div id="menu_wrap" class="menu_wrap">
          <div class="menu_symbol d-flex justify-content-center align-items-center">
            <input
              type="checkbox"
              name="check"
              id="trigger_menu"
              class="trigger_menu"
              ref="inputBox"
              @input.prevent="toggleMenuContent"
            />
            <div class="menu_bar"></div>
          </div>
        </div>
        <div id="menu_content" class="menu_content" ref="menuBox">
          <ul class="menu_links">
            <li
              class="menu_link"
              v-for="(localname, i) in linkNames"
              :data-index="i"
              @click.prevent="() => targetPage(i, localname, 'mobile')"
              :ref="setLiMobNames"
            >
              <div class="menulink_content">
                <span>{{ localname[0].toUpperCase() + localname.slice(1) }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="navbar_row row">
        <div
          class="navbar_content_tags w-100 d-flex justify-content-between align-items-center text-white mx-auto my-0"
        >
          <div class="title_nav font_Satisfy">PortFolio</div>
          <ul class="navlink_container d-flex px-2 mb-0">
            <li
              class="navlink"
              v-for="(localname, i) in linkNames"
              :ref="setLiNames"
              @click.prevent="() => targetPage(i, localname, 'desktop')"
            >
              <div class="navlink_content" :data-index="i">
                <span class="font_Open_Sans_400">{{
                  localname[0].toUpperCase() + localname.slice(1)
                }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped>
/*here modify to adapt to css*/

/*utilities*/

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

.navbar_container {
  max-width: 100vw;
  height: 50px;
  padding: 0;
  overflow-x: hidden;
}

/* navbar menu  */

.menu_wrap {
  position: relative;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2.2rem;
  /*  border: 2px solid #ddd; */
  border-radius: 5px;
  z-index: 100;
  display: block;
  float: right;
}

.menu_wrap .menu_symbol {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 84%;
  height: 84%;
  background-color: transparent;
  z-index: 100;
  cursor: pointer;
}

input.trigger_menu {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 100;
}

/* input.trigger_menu:checked {
  accent-color: transparent;
} */

/*menu symbol transdormation */

.menu_symbol input.trigger_menu + .menu_bar {
  position: relative;
  top: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 24px;
  transform: rotate(0deg);
}

.menu_symbol input.trigger_menu + .menu_bar::before {
  content: '';
  position: absolute;
  top: -7px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 24px;
  transform: rotate(0deg);
}

.menu_symbol input.trigger_menu + .menu_bar::after {
  content: '';
  position: absolute;
  top: 7px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 24px;
  transform: rotate(0deg);
}

/*here add */

.menu_symbol input.trigger_menu:checked + .menu_bar {
  position: relative;
  top: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 24px;
  transform: rotate(45deg);
}

.menu_symbol input.trigger_menu:checked + .menu_bar::before {
  content: '';
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 24px;
  transform: rotate(0deg);
}

.menu_symbol input.trigger_menu:checked + .menu_bar::after {
  content: '';
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 24px;
  transform: rotate(90deg);
}

.menu_content {
  content: '';
  position: absolute;
  top: -17.1rem;
  left: 50%;
  width: 100vw;
  height: auto;
  padding: 2rem 0 3.4rem;
  background-color: rgba(0, 0, 128, 0.623);
  transform: translateX(-50%);
  transition: all 1.4s ease-in-out;
  z-index: 50;
}

.menu_content.currently_view {
  content: '';
  position: absolute;
  top: 3.1rem;
  left: 50%;
  width: 100vw;
  height: auto;
  padding: 2rem 0;
  transform: translateX(-50%);
  z-index: 50;
}

.menu_links {
  position: relative;
  left: -1rem;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
}

.menu_link {
  cursor: pointer;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.menulink_content {
  position: relative;
  top: 0;
  width: 80%;
  height: 100%;
  color: #fff;
  font-size: calc(16px + 0.3vw);
  letter-spacing: 0.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
}

.menulink_content:hover {
  top: 0.5rem;
}

.menulink_content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid rgb(209, 190, 228);
  transition: all 0.78s ease-in-out;
}

.menulink_content:hover::before {
  top: 0.25rem;
  border-bottom: 2px solid transparent;
  animation: menu-link-anim 0.8s ease-in-out 0.9s forwards;
}

.menulink_content span {
  z-index: 1;
}

.menulink_content.active_li {
  font-size: calc(16px + 0.3vw);
  display: flex;
  justify-content: center;
  align-items: center;
}

.menulink_content.active_li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: menu-link-anim 0.8s ease-in-out 0.9s forwards;
}

/* .menulink_content.active_li a {
  color: #ddd;
  z-index: 1;
} */

.menulink_content a {
  color: rgb(209, 190, 228);
  z-index: 1;
}

/*logo menu */
.logo_wrapper {
  position: absolute;
  top: -0.6rem;
  left: 0;
  width: 100vw;
  height: 50px;
  background-color: transparent;
  background-color: rgba(0, 0, 128, 0.95);
  height: auto;
  display: flex;
  justify-content: flex-end;
  transition: all 2s ease-in-out 0.5s;
  z-index: 1;
}

.logo_wrapper.currently_view {
  position: absolute;
  top: -0.6rem;
  left: 0;
  width: 100vw;
  height: 50px;
  background-color: rgba(0, 0, 128, 0.95);
  height: auto;
  display: flex;
  justify-content: flex-end;
}

.logo_menu_text {
  position: absolute;
  top: 1rem;
  left: 50%;
  width: 60vw;
  height: auto;
  padding: 0.5rem;
  color: #fff;
  font-size: calc(20px + 0.3vw);
  transform: translateX(-56%);
  z-index: 5;
  visibility: visible;
}

.logo_menu {
  position: relative;
  /*  width: calc(100vw - 46px); */
  width: calc(100vw);
  height: 3.9rem;
  margin-bottom: 0;
  display: inline-block;
  z-index: 3;
  /* transform: translateX(-46px); */
}

.logo_menu::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  background-color: transparent;
  font-size: calc(20px + 0.3vw);
}

.logo_img {
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/*navlink show animation*/

.navlink.active_li .navlink_content[data-index='4']::before {
  animation: anim-black-link 1.2s ease-in-out forwards;
}
.navlink.active_li .navlink_content[data-index='3']::before {
  animation: anim-yellow-link 1.2s ease-in-out forwards;
}
.navlink.active_li .navlink_content[data-index='2']::before {
  animation: anim-purple-link 1.2s ease-in-out forwards;
}
.navlink.active_li .navlink_content[data-index='1']::before {
  animation: anim-green-link 1.2s ease-in-out forwards;
}
.navlink.active_li .navlink_content[data-index='0']::before {
  animation: anim-orange-link 1.2s ease-in-out forwards;
}

@media (min-width: 160px) {
  .menu {
    display: block;
  }
  .navbar_row {
    display: none;
  }

  .logo_menu_text {
    font-size: calc(18px + 0.3vw);
  }
}

@media (min-width: 460px) {
  .main_app {
    top: 0;
    min-height: calc(100vh - var(--navbar-height-mob-desk));
  }

  .menu {
    display: none;
  }
  .navbar_row {
    width: 100%;
    margin: 0;
    display: block;
  }

  /*  .menu_wrap {
    left: 0.5rem;
  } */

  .logo_menu {
    width: calc(100vw);
  }

  .logo_menu_text {
    font-size: calc(20px + 0.3vw);
    /*   transform: translateX(-40%); */
    visibility: hidden;
  }

  /*navbar desktop link */
  .navbar_content_tags {
    height: var(--navbar-height-mob-desk);
    background-color: rgba(0, 0, 128, 0.95);
    padding: 0.25rem 0.5rem;
  }

  .navlink_container {
    gap: calc(26px + 0.45vw);
  }

  .navlink .navlink_content {
    position: relative;
    cursor: pointer;
    padding: 0;
    height: 2.1em;
    display: flex;
    align-items: center;
    text-align: left;
    transition: all 1s ease-in-out;
    z-index: 5;
  }

  .navlink .navlink_content a {
    color: var(--body-text-color);
    font-size: calc(12px + 0.2vw);
  }

  .navlink .navlink_content::before {
    content: '';
    position: absolute;
    bottom: 2px;
    height: 1px;
    width: 0;
    background-color: var(--body-text-color);
    border-radius: 24px;
    transition: all 0.84s ease-in-out;
  }

  .navlink .navlink_content:hover::before {
    width: 100%;
  }

  /*separ*/

  .navlink.active_li .navlink_content {
    position: relative;
    padding: 0.5rem 1rem;
    margin-bottom: 0.25rem;
    color: #fff;
    border-radius: 24px;
    outline: 2px solid #ddd;
    outline-offset: -6px;
  }

  .navlink.active_li .navlink_content::before {
    z-index: 1;
    width: 100%;
    height: calc(100% - 0.4rem);
    background-color: rgba(0, 0, 0, 0.215);
  }

  .navlink.active_li .navlink_content a {
    color: var(--body-text-color);
    font-size: calc(0.7em + 0.1vw);
  }
}

@media (min-width: 768px) {
  .navbar_row {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    display: block;
    z-index: 5;
  }

  .navbar_content_tags {
    /*  background-color: #3c3c3f; */
    padding: 0.25rem 2rem 0 0;
  }

  .title_nav {
    padding-left: 1.5rem;
    font-size: calc(16px + 0.28vw);
  }

  .navlink.active_li .navlink_content {
    padding: 1rem;
  }

  .navlink .navlink_content a {
    font-size: calc(13px + 0.25vw);
  }

  .navlink.active_li .navlink_content a {
    font-size: calc(13px + 0.18vw);
  }
}

/* @keyframes anim */
@keyframes menu-link-anim {
  0% {
    border-left: 2px solid rgb(209, 190, 228);
    border-top-left-radius: 24px;
  }

  25% {
    border-top: 2px solid rgb(209, 190, 228);
    border-top-right-radius: 24px;
  }

  50% {
    border-right: 2px solid rgb(209, 190, 228);
    border-bottom-right-radius: 24px;
  }

  75% {
    border-bottom: 2px solid rgb(209, 190, 228);
    border-top-left-radius: 24px;
  }

  100% {
    border: 2px solid rgb(209, 190, 228);
    border-radius: 24px;
  }
}

@keyframes anim-black-link {
  0% {
    width: 0;
    height: calc(100% - 0.6rem);
    opacity: 1;
    background-color: transparent;
    border-radius: 24px;
    overflow: hidden;
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 6px;
  }
  100% {
    width: calc(100% - 12px);
    height: calc(100% - 0.6rem);
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.215);
    border-radius: 24px;
    overflow: hidden;
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 6px;
  }
}

@keyframes anim-yellow-link {
  0% {
    width: 0;
    height: calc(100% - 0.6rem);
    opacity: 1;
    background-color: transparent;
    border-radius: 24px;
    overflow: hidden;
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 6px;
  }
  100% {
    width: calc(100% - 12px);
    height: calc(100% - 0.6rem);
    opacity: 1;
    background-color: rgba(255, 255, 0, 0.315);
    border-radius: 24px;
    overflow: hidden;
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 6px;
  }
}

@keyframes anim-purple-link {
  0% {
    width: 0;
    height: calc(100% - 12px);
    opacity: 1;
    background-color: transparent;
    border-radius: 24px;
    overflow: hidden;
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 6px;
  }
  100% {
    width: calc(100% - 12px);
    height: calc(100% - 0.6rem);
    opacity: 1;
    background-color: rgba(128, 0, 128, 0.315);
    border-radius: 24px;
    overflow: hidden;
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 6px;
  }
}

@keyframes anim-green-link {
  0% {
    width: 0;
    height: calc(100% - 12px);
    opacity: 1;
    background-color: transparent;
    border-radius: 24px;
    overflow: hidden;
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 6px;
  }
  100% {
    width: calc(100% - 12px);
    height: calc(100% - 0.6rem);
    opacity: 1;
    background-color: rgba(0, 128, 0, 0.315);
    border-radius: 24px;
    overflow: hidden;
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 6px;
  }
}

@keyframes anim-orange-link {
  0% {
    width: 0;
    height: calc(100% - 0.6rem);
    opacity: 1;
    background-color: transparent;
    border-radius: 24px;
    overflow: hidden;
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 6px;
  }
  100% {
    width: calc(100% - 12px);
    height: calc(100% - 0.6rem);
    opacity: 1;
    background-color: rgba(255, 166, 0, 0.315);
    border-radius: 24px;
    overflow: hidden;
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 6px;
  }
}
</style>
