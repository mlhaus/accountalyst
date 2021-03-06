ow.
*/

Slideshow.Flash = new Class({
	Extends: Slideshow,
	
	options: {
		color: ['#FFF']
	},
	


	initialize: function(el, data, options){
		options.overlap = true;
		if (options.color)
			options.color = $splat(options.color);
		this.parent(el, data, options);
	},



	_show: function(fast){
		if (!this.image.retrieve('tween'))
		  $$(this.a, this.b).set('tween', {'duration': this.options.duration, 'link': 'cancel', 'onStart': this._start.bind(this), 'onComplete': this._complete.bind(this), 'property': 'opacity'});
		if (fast)
			this.image.get('tween').cancel().set(1);
		else {
			this.slideshow.retrieve('images').setStyle('background', this.options.color[this.slide % this.options.color.length]);
			var img = (this.counter % 2) ? this.a : this.b;
			img.get('tween').cancel().set(0);
			this.image.get('tween').set(0).start(1);
		}
	}
});