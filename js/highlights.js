const articlesContainer = document.getElementById('articlesContainer');
const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');

// 卡片寬度 250px + gap 30px = 280px
const scrollDistance = 280; 

if (articlesContainer && scrollLeftBtn && scrollRightBtn) {
    scrollLeftBtn.addEventListener('click', () => {
        articlesContainer.scrollLeft -= scrollDistance;
    });

    scrollRightBtn.addEventListener('click', () => {
        articlesContainer.scrollLeft += scrollDistance;
    });
}
