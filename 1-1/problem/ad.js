(() => {
  const html = `
    <div style="
      width: 300px;
      height: 250px;
      margin: 0 auto;
      border: solid 1px #ccc;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background: cornflowerblue;
      color: #fff;
    ">{広告1}</div>
  `;
  const insertTarget = document.querySelector('.adInsert');
  insertTarget.insertAdjacentHTML('afterend', html);
})();