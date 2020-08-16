
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
