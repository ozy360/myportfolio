// import { motion } from "framer-motion";
import Animate from "../Animate";

const TECH_STACK = [
  { image: "/html5", tech: "HTML" },
  { image: "/css3", tech: "CSS" },
  { image: "/javascript", tech: "JavaScript" },
  { image: "/typescript", tech: "TypeScript" },
  { image: "/react", tech: "React" },
  { image: "/nodejs", tech: "Node.js" },
  { image: "/tailwind", tech: "Tailwind CSS" },
  { image: "/framer", tech: "Framer Motion" },
  { image: "/mongodb", tech: "MongoDB" },
];

// const ANIMATION_CONFIG = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.3 },
//   transition: { duration: 0.5 },
// };

export default function TechStack() {
  return (
    <div className="container">
      <div className="heading text-left heading">Tech Stack</div>
      <div className="max-w-4xl mx-auto">
        {/* <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2> */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((tech) => (
            // <motion.div
            //   key={tech.tech}
            //   {...ANIMATION_CONFIG}
            //   transition={{
            //     ...ANIMATION_CONFIG.transition,
            //     delay: index * 0.1,
            //   }}
            //   className="flex flex-col items-center p-4 rounded-lg card bg-base-100 shadow-sm border transition-all duration-300 bg-white"
            // >
            <Animate>
              <div
                key={tech.tech}
                className="flex flex-col items-center card bg-transparent shadow-none border break-inside-avoid p-2 rounded-lg"
              >
                <img
                  src={`${tech.image}.png`}
                  alt={`${tech.tech} logo`}
                  className="w-12 h-12 mb-3 object-contain"
                />
                <span className="text-sm font-medium text-center text-gray-700">
                  {tech.tech}
                </span>
              </div>
            </Animate>
            // </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
