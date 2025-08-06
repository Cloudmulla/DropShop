import { Suspense } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { CategoryGrid } from "@/components/home/category-grid"
import { NewsletterSignup } from "@/components/home/newsletter-signup"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
          <FeaturedProducts />
        </Suspense>
        <CategoryGrid />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}
