//모달 함수
function toggleModal() {
    let modals = $('.modal');
    let closeModalBtn = $('._modal_close_btn');
    let openModalBtn = $('._modal_btn');
    function openModal(){
        for (let i = 0; i < modals.length; i++) {
            openModalBtn.eq(i).on('click', function () {
                modals.eq(i).addClass('show')
                setTimeout(function () {
                    modals.eq(i).addClass('fade')
                }, 200)
            })
        }
    }
    function closeModal(){
        closeModalBtn.on('click', function () {
            modals.removeClass('fade')
            setTimeout(function () {
                modals.removeClass('show')
            }, 200)
        })
    }
    function closeDimModal(){
        modals.on('click', function (e) {
            if (e.target == this) {
                modals.removeClass('fade')
                setTimeout(function () {
                    modals.removeClass('show')
                }, 200)
            }
        })
    }
    openModal();
    closeModal();
    closeDimModal();
}
//전화번호 hyphen
function formatPhoneNumber(){
    $('._input_phone').on('input',function(){
        this.value = this.value
            .replace(/[^0-9]/g, '')
            .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    })
}
// header 버튼
function toggleAccountInfo(){
    $('._ico_account_btn').on('click',function(){
        $('._header__account_info').toggle()
    })
}


// 실행
$(document).ready(function () {
    toggleModal();
    formatPhoneNumber();
    toggleAccountInfo();

})