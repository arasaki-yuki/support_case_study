const html = `
  <div style="
    width: 300px;
    height: 250px;
    margin: 0 auto;
    border: solid 1px #ccc;
    text-align: center;
  ">
    <img style="
      width: 100%;
      height: 200px;
      object-fit: cover;
    "
    src="./ayashii_koukoku_fukugyou.png">
    自宅待機しているこんな時だから。
  </div>
`;

function renderAd () {
  document.write(html);
}