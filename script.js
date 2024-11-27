const progressBar = document.getElementById('progress-bar');
const phaseText = document.getElementById('phase');
const timerText = document.getElementById('timer');

// Breathing phases and their durations (in seconds)
const phases = [
  { phase: 'Inhale', duration: 4 },
  { phase: 'Hold', duration: 4 },
  { phase: 'Exhale', duration: 4 },
  { phase: 'Hold', duration: 4 },
];

let phaseIndex = 0;
let timer = phases[phaseIndex].duration;

// Update UI for the current phase
function updatePhase() {
  const currentPhase = phases[phaseIndex];
  phaseText.textContent = currentPhase.phase;
  timer = currentPhase.duration;

  progressBar.style.transition = `width ${currentPhase.duration}s linear`;
  progressBar.style.width = currentPhase.phase === 'Exhale' || currentPhase.phase === 'Inhale' ? '100%' : '0%';

  countdown();
}

// Countdown for each phase
function countdown() {
  const interval = setInterval(() => {
    timerText.textContent = timer;
    timer--;

    if (timer < 0) {
      clearInterval(interval);
      phaseIndex = (phaseIndex + 1) % phases.length; // Loop through phases
      updatePhase();
    }
  }, 1000);
}

// Start the breathing exercise
updatePhase();
