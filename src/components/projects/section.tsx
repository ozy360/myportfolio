import { useState, useEffect, useRef } from "react";
import Animate from "../Animate";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type ProjectType = {
  image: string;
  images: string[];
  name: string;
  description: string;
  link: string;
  repo: string;
  tags: string[];
};

export default function Projects() {
  const [filterData, setFilterData] = useState<ProjectType | null>(null);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const PROJECT_OBJ: ProjectType[] = [
    {
      image: "/theadlines.png",
      images: ["/theadlines2.png", "/theadlines.png", "/theadlines3.png"],
      name: "News Aggregator",
      description:
        "A minimalist real-time news aggregator using the News API. Fetches and displays the latest headlines with a clean interface built using Ejs and Bootstrap.",
      link: "https://theadlines-gamma.vercel.app/",
      repo: "https://github.com/ozy360/theadlines",
      tags: ["Ejs", "Bootstrap", "News API"],
    },
    {
      image: "/onlinestore.png",
      images: [
        "/onlinestore.png",
        "/onlinestore2.png",
        "/onlinestore3.png",
        "/onlinestore4.png",
        "/onlinestore5.png",
      ],
      name: "Online Store",
      description:
        "A fully responsive e-commerce storefront featuring product listings, search functionality, and a shopping cart. Developed with Next.js, styled with Tailwind CSS and shadcn UI.",
      link: "https://online-store-alpha-sage.vercel.app/",
      repo: "https://github.com/ozy360/online-store",
      tags: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      image: "/inventory.png",
      images: ["/inventory.png", "/inventory2.png"],
      name: "Inventory Dashboard",
      description:
        "A single-page admin interface featuring inventory management, charts, and clean UI elements. Built with Next.js, Tailwind CSS, shadcn/ui, and Chart.js.",
      link: "https://inventorydashboard-two.vercel.app/",
      repo: "https://github.com/ozy360/inventorydashboard",
      tags: ["Next.js", "Chart.js", "Tailwind CSS"],
    },
    {
      image: "/logistics.png",
      images: [
        "/logistics.png",
        "/logistics2.png",
        "/logistics3.png",
        "/logistics4.png",
      ],
      name: "Logistics Landing Page",
      description:
        "A modern, single-page landing site for a logistics company with responsive design and call-to-action elements. Developed using Next.js, Tailwind CSS, and DaisyUI.",
      link: "https://logisticslanding.vercel.app/",
      repo: "https://github.com/ozy360/logisticslanding",
      tags: ["Next.js", "Tailwind CSS", "DaisyUI"],
    },
    {
      image: "/blog.png",
      images: [
        "/blog.png",
        "/blog2.png",
        "/blog3.png",
        "/blog4.png",
        "/blog5.png",
      ],
      name: "Finance Blog",
      description:
        "A blog platform for publishing financial content. Includes an admin dashboard for creating, editing, and deleting posts, as well as managing images. Built with Next.js, Tailwind CSS, MongoDB, and Radix UI.",
      link: "https://finance-blog-phi.vercel.app/",
      repo: "https://github.com/ozy360/finance-blog",
      tags: ["Next.js", "Tailwind CSS", "Radix UI", "MongoDB"],
    },
  ];

  useEffect(() => {
    if (filterData) {
      modalRef.current?.showModal();
      // emblaApi?.scrollTo(0); // Reset carousel to first slide
    }
  }, [filterData]);

  return (
    <>
      <div className="heading text-left heading">Projects</div>

      {/* Modal */}
      {filterData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <dialog
            ref={modalRef}
            className="m-auto rounded-xl w-11/12 z-60 max-w-3xl bg-yellow-300 border border-black text-black fixed top-0 left-0 p-4"
          >
            <div>
              <h3 className="font-bold text-lg">{filterData.name}</h3>
              <div className="mt-3">
                <div className="embla overflow-hidden" ref={emblaRef}>
                  <div className="embla__container flex">
                    {filterData.images.map((img, idx) => (
                      <div className="embla__slide flex-[0_0_100%]" key={idx}>
                        <img
                          src={img}
                          className="w-full h-full"
                          alt={`slide-${idx}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center gap-x-2 pt-2">
                {filterData.tags.map((tag, iindex) => (
                  <button key={iindex} className="btn btn-sm btn-outline">
                    {tag}
                  </button>
                ))}
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <a
                    href={filterData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline mr-2"
                  >
                    View Live
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-square-arrow-out-up-right size-5 ml-1"
                    >
                      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                      <path d="m21 3-9 9" />
                      <path d="M15 3h6v6" />
                    </svg>
                  </a>
                  <button
                    className="btn btn-neutral text-yellow-300"
                    onClick={() => setFilterData(null)}
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0">
        {PROJECT_OBJ.map((project, index) => (
          <div key={index} id={project.name}>
            <Animate>
              <div className="card bg-transparent shadow-sm border break-inside-avoid p-2 rounded-lg pb-3">
                <figure className="p-2">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[200px] bg-gray-100 rounded-md object-cover"
                  />
                </figure>
                <div className="card-body !p-0 !p-2">
                  <h2 className="card-title text-xl font-semibold">
                    {project.name}
                  </h2>
                  <p className="pt-4 h-24">{project.description}</p>
                </div>

                <div className="card-footer flex justify-between mt-16">
                  <div></div>
                  <div>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github-icon lucide-github size-5"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                    <button
                      className="mr-1 btn btn-outline"
                      onClick={() => setFilterData(project)}
                    >
                      Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-square-arrow-out-up-right size-5"
                      >
                        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                        <path d="m21 3-9 9" />
                        <path d="M15 3h6v6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </>
  );
}
