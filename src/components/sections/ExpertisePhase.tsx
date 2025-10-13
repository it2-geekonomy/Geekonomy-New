
import Image from "next/image";

export default function ExpertisePhases() {
    const phases = [
        {
            image: "/images/01.webp",
            title: "Discovery & Analysis",
            description:
                "You can’t brainstorm, much less build, a great solution without first investing in discovery and analysis. Our team burrows into your existing infrastructure to uncover strengths and weaknesses so isn’t wasted during the design and build phase."
        },
        {
            image: "/images/02.webp",
            title: "UI/UX Design",
            description:
                "At its core, UX and UI Design should be elegant, intuitive, and frictionless. With a diverse portfolio of successful design projects to our name, we know how to build solutions that are stylish and aesthetically pleasing - and that help you meet your business goals."
        },
        {
            image: "/images/03.webp",
            title: "Development",
            description:
                "You can’t brainstorm, much less build, a great solution without first investing in discovery and analysis. Our team burrows into your existing infrastructure to uncover strengths and weaknesses so isn’t wasted during the design and build phase.",
        },
        {
            image: "/images/04.webp",
            title: "Testing & QA",
            description:
                "At Geekonomy, the feedback and testing process are transparent. With regular status meetings and routine check-ins by video, email, and chat, we take your ongoing feedback into account every step of the way.",
        },
        {
            image: "/images/05.webp",
            title: "Deployment & Support",
            description:
                "Software/Website release isn’t a single moment; it’s a process. As you roll out what we’ve built, we make sure that the solution works in sync with your existing systems and processes.",
        },
        {
            image: "/images/06.webp",
            title: "Refinement",
            description:
                "Many custom developers take the “love ‘em and leave ’em” approach to their work. They land the contract, do the work and then move on. But with Geekonomy, the developers who build your website or software stay on active standby after its release to optimize & iterate, so that the solution grows with you.",
        },
    ];

    return (
        <div className="bg-black py-6 w-full flex justify-center ">
  {/* Container: max width + horizontal padding */}
  <div className="lg:max-w-[clamp(320px,92%,1380px)] mx-auto  px-6 sm:px-19 md:px-8">
    <h1 className="
    text-[clamp(1.7rem,5.5vw,5rem)]
      sm:text-[clamp(1.8rem,4.88vw,2.19rem)]
           md:text-[clamp(1.8rem,3.8vw,3.4rem)] 
           lg:text-[clamp(1.8rem,2.5vw,2.6rem)]
        font-medium !mt-9 text-center text-white">
      How we build
    </h1>

    {/* Grid: center items in columns */}
    <div className="grid md:grid-cols-2 gap-12 justify-items-center align-middle">
      {phases.map((phase, index) => (
        <div key={index} className="flex flex-col  items-center md:items-start md:justify-start">
          <div className="w-40 h-36 relative">
            <Image
              src={phase.image}
              alt={`Phase ${index + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h3 className="
          text-[clamp(1.8rem,5.7vw,8rem)]
           sm:text-[clamp(1.8rem,4.8vw,4.2rem)]
           md:text-[clamp(1.8rem,4vw,5rem)] 
           lg:text-[clamp(1.8rem,2.5vw,2.6rem)]
            font-medium text-white pb-8 leading-[1.1] ">
            {phase.title}
          </h3>  
          <p className="text-[clamp(1rem,2vw,1rem)] font-light text-justify    text-white">
            {phase.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

    );
}





