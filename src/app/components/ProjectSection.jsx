"use client";

import React,{ useState , useRef } from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectTag from './ProjectTag';
import { animate, motion , useInView } from 'framer-motion';

const projectsData = [
    {
        id : 1,
        title : " Amazon Clone",
        description:"Project 1 description",
        image: "https://i.ytimg.com/vi/yjZmtEGq_ss/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpQR397boidhfaX1NIq4FOoy65-g",
        tag: ["All","Frontened"],
        gitUrl:"https://github.com/Rimsha-Adnan/amazon-clone",
        previewUrl:"https://amazon-clone-by-rim.vercel.app/",
    },
    {
        id : 2,
        title : "Word Counter With React",
        description:"Project 2 description",
        image: "https://www.blogsaays.com/wp-content/uploads/2020/02/word-count-tool.jpg",
        tag: ["All","Frontened"],
        gitUrl:"https://github.com/Rimsha-Adnan/word-counter-with-react",
        previewUrl:"https://word-counter-with-react.vercel.app/", 
    },
    {
        id : 3,
        title : "Student Management System",
        description:"Project 3 description",
        image: "https://st2.depositphotos.com/3591429/10553/i/450/depositphotos_105533378-stock-photo-business-corporate-workers.jpg",
        tag: ["All","Frontened"],
        gitUrl:"https://github.com/Rimsha-Adnan/student-management-system",
        previewUrl:"/",
    },
    {
        id : 4,
        title : "Todo List",
        description:"Project 4 description",
        image: "https://hbr.org/resources/images/article_assets/2023/09/A_Sep23_12_To-do-list_1452723744.jpg",
        tag: ["All","Frontened"],
        gitUrl:"https://github.com/Rimsha-Adnan/to-do-list",
        previewUrl:"/",
    },
    {
        id : 5,
        title : "My Bank",
        description:"Project 5 description",
        image: "https://img.freepik.com/premium-vector/bank-office-interior-professional-banking-service-finance-manager-clients-credit-deposit-consult-management-vector-concept_176411-627.jpg",
        tag: ["All","Frontened"],
        gitUrl:"https://github.com/Rimsha-Adnan/my-bank",
        previewUrl:"/",
    },
    {
        id : 6,
        title : "Countdown Timer",
        description:"Project 6 description",
        image: "https://theroundpie.com/assets/images/blog/Clock-Hourglass.jpg",
        tag: ["All","Frontened"],
        gitUrl:"https://github.com/Rimsha-Adnan/countdown-timer",
        previewUrl:"/"
    }
]

function ProjectSection() {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate:{ y: 0, opacity: 1 },

    };
  return (
    <section >
      <h2 className='text-center text-4xl text-white font-bold  mt-4 mb-8 md:mb-12 '>
        My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'> 
            <ProjectTag
            onClick={handleTagChange}
            name="All" 
            isSelected={tag === "All"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Frontened" 
            isSelected={tag === "Frontened"}
            />
        </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => 
        <motion.li
        key={index}
         variants={cardVariants} 
         initial="initial" 
         animate={isInView ? "animate" : "initial"}
         transition={{ duration: 0.3, delay: index * 0.4 }}
         >
            <ProjectsCard
            key={project.id} 
            title={project.title}
            description={project.description}
            imgUrl={project.image} 
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
         </motion.li>
         )}
         </ul>
    </section>
  );
}

export default ProjectSection;
