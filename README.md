# FASALMOVIES
## Movie Search App

This is a movie search application built using Vite, React, Firebase, and the TMDB API. Users can search for movies, add them to their watchlist, and manage their watchlist through the application.
## Live on
Vercel - https://movie-library-ten-chi.vercel.app/
Netlify - https://fasalmovieslibrary.netlify.app

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
   
   ```bash
   git clone https://github.com/LuvArora443/MovieLibrary.git
   ```

2. Navigate into the project directory.
   
   ```bash
   cd MovieLibrary
   ```

3. Install dependencies using npm.
   
   ```bash
   npm install
   ```

## Configuration

Before running the application, you need to obtain API keys for TMDB and Firebase. Follow the steps below:

### TMDB API Key

1. Go to [TMDB website](https://www.themoviedb.org/documentation/api) and sign up for an account.
2. Once logged in, go to your account settings and navigate to the API section.
3. Generate a new API key.
4. Copy the API key.

### Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. In your Firebase project, go to Project settings.
3. Under the General tab, scroll down to Your apps section.
4. Click on the `</>` icon to add a new web app to your project.
5. Copy the Firebase config object.

### Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

```
VITE_API_KEY = YOUR_TMDB_API_KEY
VITE_FIREBASE_API_KEY = YOUR_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN = YOUR_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID = YOUR_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET = YOUR_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID = YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID = YOUR_FIREBASE_APP_ID
```

Replace `YOUR_TMDB_API_KEY`, `YOUR_FIREBASE_API_KEY`, and other placeholders with your actual API keys and Firebase configuration.

## Usage

After configuring the environment variables, you can run the project locally using the following command:

```bash
npm run dev
```

This will start the development server. Open your browser and navigate to `http://localhost:5173` to view the application.
