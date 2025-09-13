const nunc = Date.now();
const url = new URL(window.location.href);
const then=parseInt(url.searchParams.get('then'), 10);

if (isNaN(then)||nunc-then>2500) 
{ url.searchParams.set('then', nunc); window.location.replace(url.href); }
