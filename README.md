# Markdown Live Previewer

## Summary
A static web application that allows users to input Markdown text and see a live preview of the rendered HTML. Utilizing `marked.js` for Markdown conversion and `highlight.js` for syntax highlighting, this app features a clean two-column layout for an optimal user experience.

## Setup (Local)
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
- Type or paste Markdown text into the textarea on the left.
- The converted HTML will be displayed live in the preview area on the right.
- Code blocks will be highlighted for better readability.

## Code Explanation
- The app uses `document.querySelector` to access the textarea and output elements.
- `marked.js` is utilized to convert Markdown to HTML, ensuring `typeof window.marked !== 'undefined'`.
- `highlight.js` is integrated for syntax highlighting, confirmed by `typeof window.hljs !== 'undefined'`.
- The output is dynamically updated, checking for valid HTML elements like `<h1>` or `<p>` in the preview area.

## Deployment (GitHub Pages)
1. Push your changes to the `main` branch of your repository.
2. Go to the repository settings on GitHub.
3. Under the "Pages" section, select the `main` branch as the source.
4. Your site will be live at `https://24f2004387.github.io/user-when/`.

## License (MIT)
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.