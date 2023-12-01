//window width check
let winW;
function updateSize() {
  winW = window.innerWidth;
  winResizeGnbClose();
}

window.addEventListener("resize", updateSize);


//height vh calc
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
//height ch calc----

//header
//gnb open click
let gnbOpenBtn = document.querySelector('.gnb-open');
let header = document.querySelector('header');
let body = document.querySelector('body');
gnbOpenBtn.addEventListener('click', function() {
  if(header.classList.contains('on')){
    header.classList.remove('on');
    body.style.overflow = '';
  } else {
    header.classList.add('on');
    body.style.overflow = 'hidden';
  }
})

//gnb close
let gnbList = document.querySelectorAll('.gnb-wrap ul li');
function winResizeGnbClose() {
  header.classList.remove('on');
  for (let i = 0; i < gnbList.length; i++) {
    gnbList[i].classList.remove('on')
  }
}

//gnb menu button click
let gnbMenuBtns = document.querySelectorAll('.depth-btn');
Array.prototype.forEach.call(gnbMenuBtns, function(e) {
  e.addEventListener('click', function() {
    if(winW >= 1080) return false; //1080px 넘으면 클릭X, 모바일에서만 클릭
    if(e.parentNode.classList.contains('on')){
      e.parentNode.classList.remove('on');
    } else {
      e.parentNode.classList.add('on');
    }
  })

});
//header----

//스크롤방향
let scPos = document.documentElement.scrollTop || 0;
let dir;
function scrollDir() {
  let docY = document.documentElement.scrollTop;
  dir = docY - scPos >= 0 ? 1 : -1;
  scPos = docY;
  if(docY >= 10) {
    scrollDown();
  } else {
    scrollUp();
  }
}

function scrollDown() {
  header.classList.add('down');
}
function scrollUp() {
  header.classList.remove('down');
}

let scrollY;
window.addEventListener("scroll", handleScroll);
function handleScroll() {
  scrollDir();
  initIntersectionObserver();
}

window.onload = function() {
  updateSize();
  scrollDir();
  initIntersectionObserver();
}

//footer languages popup
let langChangBtn = document.querySelector('.change-btn');
let langPopup = document.querySelector('.lang-pop');
let footer = document.querySelector('footer');
if(langChangBtn)langChangBtn.addEventListener('click', function() {
  langPopup.classList.add('on');
  footer.classList.add('on');
});
//footer languages -----

//popup close
let popup = document.querySelectorAll('.popup');
let popupClose = document.querySelector('.popup .close');
if(popupClose)popupClose.addEventListener('click', function() {
  for (let i = 0; i < popup.length; i++) {
    popup[i].classList.remove('on');
  }
  footer.classList.remove('on');
})
//popup close ----

updateSize();