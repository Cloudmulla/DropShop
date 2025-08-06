"use client"

import { useState } from "react"
import { Check } from "lucide-react"

const categories = [
  "Electronics",
  "Fashion", 
  "Home & Garden",
  "Sports & Fitness",
  "Books & Media",
  "Health & Beauty"
]

const priceRanges = [
  { label: "Under $25", value: "0-25" },
  { label: "$25 - $50", value: "25-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $200", value: "100-200" },
  { label: "Over $200", value: "200+" }
]

const ratings = [5, 4, 3, 2, 1]

export function ProductFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState("")
  const [selectedRating, setSelectedRating] = useState<number | null>(null)
  const [inStock, setInStock] = useState(true)

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  className="sr-only"
                />
                <div className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
                  selectedCategories.includes(category)
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-300"
                }`}>
                  {selectedCategories.includes(category) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
              </div>
              <span className="ml-3 text-sm text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.value} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="priceRange"
                value={range.value}
                checked={selectedPriceRange === range.value}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Rating</h4>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <label key={rating} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-700">
                {rating} star{rating !== 1 ? 's' : ''} & up
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* In Stock */}
      <div className="mb-6">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
              className="sr-only"
            />
            <div className={`w-4 h-4 border-2 rounded flex items-center justify-center ${
              inStock ? "border-blue-600 bg-blue-600" : "border-gray-300"
            }`}>
              {inStock && <Check className="w-3 h-3 text-white" />}
            </div>
          </div>
          <span className="ml-3 text-sm text-gray-700">In Stock Only</span>
        </label>
      </div>

      {/* Clear Filters */}
      <button 
        onClick={() => {
          setSelectedCategories([])
          setSelectedPriceRange("")
          setSelectedRating(null)
          setInStock(true)
        }}
        className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium"
      >
        Clear All Filters
      </button>
    </div>
  )
}
