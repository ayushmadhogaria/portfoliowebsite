
/*to establish timestamp in all the webpages 
 and it is an external JS file*/
date
function display_date() {
    document.getElementById('date').innerHTML = Date();
    setTimeout(display_date,1000);
}
display_date(); 


