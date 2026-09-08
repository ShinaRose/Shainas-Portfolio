import React from "react";
import { motion } from "framer-motion";
import { profileImage } from "../data/portfolioData.js";

export default function ProfilePhoto() {
  const [imgFailed, setImgFailed] = React.useState(false);

  if (!profileImage || imgFailed) {
    return (
      <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-rose-100 text-3xl font-extrabold text-rose-900 shadow-xl ring-4 ring-white/20">
        SD
      </div>
    );
  }

  return (
    <motion.img
      src={profileImage}
      alt="Portrait of Shina Rose Dsouza"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl ring-4 ring-white/20"
      onError={() => setImgFailed(true)}
    />
  );
}
