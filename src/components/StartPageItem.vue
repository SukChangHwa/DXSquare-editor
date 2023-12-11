<template>
  <section class="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
    <div
      class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
      style="transform: translateZ(0)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon class="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
          >
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              class="w-full align-middle rounded-t-lg"
            />
            <blockquote class="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                class="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  class="text-emerald-500 fill-current"
                ></polygon>
              </svg>
              <h4 class="text-xl font-bold text-white">Great for your awesome project</h4>
              <p class="text-md font-light mt-2 text-white">
                Putting together a page has never been easier than matching together pre-made
                components. From landing pages presentation to login areas, you can easily customise
                and built your pages.
              </p>
            </blockquote>
          </div>
        </div>

        <div class="w-full md:w-6/12 px-4">
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 mt-4">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-newspaper"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">템플릿</h6>
                  <div class="mb-4 text-blueGray-500">
                    템플릿을 직접 만들거나<br />외부 파일을 이용해보세요.<br />MS Word 파일을
                    붙여넣거나<br />PDF 파일을 불러올 수 있어요.
                    <a
                      class="mt-5 mb-4 ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 block"
                      @click="goCreateTemplatePage"
                    >
                      작성하기
                    </a>
                    <a
                      href=""
                      class="mt-5 mb-4 ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 block"
                      target="_blank"
                    >
                      불러오기
                    </a>
                  </div>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">TDB</h6>
                  <div class="mb-4 text-blueGray-500">
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index"
                      target="_blank"
                      class="get-started text-white mt-5 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 block"
                    >
                      TBD
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">서식 만들기</h6>
                  <div class="mb-4 text-blueGray-500">
                    템플릿을 이용해 <br />계약서 서식을 만들 수 있어요.
                    <a
                      @click="showSelectTemplateModal(true)"
                      class="get-started text-white mt-5 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 block"
                    >
                      입력 항목 배치하기
                    </a>
                  </div>
                </div>
              </div>
              <div class="relative flex flex-col min-w-0">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                  >
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <h6 class="text-xl mb-1 font-semibold">계약 하기</h6>
                  <div class="mb-4 text-blueGray-500">
                    만든 서식을<br />계약 문서로 전달합니다.
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index"
                      target="_blank"
                      class="mt-5 mb-4 ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 block"
                    >
                      계약 문서 발송
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 pb-32 pt-48">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-5/12 ml-auto px-12 md:px-4">
          <div class="md:pr-12">
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-file-alt text-xl"></i>
            </div>
            <h3 class="text-3xl font-semibold">Complex Documentation</h3>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              This extension comes a lot of fully coded examples that help you get started faster.
              You can adjust the colors and also the programming language. You can change the text
              and images and you're good to go.
            </p>
            <ul class="list-none mt-6">
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                    >
                      <i class="fas fa-fingerprint"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">Built by Developers for Developers</h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                    >
                      <i class="fab fa-html5"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">Carefully crafted code for Components</h4>
                  </div>
                </div>
              </li>
              <li class="py-2">
                <div class="flex items-center">
                  <div>
                    <span
                      class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3"
                    >
                      <i class="far fa-paper-plane"></i>
                    </span>
                  </div>
                  <div>
                    <h4 class="text-blueGray-500">Dynamic Javascript Components</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
          <img
            alt="..."
            class="max-w-full rounded-lg shadow-xl"
            style="
              transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);
            "
            :src="documentation"
          />
        </div>
      </div>
    </div>
  </section>
  <TemplateSelectModal v-if="isShowTemplateModal" :title="'템플릿 선택하기'" @cancel="(val)=> showSelectTemplateModal(val)" @confirm="(item)=> moveTemplateEditPage(item)"></TemplateSelectModal>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import documentation from '@/assets/images/documentation.png'
import TemplateSelectModal from '@/components/modal/TemplateSelectModal.vue'
import {useImageStore, type ItemplateImg} from '@/stores/image'
import { useServiceStore } from '@/stores/service'
import router from '@/router'

const imageStore = useImageStore()
const serviceStore = useServiceStore()

const isShowTemplateModal = ref(false)
const showSelectTemplateModal = (val)=> {
  isShowTemplateModal.value = val
}

const goCreateTemplatePage = () => {
  serviceStore.setCreateBarStatus(false)
  router.push({path: '/doc/editor'})
}

const moveTemplateEditPage = (item: ItemplateImg)=>{
  imageStore.setSelectImage(item.fileName)
  serviceStore.setCreateBarStatus(true)
  router.push({path: '/doc/dashboard'})
}
</script>
<style scoped></style>
