function getCurrentTimeString() {
  now = new Date();
  return now.toTimeString().slice(0, 17);
}

function updateCurrentTimeString() {
  document.querySelector('#CurrentTime').innerHTML = getCurrentTimeString();
}
