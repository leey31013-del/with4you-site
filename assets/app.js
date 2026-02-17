
(function(){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const animateBars = (root=document)=>{
    root.querySelectorAll('.fill[data-pct]').forEach(el=>{
      const pct = Math.max(0, Math.min(100, parseFloat(el.getAttribute('data-pct')) || 0));
      el.style.width = pct + '%';
    });
  };
  const chartObserver = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        animateBars(e.target);
        chartObserver.unobserve(e.target);
      }
    });
  }, {threshold: 0.2});
  document.querySelectorAll('.chart').forEach(el=>chartObserver.observe(el));
})();
