import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full max-h-[800px]"
      >
        <SwiperSlide className="relative">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/KVpCf60/pro-Golf.jpg"
            alt=""
          />
          <div className="absolute hidden md:block top-10 left-10 text-white max-w-xl  bg-slate-400/40 p-5 rounded-xl">
            <p className="text-left">
              In golf, players use clubs to hit balls into a series of holes on
              a course. Players with the fewest successful strokes are declared
              winners. The game was established in the Netherlands in mid-16th
              century.
            </p>
            <p className="mt-2 text-left">Year of invention: 1764</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/0jk3S1Z/pro-cricket.jpg"
            alt=""
          />
          <div className="absolute hidden md:block top-10 left-10 text-white max-w-xl bg-slate-500/40 p-10 rounded-xl">
            <p className="text-left ">
              Cricket is played by two teams of 11 with a bat and ball. One
              player on each team acts as captain. Matches can range from
              informal weekend afternoon activities on village greens to
              top-level international contests spread over five days.
            </p>
            <p className="mt-2 text-left">Year of invention: 1611</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/gmjQSRY/pro-football.png"
            alt=""
          />
          <div className="absolute hidden md:block top-10 left-10 text-white max-w-xl  bg-slate-500/50 p-5 rounded-xl">
            <p className="text-left">
              Basketball is played between two teams of five players each. Each
              team tries to score by tossing the ball through the opponent’s
              elevated horizontal hoop and net called a basket. It is the only
              major game of American origin.
            </p>
            <p className="mt-2 text-left">Year of invention: 1891</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/3kqbw7S/pro-football.jpg"
            alt=""
          />
          <div className="absolute hidden md:block top-10 left-10 text-white max-w-xl  bg-slate-600/60 p-5 rounded-xl">
            <p className="text-left">
              Soccer is arguably the most-watched sport in the world in 2023. It
              is a game involving two teams of 11 who try to move a ball into
              the opponent’s goal without using hands or arms. It is the world’s
              most popular ball game based on the number of participants and
              spectators.
            </p>
            <p className="mt-2 text-left">Year of invention: 1863</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/yPYqtYN/pro-volleball.jpg"
            alt=""
          />
          <div className="absolute hidden md:block top-10 left-10 text-white max-w-xl  bg-slate-600/50 p-5 rounded-xl">
            <p className="text-left">
              Volleyball is popular in different parts of the world. Two teams
              of six each use their hands to bat a ball back and forth over a
              high net. Each team tries to score points by grounding a ball on
              the other team's court under organised rules.
            </p>
            <p className="mt-2 text-left">Year of invention: 1895</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/MgFX0Tq/mixed-Marsal-art.jpg"
            alt=""
          />
          <div className="absolute hidden md:block top-8 right-8 text-white max-w-xl  bg-slate-700/60 p-5 rounded-xl">
            <p className="text-left">
              Mixed martial arts incorporate techniques from judo, boxing,
              wrestling, Muay Thai, jujitsu, and karate. MMA is one of the
              world’s fastest-growing spectator sports in the early 21st
              century. MMA fighters compete in a ring or a fenced area. They
              fight using padded fingerless gloves but do not wear shoes.
            </p>
            <p className="mt-2 text-left">Year of invention: 648 BCE</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/P1ZRPDD/Baseball.jpg"
            alt=""
          />
          <div className="absolute hidden md:block top-8 right-8 text-white max-w-xl  bg-slate-700/60 p-5 rounded-xl">
            <p className="text-left">
              Baseball is played with a bat, ball, and gloves. Two teams of nine
              players each compete on a field with four white bases laid out in
              a diamond. The game's rules closely resemble rules for rounders.
            </p>
            <p className="mt-2 text-left">Year of invention: 1846</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/7QW9dFG/American-football.jpg"
            alt=""
          />
          <div className="absolute hidden md:block top-8 right-8 text-white max-w-xl  bg-slate-800/60 p-5 rounded-xl">
            <p className="text-left">
              Formula 1 is also known as Grand Prix racing. The game involves
              automobile racing on closed highways or other courses. The
              Fédération Internationale de l’Automobile (FIA) sets the
              specifications for all racing-car classes.
            </p>
            <p className="mt-2 text-left">Year of invention: 1869</p>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
