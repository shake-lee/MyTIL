/*배너 고정 및 색 변경 */
if (matchMedia("screen and (min-width: 769px)").matches) {
  $(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos >950) {/*특정 위치로 화면 스크롤다운하면 */
            $(".navbar").css('background-color', '#386fab');/*navbar 색깔을 바꾼다 */
            $(".navbar ul li a").css('color', '#ffff');/*메뉴 글자 색깔을 바꾼다 */
            $("#logo").attr('src', 'images/logo2.png');/*로고 이미지도 바꿔준다 */
        } else {
            $(".navbar").css('background-color', 'transparent');/*첫 화면 navbar transparent(투명)*/
            $(".navbar ul li a").css('color', 'rgb(0, 0, 0)');/*첫 메뉴 글자 색깔 */
            $("#logo").attr('src', 'images/logo1.png');/*첫 화면 로고 */
        }
    });
  });
} else {
  $(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos >500) {/*특정 위치로 화면 스크롤다운하면 */
            $(".navbar").css('background-color', '#191970');/*navbar 색깔을 바꾼다 */
            $("#logo").attr('src', 'images/logo2.png');/*로고 이미지도 바꿔준다 */
        } else {
            $(".navbar").css('background-color', 'transparent');/*첫 화면 navbar transparent(투명)*/
            $("#logo").attr('src', 'images/logo1.png');/*첫 화면 로고 */
        }
    });
  });
}

/*faq 스타일*/
let buttons = document.querySelectorAll(".coll-btn");

for (let button of buttons) {
  button.addEventListener("click", function () {
    // 버튼의 스타일을 active 로 설정
    this.classList.toggle("active");

    // 버튼의 다음 요소, 즉 패널을 펼침
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//* membership *//

// 모들 가져오기
const modal = document.getElementById("membership");

// 클릭 시 모들 창을 오픈하는 id 가져오기
const btn = document.getElementById("membershipBtn");

// 클릭 시 모들 창을 닫게하는 <span> 요소 가져오기
var span = document.getElementsByClassName("close")[0];

// 유저가 해당 id를 클릭 시 모들 창 오픈 
btn.addEventListener('click', () => {
    modal.style.display = "block";
});

// 유저가 해당 <span> 요소를 클릭 시 모들 창 닫기
span.addEventListener('click', () => {
    modal.style.display = "none";
});

// 유저가 모들 바깥 어느 부분이든 클릭 시 모들 창 닫기
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


//* login *//

// 모들 가져오기
const login_modal = document.getElementById("login");

// 클릭 시 모들 창을 오픈하는 id 가져오기
const login_btn = document.getElementById("loginBtn");

// 클릭 시 모들 창을 닫게하는 <span> 요소 가져오기
var span = document.getElementsByClassName("close")[1];

// 유저가 해당 id를 클릭 시 모들 창 오픈 
login_btn.addEventListener('click', () => {
    login_modal.style.display = "block";
});

// 유저가 해당 <span> 요소를 클릭 시 모들 창 닫기
span.addEventListener('click', () => {
    login_modal.style.display = "none";
});

// 유저가 모들 바깥 어느 부분이든 클릭 시 모들 창 닫기
window.addEventListener('click', (event) => {
    if (event.target == login_modal) {
        login_modal.style.display = "none";
    }
});


//* Get info *//

const save = document.querySelector("#save"); // [로그인] 버튼

save.addEventListener("click", (e) => {
    
    e.preventDefault();

    var item = document.getElementById('email').value;
    document.getElementById("user_email").innerText = item;

    var item = document.getElementById('password').value;
    document.getElementById("user_password").innerText = item;

    var item = document.getElementById('phone_number').value;
    document.getElementById("user_phone_number").innerText = item;

    var item = document.getElementById('credit_card').value;
    document.getElementById("user_credit_card").innerText = item;

    login_modal.style.display = "none";

});