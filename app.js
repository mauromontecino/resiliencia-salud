window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
    draggable: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 710,
			  settings: {
				draggable: true,
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			}
      ,
      {
			  // screens greater than >= 1024px
			  breakpoint: 1310,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 2
			  }
			}
		]
	});
});


function mostrar() {
  div = document.getElementById("flotante");
  div.style.display = "";
  abrir = document.getElementById("open");
  abrir.style.display = "none";
}

function cerrar() {
  div = document.getElementById("flotante");
  div.style.display = "none";
  abrir = document.getElementById("open");
  abrir.style.display = "";
}


