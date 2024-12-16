# National Debt Dashboard

## Project Description

The National Debt Dashboard provides real-time insights into the U.S. national debt. This web application fetches data from various external APIs and presents it in a user-friendly dashboard. Users can explore data regarding public debt transactions, debt subject to limits, operating cash balance, and other financial data from the U.S. Treasury Department.

The application visualizes the data using interactive charts, making it easier for users to understand the trends in national debt over time.

## Target Browsers

This application is designed to work on modern desktop and mobile browsers, including:
- Google Chrome (latest version)
- Mozilla Firefox (latest version)
- Safari (latest version)
- Microsoft Edge
- Mobile devices on iOS (Safari) and Android (Chrome)

## Developer Manual

This section provides technical instructions for developers working on this project. For detailed steps on setting up the project locally and working on it, see the [Developer Manual](#developer-manual) section below.


### How to Install the Application and Dependencies

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/EsromT/debt-dashboard.git
   cd debt-dashboard
Install the necessary dependencies for both the backend and frontend:
For frontend:
bash
Copy code
cd frontend
npm install
For backend:
bash
Copy code
cd backend
npm install
How to Run the Application on a Server
Frontend: To run the React frontend, go to the frontend folder and run the following command:

bash
Copy code
npm start
This will start the development server on http://localhost:3000.

Backend: To run the Node.js backend, go to the backend folder and run the following command:

bash
Copy code
node server.js
This will start the server on http://localhost:5000.

How to Run Tests
If you have written tests (or want to add your own in the future), you can run them using the following command:
bash
Copy code
npm test
This will run the tests defined in the src folder of the frontend.
API Documentation
Here are the main API endpoints of the backend:

GET /api/debt

Retrieves public debt transaction data from the U.S. Treasury API.
Returns data in the form of dates and corresponding debt amounts.
POST /api/debt

You can define POST endpoints if needed for data manipulation or adding records.
Known Bugs
The DebtDashboard component occasionally fails to fetch data from the API if the external source is down.
Styling issues may occur in older versions of browsers like Internet Explorer. Please ensure your application is tested on modern browsers.
Roadmap for Future Development
Additional Data Visualizations: Add more interactive charts to visualize the data in more formats (e.g., bar charts, pie charts).
User Authentication: Implement user authentication for personalized debt insights.
Data Export: Allow users to export data in CSV or Excel formats for offline use.
Mobile Responsiveness: Improve the mobile responsiveness for a better experience on mobile devices.
