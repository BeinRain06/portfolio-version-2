<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'

import { sendDataMail } from '../api_functions/api_function'
import { redirectionMedia, handleHoverMedia } from '@/reusable-function/media-target'

const tweetRef = <any>ref()
const gitRef = <any>ref()
const linkedInRef = <any>ref()
const warningDiv = <any>ref()
const nameInputForm = <any>ref()
const emailInputForm = <any>ref()
const msgTextAreaForm = <any>ref()

const floatingBox: Ref<HTMLDivElement | undefined> = ref()

let mediaSocial = reactive({ mediaLink: '' })

const lastScrollYPos = ref(0)

onMounted(async () => {
  await floatingBox
  if (floatingBox) {
    window.addEventListener('scroll', handleHappyMessage)
  }
})

onUnmounted(async () => {
  await floatingBox
  if (floatingBox) {
    window.removeEventListener('scroll', handleHappyMessage)
  }
})

const thisURL = ref(
  'https://script.google.com/macros/s/AKfycbypH2BtAHlCavQC5M35GMVIYS4NKpllq5XnRp1c-YWk70TLZAbqG8AQftGl5MwLjwZgVQ/exec'
)

let media = reactive({ mediaLink: '' })
let emailFormat = reactive({
  name: '',
  email: '',
  message: ''
})
let warningAttribute = reactive({
  stateError: false,
  stateSuccess: false,
  message: ''
})

const formTag = computed(() => {
  const newObj = {
    name: nameInputForm.value,
    email: emailInputForm.value,
    message: msgTextAreaForm.value
  }

  return newObj
})

function handleHappyMessage(e: Event) {
  const yPos = window.scrollY
  const deltaX = yPos - lastScrollYPos.value

  if (deltaX < 0) {
    console.log('scroll upwards')
    floatingBox.value?.classList.remove('active_greeting')
  } else {
    console.log('scroll downwards')
    floatingBox.value?.classList.add('active_greeting')
  }

  lastScrollYPos.value = yPos
}

function handThisData(e: Event, element: string) {
  const newTag = (<HTMLInputElement>e.target).value

  if (element === 'name') {
    emailFormat.name = newTag
  } else if (element === 'email') {
    emailFormat.email = newTag
  } else if (element === 'message') {
    emailFormat.message = newTag
  }
}

function delayTime(timeSet: number) {
  setTimeout((): void => {
    emailFormat.name = ''
    emailFormat.email = ''
    emailFormat.message = ''

    warningAttribute.message = ''
    warningAttribute.stateError = false
    warningAttribute.stateSuccess = false

    nameInputForm.value.value = ''
    emailInputForm.value.value = ''
    msgTextAreaForm.value.value = ''
  }, timeSet)
}

function sendOurMailReview(emailFormat: { name: string; email: string; message: string }) {
  // \w - alias for [a-zA-Z_0-9]
  // "whitespace"?  - allow whitespace after word, set is as optional
  const regExName = /^[a-zA-Z]{1,2}(\w+ ?)+$/
  const regEXEmail = /^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.[a-zA-Z]{2,5}$/

  const checkName = regExName.test(emailFormat.name)
  const checkEmail = regEXEmail.test(emailFormat.email)

  if (emailFormat.name === '' || emailFormat.email === '') {
    warningAttribute.message = 'name and email needed!'

    warningAttribute.stateError = true

    delayTime(5000)

    return
  }

  if (emailFormat.message === '') {
    warningAttribute.message = 'Please Leave a Message!'

    warningAttribute.stateError = true

    delayTime(5000)
  }

  if (checkName && checkEmail) {
    const formatMailObj = {
      name: emailFormat.name,
      email: emailFormat.email,
      message: emailFormat.message
    }

    // Method POST Email
    sendDataMail(formatMailObj, thisURL.value)

    warningAttribute.message = 'Message Sent'

    warningAttribute.stateSuccess = true

    delayTime(3000)
  } else if (!checkName && !checkEmail) {
    warningAttribute.message = 'There is an error. Check field name and email!'

    warningAttribute.stateError = true

    delayTime(5000)

    return
  } else if (!checkName) {
    warningAttribute.message = 'error  name !'

    delayTime(5000)

    return
  } else if (!checkEmail) {
    warningAttribute.message = 'error email !'
    warningAttribute.stateError = true

    delayTime(5000)

    return
  }
}
</script>

