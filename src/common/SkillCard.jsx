import React from "react";

function SkillCard({ img, Skill }) {
  return (
    <div>
      <span>
        <img src={img}></img>
        <p>{Skill}</p>
      </span>
    </div>
  );
}

export default SkillCard;
