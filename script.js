document.addEventListener('DOMContentLoaded', function() {
    var accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                // Aba já está expandida, então recolhe
                content.style.maxHeight = null;
            } else {
                // Aba está recolhida, então expande
                // Primeiro, recolhe qualquer aba que esteja aberta
                document.querySelectorAll('.accordion-content').forEach(function(otherContent) {
                    otherContent.style.maxHeight = null;
                });
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});
