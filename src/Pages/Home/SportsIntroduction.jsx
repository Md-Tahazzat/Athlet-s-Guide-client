import React from "react";
import YouTube from "react-youtube";

const SportsIntroduction = () => {
  const opts = {
    height: "900",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      disablekb: 1,
      mute: 1,
      fs: 0,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      loop: true,
    },
  };
  return (
    <div className="relative  max-h-[200px] md:max-h-[750px] overflow-hidden my-20">
      <YouTube
        className="w-full h-full -mt-[350px] md:-mt-20"
        videoId="o2VoppIEn88"
        opts={opts}
      />
      ;
      <div className="absolute top-0 left-0 md:text-4xl md:font-extrabold text-xl w-full h-full bg-slate-100/10 flex items-center justify-center text-slate-900 md:text-black fot-bold">
        Where Passion Meets Performance
      </div>
    </div>
  );
};

export default SportsIntroduction;
