
import util from '../api.js'
export default {
  init() {
    this.bind()
    this.checkSignatureStatus()
  },
  bind() {
    const self = this;
    const header_top = document.querySelector('.common-header-top')
    const link_finance = document.querySelector('#nav-link_finance')
    const link_account = document.querySelector('#nav-link_account')
    const logout = document.querySelector('.J-logout')
    const body = document.querySelector('body')

    header_top.parentElement.style.cssText = 'padding-bottom:58px';

    link_finance.addEventListener('click', function (e) {
      e.stopPropagation();
      let nav = e.currentTarget.parentElement
      let classList = nav.classList
      if (!classList.contains('finance-active')) {
        classList.add('finance-active')
        body.addEventListener('click', function removeEventHandler() {
          body.removeEventListener('click', removeEventHandler)
          nav.classList.remove('finance-active')
        })
      }
    })

    link_account.addEventListener('click', function (e) {
      e.stopPropagation();
      let nav = e.currentTarget.parentElement
      let classList = nav.classList
      if (!classList.contains('account-active')) {
        classList.add('account-active')
        body.addEventListener('click', function removeEventHandler() {
          body.removeEventListener('click', removeEventHandler)
          nav.classList.remove('account-active')
        })
      }
    })

    logout.addEventListener('click', function (e) {
      self.logout()
    })
  },
  logout() {
    util.get('logout')
      .then(function (res) {
        window.location.href = `${location.origin}/views/login.html`
      })
      .catch(function (err) {
        console.error(err);
        alert(err.message)
      });
  },
  checkSignatureStatus() {
    util.get('checkSignatureStatus')
      .then(function (res) {
        if (res) {
          document.querySelector('.order-sign_nav').style.display = 'block'
        }
      })
      .catch(function (err) {
        console.error(err);
        alert(err.message)
      });
  }
}



