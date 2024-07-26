import logo from "@/public/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/public/assets/social-x.svg";
import SocialInsta from "@/public/assets/social-insta.svg";
import SocialLinkedIn from "@/public/assets/social-linkedin.svg";
import SocialPin from "@/public/assets/social-pin.svg";
import SocialYoutube from "@/public/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-2 before:h-full before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} alt="SaaS Logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Customers</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 CV Labs, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
