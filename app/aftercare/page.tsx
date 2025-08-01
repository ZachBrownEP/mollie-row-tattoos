import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, CheckCircle, XCircle, ShoppingCart, Clock, Shield, Sun } from "lucide-react"

export default function AftercarePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="heading-xl mb-6">Tattoo <span className="gradient-text">Aftercare</span> Guide</h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Proper aftercare is crucial for healing and maintaining the quality of your new tattoo. Follow these
              guidelines to ensure the best results.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Important Notice */}
          <Alert className="mb-12 glass-effect border-primary/20 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-primary-foreground" />
              </div>
              <AlertDescription className="text-lg leading-relaxed">
                <strong className="text-foreground">Important:</strong> These are general guidelines. Always follow the specific instructions given by
                your tattoo artist, as they may vary based on your tattoo's size, location, and your skin type.
              </AlertDescription>
            </div>
          </Alert>

          {/* Healing Timeline */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Healing <span className="gradient-text">Timeline</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
            </div>
            <div className="grid gap-6">
              <Card className="glass-effect border-primary/20 shadow-xl group card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 bg-red-50 text-red-700 border-red-200">
                        Days 1-3
                      </Badge>
                      <CardTitle className="text-xl">Initial Healing</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg leading-relaxed">
                    Your tattoo will be red, swollen, and tender. It may ooze plasma, ink, and blood. This is completely
                    normal. Keep the area clean and follow your artist's initial care instructions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-effect border-primary/20 shadow-xl group card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 bg-orange-50 text-orange-700 border-orange-200">
                        Days 4-6
                      </Badge>
                      <CardTitle className="text-xl">Peeling Begins</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg leading-relaxed">
                    Your tattoo will start to peel like a sunburn. Do not pick or scratch! The peeling skin may contain
                    ink - this is normal and won't affect your tattoo's appearance.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-effect border-primary/20 shadow-xl group card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 bg-yellow-50 text-yellow-700 border-yellow-200">
                        Days 7-14
                      </Badge>
                      <CardTitle className="text-xl">Continued Peeling</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg leading-relaxed">
                    Peeling continues and your tattoo may look dull or cloudy. This is the dead skin layer coming off.
                    Continue gentle care and moisturizing. Itching is common but resist scratching.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="glass-effect border-primary/20 shadow-xl group card-hover">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 bg-green-50 text-green-700 border-green-200">
                        Days 15-30
                      </Badge>
                      <CardTitle className="text-xl">Final Healing</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg leading-relaxed">
                    Your tattoo should look vibrant again as the final layer of dead skin comes off. The skin may still be
                    slightly tender. Full healing typically takes 4-6 weeks.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Do's and Don'ts */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Do's and <span className="gradient-text">Don'ts</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="glass-effect border-green-500/20 shadow-xl group card-hover bg-green-50/10 dark:bg-green-950/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl text-green-700 dark:text-green-400">DO</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Wash your hands before touching your tattoo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Gently wash with antibacterial soap 2-3 times daily</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Pat dry with a clean paper towel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Apply a thin layer of recommended moisturizer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Keep the tattoo uncovered when possible</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Wear loose, breathable clothing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Stay hydrated and eat well</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Contact your artist with any concerns</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-effect border-red-500/20 shadow-xl group card-hover bg-red-50/10 dark:bg-red-950/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <XCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl text-red-700 dark:text-red-400">DON'T</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Pick, scratch, or peel your tattoo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Soak in baths, pools, or hot tubs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Expose to direct sunlight</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Use petroleum-based products</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Over-moisturize (causes prolonged healing)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Wear tight or rough clothing over the tattoo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Exercise heavily for the first few days</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Ignore signs of infection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Warning Signs */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">When to <span className="gradient-text">Seek Help</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
            </div>
            <Alert className="glass-effect border-red-500/20 shadow-xl bg-red-50/10 dark:bg-red-950/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <AlertDescription>
                  <strong className="text-xl text-foreground mb-4 block">Contact your artist or doctor immediately if you experience:</strong>
                  <div className="grid gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Excessive redness that spreads beyond the tattoo</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Red streaks extending from the tattoo</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Excessive swelling after day 3</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Pus or unusual discharge</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Fever or chills</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Severe pain that worsens after day 2</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Rash or allergic reaction</span>
                    </div>
                  </div>
                </AlertDescription>
              </div>
            </Alert>
          </section>

          {/* Recommended Products */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Recommended <span className="gradient-text">Products</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Antibacterial Soap",
                  description: "Gentle, fragrance-free soap for cleaning",
                  price: "$8-12",
                  examples: "Dial Gold, Dr. Bronner's",
                },
                {
                  name: "Tattoo Aftercare Lotion",
                  description: "Specialized moisturizer for healing tattoos",
                  price: "$15-25",
                  examples: "Aquaphor, Tattoo Goo",
                },
                {
                  name: "Fragrance-Free Moisturizer",
                  description: "Gentle, unscented daily moisturizer",
                  price: "$10-20",
                  examples: "Cetaphil, Lubriderm",
                },
                {
                  name: "Sunscreen SPF 30+",
                  description: "Protect healed tattoos from fading",
                  price: "$12-18",
                  examples: "Any broad-spectrum SPF 30+",
                },
                {
                  name: "Paper Towels",
                  description: "For gentle drying (avoid cloth towels)",
                  price: "$5-8",
                  examples: "Any clean paper towels",
                },
                {
                  name: "Plastic Wrap",
                  description: "For initial protection (first night only)",
                  price: "$3-5",
                  examples: "Standard plastic wrap",
                },
              ].map((product, index) => (
                <Card key={index} className="h-full glass-effect border-primary/20 shadow-xl group card-hover">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                        <ShoppingCart className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{product.name}</CardTitle>
                        <CardDescription className="text-base">{product.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-2xl font-bold text-primary">{product.price}</div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Examples:</span> {product.examples}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Long-term Care */}
          <section>
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Long-term <span className="gradient-text">Tattoo Care</span></h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto" />
            </div>
            <Card className="glass-effect border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="grid gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Sun className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Sun Protection</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Always apply SPF 30+ sunscreen to your healed tattoo when exposed to sunlight. UV rays are the #1
                        cause of tattoo fading and aging.
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-primary/10" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Moisturizing</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Keep your tattoo moisturized with a quality, fragrance-free lotion. Well-moisturized skin keeps
                        tattoos looking vibrant and prevents cracking.
                      </p>
                    </div>
                  </div>
                  <Separator className="bg-primary/10" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">Touch-ups</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Most tattoos may need minor touch-ups after healing. We offer free touch-ups within 6 months of your
                        original appointment (with proper aftercare).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}