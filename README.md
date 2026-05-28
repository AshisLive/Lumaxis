# Lumaxis

A modern React.js web application built with Vite.

## 🚀 Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Getting Started

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/lumaxis.git

# Navigate into the project
cd lumaxis

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your values
```

### Development

```bash
npm run dev
```

App will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (first time)
vercel

# Deploy to production
vercel --prod
```

### Option 2: Via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**
5. Done! 🎉

### Environment Variables on Vercel

Add your env variables in:
> Vercel Dashboard → Project → Settings → Environment Variables

All `VITE_` prefixed variables are automatically available in the frontend.

## 📁 Project Structure

```
lumaxis/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── App.jsx      # Root component
│   └── main.jsx     # Entry point
├── .env.example     # Environment variable template
├── vercel.json      # Vercel deployment config
├── vite.config.js   # Vite configuration
└── package.json
```
