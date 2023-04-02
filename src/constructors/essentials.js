let header = document.querySelector("header");
let footer = document.querySelector("footer");
header.innerHTML += `<div class="container-fluid">
            <div class="row main-nav mx-4">
                <div class="col-3 p-0">
                    <a href="../../index.html">
                        <img src="../../images/headerIcons/logo.svg" alt="logo" class="logo">
                    </a>
                </div>
                <div class="col-6 d-flex align-items-center">
                    <div class="container">
                        <nav>
                            <ul id="main-navigation-list"></ul>
                        </nav>
                    </div>
                </div>
                <div class="col-3 d-flex align-items-center p-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-10">
                                <div class="search main-nav-search">
                                    <form action="#">
                                        <input type="text" placeholder="Пошук">
                                        <button type="submit"></button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-2 d-flex align-items-center justify-content-center">
                                <div class="language-switcher">
                                    <div class="dropdown">
                                        <a href="#">UA</a>
                                        <div class="dropdown-content">
                                            <a href="#">EN</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row side-nav">
                <nav class="navbar fixed-top px-3">
                    <a href="../../index.html">
                        <img src="../../images/headerIcons/logo.svg" alt="logo" class="logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            <button type="button" class="btn btn-light">
                                <a href="#" style="color: black">EN</a>
                            </button>
                        </div>
                        <div class="offcanvas-body">
                            <div class="search side-nav-search">
                                <form role="search">
                                    <input class="me-2" placeholder="Пошук" aria-label="Search">
                                    <button type="submit"></button>
                                </form>
                            </div>
                            <ul class="navbar-nav" id="offcanvas-navigation-list"></ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
`;

footer.innerHTML += `<div class="row flex-column flex-sm-row mb-4 mb-sm-5">
            <div class="col-12 col-sm-4">
                <div class="row">
                    <div class="col-10 col-sm-12 contacts">
                        <div class="row align-items-center mb-2">
                            <div class="col-auto">
                                <img src="../../images/footerIcons/phone-icon.svg" alt="">
                            </div>
                            <div class="col-auto">
                                <span>+38 (044) 204 80 96</span>
                                <br/>
                                <span>+38 (044) 204 80 89</span>
                            </div>
                        </div>
                        <div class="row align-items-center mb-2">
                            <div class="col-auto">
                                <img src="../../images/footerIcons/mail-icon.svg" alt="">
                            </div>
                            <div class="col-auto">
                                <span>www@gmail.com</span>
                            </div>
                        </div>
                        <div class="row align-items-center mb-2">
                            <div class="col-auto">
                                <img src="../../images/footerIcons/location-icon.svg" alt="">
                            </div>
                            <div class="col">
                                <span>
                                    вул. Політехнічна 6, м. Київ, 03056 <br/>
                                    КПІ ім. Ігоря Сікорського <br/>
                                    ТЕФ, кафедра Т та АЕ
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 col-sm-12">
                        <div class="row">
                            <div class="col-auto facebook-link">
                                <a href="">
                                    <img src="../../images/footerIcons/facebook-icon.svg" alt="">
                                </a>
                            </div>
                            <div class="col telegram-link">
                                <a href="">
                                    <img src="../../images/footerIcons/telegram-icon.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-2 d-flex flex-column footer-links">
                <a href="#">https://kpi.ua</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </div>
            <div class="col-12 col-sm-6 footer-kpi-logos">
                <div class="row mt-3 mt-sm-0 align-items-center">
                    <div class="col-3">
                        <img src="../../images/footerIcons/univercity-logo-big.svg" alt="">
                    </div>
                    <div class="col-9">
                            <span>
                                Навчально-науковий інститут атомної
                                та теплової енергетики
                            </span>
                    </div>
                </div>
                <div class="row mt-3 mt-sm-2 align-items-center">
                    <div class="col-3">
                        <img src="../../images/footerIcons/univercity-logo-big.svg" alt="">
                    </div>
                    <div class="col-9">
                            <span>
                                Національний технічний університет України
                                "Київський політехнічний інститут імені Ігоря Сікорського"
                            </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row flex-column flex-sm-row d-flex justify-content-between">
            <div class="col-auto"><span>Copyright ©2022 DTE. All rights reserved </span></div>
            <div class="col-auto developed_by"><span>Developed by students of the institute as members of LIDDWEB</span></div>
        </div>
`;
