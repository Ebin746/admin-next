# Next.js Admin Panel 🧑‍💻

[![Version](https://img.shields.io/badge/version-0.1.0-blue)](https://github.com/yourusername/admin)
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/yourusername/admin/blob/main/LICENSE)
[![Build Status](https://img.shields.io/github/workflow/status/yourusername/admin/CI/main?label=build)](https://github.com/yourusername/admin/actions)

A robust and user-friendly admin panel built with Next.js, Tailwind CSS, and Redux for managing products.

## Features

🔧 **Core Features**
- Add new products with image uploads
- Edit existing product details
- Delete products
- View all products in a user-friendly table

🚀 **Deployment**
- Containerized with Docker
- Easily deployable to Vercel (Next.js integration)

🔒 **Security**
- Secure authentication with Google OAuth


## Tech Stack

| Category       | Technologies                          | Documentation                                     |
|----------------|---------------------------------------|-------------------------------------------------|
| Frontend       | React, Next.js, Tailwind CSS, React-Redux, react-icons | [React](https://reactjs.org/), [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Redux Toolkit](https://redux-toolkit.js.org/), [React Icons](https://react-icons.github.io/react-icons/) |
| Backend        | Next.js API Routes, Mongoose, MongoDB | [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction), [Mongoose](https://mongoosejs.com/), [MongoDB](https://www.mongodb.com/) |
| File Upload    | UploadThing          | [UploadThing](https://uploadthing.com/) |
| Authentication | NextAuth.js, Google OAuth | [NextAuth.js](https://next-auth.js.org/), [Google OAuth](https://developers.google.com/identity/protocols/oauth2) |


## Quick Start

**Prerequisites:**
- Node.js ^18.0.0
- MongoDB 6.0+
- A Google Cloud Platform project with OAuth credentials

**Installation:**
```bash
git clone [repo-url]
cd project
npm install
Environment Variables (.env):

NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
MONGODB_URL=YOUR_MONGODB_URI
googleClientId=YOUR_GOOGLE_CLIENT_ID
googleClientSecret=YOUR_GOOGLE_CLIENT_SECRET
PORT=3000
Development
Commands:

npm run dev    # Start development server
npm run build  # Create production build
npm run lint   # Run ESLint
Testing: The project currently utilizes the Next.js testing framework for various testing levels including unit, integration and end-to-end. Expansion of the test suite is ongoing.

API Reference
| Method | Endpoint | Body | Response | |--------|----------------|------------------------|-----------------------| | POST | /api/users | { name: "John" } | 201 Created | | GET | /api/get_products | {} | [...products] | | POST | /api/add_product | { imgSrc: "url", fileKey: "key", name: "Product", price: 19.99, category: "Electronics" } | 200 OK | | DELETE | /api/delete_product/[id] | {} | 200 OK | | PUT | /api/edit_products/[id] | { name: "New Name", category: "New Category", price: 29.99 } | 200 OK | | POST | /api/uploadthing | file | { url, key } | | DELETE | /api/uploadthing | { fileKey: "key" } | 200 OK |

Deployment
Containerization (Dockerfile):

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
Deployment Platforms: This application is optimized for deployment on Vercel leveraging Next.js's built-in capabilities. Adapting to other platforms like Heroku or AWS is straightforward.

Contributing
Branch Naming: Use feat/, fix/, or chore/ prefixes (e.g., feat/add-user-auth).
Commit Messages: Follow conventional commit message format.
Pull Requests: Ensure clear descriptions, relevant screenshots/gifs where applicable.
License
This project is licensed under the MIT License - see the LICENSE file for details
