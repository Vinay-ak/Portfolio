
// Components

import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: "/images/Project-1.png",
    title: "College Event Portal",
    tags: ["MERN", "Web Development"],
    projectLink: "https://github.com/Vinay-ak/College-Event-Portal",
  },
  {
    imgSrc: "/images/Project-2.png",
    title: "Kisan Seva",
    tags: ["eCommerce", "Web Development"],
    projectLink: "",
  },
  {
    imgSrc: "/images/Project-3.png",
    title: "Fast Charge",
    tags: ["Shell Scripting", "AOSP"],
    projectLink: "https://github.com/Vinay-ak/Fast-Charge",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Personal Portfolio",
    tags: ["Web-Design", "ReactJS"],
    projectLink: "https://github.com/Vinay-ak/Portfolio",
  },
//   {
//     imgSrc: "/images/project-5.jpg",
//     title: "",
//     tags: [""],
//     projectLink: "",
//   },
//   {
//     imgSrc: "/images/project-6.jpg",
//     title: "",
//     tags: [""],
//     projectLink: "",
//   },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">
            My portfolio highlights
            </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                <ProjectCard 
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                />
            ))}
            
        </div>
      </div>
    </section>
  );
};

export default Work;