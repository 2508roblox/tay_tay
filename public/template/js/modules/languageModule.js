export default function languageModule() {
    const langBtn = document.querySelector('.langBtn');
    const langChoices = document.querySelectorAll('.lang-choice');
    const langTxt = document.querySelector('.lang__txt');
    if (langBtn) {
        langBtn.onclick = (e) => {
            e.stopPropagation();
            removeActive(e.currentTarget);
            langBtn.classList.toggle('active');
        }
    }

    if (langChoices) {
        for(let langChoice of langChoices) {
            langChoice.onclick = (e) => {
                console.log(langTxt.innerHTML)
                langTxt.innerHTML = e.currentTarget.innerHTML;
            }
        }
    }

    function removeActive(can_not_remove = null) {

            if (langBtn.isSameNode(can_not_remove) == false) {
                langBtn.classList.remove("active");
            }

    }

    window.addEventListener("click", function(e) {
        removeActive();
    })
}