<template>
  <section id="contact_page">
    <div class="msg_and_form_container container-fluid">
      <div class="msg_together row d-flex flex-column align-items-center">
        <div class="main_contact_area">
          <!--contact board -->
          <div class="contact_board">
            <div class="social_activity">
              <div class="social_msg">
                <p class="social_says">social media</p>
              </div>
              <div class="social_media_wrap">
                <div
                  class="social_media_content"
                  @click.prevent="(e: Event) => redirectionMedia(e, mediaSocial)"
                >
                  <div
                    class="link_media"
                    @mouseover="(e: Event) => handleHoverMedia(e, 'hover')"
                    @mouseleave="(e: Event) => handleHoverMedia(e, 'leave')"
                  >
                    <div id="link_tweeter" class="link_icon" data-icon="0" ref="tweetRef"></div>
                  </div>
                  <div
                    class="link_media"
                    @mouseover="(e: Event) => handleHoverMedia(e, 'hover')"
                    @mouseleave="(e: Event) => handleHoverMedia(e, 'leave')"
                  >
                    <div id="link_github" class="link_icon" data-icon="0" ref="gitRef"></div>
                  </div>
                  <div
                    class="link_media"
                    @mouseover="(e: Event) => handleHoverMedia(e, 'hover')"
                    @mouseleave="(e: Event) => handleHoverMedia(e, 'leave')"
                  >
                    <div id="link_linkedin" ref="linkedInRef" class="link_icon" data-icon="0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--form container -->
          <form class="form_container" v-scroll="handleHappyMessage">
            <div class="floating_box" ref="floatingBox">
              <div class="floating_appeareance">
                <p class="message_me">Let's Build Something Together !</p>
              </div>
            </div>
            <div class="sharing_msg">
              <p class="message_me">Let's Build Something Together !</p>
            </div>
            <div id="name_wrap" class="name_wrap form_content_control">
              <label for="signature">Guess Name</label>
              <input
                type="text"
                id="name"
                class="input_field"
                name="name"
                placeholder="signature"
                ref="nameInputForm"
                @input.event="(e) => handThisData(e, 'name')"
              />
            </div>
            <div id="email_wrap" class="email_wrap form_content_control">
              <label for="email">email</label>
              <input
                type="text"
                id="email"
                class="input_field"
                name="email"
                placeholder="email_address"
                ref="emailInputForm"
                @input.event="(e) => handThisData(e, 'email')"
              />
              <div class="warning_submit_msg" v-if="warningAttribute.stateError" ref="warningDiv">
                <p class="w-100 h-100 d-flex justify-content-center align-items-center m-0">
                  {{ warningAttribute.message }}
                </p>
              </div>
              <div class="success_submit_msg" v-if="warningAttribute.stateSuccess" ref="warningDiv">
                <p class="w-100 h-100 d-flex justify-content-center align-items-center m-0">
                  {{ warningAttribute.message }} &#10003;
                </p>
              </div>
            </div>
            <div id="message_wrap" class="message_wrap form_content_control">
              <label for="message">Leave a Message</label>
              <textarea
                id="message"
                name="message"
                class="message"
                placeholder="drop_message"
                rows="5"
                cols="30"
                ref="msgTextAreaForm"
                @input.event="(e) => handThisData(e, 'message')"
              ></textarea>
            </div>
            <div class="submit_container">
              <button class="btn_sub_msg" @click.prevent="() => sendOurMailReview(emailFormat)">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/*Main container*/

