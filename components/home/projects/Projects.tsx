import {SectionHeader} from "@/components/utils/SectionHeader";
import {Project} from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
    return (
        <section className="section-wrapper" id="projects">
            <SectionHeader title="Projects" dir="r"/>

            <div className={styles.projects}>
                {projects.map((project) => {
                    return <Project key={project.title} {...project} />;
                })}
            </div>
        </section>
    );
};

const projects = [
    {
        title: "YouTube Clone",
        imgSrc: "/project-imgs/Youtube_clone_List_page.png",
        code: "https://github.com/hrishi333/youtubeClone",
        projectLink: "",
        tech: ["React Js", "Css", "Redux", "Express", "MongoDB"],
        description: "YouTube clone powered by React JS, CSS, Express JS, and MongoDB. Create channels, like, subscribe, and comment on videos. Customize profiles, categorize content, and build a vibrant video-sharing community. Aspire to be a full-stack developer, influencer, or entrepreneur with TubeX as your creative platform. Start your journey now!",
        modalContent: (
            <>
                <p>
                    This is an innovative YouTube clone developed using React JS for a responsive frontend, CSS for
                    sleek styling, Express JS for a robust backend, and MongoDB for data management. </p>
                <p>
                    With TubeX, users can create personalized channels, upload videos, and interact through features
                    like likes, subscriptions, and comments. </p>
                <p>
                    The platform also offers video categorization, helping users discover content they love.
                </p>
                <p>
                    As you aim to become a full-stack developer, influencer, or entrepreneur, TubeX provides a strong
                    foundation for your aspirations. It's more than a clone; it's your canvas for creativity and
                    connection. </p>
                <p>
                    Embark on your digital journey with Youtube clone today!
                </p>
            </>
        ),
    },
    {
        title: "Shoe_Mart E-commerce",
        imgSrc: "/project-imgs/Shoe_Mart.png",
        code: "https://github.com/hrishi333/shoe-mart-frontend",
        projectLink: "",
        tech: ["NextJs", "css", "stripe-payment", "redux"],
        description: "Experience the future of shoe shopping with Shoe Mart E-Commerce, built with Next.js, CSS, Redux, and Stripe. Explore an extensive shoe catalog, seamlessly add to your cart, and securely complete your purchase using the trusted Stripe payment gateway. Our instant payment success messages keep you informed every step of the way, ensuring a smooth and stylish journey into the world of footwear fashion.",
        modalContent: (
            <>
                <p>
                    Shoe Mart E-Commerce, powered by Next.js, CSS, Redux, and Stripe, offers a seamless shoe shopping
                    experience.
                </p>
                <p>
                    Explore our catalog, view detailed product pages, and easily manage your cart. With secure Stripe
                    payments and instant success messages, we ensure a smooth journey from selection to style.
                </p>
                <p>
                    Why Shoe Mart E-Commerce?

                    Effortless Shopping: Enjoy a user-friendly platform with responsive design.
                    Secure Transactions: Stripe ensures payment safety and security.
                </p>
                <p>
                    Step into style with Shoe Mart E-Commerce. Shop, enjoy, and thrive in the world of online shoe
                    fashion!
                </p>
            </>
        ),
    },
    {
        title: "Chat GPT Clone",
        imgSrc: "/project-imgs/Chat_gpt.png",
        code: "https://github.com/hrishi333/chatGptClone",
        projectLink: "https://chat-gpt-clone-8zm5c82kf-hrishi333.vercel.app/",
        tech: ["Typescript", "ReactJs", "Next JS", "ChatGpt Api", "TailwindCSS", "Firebase Firestore"],
        description: "Designed and developed a Chat GPT Clone, a dynamic chat application powered by cutting-edge technologies. Leveraging JavaScript, React.js, and Next.js, the application offers a seamless and interactive chat experience. User authentication and security were ensured through Next Auth. The interface was crafted with a modern and responsive design using Tailwind CSS. Messages were stored in real-time using Firebase Firestore, enabling fast and reliable communication.",
        modalContent: (
            <>
                <p>
                    Designed and developed a Chat GPT Clone, a dynamic chat application powered by cutting-edge
                    technologies.
                </p>
                <p>
                    Leveraging JavaScript, React.js, and Next.js, the application offers a seamless and interactive chat
                    experience.
                </p>
                <p>
                    User authentication and security were ensured through Next Auth. The interface was crafted with a
                    modern and responsive design using Tailwind CSS. </p>
                <p>
                    Messages were stored in real-time using Firebase Firestore, enabling fast and reliable
                    communication.
                </p>
                <p>
                    This project demonstrates my proficiency in JavaScript, React.js, Next.js, and Next Auth for secure
                    user authentication. The sleek and user-friendly design showcases my skills in utilizing Tailwind
                    CSS, while Firebase Firestore guarantees real-time message handling for a responsive chat
                    experience.
                </p>
            </>
        ),
    },

    {
        title: "Blog_App",
        imgSrc: "/project-imgs/Blog_app.png",
        code: "https://github.com/hrishi333",
        projectLink: "",
        tech: ["React", "Tailwind", "Express Js", "mongodb"],
        description:
            "Blog_App is the ultimate blogging hub, featuring a sleek, responsive design crafted with React and Tailwind CSS on the frontend. On the backend, we leverage Express and MongoDB to ensure your content is stored securely and accessible with blazing speed. Start your blogging journey with Blogify and share your ideas with the world, all on a robust and user-friendly platform!",
        modalContent: (
            <>
                <p>
                    Blog is your premier blogging platform, where cutting-edge technology meets seamless creativity.
                </p>
                <h3>
                    With a stunning frontend built on React and Tailwind CSS, Blogify offers a responsive, visually
                    appealing user experience.
                </h3>
                <p>
                    On the robust backend powered by Express.js and MongoDB, your content is secure and accessible at
                    lightning speed.
                </p>
                <p>
                    Whether you're an aspiring writer, a full-stack developer, or an entrepreneur, Blogify provides the
                    perfect canvas to share your thoughts and stories with the world, all in a user-centric and visually
                    captivating environment."
                </p>
                <li>
                    <b>Sleek Frontend:</b>:With React and Tailwind CSS, Blogify delivers a sleek and modern user
                    interface that adapts beautifully to all devices. Your content will shine in an elegant and
                    responsive design.
                </li>
                <li>
                    <b>Effortless Blogging</b>: Create, edit, and organize your blog posts with ease. Our intuitive
                    content management system allows you to focus on your writing without the technical fuss.
                </li>
                <li>
                    <b>Secure Backend</b>:Leveraging Express.js and MongoDB, Blogify ensures the secure storage of your
                    content and the speedy retrieval of your posts. Your data is in trusted hands.
                </li>
            </>
        ),
    },
];
