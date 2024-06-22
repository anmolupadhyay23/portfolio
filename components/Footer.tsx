import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Unlock the secret <span className="text-purple">chamber</span> of online dominance!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Unlock the hidden potential within your goals – let's chat pixel by pixel!
        </p>
        <a href="mailto:anmolupadhyay23@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
                  href={info.link} // Use an anchor tag for accessibility and routing
                  target="_blank" // Open link in a new tab for better user experience
                  rel="noopener noreferrer">
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
              </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
