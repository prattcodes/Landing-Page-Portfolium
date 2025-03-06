import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="container py-20 border-t border-silver-bright/10" id="faq">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-silver-bright glow-text">FAQ</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-silver-bright/10">
            <AccordionTrigger className="text-silver-bright">Is it really free?</AccordionTrigger>
            <AccordionContent className="text-silver/90">
              Yes! The core features are completely free. We are planning to offer premium options for additional
              customization.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-silver-bright/10">
            <AccordionTrigger className="text-silver-bright">Do I need to know how to code?</AccordionTrigger>
            <AccordionContent className="text-silver/90">
              Not at all! Our intuitive editor handles everything for you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-silver-bright/10">
            <AccordionTrigger className="text-silver-bright">Can I customize my portfolio?</AccordionTrigger>
            <AccordionContent className="text-silver/90">
              Absolutely. You can toggle sections on/off, reorder your projects and experiences, and customize your
              content.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-silver-bright/10">
            <AccordionTrigger className="text-silver-bright">
              How quickly can I get my portfolio online?
            </AccordionTrigger>
            <AccordionContent className="text-silver/90">
              Most users complete and publish their portfolios in under 15 minutes!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-silver-bright/10">
            <AccordionTrigger className="text-silver-bright">Can I update my portfolio later?</AccordionTrigger>
            <AccordionContent className="text-silver/90">
              Yes, you can update your portfolio anytime. Changes can be published instantly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

