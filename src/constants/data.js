import * as Icons from "../components/Icons";

export const navMenu = [
    {
        id: 'Home',
        href: '/',
    },
    {
        id: 'Services',
        href: '/services',
    },
    {
        id: 'About',
        href: '/about',
    },
    {
        id: 'Resume',
        href: '/resume',
    },
]

export const projects = [
    {
        title: 'Landing Page',
        src: '/assets/images/projects/proyecto1-landing.webp',
        altText: 'Screenshot of Landing page',
        ariaLabel: "Abre un modal con mayor informacion de Landing Page project",
        details: {
            description: "Landing Page tiene como objetivo desarrollar una interfaz utilizando HTML y CSS, en toda su aplicación.",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
            ],
            url: 'https://rainbow-starship-3e1319.netlify.app/',
            githubUrl: 'https://github.com/priscilaek/neuroproteccion',
        },
    },
    {
        title: 'CRUD Application',
        src: '/assets/images/projects/proyecto2-TodoList.webp',
        altText: 'Screenshot of proyecto2-TodoList home page',
        ariaLabel: "Opens modal window with more information about the proyecto2-TodoList web project",
        details: {
            description: "proyecto2-TodoList tiene como objetivo aplicar las operaciones CRUD en un segmento de datos.",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
            ],
            url: 'https://chipper-begonia-a1661d.netlify.app/',
            githubUrl: 'https://github.com/priscilaek/to-do-list-crud',
        },
    },
    {
        title: 'Dashboard Application',
        src: '/assets/images/projects/proyecto3-Dashboard.webp',
        altText: 'Screenshot of proyecto3-Dashboard home page',
        ariaLabel: "Opens modal window with more information about the proyecto3-Dashboard web project",
        details: {
            description: "The Dashboard App tiene como objetivos Crear un ambiente de desarrollo con Node.js, conocer el funcionamiento de las APIs y aplicar procesos síncronos y asíncronos en JavaScript.",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'BackEnd',
                    Icon: Icons.DatabaseIcon,
                },
                {
                    title: 'API',
                    Icon: Icons.APIIcon,
                },
            ],
            url: "https://soft-nougat-e99acb.netlify.app/",
            githubUrl: "https://github.com/priscilaek/proyecto3-chartjs",
        },
    },
    {
        title: 'Restaurant Application',
        src: '/assets/images/projects/proyecto4-RestaurantApp.webp',
        altText: 'Screenshot of proyecto4-RestaurantApp home page',
        ariaLabel: "Opens modal window with more information about the proyecto4-RestaurantApp web project",
        details: {
            description: "Restaurant Application tiene como objetivo principal desarrollar una aplicación web utilizando React.",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'BackEnd',
                    Icon: Icons.DatabaseIcon,
                },
                {
                    title: 'API',
                    Icon: Icons.APIIcon,
                },
                {
                    title: 'React',
                    Icon: Icons.ReactIcon,
                },
            ],
            url: "https://ex-fullstack01-frontend.onrender.com/",
            githubUrl: "https://github.com/priscilaek/ex-fullstack01",
        },
    },
    {
        title: 'e-Commerce Application',
        src: '/assets/images/projects/proyecto5-eCommerce.webp',
        altText: 'Screenshot of proyecto5-eCommerce home page',
        ariaLabel: "Opens modal window with more information about the proyecto5-eCommerce web project",
        details: {
            description: "e-Commerce Application tiene como objetivos: Manejo de rutas del lado del cliente (Frontend), Manejo de estados locales y globales (Frontend), Manejo de rutas en un servidor (Backend), Gestión y flujo de datos en MongoDB, Seguridad (Autenticación y autorización).",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'BackEnd',
                    Icon: Icons.DatabaseIcon,
                },
                {
                    title: 'API',
                    Icon: Icons.APIIcon,
                },
                {
                    title: 'React',
                    Icon: Icons.ReactIcon,
                },
                {
                    title: 'MongoDB',
                    Icon: Icons.MongoDBIcon,
                },
            ],
            url: "https://pris-neuroproteccion.netlify.app/",
            githubUrl: "https://github.com/priscilaek/fullstack-proyecto5-pris",
        },
    },
]

