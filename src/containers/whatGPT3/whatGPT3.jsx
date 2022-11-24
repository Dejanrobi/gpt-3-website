import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const whatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 gradient__bg section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <div className="gpt3__features-container__feature-title gpt3-head-feat">
          <div />
          <h1>What is GPT-3</h1>
        </div>

        <div className="gpt3-container_feature-text">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </div>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text possibilities__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default whatGPT3;
