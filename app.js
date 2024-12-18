document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postContent = document.getElementById('post-content');
    const postsContainer = document.getElementById('posts');

    // Handle Post Submission
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const content = postContent.value.trim();
        if (content) {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.textContent = content;

            postsContainer.prepend(postElement);
            postContent.value = ''; // Clear the input field
        }
    });

    // Placeholder functionality for login and signup
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality coming soon!');
    });

    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Signup functionality coming soon!');
    });
});
