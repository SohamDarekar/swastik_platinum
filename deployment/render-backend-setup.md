# Backend Deployment to Render.com

## 1. Create a Render.com Account

1. Go to [Render.com](https://render.com/) and sign up for a free account
2. Verify your email and complete the registration

## 2. Create a New Web Service

1. From your Render dashboard, click "New +" and select "Web Service"
2. Connect your GitHub account (or deploy from a public repository)
3. Select your repository with the Swastik Platinum project
4. Configure your web service:
   - Name: swastik-platinum-api
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node simple-server.js`
   - Plan: Free

## 3. Set Environment Variables

1. Scroll to the "Environment" section
2. Add the following environment variables:
   - MONGODB_URI: Your MongoDB Atlas connection string
   - PORT: 10000 (Render uses this port internally)
   - NODE_ENV: production

## 4. Deploy Your Service

1. Click "Create Web Service"
2. Wait for the deployment to complete (5-10 minutes)
3. Once deployed, you'll get a URL like: https://swastik-platinum-api.onrender.com

## 5. Test Your API

Make sure your API is accessible by testing the health endpoint:
```
https://swastik-platinum-api.onrender.com/api/health
```