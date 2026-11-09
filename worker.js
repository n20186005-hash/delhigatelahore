/** Pure-static site assets; canonical entrances and localized true error responses. */
export async function route(request,env){
  const url=new URL(request.url),head=request.method==='HEAD';
  if(url.hostname==='www.delhigatelahore.com'||(url.hostname==='delhigatelahore.com'&&url.protocol==='http:')){url.hostname='delhigatelahore.com';url.protocol='https:';url.port='';return Response.redirect(url,308);}
  const aliases={'/index':'/','/index.html':'/','/en':'/en/','/en/index':'/en/','/en/index.html':'/en/'};
  if(['GET','HEAD'].includes(request.method)&&Object.hasOwn(aliases,url.pathname)){url.pathname=aliases[url.pathname];return Response.redirect(url,308);}
  // Every guide URL is a directory-style route; normalise extension-less paths
  // without a trailing slash so new topic pages never 404 on the bare form.
  if(['GET','HEAD'].includes(request.method)&&url.pathname!=='/'&&!url.pathname.endsWith('/')&&!/\.[a-zA-Z0-9]+$/.test(url.pathname.split('/').pop()||'')){url.pathname=url.pathname+'/';return Response.redirect(url,308);}
  const explicit=/^\/(?:en\/)?404(?:\/|\.html)?$/.test(url.pathname),errorPath=url.pathname.startsWith('/en/')?'/en/404':'/404';
  let response=await env.ASSETS.fetch(explicit?new Request(new URL(errorPath,url),{method:'GET'}):request);
  if(explicit||response.status===404){if(!explicit)response=await env.ASSETS.fetch(new Request(new URL(errorPath,url),{method:'GET'}));const h=new Headers(response.headers);h.delete('location');h.set('x-robots-tag','noindex');h.set('cache-control','no-store');h.set('cdn-cache-control','no-store');return new Response(head?null:response.body,{status:404,headers:h});}
  const h=new Headers(response.headers);h.set('x-content-type-options','nosniff');h.set('referrer-policy','strict-origin-when-cross-origin');
  if(h.get('content-type')?.includes('text/html')){h.set('cache-control','no-store');h.set('cdn-cache-control','no-store');h.set('cloudflare-cdn-cache-control','no-store');}
  return new Response(head?null:response.body,{status:response.status,statusText:response.statusText,headers:h});
}
export default {fetch:route};
