function getCurrentTimeString() {
  now = new Date();
  return now.toString().slice(0, -9);
}

function updateCurrentTimeString() {
  document.querySelector('#CurrentTime').innerHTML = getCurrentTimeString();
}
