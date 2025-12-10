console.log("Script MyAdventure System Ready");

document.addEventListener("DOMContentLoaded", function() {
    const btnMasuk = document.getElementById('btn-masuk');
    const welcomeScreen = document.getElementById('welcome-screen');
    const audio = document.getElementById('bg-music');
    const video = document.getElementById('bg-video');

    if (btnMasuk && welcomeScreen) {
        btnMasuk.addEventListener('click', function() {
            
            if(audio) {
                audio.volume = 0.5;
                audio.play().catch(e => console.log("System info: Audio pending interaction"));
            }
            if(video) {
                video.play().catch(e => console.log("System info: Video pending interaction"));
            }

            welcomeScreen.style.opacity = '0';
            setTimeout(() => {
                welcomeScreen.style.display = 'none';
            }, 500);
        });
    }
});

function keAtas() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}