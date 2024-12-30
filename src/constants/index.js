import {
    contact,
    github,
    linkedin,
} from "../assets/icons";

export const experiences = [
    {
        title: "Android App Development",
        company_name: "at Indian Institute of Technology Hyderabad",
        iconBg: "#eb4034",
        date: "November 2022",
        points: [
            "Overview of Android as the most widely-used mobile operating system.",
            "Basics of app development and the Android ecosystem. Understanding Android Studio, the official IDE for Android development.",
            "Debugging and testing Android applications using Android Studio tools. Publishing apps to the Google Play Store, including best practices for deployment.",
        ],
    },
    {
        title: "Google Cloud Career Practitioners Campaign",
        company_name: "by Google DSC AU",
        iconBg: "#eb8c34",
        date: "December 2022",
        points: [
            "🌱 Throughout the learning process, the benefits of adopting cloud technology in various industries.",
            "It was a transformative experience that allowed me to gain valuable insights. Google Cloud Platform (GCP) Overview, Hands-On with Core Google Cloud Services, Overview of AI and ML services on GCP, including Vision API and AutoML.",

        ],
    },
    {
        title: "UX-WIZ",
        company_name: "gamify the experience",
        iconBg: "#e2eb34",
        date: "January 2023",
        points: [
            "The competition emphasized solving practical design problems, reinforcing the importance of user-centricity in creating effective solutions.",
            "Implemented various gamification mechanisms like Points, Badges, and Leaderboards, Levels and Progression",
            "Ensuring that gamification enhanced learning rather than distracting from it was essential. Activities like quizzes, puzzles, and interactive scenarios tied directly to educational objectives to reinforce understanding while keeping the user engaged.",
            
        ],
    },
    {
        title: "AR hackathon",
        company_name: "by XDG Hyderabad, AR Snap and AUDAO",
        iconBg: "#7aeb34",
        date: "March 2023",
        points: [
            "Designing for a festival like Pongal taught me to embed cultural relevance into AR filters.",
            "Leveraged machine learning models to detect and enhance facial features dynamically for creating immersive effects like Pongal-themed designs.",
            "Brainstorming ways to bring Pongal to life in AR taught me how to transform abstract cultural ideas into tangible, delightful visuals."
        ],
    },
    {
        title: "IUCEE NEP Mini Course in Artificial Intelligence",
        company_name: "by IUCEE",
        iconBg: "#34eb89",
        date: "March 2023",
        points: [
            "Understanding what constitutes artificial intelligence, including fields like machine learning, deep learning, and neural networks.",
            "Tracing the history of AI and its integration into various industries.Insights into modern breakthroughs like transformers and generative AI.",
            "Exposed to a huge level of real-world problems in AI."
        ],
    },
    {
        title: "WE Alpha Cohort",
        company_name: "by WEHUB",
        iconBg: "#34ebd3",
        date: "September - October 2023",
        points: [
            "Learned the essential mindset required for entrepreneurship, focusing on problem-solving, resilience, and navigating uncertainty.",
            "Discussed frameworks for ideation and turning ideas into feasible products that meet real-world needs.",
            "Worked on turning our innovative idea into a tangible product or service that addressed a pain point in the market."
        ],
    },
    {
        title: "Google AIML Virtual Internship",
        company_name: "by AICTE",
        iconBg: "#34b1eb",
        date: "January - March 2024",
        points: [],
    },
    {
        title: "Altair Data Science Virtual Internship",
        company_name: "by AICTE",
        iconBg: "#34b1eb",
        date: "April - June 2024",
        points: [],
    },
    {
        title: "Anurag Artificial Intelligence Club",
        company_name: "Vice President",
        iconBg: "#4334eb",
        date: "February 2023 - Present",
        points: [
            "As the Vice President, I learned to lead a team effectively, delegate tasks, and ensure smooth collaboration among members.",
            "I developed the ability to organize events, workshops, and hackathons, managing multiple responsibilities such as planning and execution.",
            "Leading AI-related initiatives helped me explore emerging technologies, tools, and frameworks, enhancing my technical expertise.",
            "As the speaker for the Data Science with Python event, I honed my public speaking and presentation skills by explaining complex concepts in a clear and engaging manner."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sanjanami',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/t-sai-teja-sri-sanjana-2b9223235/',
    }
];

export const projects = [
    {
        theme: 'btn-back-red',
        name: 'Animal Classification - ML',
        description: 'Trained a machine learning model to distinguish between cats and dogs by using image data and various classification algorithms. The model is evaluated based on accuracy and efficiency in differentiating between these two animal categories.',
        link: 'https://github.com/sanjanami',
    },
    {
        theme: 'btn-back-green',
        name: 'Smart Traffic System - IoT',
        description: 'Used IoT devices like sensors and cameras to monitor traffic in real-time, manage traffic lights, and reduce congestion by dynamically controlling the flow of vehicles implemented in Arduino IDE.',
        link: 'https://github.com/sanjanami',
    },
    {
        theme: 'btn-back-blue',
        name: 'Air Math',
        description: 'The model utilizes computer vision techniques to recognize hand gestures and associate them with specific actions, enabling user interaction without the need for physical touch. It tracks hand movements and translates them into relevant calculations or system inputs.',
        link: 'https://github.com/sanjanami',
    },
    {
        theme: 'btn-back-pink',
        name: 'Smart Math Calculator',
        description: 'This tool leverages a touch-screen or sensor interface, allowing users to perform handwritten calculations, where finger movements function as a stylus. It recognizes the handwritten numbers and mathematical operations and performs calculations accordingly.',
        link: 'https://github.com/sanjanami',
    },
    {
        theme: 'btn-back-black',
        name: 'Speech Emotion Recognition using VSAE',
        description: 'Applies a variational speech autoencoder for feature extraction from speech data, enabling the recognition of emotions based on voice characteristics. The trained model can predict emotional states like happy, sad, angry, and neutral from audio samples.',
        link: 'https://github.com/sanjanami',
    },
    {
        theme: 'btn-back-yellow',
        name: 'MoM Summarization Tool in Telugu using LLM',
        description: 'This project focuses on developing an automated tool that transcribes Telugu meeting audio into text and generates concise summaries, leveraging large language models (LLMs) for natural language processing and summarization. It aims to streamline the process of capturing and summarizing meeting content in the Telugu language.',
        link: 'https://github.com/sanjanami',
    }
];
