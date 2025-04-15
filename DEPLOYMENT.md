# Swastik Platinum - Complete Deployment Guide

This document will guide you through deploying the entire Swastik Platinum project, including frontend, backend, and database.

## Deployment Overview

1. Database: MongoDB Atlas (cloud database)
2. Backend: Render.com (Express.js server)
3. Frontend: Vercel or Netlify (React application)

## Step 1: Prepare Your Code for GitHub

First, make sure your project is in a GitHub repository:

1. Create a new repository on GitHub
2. Initialize Git in your local project folder:
```bash
git init
git add .
git commit -m "Initial commit for deployment"
git branch -M main
git remote add origin https://github.com/your-username/swastik-platinum.git
git push -u origin main
```

## Step 2: Set Up MongoDB Atlas

Follow the detailed instructions in `deployment/mongodb-atlas-setup.md`.

After setup, you should have a MongoDB connection string like:
```
mongodb+srv://swastik_admin:yourpassword@cluster0.xxxxx.mongodb.net/swastik-platinum?retryWrites=true&w=majority
```

## Step 3: Deploy the Backend to Render.com

Follow the detailed instructions in `deployment/render-backend-setup.md`.

1. Create a Render.com account
2. Create a new Web Service using your GitHub repository
3. Configure:
   - Build Command: `npm install`
   - Start Command: `node simple-server.js`
   - Environment Variables:
     - MONGODB_URI: Your MongoDB Atlas connection string
     - PORT: 10000
     - NODE_ENV: production

After deployment, you'll get a URL like: `https://swastik-platinum-api.onrender.com`

## Step 4: Deploy the Frontend to Vercel or Netlify

### Option A: Vercel (Recommended)

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI: `npm i -g vercel`
3. Run `vercel login` to authenticate
4. In your project directory, run:
   ```bash
   vercel
   ```
   - Select "No" for using project settings
   - Set build output directory to `dist`
   - Set the environment variable:
     - VITE_API_URL: Your Render backend URL with `/api` (e.g., https://swastik-platinum-api.onrender.com/api)

5. After deployment finishes, you'll get a URL like: `https://swastik-platinum.vercel.app`

### Option B: Netlify

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect to your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Add the environment variable:
   - VITE_API_URL: Your Render backend URL with `/api`

6. Click "Deploy site"
7. After deployment, you'll get a URL like: `https://swastik-platinum.netlify.app`

## Step 5: Test Your Deployed Application

1. Visit your frontend URL
2. Test the form submission function
3. Test the admin page at `/admin` (password: MegaplexPrime)
4. Check if the enquiries are being saved and can be viewed/deleted

## Troubleshooting Common Issues

### CORS Errors
If you're getting CORS errors, update the CORS configuration in your backend:
1. Go to Render dashboard
2. Find your backend service
3. Add the environment variable:
   - `FRONTEND_URL`: Your frontend URL (e.g., https://swastik-platinum.vercel.app)

### MongoDB Connection Issues
1. Check if your IP is allowed in MongoDB Atlas Network Access
2. Verify that your connection string is correct in Render environment variables

### Form Submission Not Working
1. Check browser console for errors
2. Verify the API URL in the frontend
3. Test the API endpoint directly using a tool like Postman

## Sharing Your Project

For your interview, share the following links:
1. Live Site: Your Vercel/Netlify URL
2. Admin Dashboard: Your Vercel/Netlify URL + `/admin` (password: MegaplexPrime)
3. GitHub Repository: For code review

Good luck with your interview!