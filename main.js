var i = 0;
var images = [];
var time = 3000;

images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';

const captions = ['Forest Picture', 'more forest picture', 'WIZARRDDD'];

function changeImg(){
    document.slide.src = images[i];
    const myCaption = document.querySelector('#booyah');
    myCaption.innerHTML = captions[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg