import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your Problem</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
      <div>
      <p>
        We are your one and only solution to the tech problems you face every
        day. We are leading tech company whose aim is to increase the problem
        solving ability in children.
      </p>
      </div>
      </div>

      <div className="home3" id="about">
        <div>
        <h1>Who we are?</h1>
        <p>Rahul Sharma is a talented and diligent B.Tech student with a passion for technology and innovation. With a strong academic background, he consistently demonstrates a keen interest in expanding his knowledge and skill set in the field of engineering.

Rahul is known for his exceptional problem-solving abilities, analytical mindset, and meticulous attention to detail. He possesses a deep understanding of various engineering principles and exhibits a natural aptitude for applying theoretical concepts to practical situations.

Driven by curiosity and a desire to make a meaningful impact, Rahul actively seeks out new challenges and projects that allow him to showcase his creative thinking and technical expertise. He thrives in collaborative environments and enjoys working with diverse teams to brainstorm ideas, develop solutions, and achieve common goals.<br /> Rahul's dedication to continuous learning, combined with his strong work ethic, positions him as a promising and ambitious individual. With a commitment to excellence and a genuine passion for engineering, he is poised to make a significant contribution to the field and leave a lasting impact on society.</p>
      </div>
      </div>
      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                  animationDelay:"0.3s",
                }}>
            <AiFillGoogleCircle />
            <p>Google</p>
                </div>
                <div style={{
                  animationDelay:"0.5s",
                }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
                </div>
                <div style={{
                  animationDelay:"0.7s",
                }}>
            <AiFillInstagram />
            <p>Instagram</p>
                </div>
                <div style={{
                  animationDelay:"0.9s",
                }}>
            <AiFillYoutube />
            <p>Youtube</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
