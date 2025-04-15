# Full-Stack Deployment Guide for Swastik Platinum

This guide provides step-by-step instructions for deploying the Swastik Platinum project as a **unified full-stack application** with all features working, including the database, server, and frontend.

## Overview

We'll use Render.com to deploy the entire stack as a single application. This approach ensures that:

- Your frontend is served by the same server that handles API requests
- Your MongoDB database is properly connected
- All functionality works just like your local `npm run dev:simple` setup

## Step 1: Prepare MongoDB Atlas Database

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create an account if you don't have one
2. Set up a free shared cluster:

   - Click "Build a Database"
   - Select the free tier (M0)
   - Choose a provider (AWS is recommended) and region (choose one closest to your target audience)
   - Click "Create Cluster"

3. Set up database security:

   - Create a database user with a strong password
   - Under Network Access, click "Add IP Address" and select "Allow Access from Anywhere" (you can restrict this later)

4. Get your connection string:
   - From your cluster dashboard, click "Connect"
   - Select "Connect your application"
   - Copy the connection string, which looks like:
     ```
     mongodb+srv://soh4m:NewL!ght_2911@swastik-platinum.ldaunyf.mongodb.net/swastik-platinum?retryWrites=true&w=majority&appName=swastik-platinum
     ```
   - Replace `<password>` with your actual database user password

## Step 2: Prepare Your Project for Deployment

1. Make sure all your changes to `simple-server.js` and `package.json` are saved
2. Commit all your changes to git:
   ```bash
   git add .
   git commit -m "Prepare for full-stack deployment"
   ```
3. Push your project to GitHub:
   ```bash
   git push origin main
   ```

## Step 3: Deploy to Render.com

1. Create a Render.com account at [render.com](https://render.com) if you don't have one
2. From your dashboard, click "New +" and select "Web Service"
3. Connect your GitHub account and select your repository
4. Configure your web service:

   - **Name**: swastik-platinum
   - **Environment**: Node
   - **Region**: Choose one close to your target audience
   - **Branch**: main (or your default branch)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Plan**: Free (or choose a paid plan for better performance)

5. Add environment variables:

   - Click "Advanced" to expand advanced options
   - Add the following environment variables:
     - **MONGODB_URI**: Your MongoDB Atlas connection string (from Step 1)
     - **NODE_ENV**: `production`
     - **PORT**: `10000` (Render uses this port internally)

6. Click "Create Web Service"

## Step 4: Monitor and Test the Deployment

1. Wait for your application to deploy (this can take 5-10 minutes for the first deployment)
2. Once deployed, you'll get a URL like `https://swastik-platinum.onrender.com`
3. Test your deployment:
   - Visit the main site URL to see your frontend
   - Try using the enquiry form to make sure data is being saved
   - Visit `/admin` (with password: MegaplexPrime) to check if you can view submitted enquiries

## Step 5: Set Up Automatic Deployments (Optional)

By default, Render will automatically deploy new changes when you push to your GitHub repository. You can configure these settings in the Render dashboard.

## Troubleshooting

### If your application fails to start:

1. Check the Render logs for error messages
2. Common issues:
   - MongoDB connection failure: Verify your connection string and network access settings
   - Build failures: Check if all dependencies are properly included in package.json

### If form submissions or admin page don't work:

1. Open your browser's developer console to check for errors
2. API connection issues:
   - Make sure all API URLs in the code use relative paths ('/api/...') when in production
   - Check the CORS configuration in your server
   - Verify the API endpoints are correctly defined and reachable
3. If you see "NetworkError" when attempting to fetch resources:
   - This often means your API routes aren't configured correctly for production
   - Ensure the server.js file properly handles API routes before serving the static frontend

## For Your Interview

Share the Render URL with your interviewers and let them know:

1. All features are fully functional, including form submissions and the admin panel
2. The admin panel can be accessed at `/admin` with password: MegaplexPrime
3. The project demonstrates your ability to deploy a full-stack application with database connectivity
