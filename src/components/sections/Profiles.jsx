import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiCodechef, SiHackerearth } from "react-icons/si";

const socialProfiles = [
  {
    name: "GitHub",
    url: "https://github.com/divyadharshan",
    icon: <FaGithub className="text-4xl mb-2" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/divyadharshan-s",
    icon: <FaLinkedin className="text-4xl mb-2" />,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/divyadharshan_s",
    icon: <FaInstagram className="text-4xl mb-2" />,
  },
];

const codingProfiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/divyadharshan_s",
    icon: <SiLeetcode className="text-4xl mb-2" />,
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/user/divdharshan18/",
    icon: <SiGeeksforgeeks className="text-4xl mb-2" />,
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/divyadharshan18",
    icon: <SiHackerrank className="text-4xl mb-2" />,
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/divyadharshan1",
    icon: <SiCodechef className="text-4xl mb-2" />,
  },
  {
    name: "HackerEarth",
    url: "https://www.hackerearth.com/@divyadharshan12",
    icon: <SiHackerearth className="text-4xl mb-2" />,
  },
];

export const SocialProfiles = () => (
  <section className="flex flex-col items-center py-8" id="social-profiles">
    <h2 className="text-3xl font-bold mb-8 text-center">
      <span>📱</span>{" "}
      <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Social Media
      </span>
    </h2>
    <div className="flex flex-wrap gap-8 justify-center">
      {socialProfiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-lg hover:text-blue-400 transition-colors"
        >
          {profile.icon}
          {profile.name}
        </a>
      ))}
    </div>
  </section>
);

export const CodingProfiles = () => (
  <section className="flex flex-col items-center py-8" id="coding-profiles">
    <h2 className="text-3xl font-bold mb-8 text-center">
      <span>💻</span>{" "}
      <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Coding Platforms
      </span>
    </h2>
    <div className="flex flex-wrap gap-8 justify-center">
      {codingProfiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-lg hover:text-blue-400 transition-colors"
        >
          {profile.icon}
          {profile.name}
        </a>
      ))}
    </div>
  </section>
); 