console.log('Loaded!');
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(100);
  
  $('.projects').hide();
  
  $('.projects-button').on('click', function() {
//$(this).next().toggle();
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
    $(this).next().slideToggle(400);
	});
  
}

$(document).ready(main);