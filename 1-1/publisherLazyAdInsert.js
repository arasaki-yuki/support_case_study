const options = {
  rootMargin: "100px 20px",
  threshold: [0, 0.5, 1.0]
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
      $(ad).html('<script>renderAd();</script>');
      // $(ad).html('<div class="adInsert"></div><script src="ad-async.js"></script>');

      object.unobserve(ad);
  });
};


const script = document.createElement('script');
script.src="ad.js";
document.head.insertAdjacentElement('beforeend', script);