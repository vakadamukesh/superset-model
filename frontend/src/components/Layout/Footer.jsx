import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithZeeshu.</div>
      <div>
        <Link to={"https://www.facebook.com/share/d3cJP6nSkhzvArS9/?mibextid=qi2Omg"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"UC8dJW1RBS82MJc9YEXHBDFg"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"www.linkedin.com/in/mukesh-kumar-b56272247"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/love.from.14?utm_source=qr&igsh=M2lmZHEzbG82emJp"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;