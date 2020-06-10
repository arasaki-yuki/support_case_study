const ad = document.querySelector("#ad");
const max = 10;
const random = function() {
  return Math.floor(Math.random() * max + 1);
};

(function(){
  let flg1 = random() === 1;
  let flg2 = random() === 2;
  let flg3 = random() === 3;

  const someFunc = function(el) {
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
    ad.insertAdjacentHTML("beforeend", creative);
  };

  if (flg1 && flg2 && flg3) {
    someFunc(ad);
  }
})();