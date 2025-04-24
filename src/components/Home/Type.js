import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "B.Tech CSE Student",
          "FullStack Developer",
          "Certified Ethical Hacker",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 5,
      }}
    />
  );
}

export default Type;
