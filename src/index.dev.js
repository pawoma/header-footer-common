import headerTpl from './header/header.html'
import footerTpl from './footer/footer.html'
import header from './header/header.js'
import './header/header.less'
import './footer/footer.less'


document.querySelector('#header-wrap').innerHTML=headerTpl
document.querySelector('#footer-wrap').innerHTML=footerTpl
header.init()