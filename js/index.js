
/*HEADER TRANSITION*/
var navbar = document.querySelector('header');
var navbarContent = document.getElementsByClassName('navli');
window.onscroll = function() {
  if (window.pageYOffset > 43) {
    document.getElementById("logoWeb").src = "./assets/logo2.png";
    navbar.classList.add('scrolled');
    // navbarContent.style.color = "black";
  } else {
    document.getElementById("logoWeb").src = "./assets/logo.png";
    navbar.classList.remove('scrolled');

  }
}



// function serviceEffect(x) {
//   if(x==1){
//   var serviceImage = document.getElementById('service1');
//   serviceImage.className = "serviceimgHoverOn";
//   }
//   else if(x==2){
//     var serviceImage = document.getElementById('service2');
//     serviceImage.className = "serviceimgHoverOn";
//     }
//     else if(x==3){
//       var serviceImage = document.getElementById('service3');
//       serviceImage.className = "serviceimgHoverOn";
//       }
//       else if(x==4){
//         var serviceImage = document.getElementById('service4');
//         serviceImage.className = "serviceimgHoverOn";
//         }
//         else if(x==5){
//           var serviceImage = document.getElementById('service5');
//           serviceImage.className = "serviceimgHoverOn";
//           }
// }
// function serviceEffect2(x){
//   if(x==1){
//   var serviceImage = document.getElementById('service1');
//   serviceImage.className = "serviceimgHoverOff";
//   }
//   else if(x==2){
//     var serviceImage = document.getElementById('service2');
//     serviceImage.className = "serviceimgHoverOff";
//     }
//     else if(x==3){
//       var serviceImage = document.getElementById('service3');
//       serviceImage.className = "serviceimgHoverOff";
//       }
//       else if(x==4){
//         var serviceImage = document.getElementById('service4');
//         serviceImage.className = "serviceimgHoverOff";
//         }
//         else if(x==5){
//           var serviceImage = document.getElementById('service5');
//           serviceImage.className = "serviceimgHoverOff";
//           }
// }