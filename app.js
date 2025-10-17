document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[id^="github-user-"]');
    const statusDiv = document.querySelector('#github-status');
    const ageDiv = document.querySelector('#github-account-age');
    const usernameInput = document.querySelector('#username');
    const seed = '${seed}';
    
    const cachedUser = localStorage.getItem(`github-user-${seed}`);
    if (cachedUser) {
        const { username, created_at } = JSON.parse(cachedUser);
        usernameInput.value = username;
        updateAccountAge(created_at);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = usernameInput.value;
        statusDiv.textContent = 'Looking up...';
        
        try {
            const token = new URLSearchParams(window.location.search).get('token');
            const response = await fetch(`https://api.github.com/users/${username}`, {
                headers: token ? { Authorization: `token ${token}` } : {}
            });
            if (!response.ok) throw new Error('User not found');
            const data = await response.json();
            const createdAt = new Date(data.created_at).toISOString();
            localStorage.setItem(`github-user-${seed}`, JSON.stringify({ username, created_at: createdAt }));
            updateAccountAge(createdAt);
            statusDiv.textContent = 'Lookup succeeded!';
        } catch (error) {
            statusDiv.textContent = `Lookup failed: ${error.message}`;
        }
    });

    function updateAccountAge(createdAt) {
        const age = new Date().getFullYear() - new Date(createdAt).getFullYear();
        ageDiv.textContent = `Account age: ${age} years`;
    }
});