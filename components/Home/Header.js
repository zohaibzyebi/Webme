import Typewriter from "typewriter-effect";

import Button from "../Reusable/Buttons";

export default function Header() {
  return (
    <div className="relative bg-white overflow-hidden" id="header">
      <div className="">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">WEBME</span>
                <span className="block text-indigo-600 xl:inline">
                  <Typewriter
                    options={{
                      strings: [
                        "Website",
                        "SEO",
                        "Microsoft 365",
                        "One Drive",
                        "Microsoft Teams",
                        "Cloud Computing",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>

              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Enabling Modern Workplace for you. Drive Growth with Convenience
              </p>

              <div className="mt-5 flex justify-center lg:justify-start">
                <Button>START MY FREE TRIAL</Button>
                <Button className="ml-3">Explore</Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:top-0 lg:w-1/2 p-3">
        {/* <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={logo}
          alt=""
        /> */}
        <video
          src="https://cdn.pixabay.com/vimeo/377621693/News%20-%2029835.mp4?width=640&expiry=1660218738&hash=5e8e9cc2435489a9d3f5aeac7cfbe274a55202b9"
          autoPlay
          muted
          preload
          className="w-full h-full"
        ></video>
      </div>
    </div>
  );
}
