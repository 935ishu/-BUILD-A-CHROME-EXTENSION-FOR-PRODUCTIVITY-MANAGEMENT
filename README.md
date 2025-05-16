# BUILD-A-CHROME-EXTENSION-FOR-PRODUCTIVITY-MANAGEMENT

COMPANY :CODTECH IT SOLUTIONS

NAME :HARIJANA ISWARYA

INTERN ID :CT04DK692

DOMAIN :MERN STACK WEB DEVELOPMENT

DURATION:4 WEEKS

MENTOR:NEELA SANTHOSH

Productivity Tracker Chrome Extension and Dashboard

Task 4 involved building a fully functional Productivity Tracker system that includes a custom-built Chrome extension to monitor browsing behavior, a backend API to store the data, and a React-based dashboard to visualize user activity. The goal was to help users stay focused by both blocking distracting websites and tracking the time they spend online — all in real time.

1. Chrome Extension (Frontend Monitoring Tool)

The core of this task started with developing a Chrome extension using JavaScript, HTML, and the Manifest V3 API. The extension monitors which websites the user visits and how long they stay on each. Using the Chrome APIs tabs, storage, and declarativeNetRequest, the extension detects tab switches, calculates time spent on each website, and updates a usage report accordingly.

To help reduce distractions, we integrated a site-blocking feature. On installation, the extension automatically blocks popular time-wasting sites like YouTube and Instagram using dynamic rules with declarativeNetRequest. A user-friendly popup (popup.html and popup.js) was also developed to display real-time statistics, such as time spent per site, directly from local storage.

2. Backend API with MongoDB

We created a Node.js + Express backend server to persist the tracked productivity data. The backend exposes two endpoints: POST /log to receive and store time logs, and GET /logs to return a list of the user’s tracked sites and durations. All data is stored in MongoDB Atlas, a cloud-based NoSQL database.

When the extension logs a user's time on a site, it sends that data to the backend using a POST request. The server uses Mongoose to define a simple schema with fields for site, timeSpent, and date. This allows the app to store logs efficiently and retrieve them later for visualization.

3. React Dashboard (Analytics Viewer)

To give users insights into their productivity, we built a React dashboard using react-chartjs-2 and Chart.js. The dashboard connects to the backend API via Axios and renders a bar chart that visualizes how much time was spent on each website.

When the user opens the dashboard, it fetches logs from the server, processes them, and displays the time spent per site in seconds. The design is clean, responsive, and informative, making it easy for users to reflect on their browsing habits. This visualization helps users identify where most of their online time is going and take corrective steps.

4. Integration and Outcome

This task successfully integrated all components: the Chrome extension for tracking and blocking, the Express backend for data storage, and the React frontend for visualization. It demonstrated how real-time data can be collected, stored, and displayed in a full-stack application.

The Productivity Tracker project is highly practical and applicable in personal, educational, and workplace environments. It can be extended to support user authentication, daily/weekly stats, export features, or even AI-based productivity suggestions.

OUTPUT:

![Image](https://github.com/user-attachments/assets/8957c408-6104-4f25-ad2a-9cc0b5e25d47)
