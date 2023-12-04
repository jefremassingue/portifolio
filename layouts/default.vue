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
    
        <div id="loader"  style="height: 100dvh; max-width: 100dvw;" class="z-30 fixed top-0 right-0 left-0 bg-base-200 flex justify-center items-center">
            <div class="flex justify-center items-center flex-col gap-4">
                <img src="/logo.svg" class="h-24" alt="Flowbite Logo">
                <h4 class="font-bold">Carregando...</h4>
            </div>
        </div>
    </transition>
    <header>
        <nav data-aos="fade-down" data-aos-duration="1500" class="fixed z-20 w-full px-4 top-4 start-0">
            <div
                class="flex flex-wrap items-center justify-between max-w-screen-xl p-2 pl-4 md:p-4 mx-auto bg-base-200 rounded-xl md:rounded-2xl">
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
            class="bg-base-200 z-30 fixed bottom-0 left-0 right-0 overflow-y-auto">
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
    <main class="mt-[124px] mx-4" data-theme="dark"  >
        <input type="checkbox" value="dark" checked class="toggle theme-controller hidden" />
        <NuxtLoadingIndicator /> 
        <slot />

    </main>
    <footer  data-aos="fade-up" data-aos-duration="1500"
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

.body, #__nuxt, .fixed, html{
    max-width: 100vw !important;
    overflow-x: hidden;
}
.fixed{
    position: fixed !important;
}
</style>