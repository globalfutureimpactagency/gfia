// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
// Load latest posts
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('latest-news');
    const latest = posts.slice(0, 5);

    latest.forEach(post => {
      const card = document.createElement('div');
      card.className = 'news-card';
      card.innerHTML = `
        <img src="${post.image}" class="news-img" />
        <div class="news-content">
          <h3 class="news-title">${post.title}</h3>
          <p class="news-excerpt">${post.subtitle}</p>
          <a href="${post.url}" class="news-readmore">Read More</a>
        </div>
      `;
      container.appendChild(card);
    });
  });
{
  "title": "Climate Change Is Intensifying Disasters",
  "subtitle": "GFIA analysis on global mortality trends and climate-driven hazards.",
  "date": "2026-01-21",
  "image": "climatechange.webp",
  "url": "news/climate-change-disasters.html"
}
