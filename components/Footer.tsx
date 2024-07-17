import Link from "next/link";
import React, { Component } from "react";
import LinkedinIcon from "./icons/LinkedinIcon";
import TelegramIcon from "./icons/TelegramIcon";
import MailIcon from "./icons/MailIcon";
import GithubIcon from "./icons/GithubIcon";

function SocialMediaLink({
  name,
  link,
  children,
}: {
  name: string;
  link: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {children} {name}
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <p>
            Hope you found what you were looking for! <br />
            Don{"'"}t hesitate to reach out for any enquiry.
          </p>
          <p>ⓒ Sidonie Bouthors 2024. All rights reserved</p>
        </div>

        <div className="footer-col">
          <h2>Contact Me</h2>
          <ul className="unstyled-list">
            <SocialMediaLink
              name="Linkedin"
              link="https://www.linkedin.com/in/sidonie-bouthors/"
            >
              <LinkedinIcon className="footer-icon" />
            </SocialMediaLink>
            <SocialMediaLink name="Telegram" link="https://t.me/sidonie_b">
              <TelegramIcon className="footer-icon" />
            </SocialMediaLink>
            <SocialMediaLink name="Email" link="mailto:sidonie@bouthors.com">
              <MailIcon className="footer-icon" />
            </SocialMediaLink>
            <SocialMediaLink
              name="GitHub"
              link="https://github.com/SidonieBouthors"
            >
              <GithubIcon className="footer-icon" />
            </SocialMediaLink>
          </ul>
        </div>
      </div>
    </footer>
  );
}
