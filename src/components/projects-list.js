import iwdsummit from "../assets/iwdsummit.jpg";
import eportfolio from "../assets/eportfolio.jpg";
import ColorSnag from "../assets/colorsnag.png";
import JobJot from "../assets/jobjot.png";
import HackDearborn from "../assets/hackdearborn.png";
import NarcanVM from "../assets/narcan.png";
import MyPass from "../assets/my-pass.png";

const projects = [
  {
    title: "NarcanVM",
    description:
      "Developed application designed to simplify narcan status reporting.",
    imageUrl: NarcanVM,
    demoLink: "https://www.narcanvm.com/",
    videoLink: "https://youtu.be/bzhXrEL1iV8",
  },
  {
    title: "MyPass",
    description:
      "Developed application designed to store and manage sensitive data.",
    imageUrl: MyPass,
    videoLink: "https://youtu.be/TgCBUT-Td08?si=UCgAGcke-WvAeFib",
  },
  {
    title: "ColorSnag",
    description:
      "Developed a chrome extension designed to simplify color selection and palette making. ",
    imageUrl: ColorSnag,
    codeLink: "https://github.com/hebz26/ColorSnag",
    videoLink: "https://www.youtube.com/watch?v=OujYJ08Vda4",
  },
  {
    title: "JobJot",
    description:
      "Developed web application designed to help manage and track job applications.",
    imageUrl: JobJot,
    codeLink: "https://github.com/hebz26/JobJot",
    videoLink: "https://www.youtube.com/watch?v=B0Z6HAQuUs4",
  },

  {
    title: "IWD Summit",
    description:
      "Helped design & build website for the Detroit International Women's Day Summit 2024.",
    imageUrl: iwdsummit,
    demoLink: "https://www.iwdsummit.com/",
  },
  {
    title: "Hack Dearborn",
    description: "Helped design & build website for Hack Dearborn 2024.",
    imageUrl: HackDearborn,
    demoLink: "https://www.hackdearborn.org/",
  },
  {
    title: "My ePortfolio",
    description:
      "I developed this portfolio using React and TailwindCSS. Check out the code!",
    imageUrl: eportfolio,
    codeLink: "https://github.com/hebz26/portfolio-version2",
  },
];

export default projects;
