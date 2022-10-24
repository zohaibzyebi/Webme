import emailjs from "@emailjs/browser";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import contactImage from "../../assests/images/contact.svg";
import Spinner from "../Reusable/Spinner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJSSERVICEID,
        process.env.NEXT_PUBLIC_EMAILJSTEMPLATEID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJSPUBLICKEY
      )
      .then(
        (result) => {
          e.target.reset();
          setLoading(false);
          toast.success("Successfully sent the message, thank you.");
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg items-center my-10"
      id="contact"
    >
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Lets talk about everything!
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="text-gray-700 mt-8 flex items-center mr-5">
              <MailIcon className="h-5 w-5 mr-2" />
              webme@webmedigital.com
            </div>
            <div className="text-gray-700 mt-8 flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              0567295834
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Image src={contactImage} alt="" className="move1" />
        </div>
      </div>
      <div className="">
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
          <input
            className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="mt-8">
          <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
          <textarea
            required
            name="message"
            className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mt-8">
          <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline flex justify-center">
            {loading ? (
              <Spinner />
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
