<script setup>
const menu = ref([
    { id: 1, title: 'Inicio', route: 'index' },
    { id: 2, title: 'Serviços', route: 'services' },
    { id: 3, title: 'Projectos', route: 'projects' },
    { id: 4, title: 'Blog', route: 'blog' },
    { id: 5, title: 'Contacto', route: 'contact' },
])

const socialMedia = ref([
    { id: 1, name: 'Linkedin', icon: 'ri-linkedin-line', link: "https://mz.linkedin.com/in/jefre-jos%C3%A9-massingue-21086a277?trk=people-guest_people_search-card" },
    { id: 2, name: 'Github', icon: 'ri-github-line', link: "https://github.com/jefremassingue" },
    { id: 3, name: 'Instagram', icon: 'ri-instagram-line', link: "https://www.instagram.com/jefre.dev/" },
])
</script>
<template>
    <div>

        <header>
            <nav class="fixed z-20 w-full px-4 top-4 start-0">
                <div
                    class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto bg-base-200 rounded-2xl">
                    <NuxtLink to="/" class="flex items-center space-x-3">
                        <img src="/logo.svg" class="h-12" alt="Flowbite Logo">
                        <!-- <span class="self-center text-2xl font-semibold text-white whitespace-nowrap">Flowbite</span> -->
                    </NuxtLink>
                    <div class="flex items-center gap-2 space-x-3 lg:order-2 lg:space-x-0">
                        <a  v-for="social in socialMedia" :key="social.id" target="_blank" :href="social.link" class="hidden btn md:flex">
                            <i :class="social.icon" class="ri-lg"></i>
                        </a>
                        <NuxtLink :to="{ name: 'contact' }"
                            class="text-white btn btn-primary btn-sm lg:btn-md">
                            Contacte-me
                        </NuxtLink>

                        <button data-collapse-toggle="navbar-sticky" type="button"
                            class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-zinc-400 hover:bg-zinc-700 focus:ring-zinc-600"
                            aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
                        <ul
                            class="flex flex-col p-4 mt-4 font-medium border rounded-lg md:p-0 md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
                            <li v-for="link in menu" :key="link.id">
                                <NuxtLink :to="{ name: link.route }"
                                    class="block p-0 text-white rounded "
                                    aria-current="page">{{ link.title }}</NuxtLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main class="mt-[124px] mx-4">

            <slot />

        </main>
        <footer class="max-w-screen-xl p-10 mx-auto mb-0 text-center rounded-t-2xl md:text-left footer bg-base-200 lg:rounded-2xl mt-11 lg:my-11 text-base-content">
            <aside>
                <img src="/logo.svg" class="w-32 mx-auto md:mx-0" alt="">
                <p>Jefre José Massingue.<br />Vamos transformar a sua ideia em <br>uma solução tecnologica</p>
                <p>Moçambique, Maputo - Bairro Laulane</p>
            </aside>
            <nav class="w-full">
                <header class="mx-auto text-center md:mx-0 footer-title ">Paginas</header>
                <a class="mx-auto text-center md:mx-0 link link-hover md:text-left" v-for="link in menu" :key="link.id">{{ link.title }}</a>

            </nav>
            <nav class="w-full">
                <header class="mx-auto md:mx-0 footer-title">Servicos</header>
                <a class="mx-auto text-center md:mx-0 link link-hover md:text-left">About us</a>
                <a class="mx-auto text-center md:mx-0 link link-hover md:text-left">Contact</a>
                <a class="mx-auto text-center md:mx-0 link link-hover md:text-left">Jobs</a>
                <a class="mx-auto text-center md:mx-0 link link-hover md:text-left">Press kit</a>
            </nav>
            <nav class="w-full">
                <header class="mx-auto md:mx-0 footer-title">Legal</header>
                <a class="mx-auto text-center md:mx-0 link link-hover md:text-left">Terms of use</a>
                <a class="mx-auto text-center md:mx-0 link link-hover md:text-left">Privacy policy</a>
                <a class="mx-auto text-center md:mx-0 link link-hover md:text-left">Cookie policy</a>
            </nav>
        </footer>
    </div>
</template>

<style >

nav a:hover,
 nav a.router-link-active,
 nav a.router-link-exact-active {
   /* color: indianred; */
    color: var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));
   cursor: pointer;
 }
</style>