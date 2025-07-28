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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book Your Consultation</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your tattoo journey? Fill out this detailed form and we'll get back to you within 24 hours to
            schedule your consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>
                    We need your basic information to contact you and prepare for your consultation.
                  </CardDescription>
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    Service Details
                  </CardTitle>
                  <CardDescription>Tell us about the tattoo or service you're interested in.</CardDescription>
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    Health & Experience
                  </CardTitle>
                  <CardDescription>
                    This information helps us provide the best service and ensure your safety.
                  </CardDescription>
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Preferred Scheduling
                  </CardTitle>
                  <CardDescription>
                    Let us know your availability preferences. We'll contact you to confirm exact times.
                  </CardDescription>
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5 text-primary" />
                    Additional Information
                  </CardTitle>
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

              <Button type="submit" size="lg" className="w-full">
                Submit Consultation Request
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Process Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Review</h4>
                    <p className="text-sm text-muted-foreground">We review your request within 24 hours</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Contact</h4>
                    <p className="text-sm text-muted-foreground">We'll call or email to schedule your consultation</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Consult</h4>
                    <p className="text-sm text-muted-foreground">Free consultation to discuss design and pricing</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Book</h4>
                    <p className="text-sm text-muted-foreground">Schedule your tattoo with a $100 deposit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prefer to Call?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">(512) 555-0123</p>
                    <p className="text-sm text-muted-foreground">Tue-Sat, 12PM-8PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">info@inkandsteeltattoo.com</p>
                    <p className="text-sm text-muted-foreground">24-48 hour response</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Pricing Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Small tattoos</span>
                  <Badge variant="outline">$150-400</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Medium tattoos</span>
                  <Badge variant="outline">$400-800</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Large tattoos</span>
                  <Badge variant="outline">$800+</Badge>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-sm">Consultation</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Free
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Booking deposit</span>
                  <Badge variant="outline">$100</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Final pricing depends on size, complexity, and placement. Deposit goes toward final cost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
