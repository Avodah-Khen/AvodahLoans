# AvodahLoans

## Technology Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Vite / existing frontend tooling

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose (where configured)

### Development Tools
- Git
- GitHub
- npm

## Project Structure

```text
AvodahLoans/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   ├── .env.example
│   └── package.json
│
├── apps/
│   └── api/
│
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- MongoDB

### 1. Clone the Repository

```bash
git clone https://github.com/Avodah-Khen/AvodahLoans.git
cd AvodahLoans
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Run the frontend using the development script configured in `frontend/package.json`.

### 3. Backend Setup

Open another terminal:

```bash
cd backend
npm install
```

Create a `.env` file using `.env.example` and configure your local environment.

Example:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/avodahloans
CLIENT_URL=http://localhost:5173
```

Start the backend using the script configured in `backend/package.json`.

## Environment Variables

Never commit actual environment credentials, database passwords, API keys or secret tokens.

Use `.env.example` as a reference for the required environment variables.

## Security

The project should follow secure development practices, including:

- Server-side input validation.
- Secure environment variable management.
- Restricted CORS configuration.
- Safe database operations.
- Appropriate error handling.
- Protection against spam and excessive requests.

## Development Status

AvodahLoans is under active development. Features, backend services, integrations and deployment configurations may evolve as development progresses.

## Repository

**Organization:** Avodah & Khen

**GitHub:** https://github.com/Avodah-Khen/AvodahLoans