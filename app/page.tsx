'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react"
import { Mail, Phone } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { ProjectsSection } from "@/components/ProjectsSection"

export default function Home() {
  return (
    <main className="bg-background antialiased">
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,rgba(23,23,23,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.12)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />

        {/* Spotlight effect */}
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <Badge variant="secondary" className="inline-flex items-center gap-2 font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for work
              </Badge>

              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                  Shane
                </span>
              </h1>

              {/* ContainerTextFlip */}
              <div className="flex items-center gap-2 text-xl font-semibold">
                <span>I build</span>
                <ContainerTextFlip
                  words={["Networking", "Web Development", "Linux", "Design", "CCTV", "Next.js"]}
                  className="text-foreground"
                />
              </div>

              {/* Bio */}
              <p className="text-lg text-muted-foreground max-w-md font-medium">
                Passionate about creating innovative solutions through technology.
                I specialize in web development, networking, and system design,
                bringing ideas to life with clean, efficient code.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <Button asChild className="font-semibold">
                  <Link href="#projects">View My Work</Link>
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <IconBrandGithub className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <IconBrandLinkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <IconBrandTwitter className="h-6 w-6" />
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a
                  href="mailto:shanesewa824@gmail.com"
                  className="flex items-center gap-3 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>shanesewa824@gmail.com</span>
                </a>
                <a
                  href="tel:+254757458658"
                  className="flex items-center gap-3 hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+254757458658</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative w-full max-w-[460px] aspect-square mx-auto order-1 lg:order-2"
            >
              {/* Subtle glow behind image */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10 scale-95" />

              {/* Online badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-background/80 backdrop-blur-sm border border-border/40 flex items-center gap-1.5 px-2 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium">Online</span>
                </Badge>
              </div>

              <Image
                src="/IMG_0637.jpg.jpeg"
                alt="Profile Photo"
                fill
                priority
                className="object-cover object-top rounded-2xl shadow-2xl border border-border/40
               hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectsSection />
    </main>
  )
}
