jQuery(document).ready(function($) {
    var $owl = $('.owl-carousel');
    $owl.children().each(function(index) {
        jQuery(this).attr('data-position', index);
    });

    $owl.owlCarousel({
        nav: true,
        loop: true,
        items: 1,
        margin: 10,
        navText: ["", ""],
        dots: true,
        responsive: {
            768: {
                items: 2
            },
            960: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $(document).on('click', '.item', function() {
        $owl.trigger('to.owl.carousel', $(this).data('position'));
    });
});

$(document).ready(function(){

    var showHeaderAt = 825;

    var win = $(window),
            body = $('body');

    // Show the fixed header only on larger screen devices

    if(win.width() > 825){

        // When we scroll more than 150px down, we set the
        // "fixed" class on the body element.

        win.on('scroll', function(e){

            if(win.scrollTop() > showHeaderAt) {
                body.addClass('fixed');
            }
            else {
                body.removeClass('fixed');
            }
        });

    }

});

// ---------------------- tab

let tabs = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.content-item');
for (let i = 0; i < tabs.length; i++) {            
    tabs[i].addEventListener('click', () => tabClick(i));
}

function tabClick(currentTab) {
    removeActive();
    tabs[currentTab].classList.add('active');
    content[currentTab].classList.add('active');
    console.log(currentTab);
}

function removeActive() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        content[i].classList.remove('active');
    }
}