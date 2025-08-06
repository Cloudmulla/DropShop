"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import { useCartStore } from "@/store/cart"

// Mock products data
const products = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    slug: "premium-wireless-headphones",
    price: 199.99,
    comparePrice: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 124,
    inStock: true
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    slug: "smart-fitness-watch", 
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 89,
    inStock: true
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    slug: "ergonomic-office-chair",
    price: 399.99,
    comparePrice: 499.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 67,
    inStock: true
  },
  {
    id: "4",
    name: "Portable Bluetooth Speaker",
    slug: "portable-bluetooth-speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 203,
    inStock: false
  },
  {
    id: "5",
    name: "4K Webcam for Streaming",
    slug: "4k-webcam-streaming",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1587826080692-e6ad60de0e19?w=400&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 156,
    inStock: true
  },
  {
    id: "6",
    name: "Mechanical Gaming Keyboard",
    slug: "mechanical-gaming-keyboard",
    price: 129.99,
    comparePrice: 179.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 98,
    inStock: true
  }
]

export function ProductGrid() {
  const [sortBy, setSortBy] = useState("featured")
  const { addItem } = useCartStore()

  const handleAddToCart = (product: typeof products[0]) => {
    if (!product.inStock) return
    
    addItem({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
  }

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div>
      {/* Sort Options */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">
          Showing {products.length} products
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="relative">
              <Link href={`/products/${product.slug}`}>
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              
              {/* Sale Badge */}
              {product.comparePrice && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                  SALE
                </div>
              )}

              {/* Stock Status */}
              {!product.inStock && (
                <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 text-xs font-semibold rounded">
                  OUT OF STOCK
                </div>
              )}

              {/* Quick Actions */}
              <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <Link href={`/products/${product.slug}`}>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              
              {/* Rating */}
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  ({product.reviewCount})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-lg font-bold text-gray-900">
                  {formatPrice(product.price)}
                </span>
                {product.comparePrice && (
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.comparePrice)}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                disabled={!product.inStock}
                className={`w-full flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  product.inStock
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
          Load More Products
        </button>
      </div>
    </div>
  )
}
