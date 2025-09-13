function gotoform() 
{
let form=d.createElement('form');
let formulaire=['nom', 'prénom', 'mail', 'téléphone', 'message'];

formulaire.forEach(libelle => 
{
let div=d.createElement('div'), label=d.createElement('label');
label.append(d.createTextNode(libelle));
div.append(label, d.createElement('input'));
form.append(div);
});

let divs=form.querySelectorAll('div');
zediv=divs[divs.length-1];
zediv.replaceChild(textarea=d.createElement('textarea'), zediv.querySelector('input'));
textarea.value='Votez Patricia Sonia Bekono – Bulletin bleu – 21 septembre 2025';

let button=d.createElement('a');
button.id='formbouton';
button.append(d.createTextNode('Envoyer le message'));
form.append(button);

d.querySelector('#ecrirebouton').removeAttribute('onclick');
main.replaceChildren(form);
}
