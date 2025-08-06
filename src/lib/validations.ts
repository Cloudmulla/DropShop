import { z } from "zod"

export const ProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be positive"),
  comparePrice: z.number().min(0).optional(),
  costPrice: z.number().min(0).optional(),
  sku: z.string().min(1, "SKU is required"),
  categoryId: z.string().min(1, "Category is required"),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
  weight: z.number().min(0).optional(),
  dimensions: z.string().optional(),
  tags: z.array(z.string()).default([]),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
})

export const CategorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  description: z.string().optional(),
  slug: z.string().min(1, "Slug is required"),
  isActive: z.boolean().default(true),
})

export const AddressSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  street1: z.string().min(1, "Street address is required"),
  street2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().optional(),
  type: z.enum(["SHIPPING", "BILLING", "BOTH"]),
  isDefault: z.boolean().default(false),
})

export const OrderSchema = z.object({
  userId: z.string(),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().min(1),
    price: z.number().min(0),
  })),
  shippingAddressId: z.string(),
  billingAddressId: z.string().optional(),
  discountCodeId: z.string().optional(),
  notes: z.string().optional(),
})

export const DiscountCodeSchema = z.object({
  code: z.string().min(1, "Discount code is required"),
  description: z.string().optional(),
  type: z.enum(["PERCENTAGE", "FIXED_AMOUNT", "FREE_SHIPPING"]),
  value: z.number().min(0, "Value must be positive"),
  minimumAmount: z.number().min(0).optional(),
  maxUses: z.number().min(1).optional(),
  startsAt: z.date().optional(),
  expiresAt: z.date().optional(),
})

export const ReviewSchema = z.object({
  productId: z.string(),
  rating: z.number().min(1).max(5),
  title: z.string().optional(),
  comment: z.string().optional(),
})

export type ProductInput = z.infer<typeof ProductSchema>
export type CategoryInput = z.infer<typeof CategorySchema>
export type AddressInput = z.infer<typeof AddressSchema>
export type OrderInput = z.infer<typeof OrderSchema>
export type DiscountCodeInput = z.infer<typeof DiscountCodeSchema>
export type ReviewInput = z.infer<typeof ReviewSchema>
