<script setup>

import AOS from 'aos'
import 'aos/dist/aos.css'
onMounted(() => {
    AOS.init();
    try {
        document.querySelector('#loader').classList.add('hidden')
    } catch (error) {

    }
})
useSeoMeta({
    title: '👋 Olá Mundo - Jefre Massingue',
    ogTitle: '👋 Olá Mundo - Jefre Massingue',
    description: 'Sou Jefre José Massingue, um apaixonado desenvolvedor fullstack com uma sólida formação em Informática e uma trajetória rica em experiência profissional.',
    ogDescription: 'Sou Jefre José Massingue, um apaixonado desenvolvedor fullstack com uma sólida formação em Informática e uma trajetória rica em experiência profissional.',
    ogImage: 'https://jefre.massingue.site/og.png',
    twitterCard: 'https://jefre.massingue.site/og.png',
})
const menu = ref([
    // { id: 6, title: 'Inicio', route: 'index' },
    { id: 1, title: 'Sobre', route: 'about' },
    { id: 2, title: 'Serviços', route: 'services' },
    { id: 3, title: 'Projectos', route: 'projects' },
    { id: 4, title: 'Blog', route: 'blog' },
    { id: 5, title: 'Contacto', route: 'contact' },
])
const showMenu = ref(false);
const socialMedia = ref([
    { id: 1, name: 'Linkedin', icon: 'ri-linkedin-line', link: "https://mz.linkedin.com/in/jefre-jos%C3%A9-massingue-21086a277?trk=people-guest_people_search-card" },
    { id: 2, name: 'Github', icon: 'ri-github-line', link: "https://github.com/jefremassingue" },
    { id: 3, name: 'Instagram', icon: 'ri-instagram-line', link: "https://www.instagram.com/jefre.dev/" },
]);


