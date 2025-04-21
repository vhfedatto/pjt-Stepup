document.querySelectorAll('.faq-header').forEach(header =>{
    header.addEventListener('click', ()=>{
        const content = header.nextElementSibling;
        const seta = header.querySelector('img');

        //Visibilidade:
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            content.style.padding = '0 1.5rem';
            seta.classList.remove('rotate');
            header.classList.remove('active');
        } else {
            // Close all other sections
            document.querySelectorAll('.faq-content').forEach(otherContent => {
                if (otherContent !== content) {
                    otherContent.style.maxHeight = null;
                    otherContent.style.padding = '0 1.5rem';
                    const otherHeader = otherContent.previousElementSibling;
                    otherHeader.classList.remove('active');
                    const otherSeta = otherHeader.querySelector('img');
                    otherSeta.classList.remove('rotate');
                }
            });

            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '1rem 1.5rem';
            seta.classList.add('rotate');
            header.classList.add('active');
        }
    })
})