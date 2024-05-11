// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Nasir Javed',
    image: "images/nasir.jpeg",
    designation: 'React JS | NEXT JS | Node | GraphQL',
    view: "Hey everyone! I wanted to take a moment to recommend Muhammad Atif for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Atif is a reliable and dedicated team member who would be a great asset to any React.js team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/nasir-javed-96032339/"
  },
  {
    id: 1,
    name: 'Unzel Muneeb',
    image: "images/unzel.jpeg",
    designation: 'Freelancer | SEO',
    view: "I had the privilege of working alongside Atif on multiple university projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at JMM Technologies, where Osama's professionalism and attention to detail shone brightly. I wholeheartedly endorse Osama for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/unzelmuneeb/"
  },
  {
    id: 2,
    name: 'Zeeshan Safdar',
    image: "images/zeeshan.jpeg",
    designation: 'MERN | JavaScript | Node js | Bootstrap',
    view: "I wholeheartedly recommend Atif as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Atif attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/zeeshan-safdar-683861131/"
  },
  {
    id: 3,
    name: 'Faraz Ahmed Shaikh',
    image: "images/faraz.jpeg",
    designation: 'MERN Stack Developer at Zone Delivery Services',
    view: "I highly recommend Atif for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/faraz-ahmed-shaikh-b147b6124/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
