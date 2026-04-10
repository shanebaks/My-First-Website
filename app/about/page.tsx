"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-background antialiased">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 [background-size:40px_40px] select-none [background-image:linear-gradient(to_right,rgba(23,23,23,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.10)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge variant="secondary" className="w-fit font-semibold">
              About me
            </Badge>

            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                I’m{" "}
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                  Shane
                </span>
                .
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl font-medium">
                I build clean, modern websites and help people solve real problems with
                tech. My work combines design, networking, and practical engineering to
                deliver results that feel simple to use.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              <div className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur p-5">
                <p className="font-semibold">Web Development</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Next.js, UI polish, and responsive layouts that look great on any
                  screen.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur p-5">
                <p className="font-semibold">Networking & Systems</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Reliable setups, troubleshooting, and practical solutions that keep
                  things running.
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur p-5">
                <p className="font-semibold">Design Work</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Posters, layouts, and branding pieces that are clear, modern, and
                  consistent.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild className="font-semibold">
                <Link href="/#projects">See my projects</Link>
              </Button>
              <Button variant="outline" asChild className="font-semibold">
                <a href="mailto:shanesewa824@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email me
                </a>
              </Button>
              <Button variant="outline" asChild className="font-semibold">
                <a href="tel:+254757458658" className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call me
                </a>
              </Button>
            </div>

            <div className="pt-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                ← Back to home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

