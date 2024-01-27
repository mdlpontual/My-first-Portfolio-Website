let button = document.getElementsByTagName('button')[0];
let docBody = document.body;

function darkMode() {
  if (button.innerHTML === 'Turn to Dark Mode') {
    button.style.color = 'black';
    button.style.backgroundColor = 'lightgray';
    button.innerHTML = 'Turn to Light Mode';
    docBody.style.backgroundColor = '#333333';
    docBody.style.color = 'white';
    document.getElementsByTagName('a')[0].style.color = 'white';
    document.getElementsByTagName('a')[1].style.color = 'white';
    document.getElementsByTagName('a')[2].style.color = 'white';
    document.getElementById('skill1').src = './resources/img/color/html-5.png';
    document.getElementById('skill2').src = './resources/img/color/css-3.png';
    document.getElementById('skill3').src = './resources/img/color/bootstrap.png';
    document.getElementById('skill4').src = './resources/img/color/js.png';
    document.getElementById('skill5').src = './resources/img/color/science.png';
    document.getElementById('skill6').src = './resources/img/color/java.png';
    document.getElementById('skill7').src = './resources/img/color/git.png';
    document.getElementById('skill8').src = './resources/img/color/github.png';
  } else {
    button.style.color = 'white';
    button.style.backgroundColor = 'black';
    button.innerHTML = 'Turn to Dark Mode';
    docBody.style.backgroundColor = '';
    docBody.style.color = '';
    document.getElementsByTagName('a')[0].style.color = '';
    document.getElementsByTagName('a')[1].style.color = '';
    document.getElementsByTagName('a')[2].style.color = '';
    document.getElementById('skill1').src = './resources/img/html-5-logotype.png';
    document.getElementById('skill2').src = './resources/img/css-3.png';
    document.getElementById('skill3').src = './resources/img/bootstrap.png';
    document.getElementById('skill4').src = './resources/img/java-script.png';
    document.getElementById('skill5').src = './resources/img/atom.png';
    document.getElementById('skill6').src = './resources/img/java.png';
    document.getElementById('skill7').src = './resources/img/git.png';
    document.getElementById('skill8').src = './resources/img/github.png';
  }
}

button.onclick = darkMode;

// change Photo

let profilePic = document.getElementById('profile1');

function changePic() {
  if (document.getElementsByClassName('click')[0].innerHTML === 'Clink the picture for a better view!') {
    profilePic.src = './resources/img/0123.jpg';
    document.getElementsByClassName('click')[0].innerHTML = 'Now I feel handsome!';
    document.getElementsByClassName('click')[0].style.color = 'blue';
  } else {
    profilePic.src = './resources/img/27.jpg';
    document.getElementsByClassName('click')[0].innerHTML = 'Clink the picture for a better view!';
    document.getElementsByClassName('click')[0].style.color = '';
  }
}

profilePic.onclick = changePic;