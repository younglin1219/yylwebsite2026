const newsData = [
  { title: "<i class='fa-solid fa-thumbtack'></i> 原網站因應 Weebly 平台終止台灣區服務，新網站內容將於此建置與陸續更新", date: "2026-07-05", top: true },
  { title: "於臺南家具產業博物館魯班學堂完成榫卯木工課程三期結業", date: "2026-05-31", top: false },
  { title: "論文「應用時間地理學觀點分析非接駁型公共自行車旅次行為與租賃站時空樣態：以台南市為例」成果於國立臺灣師範大學第 30 屆地理國際學術研討會完成發表", date: "2026-04-19", top: false },
  { title: "<i class='fa-solid fa-thumbtack'></i> 團隊成果「臺南車站站體周邊再發展計畫」參與第二十屆全國規劃系所實習聯展榮獲特優獎", date: "2025-05-19", top: true, url: "https://www.facebook.com/TaiwanInstituteofUrbanPlanning/posts/pfbid02yAD56obmdi1tU8mQKUtraGVdqvtLqBFhVLsLWmZRBqCdJeDUS4CpVCgTt8ybdhGPl" },
  { title: "擔任台灣河溪網協會第一屆「台灣河川希望工程獎」及「年度河川失望工程名單」公民評審", date: "2025-01-24", top: false, url: "http://younglinurbanology.weebly.com/blog-2599131456/1041485" },
  { title: "於國立成功大學交通管理科學系取得管理學學士學位 (B.B.A.)", date: "2024-07-17", top: false },
  { title: "於國立成功大學都市計劃學系取得工學學士學位 (B.Sc.)", date: "2024-07-17", top: false },
  { title: "於國立成功大學完成跨領域永續發展全英語學分學程 (CPSD) 結業", date: "2024-02-22", top: false },
  { title: "於國立成功大學完成防災科技管理學分學程結業", date: "2023-07-16", top: false },
  { title: "於國立成功大學未來館順利舉行畢業成果展「城間新紋」", date: "2023-06-16", top: false },
  { title: "論文「以計時都市主義檢視我國新興都市規劃生活圈之探討--以淡海新市鎮特定區計畫為例」於國立臺灣師範大學第 27 屆地理國際學術研討會完成發表", date: "2023-05-14", top: false }
];

let currentPage = 1;
const newsPerPage = 5;

const sortedNews = [...newsData].sort((a, b) => {
  if (a.top !== b.top) return b.top - a.top;
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

function renderNews() {
  const start = (currentPage - 1) * newsPerPage;
  const end = start + newsPerPage;
  const paginatedNews = sortedNews.slice(start, end);

  const newsList = document.getElementById("news-list");
  if (!newsList) return;
  
  newsList.innerHTML = "";

  paginatedNews.forEach(news => {
    const div = document.createElement("div");
    div.className = "news-item" + (news.top ? " top-news" : "");
    div.innerHTML = `
      <span class="news-title">
        ${news.title}
        ${news.url ? `<a href="${news.url}" target="_blank">[連結]</a>` : ""}
      </span>
      <p>${news.date}</p>
    `;
    newsList.appendChild(div);
  });

  const pageInfo = document.getElementById("page-info");
  if (pageInfo) {
    pageInfo.innerText = `${currentPage} / ${Math.ceil(sortedNews.length / newsPerPage)}`;
  }
}

function nextPage() {
  if (currentPage * newsPerPage < sortedNews.length) {
    currentPage++;
    renderNews();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderNews();
  }
}

document.addEventListener("DOMContentLoaded", renderNews);
