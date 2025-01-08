const audio = new Audio('https://github.com/zoxycontin/rsc-bio/raw/refs/heads/main/assets/songs/anthem.mp3');
            audio.loop = true;

            function initAudio() {
                audio.play().catch(error => {
                    console.log("Audio autoplay failed:", error);
                });
                document.removeEventListener('click', initAudio);
            }
            document.addEventListener('click', initAudio);

// I asked chatgpt why the audio wasn't working and they said add this :shrug: fuck javascript
