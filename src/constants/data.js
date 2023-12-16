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
        title: 'Consulting and Strategy',
        description: "I work closely alongside you to understand your goals, target audience, and business objectives. Using this insight, I develop a strategic plan designed to seamlessly transform your goals into a captivating digital presence.",
        Icon: Icons.HandshakeIcon,
    },
    {
        title: 'Branding',
        description: "Let's craft a distinctive visual identity that resonates with your brand. An identity that not only establishes a strong visual presence, but also forges a profound connection with your audience, fostering a sense of trust and authenticity.",
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Competitor Analysis',
        description: "Through my competitor analysis service, I delve deep into the strategies employed within your industry or niche. Armed with this insight, you gain a distinct advantage, positioning yourself uniquely from others.",
        Icon: Icons.TargetIcon,
    },
    {
        title: 'Front-End Development',
        description: "Infusing artistry into functionality, my web design prowess creates visually stunning and intuitive interfaces that captivate your audience. Aesthetics and usability should go hand in hand.",
        Icon: Icons.WebDesignIcon,
    },
    {
        title: 'Back-End Development',
        description: "Fueling your website's functionality behind the scenes, I create dynamic processes that bridge your business requirements and your website. Expect nothing less than efficient, user-friendly functionality that adds value to their experience.",
        Icon: Icons.ServerIcon,
    },
    {
        title: 'Responsive Design',
        description: "Your website will be flawlessly showcased across all screens for optimal viewing experience. Responsive design ensures your online presence adapts seamlessly to devices of all sizes.",
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