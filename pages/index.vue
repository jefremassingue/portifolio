<script setup>
const skills = ref([
    {
        id: 1, title: "Linguagens de Programação", technologies: [
            { id: 1, name: "PHP", image: '/brands/php.svg', description: 'Linguagem de script do lado do servidor.' },
            { id: 2, name: "TypeScript", image: '/brands/typescript.svg', description: 'Superset tipado de JavaScript.' },
            { id: 3, name: "JavaScript", image: '/brands/javascript.svg', description: 'Linguagem de programação para web.' },
            { id: 4, name: "Java", image: '/brands/java.svg', description: 'Linguagem de programação versátil.' },
            { id: 5, name: "Python", image: '/brands/python.svg', description: 'Linguagem de alto nível e fácil leitura.' },
        ]
    },
    {
        id: 2, title: "Frameworks", technologies: [
            { id: 6, name: "Laravel", image: '/brands/Laravel (1).svg', description: 'Framework PHP elegante.' },
            { id: 7, name: "Node.js", image: '/brands/nodejs.svg', description: 'Ambiente de execução JavaScript no servidor.' },
            { id: 8, name: "Angular", image: '/brands/Angular.png', description: 'Framework TypeScript mantido pelo Google.' },
            { id: 9, name: "Vue.js", image: '/brands/vue.svg', description: 'Framework JavaScript progressivo.' },
            { id: 10, name: "Nuxt.js", image: '/brands/nuxt.svg', description: 'Framework Vue.js para aplicações universais.' },
            { id: 11, name: "Next.js", image: '/brands/nextjs.svg', description: 'Framework React para renderização do lado do servidor.' },
            { id: 12, name: "NestJS", image: '/brands/nestjs.svg', description: 'Framework TypeScript para construir aplicativos escaláveis.' },
        ]
    },
    {
        id: 3, title: "Desenvolvimento Web", technologies: [
            { id: 13, name: "HTML", image: '/brands/html.svg', description: 'Linguagem de marcação para documentos web.' },
            { id: 14, name: "CSS", image: '/brands/css-3.svg', description: 'Linguagem de estilo para documentos web.' },
            { id: 15, name: "SCSS", image: '/brands/scss2.svg', description: 'Pré-processador CSS.' },
            { id: 16, name: "Vue.js", image: '/brands/vue.svg', description: 'Framework JavaScript progressivo.' },
            { id: 17, name: "React", image: '/brands/react.svg', description: 'Biblioteca JavaScript para construir interfaces de usuário.' },
            { id: 18, name: "Tailwind CSS", image: '/brands/tailwind.svg', description: 'Framework CSS utilitário.' },
            { id: 19, name: "Bootstrap", image: '/brands/bootstrap.svg', description: 'Framework front-end responsivo.' },
        ]
    },
    {
        id: 4, title: "Desenvolvimento Mobile", technologies: [
            { id: 20, name: "Android Studio", image: '/brands/Android Studio.svg', description: 'Ambiente de desenvolvimento para Android.' },
            { id: 21, name: "IONIC", image: '/brands/ionic-icon.svg', description: 'Framework para desenvolvimento de aplicativos móveis.' },
            { id: 22, name: "React Native", image: '/brands/react.svg', description: 'Framework para construir aplicativos móveis com React.' }
        ]
    },
    {
        id: 5, title: "Desenvolvimento Desktop", technologies: [
            { id: 23, name: "Electron.js", image: '/brands/electronjs.svg', description: 'Framework para criar aplicativos desktop com tecnologias web.' },
            { id: 24, name: "Java", image: '/brands/java.svg', description: 'Linguagem de programação para aplicações desktop.' },
        ]
    },
    {
        id: 6, title: "Design Gráfico e Prototipagem",
        technologies: [
            { id: 25, name: "Adobe Photoshop", image: '/brands/Adobe Photoshop CC.svg', description: 'Software de edição de imagem.' },
            { id: 26, name: "Adobe Illustrator", image: '/brands/Adobe Illustrator CC.svg', description: 'Software de design vetorial.' },
            { id: 27, name: "Adobe XD", image: '/brands/adobe-xd.svg', description: 'Ferramenta de design e prototipagem.' },
            { id: 28, name: "Figma", image: '/brands/figma.svg', description: 'Ferramenta de design colaborativo.' },
        ]
    },
    {
        id: 8, title: "Outros", technologies: [
            { id: 29, name: "AWS", image: '/brands/aws.svg', description: 'Amazon Web Services, plataforma de serviços em nuvem.' },
            { id: 30, name: "GitLab", image: '/brands/gitlab-1.svg', description: 'Plataforma de integração contínua e controle de versão.' },
            { id: 31, name: "GitHub", image: '/brands/github.svg', description: 'Plataforma de hospedagem de código-fonte.' },
            { id: 32, name: "Apache", image: '/brands/apache.svg', description: 'Servidor web e software de código aberto.' },
            { id: 33, name: "Nginx", image: '/brands/nginx.svg', description: 'Servidor web de alto desempenho.' },
        ]
    },
]);

