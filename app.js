const textarea = document.querySelector('textarea');
const output = document.querySelector('#markdown-output');

textarea.addEventListener('input', () => {
    const markdownText = textarea.value;
    output.innerHTML = marked(markdownText);
    const codeBlocks = output.querySelectorAll('pre code');
    codeBlocks.forEach((block) => {
        hljs.highlightElement(block);
    });
});

// Initial focus
textarea.focus();