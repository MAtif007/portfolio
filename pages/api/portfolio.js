const portfolio = [
    {
        id: 0,
        projectName: "Starz play",
        url: "https://starzplay.com/en",
        image: "projects/strazplay.png",
        projectDetail: "As a seasoned Web Technologies Engineer, I specialize in revitalizing TVOD and SVOD platforms, crafting engaging screen savers, developing dynamic top 10 carousels, and integrating secure QR code payment solutions for live events like Straz Paly. With a keen eye for design and a passion for seamless user experiences, I bring a wealth of expertise to every project.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Nodejs"
            },
            {
                tech: "Redux"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Styled-Components"
            },
        ]
    },
    {
        id: 0,
        projectName: "PR For Freelance",
        url: "https://heynibble.com/",
        image: "projects/haynibble.png",
        projectDetail: "At Nibble, we empower businesses, founders, and teams to effortlessly discover and collaborate with elite PR specialists who boast a proven track record of success in similar endeavors. With us, finding the perfect PR partner is quick, easy, and reliable, so you can focus on achieving your goals with confidence.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "PHP"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "Jquery"
            },
            {
                tech: "Ajax"
            },
            {
                tech: "My SQL"
            }
        ]
    },
    {
        id: 0,
        projectName: "Zone Delivery Services  Technologies",
        url: "https://zonedeliveryservices.com/",
        image: "projects/zone.png",
        projectDetail: "With our delivery system, businesses can effortlessly access and manage user data, including customer profiles, contact information, delivery preferences, and order history This wealth of information empowers businesses to personalize the delivery experience, enhance customer satisfaction, and drive loyalty.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NEXT JS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Node js"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Material UI"
            },
            {
                tech: "Type Script"
            },
        ]
    },
    {
        id: 0,
        projectName: "Cow Boy",
        url: "https://cowboy.com/",
        image: "projects/cowboy.png",
        projectDetail: "Cow Boy is ecommerce website,  where you can open your own store and sell products of different brands!",
        technologiesUsed: [
            {
                tech: "Shopify"
            },
            {
                tech: "Html"
            },
            {
                tech: "Css"
            },
            {
                tech: "Ajax"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Coco Floss",
        url: "https://cocofloss.com/",
        image: "projects/cocofloss.png",
        projectDetail: "Coco Floss is ecommerce website,  where you can open your own store and sell products of different brands!",
        technologiesUsed: [
            {
                tech: "Shopify"
            },
            {
                tech: "Html"
            },
            {
                tech: "Css"
            },
            {
                tech: "Ajax"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "All Birds",
        url: "https://www.allbirds.com/",
        image: "projects/allbirds.png",
        projectDetail: "All Birds is ecommerce website,  where you can open your own store and sell products of different brands!",
        technologiesUsed: [
            {
                tech: "Shopify"
            },
            {
                tech: "Html"
            },
            {
                tech: "Css"
            },
            {
                tech: "Ajax"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Tojjar",
        url: "/domain-expired",
        image: "projects/tojjar.png",
        projectDetail: "Tojjar is ecommerce website,  where you can open your own store and sell products of different brands!",
        technologiesUsed: [
            {
                tech: "Nextjs with SSR"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "Otawix",
        url: "https://b2c.otawix.com/",
        image: "projects/otawix.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "MUI"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "Spatay",
        url: "https://spatay.com/",
        image: "projects/spatay.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    }
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
