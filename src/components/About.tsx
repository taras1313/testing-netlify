import React from "react";
// TSC_COMPILE_ON_ERROR=true // try to keep smth with implicit any
// ESLINT_NO_DEV_ERRORS=true // try to keep smth unused
export const About = ({ asd }: { asd?: string }) => (
  <div>
    <div style={{ background: "white" }}>
      <iframe
        src="https://ndom91.github.io/react-timezone-select/"
        frameBorder="0"
        width="700px"
        height="700px"
      ></iframe>

      {asd}
    </div>
  </div>
);
// export const About = ({ asd }: { asd?: string }) => <div>about</div>;
