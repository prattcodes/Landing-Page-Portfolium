export function TestimonialsSection() {
  return (
    <section className="container py-20" id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-silver-bright glow-text">
          What Our Users Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <TestimonialCard
          quote="I had three interviews scheduled within a week of creating my portfolio. The minimal design really lets my projects shine."
          author="Alex K."
          role="Frontend Developer"
        />
        <TestimonialCard
          quote="As a bootcamp graduate, I needed to stand out quickly. This tool helped me build a professional portfolio in one evening."
          author="Maya R."
          role="Full Stack Developer"
        />
        <TestimonialCard
          quote="The simplicity is what makes it perfect. No distractions, just my work presented clearly."
          author="Sam T."
          role="Software Engineer"
        />
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="border border-silver-bright/10 rounded-2xl p-6 space-y-4 bg-secondary/20 animated-border-card">
      <p className="text-lg italic text-silver-bright">{quote}</p>
      <div>
        <p className="font-semibold text-silver-bright">— {author}</p>
        <p className="text-sm text-silver/80">{role}</p>
      </div>
    </div>
  )
}

