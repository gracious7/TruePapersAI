# TruePapersAI

##### Problem Statement
Background: The current manual process of verifying documents for various official purposes is time-consuming, error-prone, and lacks efficiency. This process involves verification of numerous documents such as birth certificates, academic transcripts, identification cards, and experience certificates. There is a pressing need for an online solution that automates and secures the document verification process. Description: This problem statement addresses the urgent requirement for an online platform, empowered by artificial intelligence (AI) and blockchain technology, to automate document verification for all official purposes. The proposed solution aims to establish a user-friendly portal accessible to issuing authorities (e.g., schools, universities, employers), verifying authorities (government offices, banks, legal entities), and individuals. Issuing authorities will generate digital certificates for individuals, including birth certificates, academic transcripts, and experience certificates. These certificates will be securely stored on the blockchain for tamper-proof authenticity. Individuals will have access to the portal to view all documents issued in their name. Expected Solution: Participants are tasked with developing a comprehensive portal that facilitates the generation, verification, and accessibility of essential documents for any official purpose. The platform should utilize Al algorithms to efficiently verify the authenticity of uploaded documents. Verifying authorities will have access to a secure interface to validate submitted documents against predefined criteria. Individuals will be able to access the portal to view all documents issued to their name. The implementation of blockchain technology will ensure the immutability and integrity of the verified certificates. Ultimately, the solution aims to streamline the document verification process, reducing time and resources required for all stakeholders involved in official documentation.

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
