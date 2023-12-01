<template>
    <div>

        <header>
            <nav class=" fixed w-full z-20 top-4 start-0  px-4 ">
                <div
                    class="max-w-screen-xl bg-base-200 rounded-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NuxtLink href="/" class="flex items-center space-x-3">
                        <img src="/logo.svg" class="h-12" alt="Flowbite Logo">
                        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span> -->
                    </NuxtLink>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 gap-2">
                        <button class="btn ">
                            <i class="ri-linkedin-line ri-lg"></i>
                        </button>
                        <button class="btn ">
                            <i class="ri-github-line ri-lg"></i>
                        </button>
                        <button class="btn ">
                            <i class="ri-instagram-line ri-lg"></i>
                        </button>
                        <button type="button"
                            class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-primary hover:bg-blue-700 focus:ring-blue-800">
                            Contacte-me
                        </button>

                        <button data-collapse-toggle="navbar-sticky" type="button"
                            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-zinc-400 hover:bg-zinc-700 focus:ring-zinc-600"
                            aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul
                            class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0  bg-zinc-800 md:bg-zinc-900 border-zinc-700">
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:p-0 md:text-primary"
                                    aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 rounded md:p-0 md:hover:text-primary text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-zinc-700">About</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 rounded md:p-0 md:hover:text-primary text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-zinc-700">Services</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="block py-2 px-3 rounded md:p-0 md:hover:text-primary text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-zinc-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main class="mt-[124px] mx-4">

            <slot />

        </main>
        <footer class=" footer max-w-screen-xl mx-auto p-10 bg-base-200 rounded-2xl my-11 text-base-content">
            <aside>
                <img src="/logo.svg" class="w-32" alt="">
                <p>Jefre José Massingue.<br />Vamos transformar a sua ideia em uma solução tecnologica</p>
                <p>Moçambique, Maputo - Bairro Laulane</p>
            </aside>
            <nav>
                <header class="footer-title">Services</header>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header class="footer-title">Company</header>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header class="footer-title">Legal</header>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    </div>
</template>
<script setup>

</script>
<style ></style>