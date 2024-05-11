const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled (MERN + MEAN) stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'Scrum and Jira',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 2,
        title: 'Shopify Developer',
        desc: 'A Shopify developer specializes in designing, developing, customizing, and maintaining e-commerce websites using the Shopify platform. They monitor and optimize the websites performance, focusing on factors like page load times, efficient code, and scalability to ensure a smooth and fast user experience.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    }
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
