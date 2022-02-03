// scroll to top function
// When the user clicks on the button, scroll to the top of the document
function scrollToTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}