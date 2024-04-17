import React from "react";
import BG from "../images/background.jpg";

const NotFound = () => {
  return (
      <div className="image" style={{ backgroundImage: `url('${BG}')` }}>
        <div className="error-content">
          <h1>404 PAGE NOT FOUND!</h1>
          <h5>
            The page you are looking for can not be located. <br/> Please check to
            make sure there are no typos and try again.
          </h5>
        </div>
    </div>
  );
};

export default NotFound;
