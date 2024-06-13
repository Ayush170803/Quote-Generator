let tl=gsap.timeline();
tl.from("#quotesection p",
    {
        x:-200,
        duration:2.4,
        delay:0.5,
        opacity:0,
        stagger:1
    }
)
let button=document.querySelector('.button');
const quote=document.querySelector('#quote');
const writername=document.querySelector('#writername');

generatequote();

function renderquote(output)
{

    quote.innerText=output?.content;
    writername.innerText=output?.author;
}


async function generatequote()
{
    try
    {
    let response=await fetch('https://api.quotable.io/random');
    let output= await response.json();
        renderquote(output);
    }
    catch(er)
    {

    }
}
button.addEventListener('click',generatequote);
