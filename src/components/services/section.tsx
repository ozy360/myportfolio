import Animate from "../Animate";

export default function Services() {
  const SERVICES_OBJ = [
    {
      image: (
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
          className="lucide lucide-app-window-icon lucide-app-window"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M10 4v4" />
          <path d="M2 8h20" />
          <path d="M6 4v4" />
        </svg>
      ),
      name: "Custom Web App Development",
      description:
        "Build responsive, high-performance web applications using React and Next.js — tailored to your specific business or product needs.",
    },
    {
      image: (
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
          className="lucide lucide-tablet-smartphone-icon lucide-tablet-smartphone"
        >
          <rect width="10" height="14" x="3" y="8" rx="2" />
          <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
          <path d="M8 18h.01" />
        </svg>
      ),
      name: "Custom Mobile App Development",
      description:
        "Develop cross-platform mobile apps with React Native, delivering a smooth and consistent experience on both iOS and Android devices.",
    },
    {
      image: (
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
          className="lucide lucide-gauge-icon lucide-gauge"
        >
          <path d="m12 14 4-4" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
        </svg>
      ),
      name: "Performance Optimization & Migrations",
      description:
        "Improve loading speed, SEO, and overall user experience — or migrate existing web and mobile projects to modern frameworks like Next.js or React Native.",
    },
  ];

  return (
    <>
      <div className="container" id="services">
        <div className="heading">Services</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0">
          {SERVICES_OBJ.map((x) => (
            <Animate key={x.name || x.description}>
              <div className="card bg-transparent shadow-none border break-inside-avoid p-2 rounded-lg h-max md:h-[220px] lg:h-[250px]">
                <div className="card-body p-2">
                  <div className="gap-4">
                    <div>{x.image}</div>
                    <div className="mt-4">
                      <span className="font-semibold text-xl">{x.name}</span>
                      <div className="mt-2">{x.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          ))}
        </div>
        <div id="projects"></div>
      </div>
    </>
  );
}
