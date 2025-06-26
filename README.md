# HWapp

A React Native app using Appwrite for authentication, built with Expo Router and TypeScript.

## Features

-   User registration and login with Appwrite
-   Protected dashboard route
-   Guest access
-   Error handling and loading states
-   React Native + Expo + TypeScript + NativeWind (Tailwind CSS for RN)

## Getting Started

### Prerequisites

-   Node.js & npm
-   Expo CLI (`npm install -g expo-cli`)
-   Appwrite instance (self-hosted or cloud)

### Installation

1. Clone the repository:
    ```bash
    git clone <repo-url>
    cd HWapp
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Configure your Appwrite endpoint and project in `lib/appwrite.ts` (not included here).

### Running the App

```bash
npx expo start
```

Scan the QR code with Expo Go or run on an emulator.

## Project Structure

-   `app/` - App screens (auth, protected, etc.)
-   `contexts/` - React context for user/auth state
-   `hooks/` - Custom hooks (e.g., `useUser`)
-   `lib/` - Appwrite client setup

## Usage

-   Register a new account or log in with existing credentials
-   On successful login, you are redirected to the dashboard
-   Use the "Guest" link for guest access

## Customization

-   Update Appwrite config in `lib/appwrite.ts`
-   Style with Tailwind classes via NativeWind

## License

MIT
