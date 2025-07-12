# Adam AI - Your Personal AI Assistant

This is a personal AI assistant designed to enhance productivity through intelligent task management, smart automation, and context-aware assistance.

Devpost link - https://devpost.com/software/adam-y0g7d2


## AI Agent Preview

![chat_response](https://github.com/user-attachments/assets/4682e07b-0218-4c64-bf7b-79706273158e)



## Key Features

- **Google Authentication**: Secure and easy login using Google accounts. The authentication flow is handled via a backend service, with the frontend managing tokens and user sessions.
- **Interactive Chat Interface**: A real-time chat interface allows users to communicate with the AI assistant. Messages are sent to a backend API, and the conversation is displayed in a user-friendly format.
- **Dashboard**: After logging in, users are directed to a dashboard that serves as the main hub for all features. It displays user information and provides access to various tools.
- **Automations**: The application includes features for managing automations, such as:
  - **Email Automation**: Schedule and automate email campaigns.
  - **DocuSign Integration**: Automate document signing workflows.
  - **Custom Workflows**: Create personalized automation workflows.
- **Modern Tech Stack**: Built with Next.js, React, TypeScript, and Tailwind CSS, ensuring a fast, scalable, and maintainable codebase.
- **Responsive Design**: The UI is designed to be responsive and visually appealing, with a focus on user experience.

## Project Structure

The project is organized into the following main directories:

- `src/app/`: Contains the main application pages, including the landing page, login, authentication callback, and dashboard.
- `src/components/`: Reusable React components, such as the Google login button and UI elements.
- `src/services/`: Houses the `AuthService`, which encapsulates all authentication-related logic.
- `src/config/`: Configuration files, such as authentication settings.
- `public/`: Static assets like images and icons.

## Getting Started

To run the application locally, follow these steps:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to `http://localhost:3000` to see the application in action.
