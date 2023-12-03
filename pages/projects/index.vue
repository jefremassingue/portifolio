<script setup>
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

</script>
<template>
        <section class="p-4 pb-16 -mx-4">
                <div class="max-w-screen-xl mx-auto">

                        <header class="my-16 text-center">
                                <h4 class="text-5xl font-bold text-center text-white ">Projectos</h4>

                                <p class="mt-4 text-center text-white">
                                        Meu conjunto de habilidades abrange diversas linguagens de programação e
                                        frameworks, tendo
                                        alta capacidade de aprender novas tecnologias e conceitos no vasto mundo de
                                        desenvolvimento!</p>

                    

                        </header>


                        <div class="grid grid-cols-12 gap-4">
                                <article v-for="project in projects" :key="project.id"
                                        class="col-span-12 card md:col-span-6 lg:col-span-4 bg-base-200 ">
                                        <figure>
                            <img :src="project.image" :alt="project.title" />
                        </figure>
                        <div class="card-body">
                            <h2 class="text-justify card-title">
                                {{ project.title }}
                                <div class="badge badge-secondary">{{ project.year }}</div>
                            </h2>
                            <p>{{ project.description }}</p>
                            <div class="justify-center card-actions">
                                <div v-for="tech in project.technologies" :key="tech.id"
                                    class="gap-2 badge badge-outline badge-lg"><img :src="tech.image" class="h-4" />
                                    {{ tech.name }}</div>
                            </div>
                            <!-- <hr> -->
                            <div class="justify-center mt-8 card-actions">
                                <a target="_blank" :href="project.links.demo" v-if="project.links.demo"
                                    class="btn btn-primary btn-sm btn-outline">Visitar</a>
                                <a target="_blank" :href="project.links.code" v-if="project.links.code"
                                    class="btn btn-primary btn-sm btn-outline">Codigo</a>
                            </div>
                        </div>
                                </article>

                        </div>
                </div>
        </section>
</template>