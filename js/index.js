const $elements = $('.anim');
const $window = $(window);

$(window).on('scroll resize', checkView());

const checkView = () => {
	const windowHeight = $window.height();
	const windowTop = $window.scrollTop();
	const windowBottom = windowTop + windowHeight;

	$.each($elements, function() {
		const $element = $(this);
		const elementHeight = $element.outerHeight();
		const elementTop = $element.offset().top;
		const elementBottom = elementTop + elementHeight;
	});
};
