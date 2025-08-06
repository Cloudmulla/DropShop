# DropShop Ecommerce Platform - Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a comprehensive multi-product ecommerce platform built with Next.js 14, TypeScript, and modern web technologies.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma with PostgreSQL
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **State Management**: Zustand
- **UI Components**: shadcn/ui
- **Email**: Resend
- **Image Storage**: Cloudinary

## Key Features
- Product management with categories and variants
- Real-time inventory tracking
- Shopping cart and checkout
- Payment processing with Stripe
- Order management and shipping
- Admin dashboard
- Customer accounts and profiles
- Marketing tools (discounts, promotions)
- Email notifications
- SEO optimization

## Architecture Guidelines
- Use server components by default, client components only when needed
- Implement proper error boundaries and loading states
- Follow Next.js 14 App Router conventions
- Use TypeScript strict mode
- Implement proper data validation with Zod
- Use optimistic updates for better UX
- Implement proper caching strategies
- Follow atomic design principles for components

## Code Style
- Use functional components with hooks
- Implement proper TypeScript types and interfaces
- Use descriptive variable and function names
- Follow ESLint and Prettier configurations
- Write self-documenting code with JSDoc comments
- Use custom hooks for complex logic
- Implement proper error handling
