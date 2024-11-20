# 🌦️ Weather Dashboard 🌤️

LEGIT INC, WEATHER DASHBOARD! :) Look at that, a readme with emojis and all!~

---

## 🚀 Features

### 🌐 Frontend (React)

- **City Search**: Search for weather by entering a city name
- **Weather Display**: View the current temperature, weather conditions, and an associated icon
- **Toggle Unit**: Switch between fahrenheit and celsius
- **Responsive Design**: A user interface that is clean, intuitive, and responsive to screen sizes
- **Loading State**: Provides visual feedback while fetching data

### 🖥️ Backend (Node.js)

- **API Proxy**: Acts as a proxy to fetch data from the WeatherAPI public API
- **Data Processing**: Transforms raw API responses into a simplified format for the frontend
- **Error Handling**: Manages missing data and invalid requests gracefully

---

## 🛠️ Project Goals

### ✅ Criterion

| Requirement                                 | Implementation                                                                                                   |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **City Search**                             | The user inputs a city name into the `InputForm`, which sends a request to the backend                           |
| **Weather Display**                         | The `WeatherCard` component displays temperature, condition, and an icon, with Celsius-Fahrenheit toggle support |
| **Data Fetching**                           | The `WeatherAPI` is accessed via the backend proxy for data aggregation and transformation                       |
| **User Interface**                          | Built with responsive, clean, and accessible components using **Tailwind CSS**                                   |
| **API Proxy**                               | A `GET` endpoint in `api/weather` fetches data from WeatherAPI and formats it for frontend consumption.          |
| **Data Processing**                         | The backend processes raw WeatherAPI responses to deliver simplified weather data                                |
| **Backend Integration**                     | The Node.js backend seamlessly communicates with the React frontend using a RESTful API                          |
| **TypeScript**                              | TypeScript is used throughout both the frontend and backend for strong typing and code clarity                   |
| **Modern React and Node.js Best Practices** | The app uses hooks, functional components, clean separation of concerns, and efficient state management          |
| **Scalable Design Patterns**                | Components like `WeatherCard` and `InputForm` are modular and reusable for future extension                      |
| **Readable Documentation**                  | This **README** provides clear setup instructions and outlines adherence to the project goals                    |

---

## ⚙️ Tech Stack

- **Frontend**: React (with `react-hook-form` and `framer-motion` for animations)
- **Backend**: Node.js with the WeatherAPI public API
- **Styling**: Tailwind CSS for a sleek and modern UI
- **TypeScript**: Full TypeScript integration for type safety and scalability
- **Libraries Used**:
  - `react-hook-form`: Simplifies form handling and validation.
  - `framer-motion`: Adds animations and transitions to enhance the user experience.
  - `tailwindcss`: Provides a responsive and modern design system.
  - `typescript`: Ensures type safety and robust code.

---

## 📋 Tradeoffs and Scalability

### 🌟 Tradeoffs

- **Direct API Integration**: By directly integrating with WeatherAPI, I simplified the backend but limited myself to one data source
- **Single API Endpoint**: I used REST for simplicity but missed an opportunity to showcase hit the graphql part, which I was wanting to as I've been wanting to get familiar with codegen again, but I'm pressed here at time
- **No Environmental Variables**: Hardcoded API keys in the code reduce setup friction for this but are insecure for production! :)

### 🌟 Scalability

- **API Extensibility**: Adding more features, like historical Weather or forecasts, can be handled by extending the API proxy
- **Component Reusability**: Modular frontend components allow easy adaptation to additional features or API integrations -- 'react thinking'
- **Global State Management**: Introducing a global state management library like Redux could improve scalability for larger apps
- **Dynamic Themes**: The app could be enhanced with user-selected themes for day/night or accessibility, etc

---

## 🛠️ Setup Instructions

### Prerequisites

1. Install [Node.js](https://nodejs.org/) (LTS version recommended).

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/hunterraffety/weather.git
   cd weather-dashboard
   ```

2. Install dependencies:
   bash

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser:
   <http://localhost:3000>

### Optional formatting util using prettier (based on config)

```bash
npm run format
```
