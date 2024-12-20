# Deployment Guide for Frontend (Vue) and Backend (Node.js)

This document provides step-by-step instructions for deploying a Vue.js frontend and a Node.js backend.

---

## Prerequisites

1. **Node.js** and **npm** installed.
2. **Git** installed.
3. **A server** to host the application (e.g., AWS, DigitalOcean, or a local server).
4. **A web server** for hosting static files (e.g., Nginx or Apache).

---

## Folder Structure

```
project-root/
├── web/        # Frontend Vue.js application
├── api/        # Backend Node.js application
```

---

## Step 1: Setup Backend (Node.js)

1. **Navigate to the backend folder:**

   ```bash
   cd api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the `api` folder with the following variables:

   ```env
   PORT=3000
   DB_HOST=your-database-host
   DB_NAME=your-database-name
   DB_USER=your-database-user
   DB_PASSWORD=your-database-password
   JWT_SECRET=your-secret-key
   ```

4. **Start the backend server locally:**

   ```bash
   npm start
   ```

5. **Test the backend locally:**

   Open your browser and navigate to `http://localhost:3000` to ensure the server is running.

6. **Prepare for deployment:**

   If deploying on a production server:

   ```bash
   npm install --production
   ```

   Then use a process manager like **PM2** to run the server in the background:

   ```bash
   npm install -g pm2
   pm2 start index.js --name "backend-api"
   ```

   PM2 will keep the server running even after you log out.

---

## Step 2: Setup Frontend (Vue.js)

1. **Navigate to the frontend folder:**

   ```bash
   cd web
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the `web` folder with the following variables:

   ```env
   BASE_URL=/ <!--- path of directory web -->
   VUE_APP_API_URL=http://localhost:3000/api  <!--- endpoint of api -->
   VUE_APP_API_IMAGE=http://localhost:3000/ <!--- endpoint of api for image -->
   VUE_APP_PDF_LICENSE= 'your_license_key'  <!--- sign up to get a free trial key at https://dev.apryse.com -->
   ```

4. **Build the frontend for production:**

   ```bash
   npm run build
   ```

   This will create a `dist` folder with the production-ready files.

5. **Test the production build locally:**

   Use a simple HTTP server to test:

   ```bash
   npm install -g serve
   serve -s dist
   ```

   Open your browser and navigate to `http://localhost:5000` to view the app.

6. **Prepare for deployment:**

   Copy the contents of the `dist` folder to the web server's document root (e.g., `/var/www/html`).

---

## Step 3: Configure Nginx for Deployment

