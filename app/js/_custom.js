document.addEventListener("DOMContentLoaded", function() {

	$(".contact__column").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	var wow = new WOW(
		{
			mobile:false,
		}
	);
	wow.init();
	function cut() {
		let title = document.querySelectorAll('.easy__column-subtitle');
		for (let one of title) {
			if (one.innerHTML.length > 50) {
				let arr = one.innerHTML.split('');
				arr.length = 50;
				arr.push('...');
				one.innerHTML = arr.join('')
			};
		};
	};
	cut();
});
