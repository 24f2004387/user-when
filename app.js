document.querySelector('#github-user-seed123').addEventListener('submit', async function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const token = ''; // Optionally set your token here
    const url = `https://api.github.com/users/${username}${token ? '?token=' + token : ''}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('User not found');
        const data = await response.json();
        const createdAt = new Date(data.created_at).toISOString().split('T')[0];
        document.querySelector('#github-created-at').textContent = createdAt;
    } catch (error) {
        console.error(error);
        document.querySelector('#github-created-at').textContent = 'Error fetching user';
    }
});