const projects = ref([
    {
        id: 1,
        year: 2022,
        title: "LungaTask",
        image: "/projects/tasks.png",
        description: "Aumente sua produtividade com meu sistema de gestão de tarefas, oferecendo recursos avançados de organização, colaboração em equipe e acompanhamento em tempo real.",
        technologies: [
            { id: 2, name: "PHP", image: '/brands/php.svg' },
            { id: 4, name: "Laravel", image: '/brands/Laravel (1).svg' },
            //   { id: 2, name: "Node.js", image: '/brands/nodejs.svg' },
            { id: 5, name: "JavaScript", image: '/brands/javascript.svg' },
            { id: 1, name: "Vue.js", image: '/brands/vue.svg' },
            { id: 7, name: "Tailwind CSS", image: '/brands/tailwind.svg' },
        ],
        links: {
            demo: "https://exemplo.com/demo",
            code: "",
        },
    },
    {
        id: 2,
        year: 2023,
        title: "Spatie Permission Generate",
        image: "/projects/pg.png",
        description: "Spatie Permission Generate é um pacote que gera permissões para spatie/laravel-permission com base no diretório, nome da classe do controlador e métodos.",
        technologies: [
            { id: 2, name: "PHP", image: '/brands/php.svg' },
            { id: 4, name: "Laravel", image: '/brands/Laravel (1).svg' },
        ],
        links: {
            demo: "https://github.com/jefremassingue/spatie-permission-generate",
            code: "https://github.com/jefremassingue/spatie-permission-generate",
        },
    },
    {
        id: 3,
        year: 2023,
        title: "Docs Solutions",
        image: "/projects/docssolutions.png",
        description: "Plataforma intuitiva facilita muito o gerenciamento de arquivos digitais. Armazene, organize e compartilhe documentos com facilidade.",
        technologies: [
            { id: 2, name: "PHP", image: '/brands/php.svg' },
            { id: 4, name: "Laravel", image: '/brands/Laravel (1).svg' },
            //   { id: 2, name: "Node.js", image: '/brands/nodejs.svg' },
            { id: 5, name: "JavaScript", image: '/brands/javascript.svg' },
            { id: 1, name: "Vue.js", image: '/brands/vue.svg' },
            { id: 7, name: "Tailwind CSS", image: '/brands/tailwind.svg' },
        ],
        links: {
            demo: "https://docssolution.com",
            code: "",
        },
    },
    // {
    //     id: 4,
    //     year: 2023,
    //     title: "Meu Projeto",
    //     image: "https://daisyui.com/services/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    //     description: "Uma breve descrição do meu incrível projeto.",
    //     technologies: [
    //         { id: 1, name: "Vue.js", image: '/brands/vue.svg' },
    //         { id: 2, name: "Node.js", image: '/brands/nodejs.svg' },
    //         { id: 3, name: "MongoDB", image: '/brands/mongodb.svg' },
    //     ],
    //     links: {
    //         demo: "https://exemplo.com/demo",
    //         code: "https://github.com/seu-usuario/meu-projeto",
    //     },
    // }
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

const posts = ref([
    {
        id: 1,
        title: "Desenvolvimento de aplicativos",
        description: "Construção de plataformas web, mobile e desktop robustas e intuitivas.",
        image: "/services/web-mobile-development.jpg",
        details: [
            "Desenvolvimento fullstack utilizando as mais recentes tecnologias e frameworks.",
        ],
    },
    {
        id: 2,
        title: "Consultoria em Tecnologia",
        description: "Orientação estratégica para implementação de tecnologias específicas.",
        image: "/services/technology-consulting.jpg",
        details: [
            "Análise de requisitos e recomendações para otimização de processos.",
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "Criação de interfaces atraentes e intuitivas para experiências de usuário excepcionais.",
        image: "/services/design.svg",
        details: [
            "Garantia de design responsivo e acessibilidade.",
        ],
    },
    {
        id: 4,
        title: "Desenvolvimento de APIs",
        description: "Construção de APIs RESTful escaláveis para facilitar a comunicação entre diferentes componentes.",
        image: "/services/api-development.jpg",
        details: [
            "Integração eficiente entre frontend e backend.",
        ],
    },
    // {
    //     id: 5,
    //     title: "Gestão de Projetos Ágeis",
    //     description: "Liderança de equipes de desenvolvimento.",
    //     image: "/services/agile-project-management.jpg",
    //     details: [
    //         "Implementação de metodologias ágeis para garantir entregas eficientes.",
    //     ],
    // },
    //   {
    //     id: 6,
    //     title: "Serviços de Redes e Gerenciamento de Dados",
    //     description: "Configuração e otimização de serviços de redes.",
    //     image: "/services/network-data-services.jpg",
    //     details: [
    //       "Gerenciamento eficiente de bases de dados (SQL e NoSQL).",
    //     ],
    //   },
    {
        id: 7,
        title: "Manutenção e Atualização",
        description: "Suporte contínuo para garantir o bom funcionamento de plataformas existentes.",
        image: "/services/assistencia.svg",
        details: [
            "Atualizações regulares para incorporar as últimas melhorias tecnológicas.",
        ],
    },
    //   {
    //     id: 8,
    //     title: "Treinamento e Workshops",
    //     description: "Sessões de treinamento para equipes em novas tecnologias e práticas de desenvolvimento.",
    //     image: "/services/training-workshops.jpg",
    //     details: [
    //       "Workshops personalizados para aprimorar habilidades específicas.",
    //     ],
    //   },
]);

const currentSkill = ref(1);
</script>
<template>
    <section class="max-w-screen-xl mx-auto gap-4 grid lg:grid-cols-2 text-left  bg-primary rounded-2xl">

        <div class="flex flex-col justify-center gap-4 md:gap-8 p-8 md:p-12 lg:p-16 lg:pb-8">
            <h1 class="text-xl md:text-4xl xl:text-5xl text-white font-bold">
                <span class="wave">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">👋</font>
                    </font>
                </span>
                <span>Ola, eu sou Jefre |</span> <br>
                <span class="">Fullstack - Developer</span>
            </h1>
            <p class="text-zinc-100 text-md md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate repellendus iste
                repellat fugiat architecto beatae, inventore a itaque similique fugit consequuntur dicta ducimus modi velit
                deserunt molestias! Omnis, tenetur sequi.</p>
            <div class="flex flex-col md:flex-row gap-4">
                <button class="btn btn-warning">
                    <i class="ri-phone-fill ri-lg"></i>
                    <span>Contacte-me</span>
                </button>
                <a target="_blank" href="https://github.com/jefremassingue" class="btn btn-link text-white">Baixar CV <i
                        class="ri-arrow-right-line"></i></a>
            </div>
           

        </div>
        <div class="hidden lg:block">
            <img src="/jefre.jpg" class="max-w-[360px] mx-auto " alt="">
        </div>

    </section>

    <section class="max-w-screen-xl mx-auto my-8 md:my-16 lg:my-24 grid grid-cols-12 gap-8 md:gap-16">
        <div class="flex flex-col gap-4 col-span-10 md:col-span-5">
            <h4 class="text-5xl font-bold text-white">Habilidades</h4>

            <p class="text-white">Meu conjunto de habilidades abrange diversas linguagens de programação e frameworks, tendo
                alta capacidade de aprender novas tecnologias e conceitos no vasto mundo de desenvolvimento!</p>
            <div class="">
                <ul class="flex flex-col gap-2">

                    <li class="" v-for="skill in skills" :key="skill.id">
                        <a class="inline-flex items-center bg-base-200 px-2 py-2 rounded-xl gap-2 ">
                            <input type="radio" v-model="currentSkill" :value="skill.id" :id="skill.id" name="radio-2"
                                class="radio radio-primary" />
                            <label :for="skill.id">{{ skill.title }}</label>
                        </a>
                    </li>


                </ul>
            </div>
        </div>
        <div class="col-span-11 md:col-span-7 w-full flex items-center">
            <ul class="w-full grid mr-4 lg:flex items-center flex-wrap gap-4 grid-cols-2  justify-center" name="list"
                tag="ul">
                <template v-for="tech, in (skills.find(({ id }) => id == currentSkill) || []).technologies"
                    :key="currentSkill + '-' + tech.id">

                    <Transition>
                        <li
                            class="bg-base-200 h-[19px]  md:h-[100px] min-h-[100px] md:min-h-[120px] rounded-2xl flex  justify-center items-center p-4">
                            <img :src="tech.image" class="h-full md:h-24 md:max-h-24" :alt="tech.name">
                        </li>
                    </Transition>
                </template>
            </ul>
        </div>
    </section>



    <section class="bg-base-200 p-4 -mx-4 -mr-8 lg:-mx-4 pb-16">
        <div class="max-w-screen-xl mx-auto w-full">

            <header class="md:text-center my-8 lg:my-16">
                <h4 class="text-5xl font-bold text-white">Projectos</h4>

                <p class="text-white mt-4">Meu conjunto de habilidades abrange diversas linguagens de programação e
                    frameworks, tendo
                    alta capacidade de aprender novas tecnologias e conceitos no vasto mundo de desenvolvimento!</p>

            </header>


            <Swiper :slides-per-view="1" :loop="true" :effect="'creative'" :autoplay="{
                delay: 2000,
                disableOnInteraction: true,
            }" :breakpoints="{
    0: {
        slidesPerView: 1,
        spaceBetween: 8,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 16,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 16,
    }
}" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
                <SwiperSlide v-for="project in projects" :key="project.id">
                    <article class="card col-span-12  md:col-span-6 lg:col-span-4 bg-base-100 shadow-xl">
                        <figure>
                            <img :src="project.image" :alt="project.title" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title text-justify">
                                {{ project.title }}
                                <div class="badge badge-secondary">{{ project.year }}</div>
                            </h2>
                            <p>{{ project.description }}</p>
                            <div class="card-actions justify-center">
                                <div v-for="tech in project.technologies" :key="tech.id"
                                    class="badge badge-outline badge-lg gap-2"><img :src="tech.image" class="h-4" />
                                    {{ tech.name }}</div>
                            </div>
                            <!-- <hr> -->
                            <div class="card-actions mt-8 justify-center">
                                <a target="_blank" :href="project.links.demo" v-if="project.links.demo"
                                    class="btn btn-primary btn-sm btn-outline">Visitar</a>
                                <a target="_blank" :href="project.links.code" v-if="project.links.code"
                                    class="btn btn-primary btn-sm btn-outline">Codigo</a>
                            </div>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
            <div class="grid grid-cols-12 gap-4">


            </div>
        </div>
    </section>

    <section class="bg-gray-800 p-4 pb-16 -mx-4 -mr-8 lg:-mx-4">
        <div class="max-w-screen-xl flex mx-auto">




            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-4 gap-4">
                <div class="">
                    <header class=" mt-16">
                        <h4 class="text-5xl font-bold text-white">Meus serviços</h4>

                        <p class="text-white mt-4">
                            Com uma ampla gama de habilidades técnicas e uma abordagem centrada no utilizador, estou
                            comprometido em
                            fornecer serviços de alta qualidade que impulsionam o sucesso do seu projecto.
                        </p>

                    </header>
                </div>
                <article v-for="service in services" :key="service.id" class="card col-span-1  bg-base-100 ">
                    <!-- <figure class="px-4 pt-4">
                        <img :src="service.image" :alt="service.title" class=" rounded-xl" />
                    </figure> -->
                    <div class="card-body">
                        <div class="flex gap-4 items-center">
                            <div class="">
                                <i :class="service.icon" class=" text-[28px] no-underline"></i>
                            </div>
                            <div class="">
                                <h2 class="card-title text-white">
                                    {{ service.title }}
                                </h2>
                            </div>
                        </div>
                        <p>{{ service.description }}</p>
                        <div class="card-actions mt-1 bg-base-200 p-2 rounded-lg">
                            {{ service.details.toString() }}
                        </div>

                        <div class="card-actions mt-1 ">
                            <a href="" class="btn btn-primary btn-sm btn-link">Vamos trabalhar juntos <i
                                    class="ri-arrow-right-line ri-lg no-underline"></i></a>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </section>


    <section class="p-4 pb-16 -mx-4 -mr-8 lg:-mx-4">
        <div class="max-w-screen-xl mx-auto">

            <header class="text-center my-16">
                <h4 class="text-5xl font-bold text-white">Blog</h4>

                <!-- <p class="text-white mt-4">
                    Com uma ampla gama de habilidades técnicas e uma abordagem centrada no utilizador, estou comprometido em
                    fornecer serviços de alta qualidade que impulsionam o sucesso do seu projecto.
                </p> -->

            </header>


            <div class="grid grid-cols-12 gap-4">
                <article v-for="post in posts" :key="post.id"
                    class="card col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 bg-base-200 ">
                    <figure class="px-4 pt-4">
                        <img :src="post.image" :alt="post.title" class=" rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-white">
                            {{ post.title }}
                        </h2>
                        <p>{{ post.description }}</p>


                        <div class="card-actions mt-1 ">
                            <a href="" class="btn btn-primary btn-sm btn-link">Mais detalhes <i
                                    class="ri-arrow-right-line ri-lg no-underline"></i></a>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </section>

    <section
        class="max-w-screen-xl mx-auto gap-4 md:gap-8 p-8 md:p-12 lg:p-16  grid lg:grid-cols-2 text-left my-16 bg-blue-800 rounded-2xl">

        <div class="flex flex-col justify-center gap-6">
            <h1 class="text-xl md:text-4xl xl:text-5xl text-white font-bold">

                <span>Tem uma ideia de projecto. Vamos trabalhar juntos!</span>
            </h1>
            <p class="text-zinc-100 text-md md:text-lg lg:text-xl">
                Quer me dizer oi ou quer começar seu projecto e precisa da minha ajuda? Sinta-se livre para me contactar.
            </p>
            <div class="flex flex-col md:flex-row gap-4">
                <button class="btn btn-warning">
                    <span>Vamos trabalhar juntos!</span>
                    <i class="ri-arrow-right-line"></i>
                </button>
            </div>

        </div>
        <div class="">
            <div class="flex flex-col md:flex-row lg:flex-col lg:justify-center lg:px-16 h-full gap-4 lg:gap-8">
                <div class="bg-gray-900 px-6 py-4 rounded-xl flex gap-4 items-center">
                    <span>
                        <i class="ri-mail-line lg:text-[38px]"></i>
                    </span>
                    <div class="flex flex-col gap-2">
                        <h4 class="uppercase">Fala comigo</h4>
                        <h2 class="lg:text-lg text-zinc-100">jefre.dev@gmail.com</h2>
                    </div>
                </div>
                <div class="bg-gray-900 px-6 py-4 rounded-xl flex gap-4 items-center">
                    <span>
                        <i class="ri-phone-line lg:text-[38px]"></i>
                    </span>
                    <div class="flex flex-col gap-2">
                        <h4 class="uppercase">Liga para mim</h4>
                        <h2 class="lg:text-lg text-zinc-100">(+258) 84 480 6400 / 86 917 3996</h2>
                    </div>
                </div>
                <!-- <div class="bg-gray-900 px-6 py-4 rounded-xl flex gap-4 items-center">
                    <span>
                        <i class="ri-phone-line lg:text-[38px]"></i>
                    </span>
                    <div class="flex flex-col gap-2">
                        <h4 class="uppercase">Fala comigo</h4>
                        <h2 class="lg:text-lg text-zinc-100">jefre.dev@gmail.com</h2>
                    </div>
                </div> -->
            </div>
        </div>

    </section>
</template>

<style >
.wave {
    animation-name: wave-animation;
    color: unset;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
}

@keyframes wave-animation {
    0% {
        transform: rotate(0.0deg)
    }

    10% {
        transform: rotate(14.0deg)
    }

    20% {
        transform: rotate(-8.0deg)
    }

    30% {
        transform: rotate(14.0deg)
    }

    40% {
        transform: rotate(-4.0deg)
    }

    50% {
        transform: rotate(10.0deg)
    }

    60% {
        transform: rotate(0.0deg)
    }

    100% {
        transform: rotate(0.0deg)
    }
}

.list-enter-active,
.list-leave-active {
    transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>