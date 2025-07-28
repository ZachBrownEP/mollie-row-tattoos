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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our tattoo services, process, and policies. Can't find what you're
            looking for? Contact us directly.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>We typically respond to inquiries within 24 hours during business days</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Free consultations for all potential clients to discuss your tattoo ideas
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Still Have Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <Badge variant="outline">{category.questions.length} questions</Badge>
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our team is here to help! Contact us for personalized answers to your tattoo questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/booking">Book Consultation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
