function createPostCard(data) {
  const template = document.createElement('template');

  const imageSrc = data.image
  const imageHTML = data.image ? `
    <section class="post-attachment">
      <img class="post-image" src="${imageSrc}" alt="Attached image">
    </section>
  ` : '';
  
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
        ${imageHTML}
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

  return element;
}

fetch("https://gist.githubusercontent.com/mp3o7/a1f41faa67782b35eb72edc520abb296/raw/e12a626e175eecc8e5083866d900bc315423945f/posts.json")
    .then(response => response.json())
    .then(json => {
        const postsContainer = document.getElementById("postsContainer")
        json.forEach(post => postsContainer.appendChild(createPostCard(post)))
    })
