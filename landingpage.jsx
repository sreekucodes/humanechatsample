import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Upload, Brain, Forward, BarChart } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Automate Customer Queries So You Can Focus on Growing Your Business
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          A simple AI chatbot that answers FAQs instantly and forwards complex questions to your inbox—no hassle, no coding.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
          Start Solving Customer Queries for Just $9/month
        </Button>
        <div className="mt-12">
          <img
            src="/placeholder.svg?height=300&width=600"
            alt="HumaneChat Demo"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HumaneChat?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MessageCircle className="h-8 w-8 text-blue-500" />, title: "Add FAQs in Minutes", description: "Let your customers find answers instantly." },
              { icon: <Upload className="h-8 w-8 text-green-500" />, title: "Web Scraping for Instant Knowledge", description: "Save time with an auto-generated knowledge base." },
              { icon: <Brain className="h-8 w-8 text-purple-500" />, title: "GPT-4 Powered Responses", description: "Intelligent answers that improve with use." },
              { icon: <Forward className="h-8 w-8 text-red-500" />, title: "Redirect Complex Queries", description: "Never miss an important question." },
              { icon: <BarChart className="h-8 w-8 text-yellow-500" />, title: "Dashboard for Tracking Queries", description: "Monitor everything from one place." },
            ].map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6">
                <CardHeader>
                  {feature.icon}
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works in 3 Easy Steps</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            {[
              { title: "Sign Up and Embed", description: "Paste our code snippet onto your website." },
              { title: "Add FAQs or Use Web Scraping", description: "Choose between manual FAQ input or automatic web scraping." },
              { title: "Let HumaneChat Handle the Rest", description: "Watch as customer queries are answered automatically." },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-sm">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Simple Pricing, No Surprises</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-5xl font-bold mb-4">$9<span className="text-2xl font-normal">/month</span></div>
            <p className="text-gray-600 mb-6">Affordable, powerful AI customer support. Cancel anytime.</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Get Started for $9/month – First 30 Days Free
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            {[
              {
                question: "How long does setup take?",
                answer: "Setup takes just a few minutes. Simply embed the chatbot on your site, and you're ready to go!"
              },
              {
                question: "What happens if the chatbot doesn't know the answer?",
                answer: "HumaneChat automatically forwards complex queries to your contact email for personal follow-up."
              },
              {
                question: "Is it really only $9 per month?",
                answer: "Yes! No hidden fees, just $9/month for instant customer query handling."
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Automate Your Customer Support?</h2>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
            Start Now for Just $9/month – First 7 Days Free!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 HumaneChat. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
              <a href="mailto:support@humanechat.com" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
