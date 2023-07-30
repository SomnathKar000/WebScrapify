# WebScrapify

WebScrapify is a web application that allows users to enter a search query and retrieves the text content from the top 5 search results. It utilizes the Custom Search API to fetch URLs from Google and then uses the ScrapingBee API to scrape the text content from those URLs.

## Demo

You can access the live demo of the application [here](https://web-scrapify.vercel.app).

## Features

- Enter a search query and get the top 5 search results.
- Scrape the text content from the URLs using the ScrapingBee API.
- Display the extracted text content from all 5 URLs on the UI.

## Tech Stack

- React: Frontend library for building user interfaces.
- Axios: HTTP client for making API requests.
- Custom Search API: Used to fetch URLs from Google search results.
- ScrapingBee API: Used to scrape text content from the fetched URLs.
- Vercel: Used for hosting the application.

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/SomnathKar000/WebScrapify.git`
2. Navigate to the project directory: `cd WebScrapify`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open `http://localhost:3000` in your web browser to access the application.

Note: You will need to obtain your own API keys for the Custom Search API and ScrapingBee API and replace them in the appropriate files for the application to work properly.

## Deployment

The application is deployed using Vercel. Any changes pushed to the main branch are automatically deployed to the live demo URL.

## Contribution

Contributions to the project are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.
