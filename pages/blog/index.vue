<script setup> 
useHead({
    title: 'Blog - Jefre Massingue',
//     meta: [
//         { name: 'description', content: 'Sou Jefre José Massingue, um apaixonado desenvolvedor fullstack com uma sólida formação em Informática e uma trajetória rica em experiência profissional.' }
//     ],
    //   bodyAttrs: {
    //     class: 'test'
    //   },
    //   script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

const posts = ref([
    {
        id: 1,
        title: "Participação Inspiradora no Orange Corners - Open Day",
        description: "Uma experiência incrível e enriquecedora, repleta de aprendizado, insights e conexões valiosas.",
        image: "/posts/orange.jpg",
        details: [
            "Desenvolvimento fullstack utilizando as mais recentes tecnologias e frameworks.",
        ],
    },
    {
        id: 2,
        title: "Participação no evento SINERGIA da MF-Team - Maputo Frontenders",
        description: "A sinergia é a palavra-chave que impulsionou este encontro, representando uma colaboração que vai além da soma de suas partes individuais.",
        image: "/posts/orange.jpg",
        details: [
            "Desenvolvimento fullstack utilizando as mais recentes tecnologias e frameworks.",
        ],
    },
    {
        id: 3,
        title: "Vitória no Coding Girls Hackathon: Da Inovação à Conquista do Financiamento",
        description: "Em um ambiente de inovação, colaboração e código, participei do Hackathon Coding Girls e tive a oportunidade de desenvolver e apresentar o projecto agrofresh.",
        image: "/posts/agrofresh.jpg",
        details: [
            "Desenvolvimento fullstack utilizando as mais recentes tecnologias e frameworks.",
        ],
    },
    {
        id: 4,
        title: "Participação no evento da MOZTECH - 2023: Moldando o Futuro da Tecnologia em Moçambique!",
        description: "A MOZTECH, a maior feira de tecnologia de Moçambique reserva experiências únicas a todos os intervenientes do ramo das tecnologias.",
        image: "/posts/moztech.jpg",
        details: [
            "Desenvolvimento fullstack utilizando as mais recentes tecnologias e frameworks.",
        ],
    },
]);
</script>
<template>
        
    <section class="p-4 pb-16 -mx-4">
        <div class="max-w-screen-xl mx-auto">

            <header class="my-16 text-center">
                <h4 class="text-5xl font-bold text-center text-white ">Blog</h4>

                <!-- <p class="mt-4 text-center text-white md:text-left">
                    Com uma ampla gama de habilidades técnicas e uma abordagem centrada no utilizador, estou comprometido em
                    fornecer serviços de alta qualidade que impulsionam o sucesso do seu projecto.
                </p> -->

            </header>


            <div class="grid grid-cols-12 gap-4">
                <article v-for="post in posts" :key="post.id"
                    class="col-span-12 card md:col-span-6 lg:col-span-4 xl:col-span-3 bg-base-200 ">
                    <figure class="px-4 pt-4">
                        <img :src="post.image" :alt="post.title" class=" rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="text-white card-title">
                            {{ post.title }}
                        </h2>
                        <p>{{ post.description }}</p>


                        <div class="mt-1 card-actions ">
                            <a href="" class="btn btn-primary btn-sm btn-link">Mais detalhes <i
                                    class="no-underline ri-arrow-right-line ri-lg"></i></a>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </section>
</template>