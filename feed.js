document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = document.getElementById('post-content').value.trim();
        if (content) {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.textContent = content;
            postsContainer.prepend(postElement);
            document.getElementById('post-content').value = '';
        }
    });
});
