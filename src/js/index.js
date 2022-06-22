
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


$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
