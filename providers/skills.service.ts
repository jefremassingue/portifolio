
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
