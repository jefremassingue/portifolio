<script setup>
useHead({
    title: 'Sobre - Jefre Massingue',
//     meta: [
//         { name: 'description', content: 'Sou Jefre José Massingue, um apaixonado desenvolvedor fullstack com uma sólida formação em Informática e uma trajetória rica em experiência profissional.' }
//     ],
    //   bodyAttrs: {
    //     class: 'test'
    //   },
    //   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
const currentSkill = ref(1);
const skills = ref([
        {
                id: 1, title: "Linguagens, Bibliotecas & Frameworks", technologies: [
                        { id: 1, name: "PHP", image: '/brands/php.svg', description: 'Linguagem de script do lado do servidor.' },
                        { id: 2, name: "TypeScript", image: '/brands/typescript.svg', description: 'Superset tipado de JavaScript.' },
                        { id: 3, name: "JavaScript", image: '/brands/javascript.svg', description: 'Linguagem de programação para web.' },
                        { id: 4, name: "Java", image: '/brands/java.svg', description: 'Linguagem de programação versátil.' },
                        { id: 5, name: "Python", image: '/brands/python.svg', description: 'Linguagem de alto nível e fácil leitura.' },
                        { id: 6, name: "Laravel", image: '/brands/Laravel (1).svg', description: 'Framework PHP elegante.' },
                        { id: 7, name: "Node.js", image: '/brands/nodejs.svg', description: 'Ambiente de execução JavaScript no servidor.' },
                        { id: 8, name: "Angular", image: '/brands/Angular.png', description: 'Framework TypeScript mantido pelo Google.' },
                        { id: 9, name: "Vue.js", image: '/brands/vue.svg', description: 'Framework JavaScript progressivo.' },
                        { id: 10, name: "Nuxt.js", image: '/brands/nuxt.svg', description: 'Framework Vue.js para aplicações universais.' },
                        { id: 17, name: "React", image: '/brands/react.svg', description: 'Biblioteca JavaScript para construir interfaces de usuário.' },
                        { id: 11, name: "Next.js", image: '/brands/nextjs.svg', description: 'Framework React para renderização do lado do servidor.' },
                        { id: 12, name: "NestJS", image: '/brands/nestjs.svg', description: 'Framework TypeScript para construir aplicativos escaláveis.' },

                        { id: 13, name: "HTML", image: '/brands/html.svg', description: 'Linguagem de marcação para documentos web.' },
                        { id: 14, name: "CSS", image: '/brands/css-3.svg', description: 'Linguagem de estilo para documentos web.' },
                        { id: 15, name: "SCSS", image: '/brands/scss2.svg', description: 'Pré-processador CSS.' },
                        { id: 16, name: "Vue.js", image: '/brands/vue.svg', description: 'Framework JavaScript progressivo.' },
                        { id: 18, name: "Tailwind CSS", image: '/brands/tailwind.svg', description: 'Framework CSS utilitário.' },
                        { id: 19, name: "Bootstrap", image: '/brands/bootstrap.svg', description: 'Framework front-end responsivo.' },
                        { id: 20, name: "Android Studio", image: '/brands/Android Studio.svg', description: 'Ambiente de desenvolvimento para Android.' },
                        { id: 21, name: "IONIC", image: '/brands/ionic-icon.svg', description: 'Framework para desenvolvimento de aplicativos móveis.' },
                        { id: 22, name: "React Native", image: '/brands/react.svg', description: 'Framework para construir aplicativos móveis com React.' },
                        { id: 23, name: "Electron.js", image: '/brands/electronjs.svg', description: 'Framework para criar aplicativos desktop com tecnologias web.' },
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
</script>
<template>
        <section></section>

        <section class="p-4 pb-16 max-w-screen-xl mx-auto">
                <div class="flex my-16 flex-col col-span-10 gap-4 md:col-span-5">
                        <h4 class="text-5xl font-bold text-center text-white ">Habilidades</h4>

                        <p class="text-white text-center">Meu conjunto de habilidades abrange diversas linguagens de programação e
                                frameworks, tendo
                                alta capacidade de aprender novas tecnologias e conceitos no vasto mundo de desenvolvimento!</p>
                        <div class="">
                                <ul class="flex flex-wrap justify-center gap-2">

                                        <li class="" v-for="skill in skills" :key="skill.id">
                                                <a class="inline-flex items-center gap-2 px-2 py-2 bg-base-200 rounded-xl">
                                                        <input type="radio" v-model="currentSkill" :value="skill.id"
                                                                :id="skill.id" name="radio-2" class="radio radio-primary" />
                                                        <label :for="skill.id">{{ skill.title }}</label>
                                                </a>
                                        </li>


                                </ul>
                        </div>
                </div>
                <div class="flex items-center w-full md:col-span-7">
                        <ul class="grid flex-wrap items-center justify-center w-full grid-cols-3 gap-4 md:grid-cols-4 lg:flex"
                                name="list" tag="ul">
                                <template v-for="tech, in (skills.find(({ id }) => id == currentSkill) || []).technologies"
                                        :key="currentSkill + '-' + tech.id">

                                        <Transition>
                                                <li
                                                        class="bg-base-200 h-[19px] hover:bg-slate-50 hover:bg-opacity-5 hover:shadow hover:shadow-zinc-50/5 transition-all group md:h-[100px] min-h-[80px] md:min-h-[100px] rounded-2xl flex  justify-center items-center p-4">
                                                        <img :src="tech.image"
                                                                class="h-full transition-all cursor-pointer group-hover:scale-110 group-hover:rotate-2"
                                                                :title="tech.name">
                                                </li>
                                        </Transition>
                                </template>
                        </ul>
                </div>
        </section>
</template>

<style>

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