'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react"
import { Spotlight } from "@/components/ui/spotlight"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-background antialiased">
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
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button variant="outline" asChild className="font-semibold">
                <Link href="/contact">Contact Me</Link>
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
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl scale-110" />
              <Image
                src="/profile.jpg"
                alt="Shane's profile"
                width={320}
                height={320}
                className="rounded-full ring-2 ring-primary/20 relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