export const testimonials = [
    {
        quote: "Priscila es una excelente profesional, muy comprometida con la organización, pro activa, analítica, tiene skills muy desarrollados en áreas relacionados a la Calidad, Procesos y Gestión de proyectos.",
        name: 'Carlos Borjas',
        title: 'Gerente de TI en Remicsa Drilling S.A.',
        src: '/assets/images/testimonials/carlos.webp',
        altText: 'Profile of Carlos B.',
    }
]

export const socialMedias = [
    {
        href: 'mailto:priscilaek@gmail.com',
        ariaLabel: 'Escriba un email a Priscila',
        title: 'Write an Email to Priscila',
        Icon: Icons.EmailIcon,
    },
    {
        href: 'https://www.linkedin.com/in/cyberellapriscilaelias/',
        ariaLabel: 'Goes to Priscila LinkedIn profile',
        title: 'LinkedIn Profile',
        Icon: Icons.LinkedInIcon,
    },
    {
        href: 'https://github.com/priscilaek',
        ariaLabel: 'Goes to Priscila GitHub profile',
        title: 'GitHub Profile',
        Icon: Icons.GitHubIcon,
    },
    {
        href: 'https://twitter.com/cyberellaperu',
        ariaLabel: 'Goes to Priscila Twitter profile',
        title: 'Twitter Profile',
        Icon: Icons.TwitterIcon,
    },
];

export const techSkills = [
    {
        category: 'Front-End Development',
        skills: [
            {
                title: 'HTML',
                Icon: Icons.HtmlIcon,
            },
            {
                title: 'CSS',
                Icon: Icons.CSSIcon,
            },
            {
                title: 'Tailwind CSS',
                Icon: Icons.TailwindCSSIcon,
            },
            {
                title: 'JavaScript',
                Icon: Icons.JavascriptIcon,
            },
            {
                title: 'React',
                Icon: Icons.ReactIcon,
            },
        ],
    },
    {
        category: 'Back-End Development',
        skills: [
            {
                title: 'NodeJS',
                Icon: Icons.NodeJSIcon,
            },
            {
                title: 'ExpressJS',
                Icon: Icons.ExpressJSIcon,
            },
            {
                title: 'MongoDB',
                Icon: Icons.MongoDBIcon,
            },
        ],
    },
    {
        category: 'Build Tools, Frameworks, and Versioning',
        skills: [
            {
                title: 'Vite',
                Icon: Icons.ViteIcon,
            },
            {
                title: 'Git',
                Icon: Icons.GitIcon,
            },
            {
                title: 'GitHub',
                Icon: Icons.GitHubIcon,
            },
        ],
    },
    {
        category: 'Design and Prototyping',
        skills: [
            {
                title: 'Responsive Design',
                Icon: Icons.ResponsiveDesignIcon,
            },
            {
                title: 'Figma',
                Icon: Icons.FigmaIcon,
            },
        ],
    },
    {
        category: 'Microsoft Products',
        skills: [
            {
                title: 'Sharepoint',
                Icon: Icons.SharepointIcon,
            },
            {
                title: 'Excel',
                Icon: Icons.ExcelIcon,
            },
            {
                title: 'Access',
                Icon: Icons.AccessIcon,
            },
        ],
    },
    {
        category: 'Others',
        skills: [
            {
                title: 'APIs',
                Icon: Icons.APIIcon,
            },
            {
                title: 'REST APIs',
                Icon: Icons.RestAPIIcon,
            },
            {
                title: 'LocalWP',
                Icon: Icons.LocalWP,
            },
        ],
    },
];

export const softSkills = [
    {
        title: 'Creativity',
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Teamwork',
        Icon: Icons.TeamworkIcon,
    },
    {
        title: 'Public Speaking',
        Icon: Icons.PublicSpeakingIcon,
    },
    {
        title: 'Time Management',
        Icon: Icons.ScheduleIcon,
    },
];

export const workExp = [
    {
        company: 'Priscila',
        location: 'Lima, PE',
        positions: [
            {
                title: 'Software Test Automation Engineer',
                startDate: new Date(2021, 9),
                endDate: 'present',
            },
        ],
        tasks: [
            "Collaborate directly with clients and the team project to validate requirements, provide regular updates, and deliver solutions that tailored to their specific needs",
        ],
    },
];

export const extracurriculars = [
    {
        company: 'Neuroprotección',
        location: 'Lima, PE',
        positions: [
            {
                title: 'Test del desarrollo psicomotor',
                startDate: new Date(2006, 6),
                endDate: 'present',
            },
        ],
        tasks: [
            "Apoyo en la aplicación de test del desarrollo psicomotor a niños de 0 a 2 años",
        ],
    },

];

