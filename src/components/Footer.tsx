import React from "react";
import "../styles/Footer.css";

interface prop {
  location: string;
}

export const Footer: React.FC<prop> = (props) => {
  return (
    <footer
      id={props.location.slice(0, 6) === "/user/" ? "footerUser" : "footer"}
    >
      <p className="footerText">
        &copy; COPYRIGHT 2021{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/andrea-habib-730941198/"
        >
          Andrea Habib
        </a>{" "}
        &{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/giannagalard/"
        >
          Gianna Galard
        </a>{" "}
        :-)
      </p>
    </footer>
  );
};
