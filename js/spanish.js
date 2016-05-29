function spanish(){
	document.getElementById('nav aboutme').innerHTML = 'Sobre Yo'
	document.getElementById('nav contact').innerHTML = 'Datos de Contacto'
	document.getElementById('nav projects').innerHTML = 'Proyectos'
	document.getElementById('nav aboutsite').innerHTML = 'Sobre Sitio'

	document.getElementById('top pic 1').innerHTML = 'Desarrollador Full Stack'
	document.getElementById('top pic 2').innerHTML = 'QA Anterior'
	document.getElementById('top pic 3').innerHTML = 'Gracias por visitar mi sitio'
	document.getElementById('about header').innerHTML = 'Sobre Yo'
	document.getElementById('about text').innerHTML = 'Hola! Mi nombre es Mike Berger y soy un desarrollador. Me gradué de Rice University, unas de las universidades mejores en los EE.UU y después pasé 2.5 años trabajando como QA en una compañia grande de tecnología en Wisconsin (se llama Epic). Hice pruebas por la aplicaciòn Cogito Data Warehouse y aprendí mucho sobre haciendo pruebas, bases de datos y el ciclo de desarrollo. Despuès de Epic y una viaje a Sur de América pasé todo de mi tiempo estudiando el desarrollo de web por tomando una programa de 12 semanas de programaciòn de software en Silicon Valley. Me gradué con certifiaciònes en cada curso que se ofreciò: CSS + HTML, LAMP, MEAN y Ruby on Rails. Pasaba más que 1000+ horas haciendo este programa. Ahora estoy buscando por el pròximo oportunidad.'
	document.getElementById('contact header').innerHTML = 'Información de Contacto'
	document.getElementById('project header').innerHTML = 'Proyectos'
	
	document.getElementById('details dashboard header').innerHTML = 'Detalles'
	document.getElementById('details dashboard').innerHTML = "Aquí está una aplicación para administrar a usuarios. Se puede crear, editar, y borrar usuarios al igual que dejar mensajes y comentarios en su perfil. Estilo con Materialize. Hizo con el LAMP stack (Linux, Apache, MySQL, PHP) y CodeIgniter."
	document.getElementById('deployment dashboard header').innerHTML = 'Ver Aplicación'
	document.getElementById('deployment dashboard').innerHTML = 'Ver Panel de Usuario'
	document.getElementById('code dashboard header').innerHTML = 'Ver Còdigo'
	document.getElementById('code dashboard').innerHTML = 'Ver Github'

	document.getElementById('details tournament header').innerHTML = 'Detalles'
	document.getElementById('details tournament').innerHTML = "Aquí es una aplicación para crear un torneo de eliminación simple (hecho a partir de cero con Ember y Rails). Calcula quien debe seguir al segundo ronda si no hay oponente, su calificación, su ELO rating depende si gana o pierda (si se selecciona Ping Pong) y quien debe competir en contra de quien (por ELO rating o aleatorizado). El usuario puede arrastrar y soltar el ganador para advanzarlo en el torneo, o revertir una decision con un botón de 'revertir'. Ember habla con un backend API en Rails que hace los calculación es para el torneo. Front end hizo por<a href=\"https://www.linkedin.com/in/jagdeepbrar\">Jagdeep Brar</a>, hice el backend.</p>"
	document.getElementById('deployment tournament header').innerHTML = 'Ver Aplicación'
	document.getElementById('deployment tournament').innerHTML = 'Crear un Torneo'
	document.getElementById('deployment tournament 2').innerHTML = 'Ver Video de Funcionalidad'
	document.getElementById('code tournament header').innerHTML = 'Ver Còdigo'
	document.getElementById('code tournament 1').innerHTML = 'Ver Github para Back-end'
	document.getElementById('code tournament 2').innerHTML = 'Ver Github para Front-end'

	document.getElementById('details periodic header').innerHTML = 'Detalles'
	document.getElementById('details periodic').innerHTML = "Aqui está la tabla periódica hizo por a partir de cero con CSS y Javascript, sin la necesidad de un front-end framework"
	document.getElementById('deployment periodic header').innerHTML = 'Ver Aplicación'
	document.getElementById('deployment periodic').innerHTML = 'Ver Tabla Periódica'
	document.getElementById('code periodic header').innerHTML = 'Ver Còdigo'
	document.getElementById('code periodic').innerHTML = 'Ver Github'

	document.getElementById('details fill header').innerHTML = 'Detalles'
	document.getElementById('details fill').innerHTML = "Un ejemplo simple de recursividad. Haga clic en un cuadro y todos los cuadros alrededor que tienen el color cambian a negro. Compatible con Firefox y Chrome."
	document.getElementById('deployment fill header').innerHTML = 'Ver Ejemplo'
	document.getElementById('deployment fill').innerHTML = 'Ver Llenamiento Recursivo'
	document.getElementById('code fill header').innerHTML = 'Ver Còdigo'
	document.getElementById('code fill').innerHTML = 'Ver Github'
	
	document.getElementById('details pacman header').innerHTML = 'Detalles'
	document.getElementById('details pacman').innerHTML = "Aquí está mi implementación de Pacman. Lo hicé puramente con javascript en el front-end. Lo hice antes de asistir al programa de código. Creado por Firefox."
	document.getElementById('deployment pacman header').innerHTML = 'Ver Aplicación'
	document.getElementById('deployment pacman').innerHTML = 'Jugar Pacman'
	document.getElementById('code pacman header').innerHTML = 'Ver Còdigo'
	document.getElementById('code pacman').innerHTML = 'Ver Github'

	document.getElementById('details sicklists header').innerHTML = 'Detalles'
	document.getElementById('details sicklists').innerHTML = "Aquí está una aplicaciòn para mostrar las listas de reproducciòn mejores de sitios de web diferentes(Youtube, Spotify, 8tracks, etc). Se organiza las listas de reproducciòn por género y después por la cantidad de gustos. También tiene una página de clasificaciones de usuarios. La escribí en full MEAN; front-end usa Angular.js, back-end usa Node.js y Express, y el base de datos es MongoDB. Yo hice el back-end y un poquito del front-end, y el front-end fue hecho principalmente por <a href=\"https://www.linkedin.com/in/hsjung\">Hyun Jung</a> "
	document.getElementById('deployment sicklists header').innerHTML = 'Ver Aplicación'
	document.getElementById('deployment sicklists').innerHTML = 'Ver las Listas de Reproducciòn Mejores del Web'
	document.getElementById('code sicklists header').innerHTML = 'Ver Còdigo'
	document.getElementById('code sicklists').innerHTML = 'Ver Github'

	document.getElementById('details chatroom header').innerHTML = 'Detalles'
	document.getElementById('details chatroom').innerHTML = "Aquí está una aplicación simple de charlar que usa sockets.io para comunicar con un back-end de Node.js"
	document.getElementById('deployment chatroom header').innerHTML = 'Ver Aplicación'
	document.getElementById('deployment chatroom').innerHTML = 'Ver Sala de Chat'
	document.getElementById('code chatroom header').innerHTML = 'Ver Còdigo'
	document.getElementById('code chatroom').innerHTML = 'Ver Github'

	document.getElementById('footer_header').innerHTML = 'Sobre este sitio de web'
	document.getElementById('footer_details').innerHTML = 'Este sitio de web fue creado con Materialize. Parallax se ve mejor con Chrome y Firefox con Mac OS, o con Firefox en Windows. Se funciona con teléfonos móbiles. Español/ingles traducción hizo con funciones para ingles y español: valores originales en ingles son guardados en un closure, valores de español son guardados en un archivo separado, elementos son actualizados con Document.getElementById.'
	document.getElementById('footer_copyright').innerHTML = 'Por Mike Berger, 2015'
}
