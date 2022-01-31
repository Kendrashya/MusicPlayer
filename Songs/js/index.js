document.addEventListener('play', function(e){
    var audios = document.querySelectorAll('audio');
    for(var i =0, len = audios.length; i<len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);