@media (min-width: 160px) {
  .msg_and_form_container .msg_together {
    position: relative;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    overflow-x: hidden;
  }

  /* drop a message */
  .main_contact_area {
    position: relative;
    top: 0rem;
    width: 80%;
    height: auto;
    margin: 0 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .msg_and_form_container {
    position: relative;
    top: 0;
    width: 100vw;
    height: auto;
    padding: 0;
    background-color: var(--bg-primary-color);
  }

  .msg_and_form_container::before {
    content: '';
    position: absolute;
    top: -12%;
    left: calc(25%);
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/profile_2.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.42;
    transform: scale(0.6);
  }

  .main_contact_area {
    width: 90%;
    height: 595px;
    max-width: 680px;
    margin: 2.5rem 0 2rem;
    display: flex;
    flex-direction: column-reverse;
  }

  .contact_board {
    position: relative;
    top: 0.5rem;
    padding: 0;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100px;
  }

  .contact_board .social_activity {
    padding: 0px 8px 5px;
    display: flex;
    flex-direction: column;
  }

  .social_activity .social_msg {
    width: 100vw;
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .social_msg .social_says {
    position: relative;
    top: 0.9rem;
    color: var(--text-color-two);
    writing-mode: horizontal-tb;
    font-size: 14px;
  }

  .social_activity .social_media_wrap {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  /* -------link media-------- */

  .social_media_content {
    width: 100%;
    height: 50px;
    margin-top: 0.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100%;
    place-items: center;
  }

  .social_media_content .link_media {
    height: 3rem;
    font-size: calc(13px + 0.25vw);
    display: grid;
    place-items: center;
  }

  .link_media .link_icon[data-icon='0'] {
    position: relative;
    top: 0;
  }

  .link_media:hover .link_icon[data-icon='1'] {
    position: relative;
    top: -16px;
  }

  .form_container {
    position: relative;
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    justify-content: center;
  }

  .form_container input,
  .form_container button {
    border: none;
    outline: none;
  }

  .sharing_msg {
    position: relative;
    width: 100%;
    top: 1rem;
    display: flex;
    justify-content: center;
    border: 1px solid transparent;
  }

  .floating_box {
    display: none;
    width: 100%;
  }

  .message_me {
    font-size: calc(14px + 0.1vw);
    color: var(--text-color-three);
    padding: 5px 0;
    transition: all 380ms ease-in-out;
  }

  .message_me:hover {
    color: var(--text-color-two);
    letter-spacing: 0.35px;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.38);
    font-size: calc(14px + 0.35vw);
  }

  .name_wrap {
    letter-spacing: 0 !important;
  }

  .email_wrap {
    position: relative;
  }

  .email_wrap .warning_submit_msg,
  .email_wrap .success_submit_msg {
    position: absolute;
    top: 5px;
    width: 80%;
    padding: 5px 10px;
    color: brown;
    background-color: #cfcd51;
    visibility: visible;
    opacity: 1;
    border-radius: 5px;
    box-shadow: -1px -2px 3px rgba(0, 0, 0, 0.3);
    transition: all 450ms ease;
  }

  .email_wrap .success_submit_msg {
    background-color: #aafc9f;
    color: #0b8a3b;
  }

  .message_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .message_wrap textarea {
    padding: 5px;
    color: #e2e2e0;
    background-color: transparent;
    outline: none;
    border-radius: 5px;
    border: 1px solid var(--bg-border-layout);
  }

  .submit_container {
    position: relative;
    width: 100%;
    padding: 0;
    margin: 2.5rem auto 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
  }

  .submit_container .btn_sub_msg {
    width: 100%;
    color: #fff;
    padding: 12px 0;

    background-color: rgba(107, 25, 100, 0.18);
    border-radius: 5px;
    font-size: calc(14px + 0.25vw);
    transition: background-color 650ms ease-in-out;
  }

  .submit_container .btn_sub_msg:hover {
    background-color: rgba(128, 0, 128, 0.315);
  }

  .form_content_control {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .form_container label {
    position: relative;
    top: 0;
    left: 0;
    width: max-content;
    color: var(--bg-border-layout);
    font-size: calc(12px + 0.15vw);
    display: block;
    float: left;
  }

  .form_container input {
    height: 32px;
    color: var(--text-color-three);
    padding-left: 0.5rem;
    margin-bottom: 1rem;
    background-color: transparent;
    border-bottom: 1px solid var(--bg-border-layout);
    border-bottom-right-radius: 5px;
    transition: all 300ms ease-in-out;
  }

  .form_container input::placeholder,
  .form_container textarea::placeholder {
    font-size: 12px;
    color: var(--text-placeholder);
  }
}

@media (min-width: 460px) {
  .link_station {
    height: calc(100vh - 50px);
  }

  .main_contact_area {
    width: 84%;
    height: 660px;
  }

  .sharing_msg {
    justify-content: flex-end;
    border: 1px solid transparent;
  }

  .message_me {
    padding: 3px 0;
    font-size: calc(13px + 0.15vw);
  }

  .sharing_msg .message_me:hover {
    color: hsla(240, 100%, 25%, 0.753);
    letter-spacing: 0.5px;
    font-size: calc(13px + 0.25vw);
  }

  .form_container label {
    width: 40%;
    font-size: calc(14px + 0.3vw);
  }

  .form_content_control {
    gap: 0.25rem;
  }

  .message_wrap {
    padding-top: 1rem;
    gap: 1.25rem;
  }

  .submit_container {
    margin: 3rem auto 0;
  }

  .submit_container .btn_sub_msg {
    padding: 15px 0;
  }
}

@media (min-width: 768px) {
  .main_contact_area {
    top: 0.35rem;
    left: -0.35rem;
    width: 80%;
    height: 40rem;
    max-width: 920px;
    margin: 1rem 0;
    flex-direction: row;
    gap: 20px;
  }

  .contact_board {
    top: 6rem;
    width: 11rem;
    flex-shrink: 0;
    grid-template-rows: 21rem;
  }

  .contact_board .social_activity {
    height: 100%;
    padding: 10px 8px;
    background-color: rgba(107, 25, 100, 0.18);
  }

  .social_activity .social_msg {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .social_msg .social_says {
    writing-mode: sideways-lr;
    top: 15px;
    left: 0;
    letter-spacing: 1px;
    font-size: calc(14px + 0.15vw);
  }

  .link_media:hover .link_icon {
    position: relative;
    padding: 0.6rem;
  }

  .floating_box {
    display: flex;
    position: absolute;
    top: 8rem;
    width: 100%;
    height: 3rem;
    justify-content: flex-end;
  }

  .floating_box .floating_appeareance {
    visibility: hidden;
    opacity: 0;
    transition: all 350ms ease;
  }

  .floating_box.active_greeting .floating_appeareance {
    visibility: visible;
    opacity: 1;
  }

  .sharing_msg[data-v-ae84ca9b] {
    position: relative;
    top: 1rem;
    left: 2rem;
    width: 100%;
    height: 3rem;
    display: inline-flex;
    justify-content: flex-end;
    visibility: visible;
    opacity: 1;
    border: 1px solid transparent;
  }

  .floating_box.active_greeting + .sharing_msg {
    visibility: hidden;
    opacity: 0;
    transition: all 300ms linear;
  }

  .submit_container {
    padding: 1rem 0.5rem;
    border: 1px solid var(--bg-border-layout);
  }

  .submit_container .btn_sub_msg {
    width: 90%;
    padding: 15px;
    transition: all 350ms ease-in-out;
  }

  input.input_field {
    min-height: 35px;
    padding: 0.5rem;
    width: 60%;
  }

  textarea.message {
    padding: 0.5rem;
  }

  input.input_field::placeholder,
  textarea.message::placeholder {
    font-size: calc(13px + 0.1vw);
  }
}
</style>
