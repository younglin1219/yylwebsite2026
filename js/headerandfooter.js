document.addEventListener("DOMContentLoaded", () => {
  // 載入導覽列
  fetch('pages/header.html')
    .then(response => {
      if (!response.ok) throw new Error('找不到導覽列檔案');
      return response.text();
    })
    .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('載入導覽列失敗:', error));

  // 載入頁尾
  fetch('pages/footer.html')
    .then(response => {
      if (!response.ok) throw new Error('找不到頁尾檔案');
      return response.text();
    })
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('載入頁尾失敗:', error));
});
