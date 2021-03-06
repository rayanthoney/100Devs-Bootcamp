// CSS SPACESHIP
// https://codepen.io/rezen/pen/nQddPp

(function () {
	let ship = ("#ship");
	let SHIP = {
		vx: 0,
		vy: 0,
		pos: {
			x: 0,
			y: 0,
		},
		firing: true,
		moving: false,
		rotation: 0,
	};

	let fire = null;
	("body").on("click", function () {
		clearTimeout(fire);
		ship.addClass("fire");
		fire = setTimeout(function () {
			ship.removeClass("fire");
		}, 800);
	});

	("#scene").on("click", function (e) {
		let old_pos = SHIP.pos;
		console.log(old_pos);
		ship.css({
			top: e.clientY,
			left: e.clientX,
		});

		SHIP.pos = {
			x: e.clientX,
			y: e.clientY,
		};

		// left or right
		if (old_pos.x > SHIP.pos.x) {
		} else {
		}

		// up  or down
		if (old_pos.y > SHIP.pos.y) {
		} else {
		}
	});
});
