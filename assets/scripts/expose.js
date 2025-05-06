// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const dropdown = document.querySelector('#horn-select');
  const volumeControl = document.querySelector('#volume-controls input[type="range"]');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const hornImage = document.querySelector('#expose img');
  let selectedHorn;
  let volumeLevel;

  if (dropdown) {
    dropdown.addEventListener('input', (event) => {
      selectedHorn = event.target.value;
      audio.src = `assets/audio/${selectedHorn}.mp3`;
      hornImage.src = `assets/images/${selectedHorn}.svg`;
      hornImage.alt = selectedHorn;
      
    });
  }

  if (volumeControl && volumeIcon && audio) {
    volumeControl.addEventListener('input', (event) => {
      volumeLevel = event.target.value;
      if (volumeLevel == 0) {
        volumeIcon.src = 'assets/icons/volume-level-0.svg';
        volumeIcon.alt = 'Volume Level 0';
      } else if (volumeLevel < 33) {
        volumeIcon.src = 'assets/icons/volume-level-1.svg';
        volumeIcon.alt = 'Volume Level 1';
      } else if (volumeLevel < 67) {
        volumeIcon.src = 'assets/icons/volume-level-2.svg';
        volumeIcon.alt = 'Volume Level 2';
      } else {
        volumeIcon.src = 'assets/icons/volume-level-3.svg';
        volumeIcon.alt = 'Volume Level 3';
      }

      audio.volume = volumeLevel / 100;
      // console.log(`Volume set to ${audio.volume}`);
    });

    if (playButton) {
      playButton.addEventListener('click', () => {
        if (selectedHorn === 'party-horn') {
          const jsConfetti = new JSConfetti();
          jsConfetti.addConfetti();
        }
        audio.src = `assets/audio/${selectedHorn}.mp3`;
        audio.play();
      });
    }
    
  
  }
}