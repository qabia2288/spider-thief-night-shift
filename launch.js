// Fetch only the current release descriptor fresh; large content-hashed files
// retain normal caching. The same-origin manifest is part of this publication.
try {
  const response=await fetch(new URL(`release.json?t=${Date.now()}`,import.meta.url),{cache:'no-store'});
  if(!response.ok)throw new Error(`release HTTP ${response.status}`);
  const release=await response.json(), root=new URL('./',import.meta.url);
  const local=value=>{
    const url=new URL(value,root);
    if(url.origin!==root.origin||!url.pathname.startsWith(`${root.pathname}assets/`))throw new Error('Invalid release path');
    return url.href;
  };
  await Promise.all(release.styles.map(href=>new Promise((resolve,reject)=>{
    const link=document.createElement('link');link.rel='stylesheet';link.href=local(href);
    link.onload=resolve;link.onerror=reject;document.head.append(link);
  })));
  document.documentElement.dataset.release=release.version;
  await import(local(release.entry));
} catch(error) {
  console.error('Game launch failed',error);
  const message=document.createElement('p');
  message.textContent='Не удалось загрузить игру. Проверь подключение и обнови страницу.';
  message.style.cssText='color:#eee;background:#101719;padding:24px;font:16px sans-serif';
  document.body.append(message);
}
