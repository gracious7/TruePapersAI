# TruePapersAI

TruePapersAI is a web and API-based application designed to provide AI-powered insights and services related to papers and research content. This repository contains both the web frontend and the backend API, managed using Turborepo for efficient development and deployment.

## Features
- Web application for interacting with the AI services.
- API backend to process requests and provide data.
- Built with modern technologies like TypeScript, Next.js, and TailwindCSS.

## Prerequisites
Before starting the project, ensure you have the following installed:
- Node.js (v18+ recommended)
- Yarn package manager
- Turbo Repo (if you don't have it, install it using `npm install -g turbo`)

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gracious7/TruePapersAI.git
   cd TruePapersAI
   ```

2. Install dependencies for both the web and API:
   ```bash
   yarn install
   ```

3. Run the development servers:

   - **Frontend (Web)**:  
     To run the web application, use:
     ```bash
     yarn workspace web dev
     ```

   - **Backend (API)**:  
     To run the API backend, use:
     ```bash
     yarn workspace api dev
     ```

   - **Both (Web and API)**:  
     To run both the web and API servers simultaneously using Turbo, use:
     ```bash
     turbo run dev
     ```

   The web app will typically be available at [http://localhost:3000](http://localhost:3000), and the API will be accessible on a separate port as defined in the project.

## Development Workflow
- **Web App**: Located in the `apps/web` directory.
- **API**: Located in the `apps/api` directory.

You can modify and run both parts independently for development purposes using the commands above.

## Deployment
For production deployment, make sure to build the web and API apps separately using:
```bash
yarn build
```

Then deploy the apps to your chosen platform, ensuring to configure environment variables and production build settings.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
