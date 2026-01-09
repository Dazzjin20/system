# pet_adoption_platform_cats_and_dogs

## How to run locally
1. Copy `backend/.env.example` to `backend/.env` and fill the values.

2. Start the backend:
```bash
cd backend
npm install
npm run dev
```

3. Frontend is static files in the `frontend/` folder — open `frontend/index.html` in a browser or serve it with a static host.

## Deployment notes
- Use MongoDB Atlas (M0 free) and set `MONGO_URI` in your hosting provider's environment variables.
- Deploy backend to Render, Railway, or similar. Ensure `PORT` is read from `process.env.PORT` (already handled).
- Deploy frontend to Netlify or Vercel and set `FRONTEND_URL` environment variable on the backend to restrict CORS.
- Do not commit real secrets to the repo. Use the hosting provider's environment variable settings.

See `backend/.env.example` for the environment variables to configure.

### Render (recommended) 🔧
1. Create a free account at https://render.com and connect your GitHub repository.
2. Create a new **Web Service** → Select the repository and branch (e.g., `main`).
3. Set the **Environment** to `Node` (or let Render detect it) and use the following commands:
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
4. Add environment variables in the Render dashboard for the service:
   - `MONGO_URI` (your MongoDB Atlas connection string)
   - `JWT_SECRET` (a strong secret)
   - `FRONTEND_URL` (your frontend URL e.g., `https://your-site.netlify.app`)
   - `NODE_ENV=production`
5. (Optional) Set the health check path to `/health` in Render's service settings.
6. Deploy and monitor the logs in Render; the app will show "MongoDB connected successfully" and the port log when ready.

If you want, I can prepare a `render.yaml` manifest next to automate this configuration.

### Vercel frontend setup
1. Create a free account at https://vercel.com and connect your GitHub repository.
2. Create a new project, point it to this repository and set the **Build Command** to `npm run build:frontend` and **Output Directory** to `frontend`.
3. Add an environment variable for the frontend project:
   - `API_BASE_URL` = `https://your-backend.onrender.com/api` (update after Render gives you a domain)
4. Deploy — Vercel will run `npm run build:frontend` which writes `frontend/scripts/config.js` with the right URL before publishing.

Note: I can also create a `vercel` project for you via the Vercel CLI if you provide access, or I can guide you through the GUI steps.