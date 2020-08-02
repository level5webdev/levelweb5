(function() {
    const $menuToogle = document.querySelector("#menu-toogle");
    var $navigation = document.querySelector(".navigation-wrapper");
    var $item = $navigation.querySelector(".list");

    $menuToogle.addEventListener("click", function event(event) {
        event.preventDefault();
        $menuToogle.classList.toggle("-active");
        $navigation.classList.toggle("-active");
    });
})();