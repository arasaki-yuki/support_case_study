const AD_HTML = `
<style>body {margin: 0}</style>
<div style="width:300px;height:250px;background:salmon;color:#fff;display:flex;justify-content:center;align-items:center;">{AD}</div>
<script>
  if (window.parent !== window) {
    window.parent.frameElement.style.width = '100%';
  }
<\/script>
`;

document.write(AD_HTML);