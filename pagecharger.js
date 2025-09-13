function pagecharger(file) 
{
fetch(file)
  .then(rep => rep.text())
  .then(code => 
{
main.innerHTML='<!-- '+file+' -->'+code;

main.querySelectorAll('script').forEach(oldScript => 
{
oldScript.replaceWith(newScript=document.createElement('script'));
newScript.textContent = oldScript.textContent;
})
});
}
