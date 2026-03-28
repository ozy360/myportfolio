import { useState } from "react";
import Animate from "../Animate";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

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

  const PROJECT_OBJ: ProjectType[] = [
    {
      image: "/ecomm.png",
      images: ["/ecomm.png", "/ecomm2.png", "/ecomm3.png", "/ecomm4.png"],
      name: "Online Store",
      description:
        "A fully responsive e-commerce storefront featuring product listings, search functionality, and a shopping cart. Developed with Next.js, styled with Tailwind CSS and shadcn UI.",
      link: "https://stripe-ecomm.vercel.app/",
      repo: "https://github.com/ozy360/stripe-ecomm",
      tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Stripe"],
    },
    {
      image: "/consultation.png",
      images: [
        "/consultation.png",
        "/consultation2.png",
        "/consultation3.png",
        "/consultation4.png",
      ],
      name: "Consultation Website",
      description:
        "A modern and responsive consultation website designed to showcase services and facilitate client inquiries. Built with React.js and styled using Tailwind CSS for a clean and professional user experience.",
      link: "https://consultaion-website.vercel.app/",
      repo: "https://github.com/ozy360/consultation-website",
      tags: ["React.js", "Tailwind CSS"],
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
      image: "/insurance.png",
      images: ["/insurance.png", "/insurance2.png", "/insurance3.png"],
      name: "Insurance website",
      description:
        "A modern website for an insurance company, featuring a clean and professional design with different sections. Developed using React, Tailwind CSS, and DaisyUI.",

      link: "https://newinsurance-flax.vercel.app/",
      repo: "https://github.com/ozy360/newinsurance",
      tags: ["React", "Tailwind CSS", "DaisyUI"],
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
    {
      image: "/fintech2.png",
      images: [
        "/fintech.png",
        "/fintech2.png",
        "/fintech3.png",
        "/fintech4.png",
        "/fintech5.png",
      ],
      name: "Fintech Dashboard",
      description:
        "A multi-wallet fintech dashboard that allows users to perform transactions, built with Next.js, Tailwind CSS, MongoDB, and Mantine UI.",
      link: "https://fintechdashboard-kappa.vercel.app/",
      repo: "https://github.com/ozy360/fintechdashboard",
      tags: ["Next.js", "Tailwind CSS", "Mantine UI", "MongoDB"],
    },
    {
      image: "/documentchat2.png",
      images: ["/documentchat.png", "/documentchat2.png", "/documentchat3.png"],
      name: "Document chat",
      description:
        "A Next.js application for chatting with your documents using AI. Built using Pinecone, Supabase and Shadcn UI.",
      link: "https://documentchat-seven.vercel.app/",
      repo: "https://github.com/ozy360/documentchat",
      tags: ["Next.js", "Shadcn UI", "Supabase", "Pinecone"],
    },
    {
      image: "/qa3.png",
      images: [
        "/qa.png",
        "/qa2.png",
        "/qa3.png",
        "qa4.png",
        "qa5.png",
        "qa6.png",
      ],
      name: "NuxtQA",
      description:
        "A community-driven Question & Answer platform built with Nuxt 3, Prisma, and PostgreSQL.",
      link: "https://nuxtqamain.vercel.app/",
      repo: "https://github.com/ozy360/nuxtqamain",
      tags: ["Nuxt 3", "Postgresql", "Prisma"],
    },
  ];

  return (
    <div className="container">
      <div className="heading text-left">Projects</div>

      {/* Modal */}
      <Dialog
        open={!!filterData}
        onOpenChange={(open) => !open && setFilterData(null)}
      >
        <DialogContent className="md:max-w-2xl max-h-[90vh] overflow-y-auto bg-yellow-300 border-black text-black ![&>button]:outline-none">
          <DialogHeader>
            <DialogTitle className="font-bold text-lg">
              {filterData?.name}
            </DialogTitle>
          </DialogHeader>

          {filterData && (
            <div className="mt-3">
              <Carousel
                plugins={[Autoplay()]}
                opts={{ loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {filterData.images.map((img, idx) => (
                    <CarouselItem key={idx}>
                      <div className="flex w-full h-[200px] sm:h-[300px] items-center justify-center overflow-hidden rounded-md">
                        <img
                          src={img}
                          className="w-full h-full object-cover"
                          alt={`slide-${idx}`}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          )}

          <p className="pt-4">{filterData?.description}</p>

          <DialogFooter className="flex-row justify-end gap-2">
            <Button
              variant="outline"
              className="border-black text-black hover:!bg-black/10 !bg-transparent"
              asChild
            >
              <a
                href={filterData?.link}
                target="_blank"
                rel="noopener noreferrer"
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
            </Button>
            <Button
              className="bg-black text-yellow-300 hover:bg-black/90 cursor-pointer"
              onClick={() => setFilterData(null)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 space-y-4 lg:space-y-0">
        {PROJECT_OBJ.map((project, index) => (
          <div key={index} id={project.name}>
            <Animate>
              <Card className="bg-transparent shadow-sm border !p-4 border-black text-black break-inside-avoid rounded-xl flex flex-col h-full">
                <div className="p-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-[200px] bg-gray-100 rounded-md object-cover"
                  />
                </div>

                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-semibold">
                    {project.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 flex-1">
                  <p className="line-clamp-3">{project.description}</p>
                  {/* <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-semibold border border-black rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                </CardContent>

                <CardFooter className="flex items-center gap-x-1 p-0 mt-auto">
                  <Button
                    variant="outline"
                    className="border-black text-black !bg-transparent hover:!bg-black/10"
                    asChild
                  >
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-github size-5"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-black text-black !bg-transparent cursor-pointer hover:!bg-black/10"
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
                      className="lucide lucide-square-arrow-out-up-right size-5 ml-2"
                    >
                      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                      <path d="m21 3-9 9" />
                      <path d="M15 3h6v6" />
                    </svg>
                  </Button>
                </CardFooter>
              </Card>
            </Animate>
          </div>
        ))}
      </div>
    </div>
  );
}
