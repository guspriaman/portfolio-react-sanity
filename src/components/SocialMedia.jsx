import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.instagram.com/guspriaman/">
        <FaInstagram />
      </a>
    </div>
    <div>
      <a href="https://github.com/guspriaman">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/guspriaman-wrs-657a04228/">
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
