import { motion } from "framer-motion";
import ShakeIcon from "../Shake";

export default function Hero() {
  return (
    <div className="container">
      <div className="text-center">
        <>
          <ShakeIcon />
          <div className="md:px-10 lg:px-30">
            Hi, I’m Wokoma Osborn, an avid programmer focused on building sleek
            React and Next.js applications
          </div>
          <div className="flex items-center mt-6 justify-center gap-x-4">
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
                duration: 0.6,
              }}
            >
              <button className="btn btn-neutral text-yellow-300">
                View projects
              </button>
            </motion.div>
            <a href="#footer" className="btn btn-square btn-outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-corner-right-down"
              >
                <path d="m10 15 5 5 5-5" />
                <path d="M4 4h7a4 4 0 0 1 4 4v12" />
              </svg>
            </a>
          </div>
        </>
      </div>
    </div>
  );
}
