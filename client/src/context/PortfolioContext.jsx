import { createContext } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
    const portfolioData = {
        pageLinks: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Skills", href: "/skills" },
            { name: "Education", href: "/education" },
            { name: "Projects", href: "/projects" },
        ],
        skills: [
            {
                name: "Programming Languages",
                examples: ["C", "C++", "JavaScript", "SQL"],
            },
            {
                name: "Frontend Development",
                examples: ["HTML", "CSS", "React.js", "Tailwind CSS"],
            },
            {
                name: "Backend Development",
                examples: ["Node.js", "Express.js", "REST APIs", "JWT"],
            },
            {
                name: "Databases",
                examples: ["MongoDB", "MySQL"],
            },
            {
                name: "Tools & Platforms",
                examples: ["Git", "GitHub", "Vercel"],
            },
            {
                name: "Other Technologies",
                examples: ["Motion - Animation library ", "Nodemailer"],
            },
        ],
        education: [
            {
                duration: "2024 — 2028",
                degree: "B.E in Computer Science",
                institution: "Chitkara University, Himachal Pradesh, India",
                description:
                    "Specialized in building high-performance distributed systems with a focus on technical rigor and scalability. A strong advocate for clean architecture, type safety, and the belief that great software begins with comprehensive documentation.",
                grade: "CGPA: 9.0+",
            },
            {
                duration: "2022 — 2023",
                degree: "class 12th",
                institution:
                    "Kendriya Vidyalaya Bangana, Una, Himachal Pradesh, India",
                description:
                    "Completed Senior Secondary Education with a focus on Physics, Chemistry, and Mathematics (PCM). Developed strong analytical thinking, quantitative reasoning, and problem-solving skills that form a solid foundation for technical and engineering studies.",
                grade: "Percentage: 78.4%",
            },
            {
                duration: "2020 — 2021",
                degree: "class 10th",
                institution:
                    "Kendriya Vidyalaya Bangana, Una, Himachal Pradesh, India",
                description:
                    "Strong academic foundation in core subjects including Mathematics, Science, and English. This stage helped build analytical thinking, discipline, and problem-solving skills.",
                grade: "Percentage: 82.6%",
            },
        ],
        projects: [
            {
                title: "Chat App",
                description:
                    "This full-stack application enables seamless real-time communication by allowing users to send instant messages and multimedia images without refreshing the page. It features a dynamic user interface that tracks the online status of contacts and provides visual badges for unread messages to ensure no notification is missed. Additionally, users can fully personalize their experience through a profile management system that supports custom bios and image uploads.",
                technologies: [
                    "Tailwind CSS",
                    "React JS",
                    "React Router",
                    "Socket.io",
                    "Axios",
                    "Bcrypt JS",
                    "Cloudinary",
                    "Node JS",
                    "Express JS",
                    "MongoDB Atlas",
                    "Mongoose",
                    "JSON Web Tokens (JWT)",
                    "Nodemailer",
                    "Toastify",
                ],
                viewDemoLink: "https://chat-sigma-one-26.vercel.app/login",
                sourceCodeLink: "https://github.com/Ritish-Sharma-Dev/Chat-App",
            },
            {
                title: "Real Estate Website",
                description:
                    "This project features a sleek, professional design tailored for real estate showcases, utilizing smooth scroll-triggered animations to create a dynamic and engaging user experience. A fully functional contact form powered by Web3Forms for direct email inquiries. The website is also optimized with a responsive design and a toggleable mobile menu to ensure seamless performance across all screen sizes.",
                technologies: [
                    "HTML",
                    "Tailwind",
                    "React JS",
                    "Web3Forms",
                    "Toastify",
                ],
                viewDemoLink:
                    "https://real-estate-website-umber-beta.vercel.app/",
                sourceCodeLink:
                    "https://github.com/Ritish-Sharma-Dev/Real-Estate-Website",
            },
        ],
        socialLinks: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/ritish-sharma-dev",
            },
            { name: "Github", url: "https://github.com/Ritish-Sharma-Dev" },
            { name: "X / Twitter", url: "https://x.com/Ritish__Sharma" },
            { name: "Instagram", url: "https://instagram.com/ritish.sharma._" },
            { name: "LeetCode", url: "https://leetcode.com/u/Ritish__Sharma/" },
        ],
    };

    return (
        <PortfolioContext.Provider value={portfolioData}>
            {children}
        </PortfolioContext.Provider>
    );
};
