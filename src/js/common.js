//모달 함수
// function toggleModal(index) {
//     let modals = $(`._modal_${index}`);
//     let closeModalBtn = $('._modal_close_btn');
//     let openModalBtn = $('._modal_btn');
//
//     openModalBtn.on('click', function () {
//
//         console.log(modals);
//         modals.addClass('show')
//
//         setTimeout(function () {
//             modals.addClass('fade')
//         }, 200)
//     })
//     closeModalBtn.on('click', function () {
//         modals.removeClass('fade')
//         setTimeout(function () {
//             modals.removeClass('show')
//         }, 200)
//     })
//
//     modals.on('click', function (e) {
//         if (e.target == this) {
//             modals.removeClass('fade')
//             setTimeout(function () {
//                 modals.removeClass('show')
//             }, 200)
//         }
//     })
// }



//전화번호 hyphen
function formatPhoneNumber() {
    $('._input_phone').on('input', function () {
        this.value = this.value
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    })
}

// header 버튼
function toggleAccountInfo() {
    $('._ico_account_btn').on('click', function () {
        $('._header__account_info').toggle()
    })
}


// 실행
$(document).ready(function () {
    formatPhoneNumber();
    toggleAccountInfo();

})