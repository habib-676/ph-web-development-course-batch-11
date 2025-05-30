import React from "react";
import { motion } from "motion/react";
import team1pic from "../../assets/team/team-1.jpg";
import team2pic from "../../assets/team/team-2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1pic}
            animate={{ y: [100, 50, 100] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="max-w-sm rounded-t-4xl rounded-br-4xl shadow-2xl border-blue-500 border-l-8 border-b-8"
          />
          <motion.img
            src={team2pic}
            animate={{ x: [150, 80, 150] }}
            transition={{ delay: 4, duration: 10, repeat: Infinity }}
            className="w-80 rounded-t-4xl rounded-br-4xl shadow-2xl border-blue-500 border-l-8 border-b-8"
          />
        </div>
        <div className="flex-1">
          <motion.h1 className="text-5xl font-bold">
            Remote Jobs News!
          </motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
