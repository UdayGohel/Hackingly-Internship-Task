
<p align="center">
  <h1 align="center">Wikipedia Loop Checker</h1>
</p>

## Table Of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Authors](#authors)


## About The Project

![Assignment_Task](https://github.com/UdayGohel/Hackingly-Internship-Task/assets/114012274/9055575e-5a55-4a2c-9b28-3137fae32a2d)

The Wikipedia Philosophy Loop Detector is a web application/API designed to explore the well-known phenomenon known as the "Wikipedia Loop." The phenomenon involves navigating through Wikipedia articles by clicking the first link in the main body text and eventually reaching the "Philosophy" page. This project aims to determine the number of requests it takes to reach the "Philosophy" page from a given Wikipedia URL while also displaying the path of visited pages along the way.

## Features

### 1. **Loop Detection**

The application/API identifies and counts the number of requests needed to reach the "Philosophy" page from the provided Wikipedia URL.

### 2. **Path Visualization**

Displays the path of visited pages during the Wikipedia Loop journey.
Users can visualize the sequence of Wikipedia articles traversed to reach the "Philosophy" page.

### 3. **User-Friendly Interface**

A simple and intuitive interface for users to input a Wikipedia URL and view the results.
Clear and concise presentation of the loop detection information and the path taken.

### 4. **Error Handling**

Robust error handling to gracefully manage scenarios such as invalid URLs or unexpected responses from Wikipedia.




## Built With

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Parsing:** Cheerio library for HTML parsing
- **HTTP Requests:** Fetch API on the frontend, node-fetch on the backend

## Getting Started to Wikipedia Philosophy Loop Detector

## Prerequisites

Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the Wikipedia Philosophy Loop Detector in React JS.

## Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/UdayGohel/Task.git
    ```

2. **Navigate to Project Directory:**

    ```bash
    cd Task
    ```

3. **Install Dependencies for Back-end:**

    ```bash
    npm install
    ```

4. **Run the Application for Back-end:**

    ```bash
    npm start
    ```

5. **Navigate to React Project Directory:**

    ```bash
    cd client
    ```

6. **Install Dependencies for React JS:**

    ```bash
    npm install
    ```

7. **Run the Application for Front-end:**

    ```bash
    npm start
    ```

Visit [http://localhost:3000](http://localhost:3000) in your web browser to use the Wikipedia Philosophy Loop Detector.

## Usage

1. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).
2. Enter a valid Wikipedia URL in the provided input field.
3. Click the "Submit" button to initiate the process.
4. Observe the real-time display of visited pages and the number of requests.
5. The traversal continues until the "Philosophy" page is reached, and the results are displayed.

## Authors

 _Uday Gohel_ - I am currently a Third-year student pursuing a Bachelor's in Information Technology at Vishwakarma Government Engineering College- 
 <br>
- This project was created by me. You can find me on GitHub:

- [GitHub Profile](https://github.com/UdayGohel)

Feel free to reach out if you have any questions or feedback!

