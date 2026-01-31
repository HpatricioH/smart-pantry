# 🥫 Smart Pantry

> An intelligent pantry management system that helps you track your food inventory, reduce waste, and discover recipes based on what you have.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![tRPC](https://img.shields.io/badge/tRPC-11.4-2596BE?logo=trpc)](https://trpc.io/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Smart Pantry is a modern web application designed to revolutionize how you manage your kitchen inventory. It helps you keep track of what's in your pantry, alerts you when items are about to expire, generates shopping lists, and suggests recipes based on your current stock.

### Why Smart Pantry?

- **Reduce Food Waste**: Get notified before items expire
- **Save Money**: Better inventory tracking means fewer duplicate purchases
- **Meal Planning**: Discover recipes using ingredients you already have
- **Smart Shopping**: Automatically generate shopping lists based on your needs
- **Barcode Scanning**: Quickly add items by scanning barcodes

## ✨ Features

### 🗄️ Pantry Management
- **Current Stock Overview**: View all items in your pantry at a glance
- **Barcode Scanner**: Add items quickly using your device's camera
- **Expiration Tracking**: Monitor items approaching their expiration date
- **Low Stock Alerts**: Get notified when items are running low

### 🛒 Shopping List
- **Smart Suggestions**: Automatically generate shopping lists based on low/missing items
- **Restock Recommendations**: AI-powered suggestions for restocking
- **Category Organization**: Items organized by food categories

### 👨‍🍳 Recipe Discovery
- **Ingredient-Based Search**: Find recipes using what you have
- **AI-Powered Recommendations**: Get personalized recipe suggestions
- **Detailed Instructions**: Step-by-step cooking guidance

### 📊 Analytics
- **Usage Statistics**: Track your pantry activity
- **Waste Metrics**: Monitor food waste reduction
- **Cost Savings**: See how much money you're saving

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Styling
- **[shadcn/ui](https://ui.shadcn.com/)** - UI components
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives
- **[Lucide React](https://lucide.dev/)** - Icons
- **[ZXing](https://github.com/zxing-js/library)** - Barcode scanning

### Backend
- **[tRPC](https://trpc.io/)** - End-to-end typesafe APIs
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM
- **[LibSQL/Turso](https://turso.tech/)** - Edge database
- **[Zod](https://zod.dev/)** - Schema validation

### Authentication
- **[Clerk](https://clerk.com/)** - User authentication and management

### AI & Email
- **AI Integration** - Recipe generation and smart suggestions
- **[Resend](https://resend.com/)** - Email notifications
- **[React Email](https://react.email/)** - Email templates

### Development Tools
- **[pnpm](https://pnpm.io/)** - Package manager
- **[Biome](https://biomejs.dev/)** - Linting and formatting
- **[Turborepo](https://turbo.build/)** - Monorepo management

## 📁 Project Structure

This is a monorepo managed with pnpm workspaces:

```
smart-pantry/
├── apps/
│   └── web/                 # Next.js web application
│       ├── src/
│       │   ├── app/        # App router pages
│       │   ├── sections/   # Page sections
│       │   ├── providers/  # React providers
│       │   ├── store/      # State management
│       │   └── trpc/       # tRPC client setup
│       └── public/         # Static assets
├── packages/
│   ├── ai/                 # AI/LLM integration
│   ├── api/                # tRPC API routers
│   ├── config/             # Shared configuration
│   ├── db/                 # Database schema & migrations
│   ├── types/              # Shared TypeScript types
│   └── ui-web/             # Shared UI components
├── biome.json              # Biome configuration
├── pnpm-workspace.yaml     # Workspace configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 20.x
- **pnpm** >= 9.x
- **Turso Account** (for database)
- **Clerk Account** (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HpatricioH/smart-pantry.git
   cd smart-pantry
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

### Environment Variables

Create a `.env` file in the root directory and in `packages/db/`:

#### Root `.env`
```env
# Database (Turso)
DATABASE_URL=libsql://your-database-url.turso.io
TURSO_AUTH_TOKEN=your-turso-auth-token

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Email (Resend)
RESEND_API_KEY=re_...

# AI Configuration
OPENAI_API_KEY=sk-... # or your preferred LLM provider
```

#### `packages/db/.env`
```env
DATABASE_URL=libsql://your-database-url.turso.io
TURSO_AUTH_TOKEN=your-turso-auth-token
```

### Running the Application

1. **Run database migrations**
   ```bash
   cd packages/db
   pnpm drizzle-kit push
   ```

2. **Start the development server**
   ```bash
   pnpm dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 💻 Development

### Available Scripts

```bash
pnpm dev           # Start development server
pnpm build         # Build for production
pnpm start         # Start production server
pnpm lint          # Lint code with Biome
pnpm format        # Format code with Biome
```

### Database Management

```bash
cd packages/db

# Generate migrations
pnpm drizzle-kit generate

# Push changes to database
pnpm drizzle-kit push

# Open Drizzle Studio
pnpm drizzle-kit studio
```

### Code Quality

This project uses [Biome](https://biomejs.dev/) for linting and formatting:

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Database powered by [Turso](https://turso.tech/)
- Authentication by [Clerk](https://clerk.com/)

---

<div align="center">
  <p>Made with ❤️ by HpatricioH</p>
  <p>
    <a href="https://github.com/HpatricioH/smart-pantry">GitHub</a>
    •
    <a href="https://smart-pantry.vercel.app">Demo</a>
    •
    <a href="https://github.com/HpatricioH/smart-pantry/issues">Report Bug</a>
  </p>
</div>
