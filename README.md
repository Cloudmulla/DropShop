
# DropShop - Multi-Product Ecommerce Platform

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

A comprehensive, modern ecommerce platform built with Next.js 14, TypeScript, and cutting-edge web technologies. DropShop provides everything you need to manage products, inventory, process payments, handle shipping, and implement marketing strategies.

A comprehensive, modern ecommerce platform built with Next.js 14, TypeScript, and cutting-edge web technologies. DropShop provides everything you need to manage products, inventory, process payments, handle shipping, and implement marketing strategies.

## 🚀 Features

### Core Ecommerce Functionality
- **Product Management**: Full CRUD operations for products with categories, variants, and images
- **Inventory Tracking**: Real-time stock management with low stock alerts and backorder handling
- **Shopping Cart**: Persistent cart with quantity management and checkout flow
- **User Authentication**: Secure login/signup with NextAuth.js
- **Order Management**: Complete order lifecycle from creation to fulfillment
- **Payment Processing**: Integrated with Stripe for secure payments

### Business Features
- **Admin Dashboard**: Comprehensive admin panel for managing all aspects of the store
- **Customer Accounts**: User profiles, order history, and wishlist functionality
- **Marketing Tools**: Discount codes, promotions, and newsletter integration
- **Reviews & Ratings**: Customer feedback system with moderation
- **SEO Optimization**: Meta tags, structured data, and search-friendly URLs
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Technical Features
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Database**: PostgreSQL with Prisma ORM for robust data management
- **State Management**: Zustand for client-side state with persistence
- **Form Validation**: Zod schemas for comprehensive data validation
- **Image Handling**: Optimized image uploads and management
- **Email Notifications**: Automated emails for orders and account actions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **State Management**: Zustand
- **Validation**: Zod
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **Email**: Resend (configurable)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd dropshop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.local` and update with your values:
   ```bash
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/dropshop?schema=public"
   
   # NextAuth.js
   NEXTAUTH_SECRET="your-nextauth-secret-here"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Stripe
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_key"
   STRIPE_SECRET_KEY="sk_test_your_stripe_secret"
   
   # Admin Credentials
   ADMIN_EMAIL="admin@dropshop.com"
   ADMIN_PASSWORD="admin123"
   ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. **Seed the database (optional)**
   ```bash
   npx prisma db seed
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin panel pages
│   ├── auth/              # Authentication pages
│   ├── products/          # Product pages
│   └── ...
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── ui/               # Reusable UI components
│   ├── home/             # Home page components
│   └── ...
├── lib/                  # Utility functions
│   ├── auth.ts           # Authentication configuration
│   ├── prisma.ts         # Database client
│   ├── utils.ts          # Helper functions
│   └── validations.ts    # Zod schemas
├── store/                # Zustand stores
├── types/                # TypeScript type definitions
└── ...
```

## 🔧 Key Features Setup

### Admin Panel
Access the admin panel at `/admin` (requires admin role):
- Product management
- Category management  
- Order management
- User management
- Analytics dashboard
- Inventory tracking
- Marketing tools

### Payment Processing
Stripe integration includes:
- Secure payment processing
- Webhook handling
- Refund management
- Subscription support (extensible)

### Inventory Management
- Real-time stock tracking
- Low stock alerts
- Backorder handling
- Reserved quantity management
- Inventory history

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio
- `npx prisma migrate dev` - Run database migrations
- `npx prisma generate` - Generate Prisma client

## 🚀 Deployment

### Database Setup
1. Set up a PostgreSQL database (recommended: Railway, Supabase, or PlanetScale)
2. Update `DATABASE_URL` in your environment variables
3. Run migrations: `npx prisma migrate deploy`

### Deployment Platforms
- **Vercel** (recommended): Automatic deployments with GitHub integration
- **Netlify**: Full-stack deployment with serverless functions
- **Railway**: Database and application hosting

### Environment Variables
Ensure all required environment variables are set in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Roadmap

- [ ] Multi-language support (i18n)
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Subscription products support
- [ ] Advanced search with filters
- [ ] Wishlist sharing
- [ ] Social media integration
- [ ] Advanced shipping calculations

## 💬 Support

For support, email support@dropshop.com or join our community discussions.

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
