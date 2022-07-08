//Disable accordions above 768 and enable below 
$(window).on('load resize', function () {
	// Enter a class name witch be in .accordion-button level
	$("name").each(function () {
		$(this).attr("data-bs-target", '');
	});

	if ($(window).width() < 768) {
		let descr = $(".accordion-collapse");

		descr.each(function () {
			let parentAttr = $(this).attr('id');
			let descr = $(this).prev().children();
			parentAttr = '#' + parentAttr;

			switch (parentAttr == descr.attr("data-bs-target")) {
				case false:
					descr.attr("data-bs-target", `${parentAttr}`)
					break;
				case true:
					break;
			}
		});
	}
});