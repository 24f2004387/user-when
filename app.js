document.addEventListener('DOMContentLoaded', () => {
    const statusDiv = document.querySelector('#github-status');
    const ageDiv = document.querySelector('#github-account-age');
    const form = document.querySelector('#github-form');
    const usernameInput = document.querySelector('#github-username');
    const localStorageKey = 'github-user-seed123';

    const cachedUser = localStorage.getItem(localStorageKey);
    if (cachedUser) {
        usernameInput.value = cachedUser;
        fetchUserData(cachedUser);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        fetchUserData(username);
    });

    function fetchUserData(username) {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) throw new Error('User not found');
                return response.json();
            })
            .then(data => {
                const createdAt = new Date(data.created_at);
                const accountAge = new Date().getFullYear() - createdAt.getFullYear();
                ageDiv.textContent = `Account age: ${accountAge} years`;
                statusDiv.textContent = `Lookup successful for ${username}`;
                localStorage.setItem(localStorageKey, username);
            })
            .catch(error => {
                statusDiv.textContent = error.message;
            });
    }
    highlightElement(document.querySelectorAll('code'));
});