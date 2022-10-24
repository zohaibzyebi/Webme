import Image from "next/image";
import image from "../../assests/images/about.svg";
import Button from "../Reusable/Buttons";

const About = () => {
  return (
    <div className="flex items-start justify-around flex-wrap" id="about">
      <div className="w-full md:w-1/2 p-5">
        <Image src={image} className="move1" alt="" />
      </div>
      <div className="w-full md:w-1/2 p-5 pt-0">
        <div className="bg-blue-50 text-blue-700 font-bold px-5 py-2 rounded-lg w-28">About Us</div>
        <h1 className="text-4xl font-bold text-indigo-600 my-5">
          WEBME is Information Technology Consultancy
        </h1>
        <p className="my-5">
          WEBME can help you in implementing Modern Work Place Environment for your Business.. Do
          you know that study shows that those Business doesn&apos;t embrace or adopt Modern
          Technology will be Out from the Business within a Year or Two... <br /> <br />
          With WEBMEDIGITAL Package, it can modernize your business and guide to your Gateway to
          Digital Growth.. Specialized in Automation, Management and Work from Anywhere Technology.
          Yes WEBME can be your Virtual Companion, In the Digital World...
        </p>
        <Button>View Services</Button>
      </div>
    </div>
  );
};

export default About;