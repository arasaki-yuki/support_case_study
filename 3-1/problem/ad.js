var widgetNode = document.querySelector('.test');
if (widgetNode && window.getComputedStyle(widgetNode).getPropertyValue("display") === "none") {
    return
}
const creative = `
  <div
    style="
      width: 300px;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: salmon;
      color: #fff;
      font-size: 24px;
      text-align: center;
      margin: 0 auto;
    "
  >＼ Ta-da! ／<br>{AD}</div>
`;
widgetNode.insertAdjacentHTML('beforeend', creative);

/* ここは関係ない */
window.frameElement.style.width = '100%';
window.frameElement.style.height = '1000px';
window.frameElement.parentNode.style.width = '100%';
window.frameElement.parentNode.style.height = '1000px';
/* ここは関係ない */