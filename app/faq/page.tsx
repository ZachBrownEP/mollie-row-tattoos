import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle, Clock, DollarSign, Shield, Palette, Heart } from "lucide-react"

const faqCategories = [
  {
    title: "Getting Started",
    icon: Heart,
    questions: [
      {
        question: "How do I book an appointment?",
        answer:
          "You can book a consultation through our online booking form, call us at (512) 555-0123, or visit us in person. We recommend starting with a consultation to discuss your design, placement, and pricing.",
      },
      {
        question: "Do I need to be 18 to get a tattoo?",
        answer:
          "Yes, you must be 18 years or older to get a tattoo in Texas. We require valid government-issued photo ID for all clients. We do not tattoo minors, even with parental consent.",
      },
      {
        question: "How much do tattoos cost?",
        answer:
          "Pricing varies based on size, complexity, placement, and artist. Our minimum is $150. Small tattoos typically range from $150-400, medium pieces $400-800, and large pieces $800+. We provide detailed quotes during consultations.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes, we require a $100 deposit to secure your appointment. This deposit goes toward your final tattoo cost. Deposits are non-refundable but can be transferred to a new appointment with 48+ hours notice.",
      },
    ],
  },
  {
    title: "Design & Consultation",
    icon: Palette,
    questions: [
      {
        question: "Can you create a custom design for me?",
        answer:
          "All our artists specialize in custom work. During your consultation, we'll discuss your ideas, preferred style, placement, and size. Custom designs are included in your tattoo price.",
      },
      {
        question: "Can I bring my own design?",
        answer:
          "Yes, you can bring reference images or your own artwork. Our artists will work with you to adapt the design for tattooing, ensuring it will age well and suit your body's contours.",
      },
      {
        question: "How long does the design process take?",
        answer:
          "Simple designs can often be created the same day. Complex custom pieces may require 1-2 weeks for design development. We'll provide a timeline during your consultation.",
      },
      {
        question: "Can I see the design before my appointment?",
        answer:
          "We typically show designs on the day of your appointment to ensure the freshest, most refined version. For large pieces, we may share preliminary sketches earlier in the process.",
      },
    ],
  },
  {
    title: "Tattoo Process",
    icon: Clock,
    questions: [
      {
        question: "How long will my tattoo session take?",
        answer:
          "Session length depends on the tattoo's size and complexity. Small tattoos take 1-2 hours, medium pieces 2-4 hours, and large pieces may require multiple sessions of 4-6 hours each.",
      },
      {
        question: "How much does it hurt?",
        answer:
          "Pain levels vary by individual and placement. Areas with more muscle and fat (arms, legs) typically hurt less than bony areas (ribs, spine). We'll discuss pain management techniques during your consultation.",
      },
      {
        question: "What should I do to prepare for my appointment?",
        answer:
          "Get a good night's sleep, eat a substantial meal beforehand, stay hydrated, avoid alcohol for 24 hours, and wear comfortable clothing that provides easy access to the tattoo area.",
      },
      {
        question: "Can I bring someone with me?",
        answer:
          "You may bring one support person, but they must remain quiet and out of the artist's workspace. Large groups can be distracting and aren't permitted in the tattoo area.",
      },
    ],
  },
  {
    title: "Aftercare & Healing",
    icon: Shield,
    questions: [
      {
        question: "How long does a tattoo take to heal?",
        answer:
          "Surface healing takes 2-3 weeks, but complete healing takes 4-6 weeks. During this time, follow our aftercare instructions carefully to ensure proper healing and color retention.",
      },
      {
        question: "What aftercare products do you recommend?",
        answer:
          "We recommend fragrance-free antibacterial soap for cleaning and a thin layer of Aquaphor or specialized tattoo aftercare lotion for moisturizing. Avoid petroleum-based products and over-moisturizing.",
      },
      {
        question: "When can I swim or exercise after getting a tattoo?",
        answer:
          "Avoid swimming, hot tubs, and heavy exercise for 2-3 weeks. Light exercise is okay after a few days, but avoid activities that cause excessive sweating or stretching of the tattooed area.",
      },
      {
        question: "Do you offer free touch-ups?",
        answer:
          "Yes, we provide free touch-ups within 6 months of your original appointment, provided you've followed proper aftercare instructions. Touch-ups after this period are charged at our regular rates.",
      },
    ],
  },
  {
    title: "Health & Safety",
    icon: Shield,
    questions: [
      {
        question: "What safety measures do you follow?",
        answer:
          "We follow all health department regulations, use single-use needles and tubes, autoclave all reusable equipment, and maintain strict sanitation protocols. All artists are bloodborne pathogen certified.",
      },
      {
        question: "Can I get a tattoo if I have medical conditions?",
        answer:
          "Certain conditions may affect your ability to get tattooed safely. Please consult your doctor and inform us of any medical conditions, medications, or allergies during your consultation.",
      },
      {
        question: "What if I'm pregnant or breastfeeding?",
        answer:
          "We do not tattoo pregnant or breastfeeding clients due to potential risks of infection and the unknown effects of tattoo ink. We'll be happy to work with you after this period.",
      },
      {
        question: "Do you test for allergies?",
        answer:
          "While rare, tattoo ink allergies can occur. If you have a history of allergic reactions or sensitive skin, discuss this during your consultation. We can recommend patch testing with a dermatologist if needed.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="heading-xl mb-6">Frequently Asked <span className="text-black">Questions</span></h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about our tattoo services, process, and policies. Can't find what you're
              looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center glass-effect border-primary/20 shadow-xl group card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl mb-2">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg leading-relaxed">We typically respond to inquiries within 24 hours during business days</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center glass-effect border-primary/20 shadow-xl group card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl mb-2">Free Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg leading-relaxed">
                Complimentary consultations for all potential clients to discuss your tattoo ideas
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center glass-effect border-primary/20 shadow-xl group card-hover">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl mb-2">Still Have Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="glow-effect hover:scale-105 transition-all duration-300" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="heading-md">{category.title}</h2>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">{category.questions.length} questions</Badge>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="glass-effect border-primary/20 shadow-lg rounded-xl px-6 py-2 group">
                    <AccordionTrigger className="text-left hover:no-underline text-lg font-semibold py-6 group-hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <section className="mt-20">
          <Card className="glass-effect border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="heading-md mb-6">Still have <span className="text-black">questions?</span></h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our team is here to help! Contact us for personalized answers to your tattoo questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8 py-4 glow-effect hover:scale-105 transition-all duration-300" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-4" asChild>
                    <Link href="/booking">Book Consultation</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
    </main>
  )
}