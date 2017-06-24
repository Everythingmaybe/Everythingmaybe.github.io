var slider = {
	picleft: new Image(),			//Для предварительной загрузки
	picright: new Image(),			//рядом стоящих картинок
	len: placesarray.length,
	bgimg: document.querySelector('.wrapper'),				//Объект у которого меняем фон
	frame: Math.floor(Math.random() * placesarray.length),	//Рандом
	set: function(image) { // установка нужного фона 
		slider.bgimg.style.backgroundImage = "url(images/img" + image + ".jpg)";
		if (image == 0) {
			 slider.picleft.src = "images/img" + (slider.len-1) + ".jpg"
			 slider.picright.src = "images/img" + (image+1) + ".jpg";
			}
			else if (image == slider.len-1 ) {
				slider.picright.src = "images/img" + (0) + ".jpg";
				slider.picleft.src = "images/img" + (image-1) + ".jpg";
			}
			else {
				slider.picleft.src = "images/img" + (image-1) + ".jpg";
				slider.picright.src = "images/img" + (image+1) + ".jpg";
			}
		slider.addInfoPlace(image);
	},
	
	init: function() {
		slider.set(slider.frame);
	},

	left: function() {
		slider.frame--;
		if(slider.frame < 0) slider.frame = --slider.len;
		slider.set(slider.frame);
	},

	right: function() {
		slider.frame++;
		if(slider.frame > slider.len - 1) slider.frame = 0;
		slider.set(slider.frame);
	},

	addInfoPlace: function(a) {
		var
		nameplace = document.querySelector('.point-name > h2'),
		infoplace = document.querySelector('.point-info > p');

		nameplace.innerHTML = placesarray[a].imgName;
		infoplace.innerHTML = placesarray[a].imgInfo;	
	},

	openInfoPlace: function() {
		var
		containerPlace = document.querySelector('.container-point'),
		containerNameplace = document.querySelector('.point-name'),
		containerInfoplace = document.querySelector('.point-info'),
		logo = document.querySelector('.info > img'),
		name = document.querySelector('.info > h1');

		if (containerPlace.classList.contains('active')) {
			containerPlace.classList.remove('active');
			containerNameplace.classList.remove('active');
			containerInfoplace.classList.remove('active');
			logo.classList.remove('close');
			name.classList.remove('close');
		} else {
			containerPlace.classList.add('active');
			containerNameplace.classList.add('active');
			containerInfoplace.classList.add('active');
			logo.classList.add('close');
			name.classList.add('close');
		}
	},

	

};

window.onload = function() { 
	var
	containerNameplace = document.querySelector('.point-name'),
	rightSlide = document.querySelector('.right'),
	leftSlide = document.querySelector('.left'),
	wrapper = document.querySelector('.wrapper');
	
	slider.init();							// запуск слайдера после загрузки документа

	/* Прелоудер */
	var fps = 50, // 50 кадров в секунду
		opacity = + wrapper.style.opacity;
	var timer = setInterval(function() {
		if (opacity == 1) clearInterval(timer);
		else {opacity += (0.02);
			wrapper.style.opacity = opacity} 
	}, 1000 / fps)
	
	/*Переключание слайда по клику*/
	rightSlide.addEventListener("click", slider.right); 				
	leftSlide.addEventListener("click", slider.left);
	containerNameplace.addEventListener("click", slider.openInfoPlace);

	/*Переключение слайда по клавишам*/
	addEventListener("keydown", function(event) {
    if (event.keyCode == 32 || event.keyCode == 13) {slider.openInfoPlace()};
    if (event.keyCode == 39) {slider.right()};
    if (event.keyCode == 37) {slider.left()};
	})
	
	/*Переключение слайда для сенсорных экранов*/
	var initialPoint,
	finalPoint,
	infoSection = document.querySelector('.info'),
	mainSection = document.querySelector('.main-section');
	mainSection.addEventListener('touchstart', function(event) {
		event.preventDefault();
		event.stopPropagation();
		initialPoint=event.changedTouches[0];
	}, false);
	mainSection.addEventListener('touchend', function(event) {
		event.preventDefault();
		event.stopPropagation();
		finalPoint=event.changedTouches[0];
		var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
		var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
		if (xAbs > 20 || yAbs > 20) {
			if (xAbs > yAbs) {
				if (finalPoint.pageX < initialPoint.pageX){
					/*СВАЙП ВЛЕВО*/
					slider.right();
				}
				else{
					/*СВАЙП ВПРАВО*/
					slider.left();
				}
			}
		} else {
			infoSection.addEventListener('touchstart',
					slider.openInfoPlace(), false);
		}
	}, false);
}

