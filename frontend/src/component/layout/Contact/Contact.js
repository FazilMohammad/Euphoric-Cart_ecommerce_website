import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:fazil.19dbca@cmr.edu.in">
        <Button>Contact: sharmila.19dbca@cmr.edu.in
                         Prerana.19dbca@cmr.edu.in
        </Button>
      </a>
    </div>
  );
};

export default Contact;
