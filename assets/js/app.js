function s() {
    if(window.innerWidth <= 480) {
        document.getElementById('footerH').className = "col-12 h1 text-center";
        document.querySelector('footer .list-group').style.display = "none";
        document.querySelector('footer .accordion').style.display = "";
    } else if(window.innerWidth > 480) {
        document.getElementById('footerH').className = "col-3 h1 text-center";
        document.querySelector('footer .list-group').style.display = "";
        document.querySelector('footer .accordion').style.display = "none";
    }
}