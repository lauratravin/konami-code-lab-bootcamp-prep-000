const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;

document.body.addEventListener('keydown',init);

function init(e) {
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }

 
// This is the function that would be invoked by the event listener.


}