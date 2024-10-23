function search(){
   var game = $('.games-search');
};

function cloackTab(){
   $('#title').html('Google Classroom');
   $("#favicon").attr("href","/img/gclassroom.svg");
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        search();
    }
});
