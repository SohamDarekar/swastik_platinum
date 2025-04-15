# MongoDB Atlas Setup Guide

## 1. Create a MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account

## 2. Create a New Project

1. After logging in, click "Projects" in the top navigation
2. Click "New Project"
3. Name it "Swastik-Platinum" and click "Next"
4. Add yourself as the project owner and click "Create Project"

## 3. Create a Database Cluster

1. Click "Build a Database"
2. Select "FREE" shared cluster
3. Choose AWS as the cloud provider and a region closest to your users (e.g., Mumbai for India)
4. Click "Create Cluster"

## 4. Set Up Database Security

1. Create a database user:
   - Username: swastik_admin
   - Password: (create a secure password)
   - User Privileges: Read and write to any database
   - Click "Create User"

2. Set up network access:
   - Click "Network Access" in the left menu
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Confirm by clicking "Confirm"

## 5. Get Your Connection String

1. Click "Database" in the left menu
2. Click "Connect" on your cluster
3. Select "Connect your application"
4. Copy the connection string, which looks like:
   ```
   mongodb+srv://swastik_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password

## 6. Test the Connection

Save this connection string. You'll use it for your backend deployment.