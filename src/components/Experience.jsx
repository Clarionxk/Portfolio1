import React from "react";

import google from "../assets/google.png";
import ai from "../assets/ai.png";
import social from "../assets/social.png";
import taask from "../assets/taask.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import trello from "../assets/trello.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: google,
      title: "Google Suit",
      style: "shadow-green-500",
    },
    {
      id: 2,
      src: ai,
      title: "AI Prompt Engineering",
      style: "shadow-green-200",
    },
    {
      id: 3,
      src: social,
      title: "Social Medai Marketing",
      style: "shadow-blue-800",
    },
    {
      id: 4,
      src: taask,
      title: "AI Automation",
      style: "shadow-gray-600",
    },
    {
      id: 5,
      src: trello,
      title: "Trello",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white  pt-60">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-3 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;