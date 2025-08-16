# TaskHub Pro - Modern Task Management Application

A beautiful and feature-rich task management application built with React, TypeScript, Vite, and Tailwind CSS. This project demonstrates modern web development practices including component architecture, state management, API integration, and responsive design.

![TaskHub Pro](https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop&crop=center)

## 🚀 Features

### Core Functionality
- ✅ **Task Management**: Create, read, update, and delete tasks
- 🏷️ **Priority Levels**: Assign priorities (Low, Medium, High) to tasks
- 🔍 **Smart Filtering**: Filter tasks by status (All, Active, Completed)
- 💾 **Local Storage**: Automatic persistence of tasks across sessions
- 🔔 **Toast Notifications**: User-friendly feedback for all actions

### Modern Design
- 🎨 **Beautiful UI**: Modern gradient-based design system
- 📱 **Responsive Layout**: Works perfectly on mobile, tablet, and desktop
- 🌓 **Dark/Light Mode**: Theme switcher with system preference detection
- ✨ **Smooth Animations**: Elegant transitions and hover effects
- 🎯 **Accessible**: Built with accessibility best practices

### Technical Excellence
- ⚡ **Lightning Fast**: Built with Vite for instant development and builds
- 🔒 **Type Safe**: Full TypeScript implementation
- 🧩 **Component Architecture**: Reusable and modular component design
- 🌐 **API Integration**: External API data fetching with loading states
- 📊 **Data Visualization**: Interactive cards and statistics

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Lucide React** - Beautiful and consistent icons
- **React Router** - Client-side routing
- **React Hook Form** - Efficient form handling
- **Sonner** - Beautiful toast notifications

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (shadcn/ui)
│   ├── Card.tsx        # Custom card component
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── TaskManager.tsx # Task management interface
│   ├── ApiDataDisplay.tsx # API data visualization
│   └── HeroSection.tsx # Landing hero section
├── context/            # React context providers
│   └── ThemeContext.tsx # Theme management
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.ts # localStorage hook
│   └── use-mobile.tsx  # Mobile detection hook
├── pages/              # Page components
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility functions
└── index.css           # Global styles and design system
```

## 🎨 Design System

The application features a custom design system built on top of Tailwind CSS:

- **Colors**: Modern purple gradient palette with semantic tokens
- **Typography**: Consistent font scales and weights
- **Spacing**: Harmonious spacing system
- **Shadows**: Elegant shadow system for depth
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd taskhub-pro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Features Walkthrough

### Task Management
- **Add Tasks**: Click the "Add Task" button or press Enter
- **Set Priority**: Choose from Low, Medium, or High priority levels
- **Complete Tasks**: Check the checkbox to mark tasks as complete
- **Filter Tasks**: Use the filter buttons to view All, Active, or Completed tasks
- **Delete Tasks**: Remove tasks with the delete button

### API Integration
- **View Users**: Browse through user profiles fetched from JSONPlaceholder API
- **Read Posts**: Explore blog posts with search functionality
- **Search**: Real-time search across all API data
- **Pagination**: Navigate through large datasets efficiently

### Theme Management
- **Auto Detection**: Automatically detects system theme preference
- **Manual Toggle**: Switch between light and dark modes
- **Persistence**: Remembers your theme choice across sessions

## 🔧 Customization

### Design System
Modify the design tokens in `src/index.css`:

```css
:root {
  --primary: 262 83% 58%;        /* Primary color */
  --gradient-primary: ...;       /* Primary gradient */
  --shadow-elegant: ...;         /* Shadow styles */
  /* Add your custom tokens */
}
```

### Components
All components are built with composition in mind. Extend or modify them in the `src/components` directory.

## 🧪 Testing

The application includes:
- Type checking with TypeScript
- ESLint for code quality
- Responsive design testing

Run type checking:
```bash
npm run type-check
```

Run linting:
```bash
npm run lint
```

## 🚀 Deployment

The application can be deployed to various platforms:

- **Vercel**: `npm run build` and deploy the `dist` folder
- **Netlify**: Connect your repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for automated deployments

## 📋 Assignment Requirements Fulfilled

✅ **Project Setup**: React + Vite + Tailwind CSS + TypeScript  
✅ **Component Architecture**: Reusable Button, Card, Navbar, Footer components  
✅ **State Management**: useState, useEffect, useContext, custom hooks  
✅ **Task Management**: Full CRUD operations with filtering  
✅ **API Integration**: JSONPlaceholder API with error handling  
✅ **Responsive Design**: Mobile-first design approach  
✅ **Theme Management**: Light/dark mode with persistence  
✅ **Modern Styling**: Custom design system with gradients and animations  

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the PLP Academy curriculum and is for educational purposes.

## 🙏 Acknowledgments

- **PLP Academy** for the comprehensive curriculum
- **shadcn/ui** for the excellent component library
- **Tailwind CSS** for the utility-first approach
- **React Team** for the amazing framework

---

Built with ❤️ for PLP Academy | © 2024 TaskHub Pro