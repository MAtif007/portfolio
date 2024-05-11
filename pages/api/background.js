const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Government College University Faisalabad',
                degree: 'BS, Computer Science Engineering',
                detail: "Bachelor's Degree in Computer Science Engineering from Government College University Faisalabad.",
                year: '2017-2021'
            },
            {
                id: 1,
                title: 'Government Degree College Layyah',
                degree: 'HSSC, Intermediate in Computer Science',
                detail: "Completed Intermediate in Computer Science part 1 and part 2  from Government Degree College Layyah.",
                year: '2015-2017'
            },
            {
                id: 2,
                title: 'Govt High School Chak No. 139-a/tda Layyah',
                degree: 'SSC, Computer Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Computer Science subjects from Govt High School Chak No. 139-a/tda Layyah",
                year: '2013-2015'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Zone Delivery Services - Remote',
                role: 'Frontend Developer',
                url: 'https://zonedeliveryservices.com/',
                desc: 'As a frontend developer, I use React, Angular, Next & JavaScript to build user interfaces for web applications.',
                year: '10/2023 - Present',
                location: 'Dubai, United Arab Emirates'
            },
            {
                id: 2,
                title: 'Starzplay',
                role: 'Web Technology Engineering ',
                url: 'https://starzplay.com/en',
                desc: 'As a Full Stack Developer, I specialized in TVOD, SVOD, setting sites, focusing on user subscriptions, interactive design, and microservices architecture. I mastered React , Node js and JavaScript to craft engaging and interactive websites.',
                year: '03/2022 - 10/2023',
                location: 'Lahore, Pakistan'
            },
            {
                id: 3,
                title: 'Midway Solutions Inc (Nibble) - Remote',
                role: 'Backend Developer (PHP & LARAVEL)',
                url: 'https://heynibble.com/',
                desc: "I work there as a PHP Laravel developer, where I honed my skills in performing CRUD operations and crafting intuitive dashboards, showcasing my proficiency in professional web development.",
                year: '02/2021 - 02/2022',
                location: 'Lahore, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
