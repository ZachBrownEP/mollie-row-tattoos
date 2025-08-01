"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, DollarSign, User, Phone, Mail, MessageSquare, Upload, AlertCircle } from "lucide-react"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    serviceType: "",
    artistPreference: "",
    budgetRange: "",
    tattooSize: "",
    placement: "",
    description: "",
    hasExistingTattoos: "",
    hasAllergies: "",
    preferredDate: "",
    preferredTime: "",
    referenceImages: false,
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
        <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="heading-xl mb-6">Book Your <span className="gradient-text">Consultation</span></h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Ready to start your tattoo journey? Fill out this detailed form and we'll get back to you within 24 hours to
              schedule your consultation.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card className="glass-effect border-primary/20 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Personal Information</CardTitle>
                      <CardDescription className="text-base">
                        We need your basic information to contact you and prepare for your consultation.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <Label htmlFor="age">Age *</Label>
                    <Input
                      id="age"
                      type="number"
                      min="18"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">Must be 18 or older</p>
                  </div>
                </CardContent>
              </Card>

              {/* Service Details */}
              <Card className="glass-effect border-primary/20 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Service Details</CardTitle>
                      <CardDescription className="text-base">Tell us about the tattoo or service you're interested in.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom-tattoo">Custom Tattoo</SelectItem>
                        <SelectItem value="flash-tattoo">Flash Tattoo</SelectItem>
                        <SelectItem value="cover-up">Cover-up/Rework</SelectItem>
                        <SelectItem value="piercing">Piercing</SelectItem>
                        <SelectItem value="consultation-only">Consultation Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="artistPreference">Artist Preference</Label>
                    <Select
                      value={formData.artistPreference}
                      onValueChange={(value) => setFormData({ ...formData, artistPreference: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Any artist (or select preference)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Artist</SelectItem>
                        <SelectItem value="maya">Maya Rodriguez (Realism, Portraits)</SelectItem>
                        <SelectItem value="zane">Zane Mitchell (Traditional, Neo-Traditional)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budgetRange">Budget Range *</Label>
                    <Select
                      value={formData.budgetRange}
                      onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="150-300">$150 - $300</SelectItem>
                        <SelectItem value="300-500">$300 - $500</SelectItem>
                        <SelectItem value="500-800">$500 - $800</SelectItem>
                        <SelectItem value="800-1200">$800 - $1,200</SelectItem>
                        <SelectItem value="1200+">$1,200+</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="tattooSize">Approximate Size</Label>
                      <Select
                        value={formData.tattooSize}
                        onValueChange={(value) => setFormData({ ...formData, tattooSize: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small (2-4 inches)</SelectItem>
                          <SelectItem value="medium">Medium (4-8 inches)</SelectItem>
                          <SelectItem value="large">Large (8+ inches)</SelectItem>
                          <SelectItem value="sleeve">Sleeve/Large piece</SelectItem>
                          <SelectItem value="unsure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="placement">Body Placement</Label>
                      <Input
                        id="placement"
                        placeholder="e.g., forearm, shoulder, back"
                        value={formData.placement}
                        onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Describe Your Tattoo Idea *</Label>
                    <Textarea
                      id="description"
                      placeholder="Please describe your tattoo idea in detail. Include style preferences, colors, themes, or any specific elements you want included."
                      className="min-h-[120px]"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Health & Experience */}
              <Card className="glass-effect border-primary/20 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Health & Experience</CardTitle>
                      <CardDescription className="text-base">
                        This information helps us provide the best service and ensure your safety.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">Do you have existing tattoos?</Label>
                    <RadioGroup
                      value={formData.hasExistingTattoos}
                      onValueChange={(value) => setFormData({ ...formData, hasExistingTattoos: value })}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="tattoos-yes" />
                        <Label htmlFor="tattoos-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="tattoos-no" />
                        <Label htmlFor="tattoos-no">No, this would be my first</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">
                      Do you have any known allergies or medical conditions?
                    </Label>
                    <RadioGroup
                      value={formData.hasAllergies}
                      onValueChange={(value) => setFormData({ ...formData, hasAllergies: value })}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="allergies-yes" />
                        <Label htmlFor="allergies-yes">Yes (please discuss during consultation)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="allergies-no" />
                        <Label htmlFor="allergies-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* Scheduling */}
              <Card className="glass-effect border-primary/20 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Preferred Scheduling</CardTitle>
                      <CardDescription className="text-base">
                        Let us know your availability preferences. We'll contact you to confirm exact times.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredDate">Preferred Date Range</Label>
                      <Input
                        id="preferredDate"
                        placeholder="e.g., Next 2 weeks, specific dates"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (12PM-2PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (2PM-5PM)</SelectItem>
                          <SelectItem value="evening">Evening (5PM-8PM)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card className="glass-effect border-primary/20 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                      <Upload className="w-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">Additional Information</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="referenceImages"
                      checked={formData.referenceImages}
                      onCheckedChange={(checked) => setFormData({ ...formData, referenceImages: checked as boolean })}
                    />
                    <Label htmlFor="referenceImages" className="text-sm">
                      I have reference images to share (we'll discuss how to send them during our response)
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                      required
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm">
                      I agree to the consultation terms and understand that a $100 deposit will be required to book my
                      tattoo appointment *
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <Button type="submit" size="lg" className="w-full py-4 glow-effect hover:scale-[1.02] transition-all duration-300">
                Submit Consultation Request
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Process Info */}
            <Card className="glass-effect border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl mb-2">What Happens <span className="gradient-text">Next?</span></CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Review</h4>
                    <p className="text-muted-foreground">We review your request within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Contact</h4>
                    <p className="text-muted-foreground">We'll call or email to schedule your consultation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Consult</h4>
                    <p className="text-muted-foreground">Free consultation to discuss design and pricing</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary-foreground">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Book</h4>
                    <p className="text-muted-foreground">Schedule your tattoo with a $100 deposit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="glass-effect border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl mb-2">Prefer to <span className="gradient-text">Call?</span></CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">(512) 555-0123</p>
                    <p className="text-muted-foreground">Tue-Sat, 12PM-8PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">info@soldenochetatuajes.com</p>
                    <p className="text-muted-foreground">24-48 hour response</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Info */}
            <Card className="glass-effect border-primary/20 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">Pricing <span className="gradient-text">Guide</span></CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Small tattoos</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">$150-400</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Medium tattoos</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">$400-800</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Large tattoos</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">$800+</Badge>
                </div>
                <Separator className="bg-primary/10" />
                <div className="flex justify-between items-center">
                  <span className="font-medium">Consultation</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800">
                    Free
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Booking deposit</span>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">$100</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  Final pricing depends on size, complexity, and placement. Deposit goes toward final cost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}