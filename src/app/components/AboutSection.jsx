"use client";
import React, { useTransition , useState} from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title:"Skills",
    id:"skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Typescript</li>
        <li>Javascript</li>
        <li>Html</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Undergraduation</li>
        
      </ul>
    )
  },
  {
    title:"Experience",
    id:"experience",
    content: (
      <ul className='list-disc pl-2'>
        <li>Internship at CodeAlpha</li>

      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ isPending, startTrasition] = useTransition();

  const handleTabChange = (id) => {
    startTrasition(() => {
      setTab(id);
    });
  };
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 items-center gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16  '>
        <img src="https://img.freepik.com/premium-photo/desktop-image-background-copy-space_1179130-544807.jpg?uid=R164634271&ga=GA1.2.1220187762.1722952442&semt=ais_hybrid" width={500} height={500}/>
        <div className='mt-4 md:mt-0  text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>I'm  a dedicated Frontend Developer
             with a solid foundation in JavaScript, HTML, and CSS.
              I specialize in creating visually beautiful and responsive web interfaces
              with tools such as Tailwind CSS. I'm also skilled at building dynamic,
              component-driven applications with React. I'm currently immersed in the realm of Next.js,
              honing my skills with this powerful framework in order to create more efficient,
              scalable applications. I'm enthusiastic about learning 
              new technologies and continually honing my skills to build seamless user experiences
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} 
            active ={tab === "skills"}
            >
              {" "}
              Skills{" "}

              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")}
               active ={tab === "education"}
               >
              {" "}
              Education{" "}

              </TabButton>
              <TabButton selectTab={() => handleTabChange("experience")}
               active ={tab === "experience"}
               >
              {" "}
              Experience{" "}

              </TabButton>
            
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

