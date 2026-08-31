import React from "react";
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
    <img
      src={profileImage}
      alt="Portrait of Shina Rose Dsouza"
      className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl ring-4 ring-white/20"
      onError={() => setImgFailed(true)}
    />
  );
}
