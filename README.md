# GitHub User Fetcher

## Summary
GitHub User Fetcher is a static web application that allows users to input a GitHub username and fetches the account creation date. The app utilizes Bootstrap for styling and JavaScript to interact with the GitHub API. 

## Setup (Local)
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/github-user-fetcher.git
   ```
2. Navigate to the project directory:
   ```bash
   cd github-user-fetcher
   ```
3. Open `index.html` in your preferred web browser.

## Usage
1. Enter a GitHub username in the form with `id="github-user-seed123"`.
2. Optionally, append `?token=` with your GitHub token for authenticated requests.
3. Click the submit button to fetch and display the account creation date in the element with `id="github-created-at"`.

## Code Explanation
- The form is identified by `id="github-user-seed123"` and is used to capture the GitHub username.
- A JavaScript function fetches user data from the GitHub API endpoint `https://api.github.com/users/{username}`.
- The account creation date is extracted from the response and displayed in the specified format (YYYY-MM-DD UTC) within the element `#github-created-at`.

## Deployment (GitHub Pages)
1. Push your code to a GitHub repository.
2. Navigate to the repository settings.
3. Under the "Pages" section, select the branch to deploy (usually `main` or `gh-pages`).
4. Your site will be available at `https://yourusername.github.io/repository-name`.

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.