1. **Install Nginx:**

   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. **Configure Nginx for the frontend and backend:**

   Open the Nginx configuration file:

   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```

   Replace the contents with:

   ```nginx
   server {
       listen 80;

       # Frontend (Vue.js)
       location / {
           root /var/www/html;
           index index.html;
           try_files $uri /index.html;
       }

       # Backend (Node.js)
       location /api/ {
           proxy_pass http://localhost:3000/;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

3. **Restart Nginx:**

   ```bash
   sudo systemctl restart nginx
   ```

---

## Step 4: Deploy the Frontend (Vue.js)

1. **Copy production files to the server:**

   ```bash
   scp -r web/dist/* user@your-server:/var/www/html
   ```

2. **Ensure proper permissions:**

   ```bash
   sudo chown -R www-data:www-data /var/www/html
   sudo chmod -R 755 /var/www/html
   ```

---

## Step 5: Deploy the Backend (Node.js)

1. **Copy backend files to the server:**

   ```bash
   scp -r api/* user@your-server:/var/www/api
   ```

2. **SSH into the server:**

   ```bash
   ssh user@your-server
   ```

3. **Install dependencies on the server:**

   ```bash
   cd /var/www/api
   npm install --production
   ```

4. **Start the backend server with PM2:**

   ```bash
   pm2 start index.js --name "backend-api"
   ```

5. **Check if the backend is running:**

   ```bash
   pm2 status
   ```

---

## Step 6: Verify the Deployment

1. **Frontend:**
   - Visit your server's IP or domain (e.g., `http://your-server-ip/`).
   - Ensure the Vue.js app is loading correctly.

2. **Backend:**
   - Test the API by navigating to `http://your-server-ip/api/` or by using tools like Postman.

---

## Notes

1. **Environment Variables:**
   - Use `.env` files to securely store environment-specific variables.

2. **HTTPS Setup:**
   - Use **Certbot** to enable HTTPS:

     ```bash
     sudo apt install certbot python3-certbot-nginx
     sudo certbot --nginx
     ```

3. **Logs:**
   - Check logs for debugging:
     - Backend: `pm2 logs backend-api`
     - Nginx: `sudo tail -f /var/log/nginx/error.log`

---

You have successfully deployed the Vue.js frontend and Node.js backend!

# Deploying Vue.js Frontend and Node.js Backend on cPanel

This guide provides step-by-step instructions for deploying a Vue.js frontend and a Node.js backend on a server with **cPanel**.

---

## **Deploying Vue.js Frontend on cPanel**

### **1. Build the Vue.js Application**

1. Navigate to the `web` folder (your Vue.js frontend directory):
   ```bash
   cd web
   ```

2. Build the production-ready files:
   ```bash
   npm run build
   ```

   This creates a `dist` folder containing the static files.

---

### **2. Upload Files to cPanel**

1. **Log in to cPanel**:
   - Access your cPanel account at `https://yourdomain.com/cpanel`.

2. **Go to the File Manager**:
   - Navigate to the `public_html` directory (or your desired subdomain folder).

3. **Upload the Files**:
   - Upload all files from the `dist` folder into the `public_html` directory.
   - Make sure the `index.html` is at the root of the folder.

4. **Test the Deployment**:
   - Visit your domain (e.g., `https://yourdomain.com`) to verify the Vue.js app is working.

---

## **Deploying Node.js Backend on cPanel**

### **1. Check for Node.js Support**

1. **Verify Node.js is Enabled**:
   - Log in to cPanel and look for **Setup Node.js App** under the **Software** section.
   - If it is not available, contact your hosting provider to enable Node.js.

---

### **2. Set Up the Node.js Application**

1. **Navigate to Setup Node.js App**:
   - Open **Setup Node.js App** in the cPanel dashboard.

2. **Create a New Application**:
   - Click **Create Application**.
   - Set the following:
     - **Node.js Version**: Select the version required by your app.
     - **Application Mode**: `Production`.
     - **Application Root**: Specify the folder where your backend code resides (e.g., `api`).
     - **Application URL**: Set the subdomain or URL where the app will be accessible.
     - **Application Startup File**: Specify the entry point (e.g., `index.js` or `app.js`).

3. **Install Dependencies**:
   - Open the terminal in cPanel or use SSH to navigate to your application root:
     ```bash
     cd ~/api
     npm install
     ```

4. **Start the Application**:
   - Return to the **Setup Node.js App** page.
   - Click **Run NPM Install** and then **Start Application**.

5. **Test the Backend**:
   - Visit the application URL (e.g., `https://api.yourdomain.com`) to verify the backend is running.

---

## **Configuring Reverse Proxy with Frontend and Backend**

To serve both the frontend and backend from the same domain, you may need to configure Nginx or Apache as a reverse proxy.

### **1. Configure Apache for Reverse Proxy**

1. **Access Apache Configuration**:
   - Open the `.htaccess` file in the `public_html` directory.

2. **Add Proxy Rules**:
   ```apache
   # Proxy requests to /api to the Node.js backend
   RewriteEngine On
   RewriteCond %{REQUEST_URI} ^/api
   RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
   ```

3. **Test the Proxy**:
   - Visit `https://yourdomain.com/api` to confirm it proxies to the backend.

---

## **Testing and Verification**

1. **Frontend**:
   - Visit `https://yourdomain.com` to ensure the Vue.js app is loading correctly.

2. **Backend**:
   - Use a tool like Postman or curl to test backend API endpoints (e.g., `https://yourdomain.com/api`).

---

## Notes

1. **Environment Variables**:
   - Use a `.env` file for storing backend environment variables.
   - Ensure sensitive data like database credentials are secure.

2. **Logs**:
   - View logs in cPanel or the terminal for debugging issues.
     - Node.js logs: Available in the **Setup Node.js App** page.
     - Apache logs: `/var/log/apache2/error.log`.

3. **SSL Configuration**:
   - Use cPanel’s **SSL/TLS** tool to secure your domain with HTTPS.

---

You have successfully deployed the Vue.js frontend and Node.js backend on cPanel!

