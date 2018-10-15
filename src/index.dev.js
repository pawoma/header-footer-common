import headerTemplate from './header/header.html';
import Header from './header/header'
import './header/header.less'
import './footer/footer.less'

const $headerWrap = document.getElementById('header-wrap');
$headerWrap.innerHTML = headerTemplate;
Header.init();