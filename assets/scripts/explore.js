// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceDropdown = document.querySelector('#voice-select');
  const talkButton = document.querySelector('button');
  const textInput = document.querySelector('#text-to-speak');
  const image = document.querySelector('img');
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    console.log(voices);
    voiceDropdown.innerHTML = '';
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = voice.name + ' (' + voice.lang + ')';
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      if (voice.default) {
        option.textContent += ' -- DEFAULT';
      }
      voiceDropdown.appendChild(option);
    });
  }

  populateVoiceList();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  if (talkButton) {
    talkButton.addEventListener('click', () => {
      const selectedVoice = voiceDropdown.selectedOptions[0].getAttribute('data-name');
      console.log(selectedVoice);
      const utterance = new SpeechSynthesisUtterance(textInput.value);
      console.log(utterance);
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedVoice) {
          utterance.voice = voices[i];
          utterance.lang = voices[i].lang;
          break;
        }
      }
      
      synth.cancel();
      synth.speak(utterance);
      image.src = 'assets/images/smiling-open.png';

      utterance.onend = () => {
        image.src = 'assets/images/smiling.png';
      }
    });

  }




  

  
}