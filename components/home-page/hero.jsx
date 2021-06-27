import Image from "next/image";
import { hero, image } from "./hero.module.css";

const Hero = () => {
  return (
    <section className={hero}>
      <div className={image}>
        <Image
          src="/images/site/aryu.jpg"
          alt="An image showing Aryan"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi, I'm Aryan</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nihil illo
        quisquam minus excepturi ipsum?
      </p>
    </section>
  );
};

export default Hero;
