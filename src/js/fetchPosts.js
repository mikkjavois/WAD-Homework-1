function createPostCard(data) {
    const template = document.createElement('template');

    template.innerHTML = `
        <article class="post">
            <header class="post-header">
                <section class="post-author">
                    <img class="profile-icon" alt="Profile Icon" src="res/images/avatar.jpg">
                        <span class="post-author-name"></span>
                    </section>
                <span class="post-date"></span>
            </header>
            <article class="post-body">
                <p class="post-text"></p>
            </article>
            <footer class="post-footer">
                <img src="res/images/like.png" alt="Like">
            </footer>
        </article>
    `.trim();

    const element = template.content.firstElementChild;

    element.querySelector('.post-date').textContent = data.date;
    element.querySelector('.post-text').textContent = data.text;
    element.querySelector('.post-author-name').textContent = data.author;

    if (data.image) {
        const section = document.createElement('section');
        section.className = 'post-attachment';
        const img = document.createElement('img');
        img.className = 'post-image';
        img.alt = 'Attached image';
        img.src = data.image;

        section.appendChild(img);
        element.querySelector('.post-body').prepend(section);
    }

    return element;
}

//fetch("https://api.npoint.io/1174acb82231c3f9f976")
fetch("res/data/posts.json")
    .then(response => response.json())
    .then(json => {
        const postsContainer = document.getElementById("postsContainer")
        json.forEach(post => postsContainer.appendChild(createPostCard(post)))
    })
