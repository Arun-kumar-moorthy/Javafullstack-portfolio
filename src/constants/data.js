export const navLinks = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "Skills", href: "#skills" },
    { id: 3, name: "Experience", href: "#experience" },
    { id: 4, name: "Projects", href: "#projects" },
    { id: 5, name: "Contact", href: "#contact" },
];
export const myProjects = [
    {
        title: "Student Management System",
        desc: "A Java application developed to streamline student data management, including enrollment, academic records, attendance tracking, and administrative workflows.",
        subdesc: "Built using Core Java, JDBC, and MySQL. Features an easy-to-use interface and robust data management.",
        href: "#",
        source: "#",
        logoStyle: {
            backgroundColor: "hsla(288, 93%, 48%, 1)",
            background: "linear-gradient(135deg, #ff9720, #fc0865)",
            border: "0.2px solid rgba(255, 151, 32, 1)",
        },
        tags: [
            { id: 1, name: "Java", path: "" },
            { id: 2, name: "JDBC", path: "" },
            { id: 3, name: "MySQL", path: "" },
        ],
    },
    {
        title: "Vegetable Shop Management System",
        desc: "A Java application designed to manage inventory, dynamic pricing, and customer transactions.",
        subdesc: "Built using HTML, CSS, JavaScript, and React for the frontend, with Core Java, JDBC, and MySQL for the backend. Features a responsive user interface and secure, robust data management.",
        href: "#",
        source: "#",
        logoStyle: {
            backgroundColor: "rgba(191, 9, 236, 1)",
            background: "linear-gradient(135deg, #2ab83bff, #1610acff)",
            border: "0.2px solid rgba(219, 65, 19, 1)",
        },
        tags: [
            { id: 1, name: "Java", path: "" },
            { id: 2, name: "JDBC", path: "" },
            { id: 3, name: "MySQL", path: "" },
            { id: 4, name: "Java Script", path: "" },
            { id: 5, name: "React", path: "" },
            { id: 6, name: "HTML", path: "" },
            { id: 7, name: "CSS", path: "" },
        ],
    },
    {
        title: "Electronic System Simulation",
        desc: "A simulation project bridging hardware logic and software implementation.",
        subdesc: "Leveraged B.E. Electrical background to simulate algorithmic logic for electronic circuits using Java.",
        href: "#",
        source: "#",
        logoStyle: {
            backgroundColor: "rgba(126, 63, 242, 1)",
            background: "linear-gradient(135deg, #7e3ff2, #fc0865)",
            border: "0.2px solid rgba(126, 63, 242, 1)",
        },
        tags: [
            { id: 1, name: "Java", path: "" },
            { id: 2, name: "Algorithmic Logic", path: "" },
        ],
    },
];
export const workExperiences = [
    {
        id: 1,
        company: "ACCORD INFO MATRIX PVT.LTD",
        position: "JavaFull Stack Developer",
        duration: "2024 - 2025",
        icon: "",
        technologies: ["Java", "JDBC", "MySQL", "JavaScript", "HTML", "CSS", "React"],
        projects: [{ name: "Student Management System" }],
    },
    {
        id: 2,
        company: "Jerusalem College of Engineering",
        position: "BE In Electrical & Electronics",
        duration: "2021 - 2024",
        icon: "",
        technologies: ["Analytical Thinking", "Problem Solving", "Electronic Systems"],
        projects: [{ name: "Electronic System Simulation" }],
    },
    {
        id: 3,
        company: "Bharath Polytechnic College",
        position: "Diploma In Electrical & Electronics",
        duration: "2018 - 2021",
        icon: "",
        technologies: ["Embedded Systems", "IoT", "C", "Arduino", "Sensor Interfacing"],
        projects: [{ name: "Automatic Solar Street Light" }]
    }
];
export const skills = [
    { name: "Java", icon: "FaJava", color: "#007396" },
    { name: "Spring Boot", icon: "SiSpringboot", color: "#6DB33F" },
    { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
    { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
    { name: "HTML5", icon: "SiHtml5", color: "#E34F26" },
    { name: "CSS3", icon: "SiCss3", color: "#1572B6" },
    { name: "JDBC", icon: "SiDatabricks", color: "#FF3621" },
    { name: "OOPs", icon: "SiCplusplus", color: "#00599C" },
    { name: "React", icon: "FaReact", color: "#61DAFB" },
    { name: "GitHub", icon: "FaGithub", color: "#181717" },
    { name: "Problem Solving", icon: "SiProcessingfoundation", color: "#FFFFFF" },
    { name: "Analytics", icon: "SiSimpleanalytics", color: "#E37400" },
];
