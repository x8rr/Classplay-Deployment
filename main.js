function search(){
   var game = $('.games-search').val();
   
};

function cloackTab(){
   $('#title').html('Home');
   $("#favicon").attr("href","/img/gclassroom.png");
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        search();
    }
});


function openGame() {
    var win = window.open()
    var url = "https://useclassplay.github.io"
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.margin = "0";
    iframe.style.padding = "0";
    iframe.src = url
    win.document.body.appendChild(iframe)
}