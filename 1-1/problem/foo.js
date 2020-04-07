(() => {
  const options = {
    rootMargin: "0px",
    threshold: [1.0]
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.ad');
  targets.forEach(function(ad) {
    observer.observe(ad);
  });

  function callback(entries, object) {
    entries.forEach(function(entry, i) {
        if (!entry.isIntersecting) return;

        const ad = entry.target;
        const secondaryClassName = ad.classList[1];
        if (secondaryClassName === 'ad1') {
          $(ad).html('<div class="adInsert"></div>');
          const bar = document.createElement('script');
          bar.src = 'ad.j';
          ad.insertAdjacentElement('beforeend', bar);
        } else {
          $(ad).html('<script>write();</script>');
        }

        object.unobserve(ad);
    });
  };


  const script = document.createElement('script');
  script.src="hoge.js";
  document.head.insertAdjacentElement('beforeend', script);
})();