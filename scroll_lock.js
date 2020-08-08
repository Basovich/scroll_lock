(function(){    
    let disableScroll = function disableScroll() {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        let pagePosition = window.scrollY;
        document.body.style.paddingRight = paddingOffset;
        setStyleDisableScroll();
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
    }

    let enableScroll = function enableScroll() {
        let pagePosition = parseInt(document.body.dataset.position, 10);
        document.body.style.top = 'auto';
        setStyleEnableScroll()
        document.body.style.paddingRight = '';
        window.scroll({ top: pagePosition, left: 0 });
        document.body.removeAttribute('data-position');
    }

    function setStyleDisableScroll() {
        document.body.style.position = 'relative';
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        document.body.style.position = 'fixed';
        document.body.style.left = '0';
        document.body.style.top = '0';
        document.body.style.width = '100%';
    }

    function setStyleEnableScroll() { 
        document.body.style.position = '';
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.body.style.position = '';
        document.body.style.left = '';
        document.body.style.top = '';
        document.body.style.width = '';
    }

    window.disableScroll = disableScroll;
    window.enableScroll = enableScroll;
})();