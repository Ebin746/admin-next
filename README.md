# Next.js Admin Panel 🧑‍💻

[![Version](https://img.shields.io/badge/version-0.1.0-blue)](https://github.com/yourusername/admin)
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/yourusername/admin/blob/main/LICENSE)
[![Build Status](https://img.shields.io/github/workflow/status/yourusername/admin/CI/main?label=build)](https://github.com/yourusername/admin/actions)

A robust and user-friendly admin panel built with Next.js, Tailwind CSS, and Redux for managing products.

## Table of Contents

- [Project Overview](#project-overview)
  - [Description](#description)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development Guide](#development-guide)
  - [Local Setup](#local-setup)
  - [Building from Source](#building-from-source)
  - [Testing](#testing)
  - [Deployment](#deployment)
- [Usage Documentation](#usage-documentation)
  - [Basic Usage](#basic-usage)
  - [API Reference](#api-reference)
  - [Screenshots/Diagrams](#screenshotsdiagrams)
- [Contributing](#contributing)
  - [Contribution Workflow](#contribution-workflow)
  - [Code Style Guidelines](#code-style-guidelines)
  - [Issue/Bug Reporting](#issuebug-reporting)
  - [Pull Request Submission](#pull-request-submission)
- [License](#license)
- [Acknowledgments](#acknowledgments)


## Project Overview

### Description

This Next.js application provides a comprehensive admin panel for managing products.  It features a clean user interface, robust data handling, and secure authentication.  The application allows administrators to add, edit, delete, and view products, enhancing efficiency and organization.

### Features

- 🎯 Add new products with image uploads 🖼️
- ✏️ Edit existing product details 📝
- 🗑️ Delete products  
- 📊 View all products in a user-friendly table
- 🔒 Secure authentication with Google OAuth 
- 🔄 Real-time updates using Redux

### Tech Stack

| Category      | Technology          |
|---------------|----------------------|
| Frontend      | Next.js, React, Tailwind CSS, React-Redux, react-icons |
| Backend       | Next.js API Routes, Mongoose, MongoDB |
| State Management | Redux Toolkit         |
| File Upload    | UploadThing          |
| Authentication | NextAuth.js, Google OAuth |


## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed (version 16 or higher recommended)
- MongoDB instance running (adjust connection string in `src/libs/MongoConnect.ts` if needed).  Ensure MongoDB is accessible from your development environment.
- A Google Cloud Platform project with OAuth credentials (for Google authentication).


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/admin.git
   cd admin
Install dependencies:

npm install
Create a .env file in the root directory with the following environment variables. Replace placeholders with your actual credentials:

NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
MONGODB_URL=YOUR_MONGODB_URI
googleClientId=YOUR_GOOGLE_CLIENT_ID
googleClientSecret=YOUR_GOOGLE_CLIENT_SECRET
Start the development server:

npm run dev
Development Guide
Local Setup
Follow the steps in the Getting Started section.

Building from Source
npm run build
Testing
<!-- Placeholder for testing instructions -->
This project currently lacks dedicated unit/integration tests. Adding comprehensive testing is a high-priority task.

Deployment
<!-- Placeholder for deployment instructions -->
Deploy to Vercel or your preferred platform. This project is configured for deployment to Vercel using the Next.js built-in features. Consider integrating a CI/CD pipeline (e.g., GitHub Actions) for automated builds and deployments. Deployment instructions will be added soon.

Usage Documentation
Basic Usage
After deploying or running locally, access the admin panel via the specified URL. Log in using Google authentication. Then you can manage products.

API Reference
Endpoints:

/api/get_products: GET - Retrieves all products.
/api/add_product: POST - Adds a new product. Example request body:
{
  "imgSrc": "url-to-image",
  "fileKey": "uploadthing-key",
  "name": "Product Name",
  "price": 19.99,
  "category": "Electronics"
}
/api/delete_product/[id]: DELETE - Deletes a product by ID.
/api/edit_products/[id]: PUT - Updates a product by ID.
/api/uploadthing: POST - Handles file uploads via UploadThing. DELETE to delete files.
<!-- Placeholder for more detailed API documentation -->
Screenshots/Diagrams
<!-- SCREENSHOT: Login screen --> <!-- SCREENSHOT: Product list view --> <!-- SCREENSHOT: Product creation form -->
Contributing
Contribution Workflow
Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with clear, concise messages.
Push your branch to your forked repository.
Create a pull request to the main repository.
Code Style Guidelines
Follow standard JavaScript/TypeScript conventions and the style enforced by ESLint (.eslintrc.json).

Issue/Bug Reporting
Use the GitHub issue tracker to report bugs or suggest features. Please provide detailed information, including steps to reproduce the issue and any relevant error messages.

Pull Request Submission
Ensure your code is well-documented, follows the code style guidelines, and passes any automated tests before submitting a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Copyright (c) 2024 [Your Name/Organization]

Acknowledgments
Thanks to the creators of Next.js, Tailwind CSS, Redux Toolkit, Mongoose, MongoDB, and UploadThing for providing such great tools. Inspiration for specific features may come from [List any other projects that inspired this project] [List any significant contributors here]
