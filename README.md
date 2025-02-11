![Alt text](screenShot.png)

# SendGrid Email Sender

This project demonstrates how to send emails using SendGrid in a Node.js application.

## Features
- Sends emails using the SendGrid API.
- Uses environment variables to store sensitive credentials.
- Supports single sender verification.

## Prerequisites
- Node.js installed on your system.
- A SendGrid account.
- A verified sender email in SendGrid.

## Setup Instructions
### 1. Clone the Repository
```sh
git clone https://github.com/shafeeq777444/SendGrid-Email-Sender.git
cd sendgrid-email-sender
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```
GRIDAPI=your-sendgrid-api-key
SENDER=your-verified-sender-email@example.com
```
🚨 **Important:** Do not push `.env` to GitHub. Add it to `.gitignore` to keep your API key secure.

### 4. Run the Application
```sh
node server.js
```

## Important Notes
- **Verified Sender Required:** SendGrid will reject emails from unverified senders. Ensure the email in `SENDER` is verified.
- **Use .env File:** Never hardcode API keys in your source code.
- **Domain Authentication:** If using a custom domain, authenticate it in SendGrid.

## License
This project is licensed under the MIT License.


