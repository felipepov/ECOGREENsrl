
const links = ['home','services','about','proyects','contact']
links.forEach(cur =>
    window.addEventListener('click', e => {
        if(e.target.matches(`a[href="#${cur}"]`)){
            document.querySelector(`a[href="#${cur}"]`).style.fontWeight = '900';
        }
        else {
            document.querySelector(`a[href="#${cur}"]`).style.fontWeight = '500';
        }
    })
)


const emailSent = () => {
    // window.location.href = '';
    const head = document.getElementById('header');
    const html = `<div class="alert"><span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> <strong>Felicitaciones: </strong> Gracias por haberte contactado con nosotros. Te responderemos pronto!.</div>`;
    head.insertAdjacentHTML('afterbegin', html);
    localStorage.removeItem('email');
}

window.onload = function emailCheck() {
    if (localStorage.getItem('email') == 'true') {
        emailSent()
    }
}

const sendEmail = () => {
    const link = "mailto:ecogreensrl14@gmail.com"
             + "?cc=" + encodeURIComponent(document.getElementById('email').value)
             + "&subject=" + encodeURIComponent(document.getElementById('subject').value)
             + "&body=" + encodeURIComponent(document.getElementById('body').value)
    ;
    
    window.location.href = link;
    localStorage.setItem('email', 'true');
}

let header1;
let current1;
let backgrounds1 = [];
let setValues1 = (name, images) => {
    header1 = document.getElementsByClassName(name)[0];
    current1 = 0;
    backgrounds1 = images;
    header1.style.backgroundImage = backgrounds1[0];    
}

let header2;
let current2;
let backgrounds2 = [];
let setValues2 = (name, images) => {
    header2 = document.getElementsByClassName(name)[0];
    current2 = 0;
    backgrounds2 = images;
    header2.style.backgroundImage = backgrounds2[0];    
}

let header;
let current;
let backgrounds = [];
let setValues = (name, images) => {
    header = document.getElementsByClassName(name)[0];
    current = 0;
    backgrounds = images;
    header.style.backgroundImage = backgrounds[0];    
}


let nextBackground1 = () => {
    current1++;
    current1 = current1 % backgrounds1.length;
    header1.style.backgroundImage = backgrounds1[current1];
}

let nextBackground2 = () => {
    current2++;
    current2 = current2 % backgrounds2.length;
    header2.style.backgroundImage = backgrounds2[current2];
}

let nextBackground = () => {
    current++;
    current = current % backgrounds.length;
    header.style.backgroundImage = backgrounds[current1];
}


setValues('card--bridges', [`url('../../images/proyects/canal1.jpg')`
, `url('../../images/proyects/canal2.webp')`
, `url('../../images/proyects/canal3.jpg')`])
setInterval(nextBackground, 2000)

setValues1('card--roads', [`url('../../images/proyects/boulevard2.png')`
, `url('../../images/proyects/boulevard1.png')`
, `url('../../images/proyects/boulevard2.png')`])
setInterval(nextBackground1, 2000)

setValues2('card--storage', [`url('../../images/proyects/axion1.png')`
, `url('../../images/proyects/axion2.png')`
, `url('../../images/proyects/axion3.png')`, `url('../../images/proyects/ypf_concepcion1.png')`, `url('../../images/proyects/ypf_concepcion2.png')`, `url('../../images/proyects/ypf_concepcion3.png')`, `url('../../images/proyects/ypf_peron1.png')`, `url('../../images/proyects/ypf_peron1.png')`, `url('../../images/proyects/ypf_peron2.png')`,`url('../../images/proyects/ypf_peron3.png')`])
setInterval(nextBackground2, 2000)