export function HowItWorks() {
  return (
    <section className="bg-secondary/30 border-t border-b border-silver-bright/10 py-20" id="how-it-works">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-silver-bright glow-text">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
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

