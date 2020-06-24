(function(){
  const ad = document.querySelector('#ad');
  ad.innerHTML = `
    <div style="
      width: 300px;
      height: 250px;
      color: #fff;
      background: salmon;
      display: flex;
      justify-content: center;
      align-items: center;
    ">{AD}</div>
  `;

  if ('HTMLPortalElement' in window) {
    const portal = document.createElement('portal');
    portal.src = 'https://news.merumo.ne.jp';
    portal.style.cssText = 'width: 100%; height: 100%;';
    document.querySelector('#here').appendChild(portal);
    const param = location.search;
    let animatedIn = 'lightSpeedIn';
    switch(param) {
      case '?a=1':
        animatedIn = 'bounceInUp';
      case '?a=2':
        animatedIn = 'fadeInDown';
    }
    $("#ad").animatedModal({
      animatedIn,
      animatedOut: 'bounceOutDown',
      afterOpen: () => {
        portal.activate();
      },
    });
  }
})();