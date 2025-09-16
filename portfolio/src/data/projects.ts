import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Encrypted messaging",
    href: "/projects",
    tags: ["Bash", "Openssl", "linux"],
    image: {
      LIGHT: "/images/projects/secure messaging.png",
      DARK: "/images/projects/secure messaging.png",
    },
  },
  {
    index: 1,
    title: "Gamebuild",
    href: "/projects",
    tags: ["C#", "unity"],
    image: {
      LIGHT: "/images/projects/gamebuild.png",
      DARK: "/images/projects/gamebuild.png",
    },
  },
  {
    index: 2,
    title: "supmap app",
    href: "/projects",
    tags: ["Angular", "ionic", "axios", "node", "python", "mongoDB"],
    image: {
      LIGHT: "/images/projects/supmaaap.png",
      DARK: "/images/projects/supmaaap.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Supmap app",
    favicon: "/images/projects/SUPMAP1.png",
    imageUrl: [
      "/images/projects/supmapweb.png",
      "/images/projects/supmapweb1.png",
      "/images/projects/supmapweb3.png",
    ],
    description:
      "SupMap is a mobile application that calculates the fastest routes by taking into account user-reported incidents. It allows users to share their real-time location with a friend, enabling live tracking on the map. The app offers advanced route management, including access to past itineraries and the ability to confirm or reject reported incidents.Users can view real-time traffic conditions as well as nearby incidents. On the administrative side, admins have the ability to manage reports, issue warnings to users, and ban accounts if necessary.The backend is developed in Node.js, the frontend uses Angular with the Ionic framework, and Python is used for data processing.This was a group project.",
    sourceCodeHref: "https://github.com/donialaajili/supmap",
  },
  {
    name: "Towerdefense",
    favicon: "/images/projects/build.png",
    imageUrl: [
      "/images/projects/gamebuildwelcome.png",
      "/images/projects/gamebuildmenu.png",
      "/images/projects/gamebuild.png",
    ],
    description:
      "This is a strategic Tower Defense game where players must defend their base from waves of enemies by strategically placing and upgrading various types of towers. Each tower has unique abilities, strengths, and attack patterns that must be used wisely to survive increasingly difficult levels.The game includes a multiplayer mode, allowing players to team up or compete against each other in real time. Through online matchmaking or private lobbies, players can coordinate strategies, share resources, and face enemies together — or challenge each other in versus modes.The project is developed using Unity for the game engine and C# for scripting, ensuring smooth gameplay, responsive controls, and a dynamic real-time multiplayer experience.This was a group project.",
    sourceCodeHref:
      "https://github.com/donialaajili/Tower-Defence-3D-Unity-Final-Project-SUPINFO",
  },
  {
    name: "Secure messaging",
    favicon: "/images/projects/crypto.png",
    imageUrl: [
      "/images/projects/secure messaging.png",
      "/images/projects/securee.png",
      "/images/projects/user.png",
      "/images/projects/certificats.png",
      "/images/projects/detail.png",
    ],
    description:
      "An interactive command-line tool for secure messaging using Bash scripts and OpenSSL. Users can create new user identities, send and receive encrypted messages, and manage digital certificates. Each message is encrypted with the recipient’s public key and can only be decrypted with their private key. The system allows viewing the list of users, their certificates, and previously created messages.",
    sourceCodeHref: "",
  },
  {
    name: "LSF Real-Time Interpretation Software (Python – In Progress)",
    favicon: "/images/projects/logos/lsf.jpeg",
    imageUrl: ["/images/projects/logiciel1.png"],
    description:
      "This ongoing Python-based project is designed to enhance communication between hearing-impaired individuals and hearing participants during video conferences. It works both ways:When the hearing-impaired person uses sign language, the system uses gesture recognition to interpret the signs and convert them into spoken voice, allowing the hearing participant to understand in real time.At the same time, when the hearing participant speaks, the software performs real-time speech recognition and translates the spoken content into French Sign Language (LSF), which is then displayed through a 3D avatar.",
    sourceCodeHref: "https://github.com/donialaajili/assistant-lsf",
  },
  {
    name: "secure network",
    favicon: "/images/projects/logos/reseau 3.png",
    imageUrl: [
      "/images/projects/reseau1.drawio.png",
      "/images/projects/vpn.png",
      "/images/projects/vpn1.png",
    ],
    description:
      "The objective is to design a secure network topology according to the company's needs.We have four sites (Issy-Les-Moulineaux, Store, Toulon, Saint-Denis). Each site will have different connectivity and security requirements.Security best practices must be implemented, such as firewalls, IDS (Intrusion Detection System), VPN, proxy, network segmentation, and more.The architecture must be scalable to accommodate the company's future needs.Since the company is ISO 27001 certified, security measures must comply with the requirements of this standard. This was a group project.",
    sourceCodeHref: "",
  },
  {
    name: "Secure AD",
    favicon: "/images/projects/logos/ad 4.png",
    imageUrl: ["/images/projects/ad 2.png", "/images/projects/image ad.png"],
    description:
      "The goal of this project was to learn how to manage Active Directory (AD).\n\
I set up four virtual machines: two clients, one domain controller (DC), and one file server.\n\
On the domain controller, I configured Active Directory and linked each VM to a different physical site (Issy, Saint-Denis, Toulon).\n\
I created groups, users, and administrators.\n\
I also configured a Group Policy Object (GPO) that enforces a screen lock after 8 minutes of inactivity for all registered users.\n\
\n\
Remaining tasks include:\n\
- Setting additional GPO policies for permissions and security.\n\
- Configuring the file server.\n\
\n\
Access to the file server is restricted: only the Paris site has access. A shared folder has been created specifically for them.\n\
\n\
This was a group project.",
    sourceCodeHref: "",
  },
];
