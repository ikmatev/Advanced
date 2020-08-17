function lockedProfile() {
    const profiles = document.getElementsByClassName('profile');

    for (let i = 0; i < profiles.length; i++) {
        profiles[i].addEventListener('click', controlProfille);        
    }

    function controlProfille(e){
        const button = Array.from(this.children).filter(a => a.localName === 'button');
        const inputLocked = Array.from(this.children)
        .filter(a => a.localName === 'input' && a.value === 'lock');
        const currentProfile = Array.from(this.children).filter(a => a.localName === 'div')

        if (e.target.localName === 'button') {  
            if (e.target.innerText === 'Show more') {
                if (!inputLocked[0].checked) {
                    currentProfile[0].style.display = 'block';
                    button[0].innerText = 'Hide it'
                }
            }else{
                if (!inputLocked[0].checked) {
                    button[0].innerText = 'Show more'
                    currentProfile[0].style.display = 'none'
                }
            }
        }
    }
}