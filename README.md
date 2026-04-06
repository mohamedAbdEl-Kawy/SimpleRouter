# SimpleRouter

A modern Angular routing demonstration application showcasing page navigation, component organization, and Bootstrap styling. This project exemplifies best practices for structuring a single-page application with multiple routes and reusable components.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload whenever you modify source files.

## 📋 Project Overview

### Pages
- **Home** - Landing page with welcome content
- **About** - Information about the application
- **Products** - Product listing and management
- **Images** - Image gallery view
- **Login** - User authentication page
- **Register** - User registration page
- **Not Found** - 404 error page for invalid routes

### Key Components
- **Navbar** - Navigation header with route links
- **Products List** - Displays and manages product data
- **Add Product** - Form component for adding new products
- **User Info** - User profile display components
  - User Name
  - User Avatar

### Architecture
This project uses **Angular standalone components** (Angular 14+ pattern), reducing the need for NgModule declarations and enabling a more flexible component structure.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server on `http://localhost:4200/` |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run watch` | Build in watch mode for development |
| `npm test` | Run unit tests with Karma |

## 📦 Tech Stack

- **Angular** v20.3.0 - Modern web framework
- **Bootstrap** v5.3.8 - Responsive UI framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** v7.8.0 - Reactive programming library
- **Angular Router** - Client-side routing

## 📁 Project Structure

```
src/
├── app/
│   ├── components/        # Reusable UI components
│   │   ├── navbar/       # Navigation component
│   │   ├── products-list/
│   │   ├── add-product/
│   │   └── user-*/
│   ├── pages/            # Route page components
│   │   ├── home/
│   │   ├── about/
│   │   ├── login/
│   │   ├── register/
│   │   ├── products/
│   │   ├── images/
│   │   └── notfound/
│   ├── utils/            # Shared utilities
│   ├── app.routes.ts     # Route configuration
│   ├── app.config.ts     # App configuration
│   └── app.ts            # Root component
├── styles.css            # Global styles
└── index.html            # HTML entry point
```

## 🔧 Development

### Generate New Component

Use Angular CLI to scaffold components:

```bash
ng generate component components/my-component
```

For a complete list of available schematics:

```bash
ng generate --help
```

### Build for Production

```bash
npm run build
```

The production build optimizes your application for performance and is available in the `dist/` directory.

## 🧪 Testing

Run unit tests with the Karma test runner:

```bash
npm test
```

## For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
