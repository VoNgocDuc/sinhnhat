var to = nameGirl;
var gift_url = giftUrl;
var gift_image_url = giftImage || giftImageBase64;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");
var index = 1;
var index2 = 1;
setInterval(() => {
  var img = document.getElementById("sidle-image");
  if (index > 4) {
    index = 1;
  }
  img.setAttribute('src', `img/${index}.jpg`); 
  index++;
}, 2500);

setInterval(() => {
  var img2 = document.getElementById("above-fold");
  if (index2 > 4) {
    index2 = 1;
  }
  img2.setAttribute('src', `img/${index2}.jpg`); 
  index2++;
}, 3000);

function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName);
  document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`;
  document.querySelector('#card .content-card').innerHTML = `Anh không có giỏi làm văn cho lắm, thôi thì chỉ dám chúc em tuổi mới hành trình mới có tất cả những điều em muốn đạt được nhé!!!`;

  var _giftLink,
    _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
  present.addEventListener('touchstart', ()=>{
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
    document.getElementById('sidle-image').classList.add('card-show');
  });
  present.addEventListener("click", function (e) {
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
    document.getElementById('sidle-image').classList.add('card-show');
  }, false);
 
}

init();

