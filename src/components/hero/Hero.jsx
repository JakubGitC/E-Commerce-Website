import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const Hero = () => {
  const transitoion = { durtaion: 3, type: "spring" };
  return (
    <div className={css.container}>
      <div className={css.h_sides01}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>Seedily say has suitable disposal and boy</span>
        </div>
      </div>

      <div className={css.wrapper}>
        <img src={HeroImg} alt="" width={600} />
        <motion.div
          initial={{ bottom: "20rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.blueCircle}
        ></motion.div>
        <div className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

      <div className={css.h_side02}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};
export default Hero;