export const educations = [
    {
        degree: 'B.S. Computer Engineering',
        school: 'Universidad Jorge Basadre Grohmann - Tacna, PE',
    },
];

export const dessertImages = [
    {
        src: '/assets/images/desserts/oreo-cupcakes.webp',
        altText: 'Oreo cupcakes with the toastmasters club 10th anniversary cupcake topper',
        value: 'oreo-cupcakes',
        label: 'Oreo cupcakes',
    },
    {
        src: '/assets/images/desserts/bagel-cake.webp',
        altText: 'Large cake decorated to look like an everything bagel',
        value: 'bagel-cake',
        label: 'Everything bagel cake',
    },
    {
        src: '/assets/images/desserts/souffle.webp',
        altText: 'Cheese souffle in a ramekin',
        value: 'souffle',
        label: 'Cheese souffle',
    },
    {
        src: '/assets/images/desserts/cookies.webp',
        altText: 'Plate of chocolate chip cookies',
        value: 'cookies',
        label: 'Chocolate chip cookies',
    },
    {
        src: '/assets/images/desserts/macaron-cupcake.webp',
        altText: 'Red velvet cupcake with cream cheese frosting with a strawberry macaron on top',
        value: 'macaron-cupcakes',
        label: 'Red velvet cupcake',
    },
    {
        src: '/assets/images/desserts/cannoli-cupcakes.webp',
        altText: 'Cannoli cupcakes with chocolate chips on top',
        value: 'cannoli-cupcakes',
        label: 'Cannoli cupcakes',
    },
];

export const generalServices = [
    {
        title: 'Consultoria y Estrategia',
        description: "Trabajo estrechamente junto a usted para comprender sus metas, público objetivo y objetivos comerciales. Utilizando esta información, desarrollo un plan estratégico diseñado para transformar sin problemas sus objetivos en una presencia digital cautivadora.",
        Icon: Icons.HandshakeIcon,
    },
    {
        title: 'Branding',
        description: "Creemos una identidad visual distintiva que resuene con su marca. Una identidad que no sólo establece una fuerte presencia visual, sino que también forja una conexión profunda con su audiencia, fomentando un sentido de confianza y autenticidad.",
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Competitor Analysis',
        description: "A través de mi servicio de análisis de la competencia, profundizo en las estrategias empleadas dentro de tu industria o nicho. Obteniendo con esta información una clara ventaja, posicionándose de manera única frente a los demás.",
        Icon: Icons.TargetIcon,
    },
    {
        title: 'Front-End Development',
        description: "Infundiendo arte en funcionalidad, mi destreza en diseño web crea interfaces visualmente impresionantes e intuitivas que cautivan a su audiencia. Estética, accesibilidad y usabilidad deben ir de la mano.",
        Icon: Icons.WebDesignIcon,
    },
    {
        title: 'Back-End Development',
        description: "Impulsando la funcionalidad de su sitio web entre bastidores, creo procesos dinámicos que unen los requisitos de su negocio y su sitio web. Espere nada menos que una funcionalidad eficiente y fácil de usar que agregue valor a su experiencia.",
        Icon: Icons.ServerIcon,
    },
    {
        title: 'Responsive Design',
        description: "Nuestro sitio web se mostrará perfectamente en todas las pantallas para una experiencia de visualización óptima. El diseño responsivo garantiza que su presencia en línea se adapte perfectamente a dispositivos de todos los tamaños.",
        Icon: Icons.DesktopMobileIcon,
    },
];

export const specialties = [
    {
        title: 'Web Hosting and Deployment',
        Icon: Icons.DatabaseIcon,
    },
    {
        title: 'API Development and Integration',
        Icon: Icons.APIIcon,
    },
    {
        title: 'Custom Web Applications',
        Icon: Icons.ProgrammingIcon,
    },
    {
        title: 'Portfolio Websites',
        Icon: Icons.PortfolioIcon,
    },
    {
        title: 'CMS Development and Customization',
        Icon: Icons.WebContentIcon,
    },
    {
        title: 'Web Performance Optimization',
        Icon: Icons.RocketIcon,
    },
    {
        title: 'Website Maintenance',
        Icon: Icons.ToolsIcon,
    },
    {
        title: 'Website Migration',
        Icon: Icons.LeftRightArrowsIcon,
    },
];