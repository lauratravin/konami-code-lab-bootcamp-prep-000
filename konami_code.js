const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;


var body = document.body;

body.addEventListener('keydown', init(e));


function init(e){
        const key = parseInt(e.which);

        if (key === code[index]) {
                  index++;

                  if (index === code.length) {
                    alert("Hurray!");

                    index = 0;
                  }
        } else {
          index = 0;
        }

      }
