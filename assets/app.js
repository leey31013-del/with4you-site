(function(){
  const path = location.pathname;
  const items = document.querySelectorAll('a.item');
  items.forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return;
    // Mark active if end matches current file or folder
    const norm = href.replace(/\/+$/,'');
    const here = path.replace(/\/+$/,'');
    if(here.endsWith(norm.replace(/^\.\//,'')) || (norm==='index.html' && (here.endsWith('/')||here.endsWith('/index.html')))){
      a.classList.add('active');
    }
  });

  // Language toggle: remember choice
  const langBtns = document.querySelectorAll('[data-lang]');
  langBtns.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const lang = btn.getAttribute('data-lang');
      try{ localStorage.setItem('with4you_lang', lang); }catch(e){}
    });
  });

  // If on root, auto-redirect to preferred language when query ?auto=1
  if(location.pathname.endsWith('/with4you-site/') || location.pathname.endsWith('/with4you-site/index.html') || location.pathname.endsWith('/index.html') || location.pathname.endsWith('/')){
    const params = new URLSearchParams(location.search);
    if(params.get('auto')==='1'){
      try{
        const pref = localStorage.getItem('with4you_lang');
        if(pref==='en') location.href = './en/';
        if(pref==='kr') location.href = './kr/';
      }catch(e){}
    }
  }

  // Simple notices seed
  const notices = document.querySelector('[data-notices]');
  if(notices){
    const seed = [
      {d:"2026-02-16", t:"Investor demo site is live (EN/KR)."},
      {d:"2026-02-16", t:"Marketplace + partnership pages are teaser-only (no checkout, no data collection)."},
      {d:"2026-02-16", t:"Privacy principle: no server-side chat storage (ephemeral design)."}
    ];
    notices.innerHTML = seed.map(x=>`<div class="card"><b>${x.d}</b><p>${x.t}</p></div>`).join('');
  }

  // Fake admin login (demo only)
  const adminForm = document.querySelector('[data-admin]');
  if(adminForm){
    adminForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert("Demo only: Admin functions are disabled in this static investor site.");
    });
  }
})();
