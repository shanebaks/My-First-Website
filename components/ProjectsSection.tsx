"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { ExternalLink, Newspaper, Image as ImageIcon, UtensilsCrossed } from "lucide-react";

const projects = [
  {
    title: "BAKS magazine", // ✏️ Student changes this
    description:
      "A designed magazine showcasing my clothing brand and design skills.", // ✏️ Student changes this
    image: "/1.jpg", // ✏️ Student changes this (ex: "/1.png")
    link: "https://canva.link/sgng794tvyqunb0", // ✏️ Student pastes Canva URL here
    icon: <Newspaper className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "BAKS poster.", // ✏️ Student changes this
    description:
      "A visually engaging poster designed to promote my clothing brand and highlight its unique style.", // ✏️ Student changes this
    image: "/2.png", // ✏️ Student changes this (ex: "/2.png")
    link: "https://canva.link/5z2uehk75gqbh5z", // ✏️ Student pastes Canva URL here
    icon: <ImageIcon className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Safari Bite Restaurant Menu", // ✏️ Student changes this
    description:
      "A designed restaurant menu showcasing branding, layout, and visual design skills.", // ✏️ Student changes this
    image: "/3.jpg", // ✏️ Student changes this (ex: "/3.png")
    link: "https://canva.link/51oeplgfx6adefv", // ✏️ Student pastes Canva URL here
    icon: <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Projects</h2>
          <p className="text-sm text-muted-foreground mt-2">
            A quick look at some of my design work.
          </p>
        </div>

        <BentoGrid className="max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <BentoGridItem
              key={project.title}
              className={i === 2 ? "md:col-span-2" : ""}
              header={
                <div className="relative w-full h-44 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover/bento:scale-[1.03]"
                  />
                </div>
              }
              title={project.title}
              description={
                <div className="space-y-3">
                  <p className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                    {project.description}
                  </p>
                  <Button asChild variant="outline" className="w-fit">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      View Project <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              }
              icon={project.icon}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </section>
  );
}
