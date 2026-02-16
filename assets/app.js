(function(){
  // mark active
  const here = location.pathname.replace(/\/+$/,'');
  document.querySelectorAll('a.item').forEach(a=>{
    const href = (a.getAttribute('href')||'').replace(/\/+$/,'');
    if(!href) return;
    // compare filename endings
    if(here.endsWith('/'+href) || here.endsWith(href) || (href==='index.html' && (here.endsWith('/')||here.endsWith('/index.html')))){
      a.classList.add('active');
    }
  });
  // demo-only forms
  document.querySelectorAll('form[data-demo]').forEach(f=>{
    f.addEventListener('submit',(e)=>{e.preventDefault(); alert('Static demo: submissions are not saved.');});
  });
})();
