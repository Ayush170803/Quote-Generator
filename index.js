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

const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'de99ce0f48mshc388e65bf60e39bp1f9e60jsn061734f2f56f',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com'
    }
};

let button=document.querySelector('.button');
const quote=document.querySelector('#quote');
const writername=document.querySelector('#writername');

generatequote();

function renderquote(output)
{
    quote.innerText=output.content;
    writername.innerText=output?.originator?.name;
}

async function generatequote()
{
    try
    {
        const response=await fetch(url,options);
        const output=await response.json();
        renderquote(output);
    } 
    catch(er)
    {
        console.error(er);
    }
}
button.addEventListener('click',generatequote);
