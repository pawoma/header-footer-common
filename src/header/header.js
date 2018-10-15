export default {
  bind: function () {
    // * 用户登出
    $('.J-logout').on('click', function () {
      gAjax('logout', {}, data => {
        if (data && data.success) {
          console.log('已登出！');
          window.location.href = '/views/login.html';
        }
      });
    });
    $('.menu_list').on('click', function () {
      $(this).find('.second_menu').show();
    });
  },
  init: function () {
    this.checkSignatureStatus();
    // this.bind();
  },
  checkSignatureStatus() {
    console.log('checkSignatureStatus');
    // gAjax('checkSignatureStatus', {}, res => {
    //   if (res) {
    //     $('.order-sign_nav').show();
    //   }
    // });
  }
}
