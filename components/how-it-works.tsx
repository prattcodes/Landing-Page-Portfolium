"use client";

import { cn } from "@/lib/utils";
import { motion, Transition, Variants } from "framer-motion";
import React, { CSSProperties } from "react";

type SpinningTextProps = {
  children: string | string[];
  style?: CSSProperties;
  duration?: number;
  className?: string;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
  transition?: Transition;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: "linear",
};

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

function SpinningText({
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  radius = 5,
  transition,
  variants,
}: SpinningTextProps) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings");
  }

  if (Array.isArray(children)) {
    // Validate all elements are strings
    if (!children.every((child) => typeof child === "string")) {
      throw new Error("all elements in children array must be strings");
    }
    children = children.join("");
  }

  const letters = children.split("");
  letters.push(" ");

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: (transition as { duration?: number })?.duration ?? duration,
  };

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  return (
    <motion.div
      className={cn("relative", className)}
      style={{
        ...style,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={itemVariants}
          className="absolute left-1/2 top-1/2 inline-block"
          style={
            {
              "--index": index,
              "--total": letters.length,
              "--radius": radius,
              transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1ch))
                `,
              transformOrigin: "center",
            } as React.CSSProperties
          }
        >
          {letter}
        </motion.span>
      ))}
      <span className="sr-only">{children}</span>
    </motion.div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-secondary/30 border-t border-b border-silver-bright/10 py-20" id="how-it-works">
      <div className="container">
        <div className="text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-silver-bright glow-text mt-8">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <SpinningText reverse className="md:text-2xl mt-10 mb-24 md:m-0" duration={8} radius={6}>
            Build • Share • Grow • Succeed •
          </SpinningText>
          <StepCard number="1" title="Sign Up" description="Create an account in seconds with email or GitHub" />
          <StepCard number="2" title="Build" description="Add your projects, experience, and contact information" />
          <StepCard
            number="3"
            title="Publish"
            description="Get an instant professional portfolio with your custom subdomain"
          />
          <StepCard
            number="4"
            title="Share"
            description="Send your portfolio to employers, clients, and your network"
          />
        </div>
      </div>
    </section>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex w-full justify-center relative">
      <div className="w-full relative bg-secondary/30 max-w-[400px] border-2 rounded-md border-silver-bright/10">
        <div className="size-6 absolute -top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-md border-silver-bright/30"></div>
        <div className="size-6 absolute -top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-md border-silver-bright/30"></div>
        <div className="size-6 absolute -bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-md border-silver-bright/30"></div>
        <div className="size-6 absolute -bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-md border-silver-bright/30"></div>
        <div className="p-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-silver-bright text-black flex items-center justify-center text-xl font-bold mx-auto">
            {number}
          </div>
          <h3 className="text-xl font-semibold text-silver-bright glow-text">{title}</h3>
          <p className="text-silver/90">{description}</p>
        </div>
      </div>
    </div>
  )
}

