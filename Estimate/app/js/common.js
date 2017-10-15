$(function() {
    const mySiema1 = new Siema({
        selector: '.siema',
        selectorWrapper: '.wrapper-btn',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        threshold: 20,
        loop: true,
        onInit: () => {},
        onChange: () => {},
	});

    // Add a function that generates pagination to prototype
    Siema.prototype.addPagination = function() {
    	const wrapperBtn = document.createElement('div');
    		wrapperBtn.classList.add('wrapper-btn');
    		this.selector.appendChild(wrapperBtn);
        for (let i = 0; i < this.innerElements.length; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.addEventListener('click', () => this.goTo(i));
            document.querySelector('.wrapper-btn').appendChild(btn);
        }
    }

// Trigger pagination creator
    mySiema1.addPagination();
});

