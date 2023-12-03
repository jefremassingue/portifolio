<script setup>
useHead({
    title: 'Serviços - Jefre Massingue',
//     meta: [
//         { name: 'description', content: 'Sou Jefre José Massingue, um apaixonado desenvolvedor fullstack com uma sólida formação em Informática e uma trajetória rica em experiência profissional.' }
//     ],
    //   bodyAttrs: {
    //     class: 'test'
    //   },
    //   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
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
        <section></section>

        <section class="p-4 pb-16 -mx-4">
                <div class="max-w-screen-xl mx-auto">

                        <header class="my-16 text-center">
                                <h4 class="text-5xl font-bold text-center text-white ">Meus serviços</h4>

                                <p class="mt-4 text-center text-white ">
                                        Com uma ampla gama de habilidades técnicas e uma abordagem centrada no utilizador, estou
                                        comprometido em
                                        fornecer serviços de alta qualidade que impulsionam o sucesso do seu projecto.
                                </p>

                        </header>


                        <div class="grid grid-cols-12 content-center gap-4">
                                <article v-for="service in services" :key="service.id" class="col-span-12 card md:col-span-6 lg:col-span-4 xl:col-span-4 bg-base-200">
                                        <!-- <figure class="px-4 pt-4">
                        <img :src="service.image" :alt="service.title" class=" rounded-xl" />
                    </figure> -->
                                        <div class="card-body">
                                                <div class="flex items-center gap-4">
                                                        <div class="">
                                                                <i :class="service.icon" class=" text-[28px] no-underline"></i>
                                                        </div>
                                                        <div class="">
                                                                <h2 class="text-white card-title">
                                                                        {{ service.title }}
                                                                </h2>
                                                        </div>
                                                </div>
                                                <p>{{ service.description }}</p>
                                                <div class="p-2 mt-1 rounded-lg card-actions bg-base-200">
                                                        {{ service.details.toString() }}
                                                </div>

                                                <div class="mt-1 card-actions ">
                                                        <a href="" class="btn btn-primary btn-sm btn-link">Vamos trabalhar
                                                                juntos <i
                                                                        class="no-underline ri-arrow-right-line ri-lg"></i></a>
                                                </div>
                                        </div>
                                </article>

                        </div>
                </div>
        </section>
</template>