const services = ref([
    {
        id: 1,
        title: "Desenvolvimento de aplicativos",
        description: "Construção de plataformas web, mobile e desktop robustas e intuitivas.",
        icon: "ri-terminal-window-line",
        details: [
            "Desenvolvimento fullstack utilizando as mais recentes tecnologias e frameworks.",
        ],
    },
    {
        id: 2,
        title: "Consultoria em Tecnologia",
        description: "Orientação estratégica para implementação de tecnologias específicas.",
        icon: "ri-headphone-line",
        details: [
            "Análise de requisitos e recomendações para otimização de processos.",
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "Criação de interfaces atraentes e intuitivas para experiências de usuário excepcionais.",
        icon: "ri-palette-fill",
        details: [
            "Garantia de design responsivo e acessibilidade.",
        ],
    },
    {
        id: 4,
        title: "Desenvolvimento de APIs",
        description: "Construção de APIs RESTful escaláveis para facilitar a comunicação entre diferentes componentes.",
        icon: "ri-code-s-slash-line",
        details: [
            "Integração eficiente entre frontend e backend.",
        ],
    },
    // {
    //     id: 5,
    //     title: "Gestão de Projetos Ágeis",
    //     description: "Liderança de equipes de desenvolvimento.",
    //     icon: "ri-palette-fill",
    //     details: [
    //         "Implementação de metodologias ágeis para garantir entregas eficientes.",
    //     ],
    // },
    //   {
    //     id: 6,
    //     title: "Serviços de Redes e Gerenciamento de Dados",
    //     description: "Configuração e otimização de serviços de redes.",
    //     icon: "ri-palette-fill",
    //     details: [
    //       "Gerenciamento eficiente de bases de dados (SQL e NoSQL).",
    //     ],
    //   },
    {
        id: 7,
        title: "Manutenção e Atualização",
        description: "Suporte contínuo para garantir o bom funcionamento de plataformas existentes.",
        icon: "ri-tools-fill",
        details: [
            "Atualizações regulares para incorporar as últimas melhorias tecnológicas.",
        ],
    },
    //   {
    //     id: 8,
    //     title: "Treinamento e Workshops",
    //     description: "Sessões de treinamento para equipes em novas tecnologias e práticas de desenvolvimento.",
    //     icon: "ri-palette-fill",
    //     details: [
    //       "Workshops personalizados para aprimorar habilidades específicas.",
    //     ],
    //   },
]);
</script>


<template>
    <!-- <LoadingIndicator /> -->

    <transition>

        <div id="loader" style="height: 100dvh; max-width: 100dvw;"
            class="z-30 fixed top-0 right-0 left-0 bg-base-200 flex justify-center items-center">
            <div class="flex justify-center items-center flex-col gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 379.29 440.66">
                    <defs>
                        <linearGradient id="linear-gradient" x1="222.86" y1="129.97" x2="176.86" y2="129.97"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#12ecfa" />
                            <stop offset="1" stop-color="#00b7ff" stop-opacity="0.9" />
                        </linearGradient>
                        <linearGradient id="linear-gradient-2" x1="220.75" y1="367.14" x2="92.91" y2="367.14"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#12ecfa" />
                            <stop offset="1" stop-color="#00b7ff" />
                        </linearGradient>
                        <radialGradient id="radial-gradient" cx="273.82" cy="296.95" fx="352.4850660290275"
                            fy="378.0174473107311" r="112.96"
                            gradientTransform="matrix(0.39, -0.92, 0.88, 0.37, -92.62, 439.36)"
                            xlink:href="#linear-gradient-2" />
                        <linearGradient id="linear-gradient-3" x1="164.93" y1="188.87" x2="0" y2="188.87"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0.59" stop-color="#12ecfa" />
                            <stop offset="1" stop-color="#00b7ff" />
                        </linearGradient>
                        <linearGradient id="linear-gradient-4" x1="205.83" y1="173.38" x2="304.17" y2="292.84"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0.42" stop-color="#fff" />
                            <stop offset="0.48" stop-color="#cbc8cf" />
                        </linearGradient>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_2-2" data-name="Layer 2">
                            <path class="cls-1"
                                d="M134,141,85.23,172C80,175.6,63,188.13,58.1,210.53a47.17,47.17,0,0,0-.74,20.13,44.41,44.41,0,0,0,6,15.12c-30.91-1.3-57,19.28-61.83,45.67a184.32,184.32,0,0,1,6.24-76.56c22.1-74.3,86.23-124,156.44-128.61h0c3.68,17-7.76,32.47-11.11,37C149.05,128.76,145,134,134,141Z" />
                            <path class="cls-1"
                                d="M333.22,311.7c-24,80.63-97.44,132.32-174.46,128.79q-6.93-.32-13.9-1.25h-.13a3.06,3.06,0,0,1-.48-.07,1.74,1.74,0,0,1-.83-.44c-1-1-.56-3.53,1.31-6.19a54.54,54.54,0,0,1,4.25-6.37,53.89,53.89,0,0,1,4.5-5.13A175.27,175.27,0,0,1,185,397.22c9-5.28,16.15-8.36,30.88-17.19,7.45-4.47,13.44-8.37,17.37-11a132.85,132.85,0,0,0,47.5-46,116.3,116.3,0,0,0,11.37-29.75c4.36-19,4-40,3.26-48.88-.55-6.76.28-13.59-.07-20.37a18.94,18.94,0,0,1,.68-6.19c.12-.42.23-.76.3-1s.2-.74.38-1.26c2.18-6.59,6.9-10.61,11.27-14,11.06-8.57,16.6-12.87,19.67-11.32A182.42,182.42,0,0,1,333.22,311.7Z" />
                            <g id="Layer_6" data-name="Layer 6">
                                <path class="cls-2"
                                    d="M176.86,131.53q.12,18.43.25,36.88a89.83,89.83,0,0,0,45.75-76.88,84.45,84.45,0,0,1-25.25,29.13,83.23,83.23,0,0,1-20.49,10.72Z" />
                                <path class="cls-3"
                                    d="M177,124c0-.79,0-1.24,0-1.24h0s-.24-31.18-.24-31.26a98.13,98.13,0,0,1,0-24.25,16.57,16.57,0,0,1,32.75,3A84.47,84.47,0,0,1,177,124Z" />
                                <path class="cls-4"
                                    d="M274.61,145.41c-.48,17.21-.67,31.26-.75,40.75-.18,20.35-.45,85.58-.88,97.12-.12,3.29-.25,6.58-.37,9.88-.08,2.09-.17,4.28-.25,6.37A82.21,82.21,0,0,0,278,284.66a81.08,81.08,0,0,0,2.75-18l-.12-57a161.14,161.14,0,0,1,10.12-47.38,104,104,0,0,0,1.5-10.37,106.47,106.47,0,0,0-.12-21.25Q283.35,138,274.61,145.41Z" />
                                <path class="cls-5"
                                    d="M294.61,190.66c.51.33,2.76-3.18,7.12-6.38a30.94,30.94,0,0,1,9.75-4.75,3,3,0,0,0,2.75-1.12c.8-1.23.29-3.39-1.62-4.5a11.62,11.62,0,0,0-6.13.12,12.39,12.39,0,0,0-7.25,6.25C294.83,188.42,294.25,190.43,294.61,190.66Z" />
                                <path class="cls-6"
                                    d="M320.86,143.41c2-1.43,4.24-3,7.25-2.75a9.14,9.14,0,0,1,6,3.5,7.61,7.61,0,0,1,2,4.75c.06,3.05-2.12,5.16-3.75,6.75a19.76,19.76,0,0,1-10.75,5.12,8.05,8.05,0,0,1-5.75-3.5,7.8,7.8,0,0,1-.25-7.87A17.65,17.65,0,0,1,320.86,143.41Z" />
                                <path class="cls-7"
                                    d="M337.36,114.66c.71,1,2.7.75,3.62.5,1.42-.39,3.5-1.61,3.38-3.13s-2.48-2.86-4.38-2.37C337.68,110.24,336.47,113.39,337.36,114.66Z" />
                                <path class="cls-8"
                                    d="M305.86,128.66c.58.51,1.71.22,3.12-.13a12,12,0,0,0,3.13-1.37c2.4-1.37,3.6-2,4-3a4.14,4.14,0,0,0-1.13-4.63c-2.15-1.61-5.48.61-5.87.88C305.79,122.68,304.61,127.56,305.86,128.66Z" />
                                <path class="cls-9"
                                    d="M276,122.16c1.7,1.17,6-6,18-13.5,7.65-4.8,16-7.56,32.38-12.88,13.92-4.52,16-4.45,24.75-8.12,15.64-6.56,20-11.37,22.12-14.25,2-2.67,6.64-8.92,6-17.38a23.66,23.66,0,0,0-9.75-17.12c-11-7.27-32.82-.19-51.75,20a145.74,145.74,0,0,0-24.75,27C281.94,101.53,273.34,120.33,276,122.16Z" />
                                <path class="cls-10"
                                    d="M293.86,60.41c2.15,1.13,8.62-7.25,12-11.63,6-7.73,10.31-13.37,12.5-22.12,1.3-5.24,4.25-17-2.25-23.13-3.18-3-8.6-4.59-13-2.75C297.92,3,296.38,9,295.61,12c-2.21,8.63,1.34,12.28,2,22.25C298.61,49.48,291.55,59.2,293.86,60.41Z" />
                                <path class="cls-11"
                                    d="M226.48,128.66c3.16,2.06,19.56-18.37,23.38-23.13,14.52-18.1,18.7-29.09,20.62-35.37,2.17-7.11,3.9-13,2.13-20.38-2-8.3-8.92-20-18.75-20-6.73,0-12.79,5.57-15.5,11.38-4.62,9.86,1.58,18,3.75,30.12C247.46,101.29,222.85,126.29,226.48,128.66Z" />
                                <path class="cls-12"
                                    d="M142.61,76.41c1.45.26,2.7-1,3.87-2.25s2.86-3,2.38-4.63c-.58-2-4-3.28-6.5-2a5,5,0,0,0-2.5,4.75C140,73.92,140.93,76.1,142.61,76.41Z" />
                                <path class="cls-13"
                                    d="M130.48,59.41c3.86.51,6.93-2.61,8.25-5,.15-.27,3.1-5.83-.25-9.75-2.23-2.63-5.94-2.95-8.62-2.13a8.82,8.82,0,0,0-6.13,7.5C123.33,54.3,126.29,58.85,130.48,59.41Z" />
                                <path class="cls-7"
                                    d="M362.86,112.84c.75,1.47,3.88,1.69,5.81.38,1.12-.76,2.46-2.46,1.87-3.94s-2.82-1.88-4.31-1.5C363.83,108.4,362.07,111.32,362.86,112.84Z" />
                                <path class="cls-14"
                                    d="M170.11,304c1.88.6,3.39-9.86,15.37-23.62,10-11.47,24.5-22.11,32-22.87.7-.07,3.53-.28,3.75-1.32s-2.85-2.69-3.47-3a18.55,18.55,0,0,0-9.09-1.78,30.1,30.1,0,0,0-9.94,2.15c-.7.27-9.1,3.48-15.09,8.72C168.47,275.52,167.1,303.05,170.11,304Z" />
                                <path class="cls-15"
                                    d="M113.11,175.47l1.68,118.31a95.29,95.29,0,0,0-9.37-21.19c-5.64-9.38-9.46-11.91-16.5-23.81-4.19-7.08-6.3-10.64-7.88-16.12-1-3.32-3.85-14.76-.18-26.82C87.48,184.09,110.66,176.25,113.11,175.47Z" />
                                <path class="cls-16"
                                    d="M22.17,345.34c.38-4.15,2.89-27.33,23.44-44.06C65.92,284.75,88.82,286.77,93,287.22a41.1,41.1,0,0,0-14.62-13.13c-21.2-11.09-44.12,2.85-47.06,4.69A36.72,36.72,0,0,0,18,291.91a37.61,37.61,0,0,0-4.31,14.25C11.74,323.1,18.74,338.68,22.17,345.34Z" />
                                <path class="cls-17"
                                    d="M92.92,419.28c-.24,2.34,7.87,6.39,15.56,7.25a27,27,0,0,0,6.31,0c6.6-.83,11.17-4.14,16.5-8.25,9.3-7.16,13.94-10.74,21.7-18,5.78-5.42,8.79-8.25,12.8-12.72,6.38-7.1,12.43-13.83,17.63-23.81,4.23-8.12,5.11-13,11.44-21s8.9-7.43,9.5-7.25c2.45.75,3.81,5,3.81,10.44a24.12,24.12,0,0,0,8.06-7.13c1.22-1.71,5.89-8.28,4.13-16.75-.39-1.86-2-8.37-8-12.06-8.82-5.46-19.42,0-21.44,1-7.91,4-11.53,11-14.81,17.25C172,336.13,171,342.58,170,347.41c-1.46,6.82-6.67,31.15-23,49-4.06,4.44-12.56,13.52-26.25,18.12C106.39,419.36,93.15,417,92.92,419.28Z" />
                                <path class="cls-18"
                                    d="M128.86,167.59l26.25-21.93-.38,198a57.58,57.58,0,0,1-9.75,30c-11.26,16.45-31,25.81-50.72,24.75-20.75-1.12-43.59-13.9-50.53-35.82-1-3.28-6.29-21.1,4.31-37.68,11.78-18.42,32.52-19.78,34.5-19.88a36,36,0,0,1,15.75,3.19,36.91,36.91,0,0,1,8.43,5.19c.49.44,4.16,3.82,3.76,8.87-.06.75-.44,4.54-3.41,6.73-2.14,1.59-4.54,1.54-7.56,1.43-15-.56-15.83-.92-18.28-.28-1.41.36-7.58,2.15-10.87,7.87C66.5,344.72,69.27,352.09,70,354c3,7.91,9.68,11.62,11.44,12.56,12.27,6.56,30.43,2.76,40.12-9,6.1-7.39,7.13-15.84,7.32-20.06Z" />
                            </g>
                        </g>
                        <g id="Layer_5" data-name="Layer 5">
                            <path class="cls-19"
                                d="M333.22,311.7c-24,80.63-97.44,132.32-174.46,128.79l-13.9-1.25h-.13a3.06,3.06,0,0,1-.48-.07,1.74,1.74,0,0,1-.83-.44c-1-1-.56-3.53,1.31-6.19a54.54,54.54,0,0,1,4.25-6.37,53.89,53.89,0,0,1,4.5-5.13A175.27,175.27,0,0,1,185,397.22c9-5.28,16.15-8.36,30.88-17.19,7.45-4.47,13.44-8.37,17.37-11a132.85,132.85,0,0,0,47.5-46,116.3,116.3,0,0,0,11.37-29.75c4.36-19,4-40,3.26-48.88-.55-6.76.28-13.59-.07-20.37a18.94,18.94,0,0,1,.68-6.19c.12-.42.23-.76.3-1s.2-.74.38-1.26c2.18-6.59,6.9-10.61,11.27-14,11.06-8.57,16.6-12.87,19.67-11.32A182.42,182.42,0,0,1,333.22,311.7Z" />
                            <path class="cls-20"
                                d="M153.1,123.28C149.05,128.76,145,134,134,141L85.23,172C80,175.6,63,188.13,58.1,210.53a47.17,47.17,0,0,0-.74,20.13,44.41,44.41,0,0,0,6,15.12c-30.91-1.3-57,19.28-61.83,45.67a184.32,184.32,0,0,1,6.24-76.56c22.1-74.3,86.23-124,156.44-128.61h0C167.89,103.32,156.45,118.76,153.1,123.28Z" />
                        </g>
                        <g id="Layer_3" data-name="Layer 3">
                            <polygon class="cls-21"
                                points="177.04 179.34 260.11 105.84 259.92 317.34 233.29 340.22 232.92 172.41 177.04 219.47 177.04 179.34" />
                        </g>
                    </g>
                </svg>
                <h4 class="font-bold">Carregando...</h4>
            </div>
        </div>
    </transition>
    <header>
        <nav data-aos="fade-down" data-aos-duration="1500" class="fixed z-20 w-full px-4 top-4 start-0">
            <div
                class="flex flex-wrap items-center justify-between max-w-screen-xl p-2 pl-4 w-full md:p-4 mx-auto bg-base-200 rounded-xl md:rounded-2xl">
                <NuxtLink to="/" class="flex items-center space-x-3">
                    <img src="/logo.svg" class="h-12" alt="Flowbite Logo">
                    <!-- <span class="self-center text-2xl font-semibold text-white whitespace-nowrap">Flowbite</span> -->
                </NuxtLink>
                <div class="flex items-center gap-2 space-x-3 lg:order-2 lg:space-x-0">
                    <a v-for="social in socialMedia" :key="social.id" target="_blank" :href="social.link"
                        class="hidden btn md:flex">
                        <i :class="social.icon" class="ri-lg"></i>
                    </a>
                    <NuxtLink :to="{ name: 'contact' }" class="text-white btn btn-primary btn-sm lg:btn-md hidden md:flex">
                        Contacte-me
                    </NuxtLink>

                    <button @click="showMenu = true" type="button"
                        class="inline-flex -mt-1 items-center justify-center w-10 h-10 rounded-lg lg:hidden focus:outline-none focus:ring-0 text-zinc-400 hover:bg-zinc-700 focus:ring-zinc-600"
                        aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <i class="ri-bar-chart-horizontal-line text-2xl rotate-180"></i>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
                    <ul
                        class="flex flex-col p-4 mt-4 font-medium border rounded-lg md:p-0 md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
                        <li v-for="link in menu" :key="link.id">
                            <NuxtLink :to="{ name: link.route }" class="block p-0 text-white rounded " aria-current="page">
                                {{ link.title }}</NuxtLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <Transition name="slide-fade">
        <aside v-show="showMenu" style="height: 100dvh;"
            class="bg-base-200 z-30 fixed bottom-0 pb-4 left-0 right-0 overflow-y-auto">
            <header class="flex justify-end "><button @click="showMenu = false" class="btn"><i
                        class="ri-close-line text-3xl font-light"></i></button></header>

            <div class="flex flex-col justify-center mx-auto  max-w-xs gap-4">
                <div class="flex flex-wrap justify-center">
                    <div class="flex justify-center w-full">
                        <div class="relative">
                            <img src="/jefre-avatar-1.jpeg"
                                class="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8   max-w-[150px]" />
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <h2 class="font-bold text-xl text-white">Jefre J. Massingue</h2>
                    <h4 class="font-bold">System Developer</h4>
                    <p class="">
                        (+258) 84 480 6400 / 86 917 3996
                    </p>
                    <p class="">
                        jefre.dev@gmail.com <br> jefre@massingue.site
                    </p>
                </div>

                <div class="flex mx-auto items-center gap-2 space-x-3 lg:order-2 lg:space-x-0">
                    <a v-for="social in socialMedia" :key="social.id" target="_blank" :href="social.link"
                        class="btn btn-primary flex">
                        <i :class="social.icon" class="ri-lg"></i>
                    </a>
                </div>
                <br>
                <div class=" w-full px-8 mx-auto">
                    <ul class="flex flex-col gap-2 justify-center items-center font-medium">
                        <li v-for="link in menu" :key="link.id" class="w-full" @click="showMenu = false">
                            <NuxtLink :to="{ name: link.route }"
                                class="w-full text-center btn btn-primary rounded-full btn-outline text-white "
                                aria-current="page">
                                {{ link.title }}</NuxtLink>
                        </li>

                    </ul>
                </div>
            </div>
        </aside>
    </Transition>
    <main class="mt-[124px] mx-4" data-theme="dark">
        <input type="checkbox" value="dark" checked class="toggle theme-controller hidden" />
        <slot />

    </main>
    <footer data-aos="fade-up" data-aos-duration="1500"
        class="max-w-screen-xl p-10 mx-auto mb-0 text-center rounded-t-2xl md:text-left footer bg-base-200 lg:rounded-2xl mt-11 lg:my-11 text-base-content">
        <aside class="w-full">
            <img src="/logo.svg" class="w-32 mx-auto md:mx-0" alt="">
            <p class="w-full">Jefre José Massingue.<br />Vamos transformar a sua ideia em <br>uma solução tecnologica</p>
            <p class="w-full">Moçambique, Maputo - Bairro Laulane</p>
            <p class="w-full">
                (+258) 84 480 6400 / 86 917 3996
            </p>
            <p class="w-full">
                jefre.dev@gmail.com / jefre@massingue.site
            </p>
        </aside>
        <nav class="w-full">
            <header class="mx-auto md:mx-0 footer-title">Serviços</header>
            <a class="mx-auto text-center md:mx-0 link link-hover md:text-left" v-for="service in services"
                :key="service.id">{{
                    service.title }}</a>
        </nav>
        <nav class="w-full">
            <header class="mx-auto text-center md:mx-0 footer-title ">Páginas</header>
            <a class="mx-auto text-center md:mx-0 link link-hover md:text-left" v-for="link in menu" :key="link.id">{{
                link.title }}</a>

        </nav>

        <nav class="w-full">
            <header class="mx-auto md:mx-0 footer-title">Social</header>
            <a class="mx-auto text-center md:mx-0 link link-hover md:text-left" v-for="social in socialMedia"
                :key="social.id">{{
                    social.name }}</a>
        </nav>
    </footer>
    <div class="group fixed bottom-4 right-4 p-2 overflow-visible flex items-end justify-end w-32 h-32 ">
        <!-- main -->
        <div
            class="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 h-12 w-12 to-blue-500 z-50 absolute  ">
            <i class="ri-whatsapp-fill ri-xl"></i>
        </div>
        <!-- sub left -->
        <a href="https://wa.me/258844806400" target="_blank"
            class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   h-10 w-10 flex items-center justify-center p-2 hover:p-3 bg-green-600 scale-100 hover:bg-green-500 text-white">
            <i class="ri-whatsapp-line ri-xl"></i>

        </a>
        <!-- sub top -->
        <a href="tel:+258869173996"
            class="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  h-10 w-10 flex items-center justify-center p-2 hover:p-3 bg-blue-600 hover:bg-blue-500  text-white">
            <i class="ri-phone-line ri-xl"></i>
        </a>
        <!-- sub middle -->
        <a href="mailto:jefre.dev@gmail.com"
            class="absolute rounded-full transition-all duration-[0.2s]   h-10 w-10 items-center justify-center ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14   flex  p-2 hover:p-3 bg-zinc-600 hover:bg-zinc-400 text-white">
            <i class="ri-message-fill ri-xl"></i>

        </a>
    </div>
</template>

<style >
nav a:hover,
nav a.router-link-active,
nav a.router-link-exact-active {
    /* color: indianred; */
    color: var(--fallback-p, oklch(var(--p)/var(--tw-bg-opacity)));
    cursor: pointer;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(-100vw);
    opacity: 0;
}

.body,
#__nuxt,
.fixed,
html {
    /* max-height: 100vh; */
    max-width: 100vw !important;
    overflow-x: hidden;
}

#__nuxt::-webkit-scrollbar {
  display: none;
}
.fixed {
    position: fixed !important;
}

