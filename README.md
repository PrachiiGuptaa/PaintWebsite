# PaintWebsite

## Overview
This project is a Next.js-based webpage developed to create a website according to a Figma design prototype. The site is styled using Tailwind CSS and integrated with data pulled from a GraphQL API. The webpage is optimized for speed and follows best practices to ensure code cleanliness, maintainability, and scalability.

## Features
- Developed using Next.js.
- Tailwind CSS for responsive and modern design.
- Integrated with a GraphQL API for dynamic content fetching.
- Optimized for Core Web Vitals to ensure excellent performance.
- Deployed on Vercel for easy and fast deployment.

## Tech Stack
- JavaScript
- Next.js
- Tailwind CSS

## API Integration
The project integrates with a GraphQL API to fetch data for various sections of the webpage.

API Endpoint: https://astralpaints.kwebmakerdigitalagency.com/graphql

Query Example:
{
  pages(where: {name: "Homepage"}) {
    nodes {
      homepage {
        banners {
          bannerImage {
            node {
              sourceUrl
            }
          }
          bannersTitle
          bannerDescription
          bannerButton {
            title
            url
            target
          }
        }
        homeAboutTitle
        homeAboutSubtitle
        ...
      }
    }
  }
}

## Installation
To install and run the application locally, follow these steps:

1. Clone this repository to your local machine
2. Run npm install to install all dependencies
3. Run npm start to start the development server
4. Open http://localhost:3000/ in your browser to view the application

## Deployment Link
