function validateForm(){
	/* 0. Eliminar los span de error de las validaciones anteriores */
	$('span.error').hide();

	/* 1. Traer los valores */
	var name = $('#name').val();
	var lastname = $('#lastname').val();
	var input_email = $('#input-email').val();
	var input_password = $('#input-password').val();

	var tipo_bici = $('select').val(); // comprobar que no sea "0"

	/* 2. Eliminar espacios en blanco al principio y al final */
	name = name.trim();
	lastname = lastname.trim();
	input_email = input_email.trim();
	input_password = input_password.trim();

	// name
	if (name == "") {
		$('.name-container').append('<span class="error">El nombre no puede ser vacío</span>');
	
	} else if (!(/^[a-zA-Z]+$/).test(name)) {
		$('.name-container').append('<span class="error">El nombre sólo puede contener letras entre la A y la Z</span>');
	
	} else if (name[0] != name[0].toUpperCase()) {
		$('.name-container').append('<span class="error">El nombre debe empezar en mayúscula</span>');

	}

	// lastname
	if (lastname == "") {
		$('.lastname-container').append('<span class="error">El apellido no puede ser vacío</span>');
	
	} else if (!(/^[a-zA-Z]+$/).test(lastname)) {
		$('.lastname-container').append('<span class="error">El apellido sólo puede contener letras entre la A y la Z</span>');
	
	} else if (lastname[0] != lastname[0].toUpperCase()) {
		$('.lastname-container').append('<span class="error">El apellido debe empezar en mayúscula</span>');

	}

	// input_email
	if (input_email == "") {
		$('.email-container').append('<span class="error">El email no puede ser vacío</span>');
	
	} else if (!/\S+@\S+\.\S+/.test(input_email)) {
		$('.email-container').append('<span class="error">El email debe estar correcto</span>');
	
	}

	// input_password
	if(input_password == "") {
		$('.input-box').eq(3).append('<span class="error">El password no puede ser vacío</span>');
	
	} else if (input_password.length < 6) {
		$('.input-box').eq(3).append('<span class="error">El largo debe ser de al menos 6</span>');
	
	} else if (input_password == 'password' || input_password == '123456' || input_password == '098754') {
		$('.input-box').eq(3).append('<span class="error">No puede ser igual a "password" ó "123456" ó "098754"</span>');

	}

	// tipo_bici
	if(tipo_bici == "0") {
		$('select').parent().append('<span class="error">Debe elegir una bici</span>');
	}
}