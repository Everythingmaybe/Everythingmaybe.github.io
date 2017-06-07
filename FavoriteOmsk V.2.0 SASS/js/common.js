var slider = {
	picleft: new Image(),			//Картинки для предварительной загрузки
	picright: new Image(),			//рядом стоящих картинок
	len: placesarray.length,
	bgimg: document.querySelector('.wrapper'),				//Объект у которого меняем фон
	frame: Math.floor(Math.random() * placesarray.length),	//Рандом
	set: function(image) { // установка нужного фона 
		this.bgimg.style.backgroundImage = "url(images/img" + image + ".jpg)";
		if (image = 0) {
			 this.picleft.src = "images/img" + (this.len-1) + ".jpg"
			 this.picright.src = "images/img" + (image+1) + ".jpg";
			}
			else if (image = this.len-1 ) {
				this.picright.src = "images/img" + (0) + ".jpg";
				this.picleft.src = "images/img" + (image-1) + ".jpg";
			}
			else {
				this.picleft.src = "images/img" + (image-1) + ".jpg";
				this.picright.src = "images/img" + (image+1) + ".jpg";
			}
	},
	
	init: function() {
		this.set(this.frame);
	},

	left: function() {
		--this.frame;
		if(this.frame < 0) this.frame = --this.len;
		this.set(this.frame);
	},

	right: function() {
		--this.frame;
		if(this.frame > this.len - 1) this.frame = 0;
		this.set(this.frame);
	}
};

window.onload = function() { // запуск слайдера после загрузки документа
slider.init();
alert(slider.picleft.src);
}

