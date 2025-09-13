function pagecharger(file) {
  let main = document.querySelector('main');

  fetch(file)
    .then(rep => rep.text())
    .then(code => {
      main.innerHTML = '<!-- ' + file + ' -->' + code;

      main.querySelectorAll('script').forEach(oldScript => 
{
        let newScript = document.createElement('script');
        newScript.textContent = oldScript.textContent;
        oldScript.replaceWith(newScript);
      });
    });
}
