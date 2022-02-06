// scroll to top function
// When the user clicks on the button, scroll to the top of the document
function scrollToTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// slideshow section
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n)
{
  showSlides(slideIndex += n);
}

function showSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length)
    {
        slideIndex = 1
    }
    
    if (n < 1)
    {
        slideIndex = slides.length
    }
    
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}