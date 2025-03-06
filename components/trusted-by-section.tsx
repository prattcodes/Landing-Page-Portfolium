import Marquee from "react-fast-marquee";

export function TrustedBySection() {
  return (
    <section className="container py-16 relative overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-sm text-silver/80">Used and trusted by developers from:</p>
      </div>
      <Marquee
        speed={30}
        delay={0}
        loop={0}
        gradient={true}
        gradientColor={[248, 251, 253]}
        gradientWidth={1000}
        className="text-silver/80"
      >
        <div className="flex items-center gap-8 mx-4">
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Google</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Microsoft</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Amazon</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Meta</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Apple</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Netflix</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Tesla</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Uber</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Airbnb</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Startups</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">Bootcamps</span>
          <span className="text-lg font-medium">•</span>
          <span className="text-lg font-medium">CS Programs</span>
        </div>
      </Marquee>
    </section>
  );
}

