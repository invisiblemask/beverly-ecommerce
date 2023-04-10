/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div>
      <div className="about">
        <div className="about-wrapper">
          <div className="about-header">
            <span>ABOUT</span>
            BENAYA
          </div>
          <div className="about-desc">
            “Be Naya is a labour of love for the classy and fearless woman, our
            mission is to bring empowerment to every customer through inspiring
            brand choices and premium yet effortless fashion. We want you to
            feel good all the time! We want you to Be Everything!” <br /> <br />{" "}
            – Beverly Naya (Actress, Producer, Style Icon and Founder of Be
            Naya)
          </div>
          <div className="about-img">
            <img src="/images/beverly-1.jpeg" alt="" />
          </div>
        </div>
        <div className="about-bg-img">
          <img src="/images/Slide-3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
