
let body = document.querySelector('body')
let prompt1 = prompt('aboi ga rang kiriting');
let prompt2 = prompt('text ga rang kiriting');

function change(rang){
    body.style.background=`${rang}`;

}
change(prompt1)

let text = document.querySelector('h1')
function aa(ikkirang){
    text.style.color=`${ikkirang}`;

}
aa(prompt2)




