import React from 'react'

export default function Header() {
    return (
          <header class="u-clearfix u-header u-header" id="sec-f6ac">
    <div class="u-clearfix u-sheet u-sheet-1">
      <a  class="u-image u-logo u-image-1" data-image-width="475" data-image-height="291">
        <img src="images/logo.png" class="u-logo-image u-logo-image-1" alt='logo'> </img>
      </a>
      <nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
        <div class="menu-collapse" style={"font-size: 1rem"} style={"letter-spacing: 0px"} >
          <a class="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
            >
            <svg viewBox="0 0 24 24">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#menu-hamburger"></use>
            </svg>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <symbol id="menu-hamburger" viewBox="0 0 16 16" style={"width: 16px"} style={"height: 16px"} >
                  <rect y="1" width="16" height="2"></rect>
                  <rect y="7" width="16" height="2"></rect>
                  <rect y="13" width="16" height="2"></rect>
                </symbol>
              </defs>
            </svg>
          </a>
        </div>
        <div class="u-custom-menu u-nav-container">
          <ul class="u-nav u-unstyled u-nav-1">
            <li class="u-nav-item"><a 
                class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-1-base"
                style={"padding: 10px 20px;"}>Hjem</a>
            </li>
            <li class="u-nav-item"><a
                class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-1-base"
                 style={"padding: 10px 20px;"}>Kontakt</a>
            </li>
            <li class="u-nav-item"><a
                
                class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-1-base"
                style={"padding: 10px 20px;"}>Om</a>
            </li>
          </ul>
        </div>
        <div class="u-custom-menu u-nav-container-collapse">
          <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
            <div class="u-inner-container-layout u-sidenav-overflow">
              <div class="u-menu-close"></div>
              <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                <li class="u-nav-item"><a class="u-button-style u-nav-link" style={"padding: 10px 20px;"}>Hjem</a>
                </li>
                <li class="u-nav-item"><a class="u-button-style u-nav-link" 
                    style={"padding: 10px 20px;"}>Kontakt</a>
                </li>
                <li class="u-nav-item"><a class="u-button-style u-nav-link" style={"padding: 10px 20px;"}>Om</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
        </div>
      </nav>
    </div>
  </header>
    )
}
