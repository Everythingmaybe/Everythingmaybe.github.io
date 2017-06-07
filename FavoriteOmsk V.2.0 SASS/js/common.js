var slider = {
	picleft: new Image(),			//Картинки для предварительной загрузки
	picright: new Image(),			//рядом стоящих картинок
	len: placesarray.length,
	bgimg: document.querySelector('.wrapper'),				//Объект у которого меняем фон
	frame: Math.floor(Math.random() * placesarray.length),	//Рандом
	set: function(image) { // установка нужного фона 
		this.bgimg.style.backgroundImage = "url(images/img" + image + ".jpg)";
		if (image == 0) {
			 this.picleft.src = "images/img" + (this.len-1) + ".jpg"
			 this.picright.src = "images/img" + (image+1) + ".jpg";
			}
			else if (image == this.len-1 ) {
				this.picright.src = "images/img" + (0) + ".jpg";
				this.picleft.src = "images/img" + (image-1) + ".jpg";
			}
			else {
				this.picleft.src = "images/img" + (image-1) + ".jpg";
				this.picright.src = "images/img" + (image+1) + ".jpg";
			}
		this.addInfoPlace(image);
	},
	
	init: function() {
		this.set(this.frame);
	},

	left: function() {
		this.frame--;
		if(this.frame < 0) this.frame = --this.len;
		this.set(this.frame);
	},

	right: function() {
		this.frame++;
		if(this.frame > this.len - 1) this.frame = 0;
		this.set(this.frame);
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

window.onload = function() { // запуск слайдера после загрузки документа
	var
	containerNameplace = document.querySelector('.point-name');
	slider.init();
	containerNameplace.onclick = slider.openInfoPlace;
}

