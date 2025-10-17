# User When

## Summary
User When is a static web application that allows users to look up GitHub account information, including account age and status updates. The app features a live region for status announcements, local storage caching for user data, and supports optional authentication tokens for private account lookups.

## Setup (Local)
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/24f2004387/user-when.git
   cd user-when
   ```

2. Open `index.html` in your preferred web browser.

## Usage
1. Enter a GitHub username in the input field.
2. Click the "Lookup" button to fetch account details.
3. The account age will be displayed in years, and status messages will announce the lookup process.

## Code Explanation
- The application uses JavaScript to handle user input and fetch data from the GitHub API.
- A live region (`#github-status`) is implemented to announce the status of the lookup process.
- The account creation date is parsed to calculate the account age, displayed in `#github-account-age`.
- User data is cached in `localStorage` to persist the last successful lookup, allowing for quick repopulation of the form on subsequent visits.
- The app supports an optional query parameter for authentication tokens.

## Deployment (GitHub Pages)
To deploy the app on GitHub Pages:

1. Push your changes to the `main` branch.
2. Navigate to the repository settings on GitHub.
3. Under the "Pages" section, select the `main` branch as the source.
4. Your app will be available at `https://<username>.github.io/<repository-name>/`.

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.