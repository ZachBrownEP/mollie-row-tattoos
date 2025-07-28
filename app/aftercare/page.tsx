import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, CheckCircle, XCircle, ShoppingCart } from "lucide-react"

export default function AftercarePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tattoo Aftercare Guide</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proper aftercare is crucial for healing and maintaining the quality of your new tattoo. Follow these
            guidelines to ensure the best results.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-primary/20 bg-primary/5">
          <AlertTriangle className="h-4 w-4 text-primary" />
          <AlertDescription className="text-primary">
            <strong>Important:</strong> These are general guidelines. Always follow the specific instructions given by
            your tattoo artist, as they may vary based on your tattoo's size, location, and your skin type.
          </AlertDescription>
        </Alert>

        {/* Healing Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Healing Timeline</h2>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    Days 1-3
                  </Badge>
                  <CardTitle className="text-lg">Initial Healing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your tattoo will be red, swollen, and tender. It may ooze plasma, ink, and blood. This is completely
                  normal. Keep the area clean and follow your artist's initial care instructions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                    Days 4-6
                  </Badge>
                  <CardTitle className="text-lg">Peeling Begins</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your tattoo will start to peel like a sunburn. Do not pick or scratch! The peeling skin may contain
                  ink - this is normal and won't affect your tattoo's appearance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Days 7-14
                  </Badge>
                  <CardTitle className="text-lg">Continued Peeling</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Peeling continues and your tattoo may look dull or cloudy. This is the dead skin layer coming off.
                  Continue gentle care and moisturizing. Itching is common but resist scratching.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Days 15-30
                  </Badge>
                  <CardTitle className="text-lg">Final Healing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your tattoo should look vibrant again as the final layer of dead skin comes off. The skin may still be
                  slightly tender. Full healing typically takes 4-6 weeks.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Do's and Don'ts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Do's and Don'ts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-5 w-5" />
                  DO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Wash your hands before touching your tattoo</li>
                  <li>• Gently wash with antibacterial soap 2-3 times daily</li>
                  <li>• Pat dry with a clean paper towel</li>
                  <li>• Apply a thin layer of recommended moisturizer</li>
                  <li>• Keep the tattoo uncovered when possible</li>
                  <li>• Wear loose, breathable clothing</li>
                  <li>• Stay hydrated and eat well</li>
                  <li>• Contact your artist with any concerns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-5 w-5" />
                  DON'T
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Pick, scratch, or peel your tattoo</li>
                  <li>• Soak in baths, pools, or hot tubs</li>
                  <li>• Expose to direct sunlight</li>
                  <li>• Use petroleum-based products</li>
                  <li>• Over-moisturize (causes prolonged healing)</li>
                  <li>• Wear tight or rough clothing over the tattoo</li>
                  <li>• Exercise heavily for the first few days</li>
                  <li>• Ignore signs of infection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">When to Seek Help</h2>
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription>
              <strong className="text-red-700">Contact your artist or doctor immediately if you experience:</strong>
              <ul className="mt-2 space-y-1 text-red-700">
                <li>• Excessive redness that spreads beyond the tattoo</li>
                <li>• Red streaks extending from the tattoo</li>
                <li>• Excessive swelling after day 3</li>
                <li>• Pus or unusual discharge</li>
                <li>• Fever or chills</li>
                <li>• Severe pain that worsens after day 2</li>
                <li>• Rash or allergic reaction</li>
              </ul>
            </AlertDescription>
          </Alert>
        </section>

        {/* Recommended Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recommended Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-medium text-primary">{product.price}</div>
                    <div className="text-xs text-muted-foreground">Examples: {product.examples}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Long-term Care */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Long-term Tattoo Care</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Sun Protection</h3>
                  <p className="text-muted-foreground">
                    Always apply SPF 30+ sunscreen to your healed tattoo when exposed to sunlight. UV rays are the #1
                    cause of tattoo fading and aging.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2">Moisturizing</h3>
                  <p className="text-muted-foreground">
                    Keep your tattoo moisturized with a quality, fragrance-free lotion. Well-moisturized skin keeps
                    tattoos looking vibrant and prevents cracking.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-2">Touch-ups</h3>
                  <p className="text-muted-foreground">
                    Most tattoos may need minor touch-ups after healing. We offer free touch-ups within 6 months of your
                    original appointment (with proper aftercare).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
