function search(){
   var game = $('.games-search');
};

function cloackTab(){
   $('#title').html('Google Classroom');
   $('#favicon').href = '/img/gclassroom.png'
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        search();
    }
});