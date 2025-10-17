# GitHub User Lookup Enhancer

## Summary
This static web app enhances the GitHub user lookup experience by providing real-time updates, displaying account age, and caching user data for improved usability. The app features a polite aria-live alert for lookup updates, shows the account age in years, and utilizes localStorage to remember the last successful lookup.

## Setup (Local)
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/24f2004387/user-when.git
   ```
2. Navigate to the project directory:
   ```bash
   cd user-when
   ```
3. Open `index.html` in your preferred web browser.

## Usage
1. Enter a GitHub username in the input field.
2. Click the "Lookup" button to fetch user data.
3. The account age will be displayed in years, and any updates will be announced via the aria-live alert.

## Code Explanation
- The app uses `document.querySelector` to manipulate DOM elements and display user data.
- The `aria-live` attribute is set to "polite" for the status alert, ensuring that updates are announced without interrupting the user.
- The account age is calculated and displayed in the `#github-account-age` element.
- The last successful lookup is stored in `localStorage` under the key 'github-user-seed123' and repopulated on page load.

## Deployment (GitHub Pages)
To deploy the app on GitHub Pages:

1. Push your changes to the `main` branch of your repository.
2. Go to the repository settings on GitHub.
3. Scroll down to the "GitHub Pages" section.
4. Select the `main` branch as the source and save.
5. Access your live app at: [https://24f2004387.github.io/user-when/](https://24f2004387.github.io/user-when/)

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.