/*=============== SCROLL BAR ===============*/

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: rgba(204, 204, 204, 0.1);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    width: 8px;
    height: 8px;
    background-color: rgba(79, 70, 229, 0.4);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: rgba(79, 70, 229, 0.8);
    cursor: pointer;
}



.cls-1 {
    fill: #3297ba;
}

.cls-2 {
    fill: url(#linear-gradient);
}

.cls-3 {
    fill: #29ede6;
}

.cls-4 {
    fill: #1af7f9;
}

.cls-5 {
    fill: #08f3ff;
}

.cls-6 {
    fill: #24f4e9;
}

.cls-7 {
    fill: #16f0f6;
}

.cls-8 {
    fill: #00ecf6;
}

.cls-9 {
    fill: #20f2f6;
}

.cls-10 {
    fill: #29efe9;
}

.cls-11 {
    fill: #27ede6;
}

.cls-12 {
    fill: #00efff;
}

.cls-13 {
    fill: #0dfafa;
}

.cls-14 {
    fill: #00e6ff;
}

.cls-15 {
    fill: #1ff1e0;
}

.cls-16 {
    fill: #0aebfd;
}

.cls-17 {
    fill: url(#linear-gradient-2);
}

.cls-18 {
    fill: #fff;
}

.cls-19 {
    fill: url(#radial-gradient);
}

.cls-20 {
    fill: url(#linear-gradient-3);
}

.cls-21 {
    fill: url(#linear-gradient-4);
}
</style>