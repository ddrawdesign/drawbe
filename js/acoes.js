function sizeOfThings(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    var screenWidth = screen.width;
    var screenHeight = screen.height;

    if(screenWidth > 1200){

        document.getElementById("video").innerHTML = `<video autoplay="" muted="" loop="" width="100%"><source src="assets/videos/video_drawbe.mp4" type="video/mp4"></video>`;
    }
    else
    {
        if(screenWidth > 992){
            document.getElementById("video").innerHTML = `<video autoplay="" muted="" loop="" width="100%"><source src="assets/videos/video_drawbe_tablet.mp4" type="video/mp4"></video>`;      
        }
        else{
            document.getElementById("video").innerHTML = `<video autoplay="" muted="" loop="" width="100%"><source src="assets/videos/video_drawbe_celular.mp4" type="video/mp4"></video>`;
        }
    }
  
  };
  
  sizeOfThings();
  
  window.addEventListener('resize', function(){
      sizeOfThings();
  });