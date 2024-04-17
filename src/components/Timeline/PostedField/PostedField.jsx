import React from "react";
import "./PostedField.css";
export const PostedField = () => {
  return (
    <div className="postedField">
      <div className="postedFieldWrapper">
        <div className="postedFieldTextarea">
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="postedFieldPerson"
          />
          <input
            type="text"
            className="postedFieldInput"
            placeholder="今どんな気持ち？"
          />
        </div>
        <hr className="postedFieldHr" />
        <div className="iconArea">piyo</div>
      </div>
    </div>
  );
};
