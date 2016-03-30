function get_english_values(){
	
	var nav_aboutme = document.getElementById('nav aboutme').innerHTML
	var nav_contact = document.getElementById('nav contact').innerHTML
	var nav_projects = document.getElementById('nav projects').innerHTML
	var nav_aboutsite = document.getElementById('nav aboutsite').innerHTML


	var top_pic_1 = document.getElementById('top pic 1').innerHTML
	var top_pic_2 = document.getElementById('top pic 2').innerHTML
	var top_pic_3 = document.getElementById('top pic 3').innerHTML
	var about_header = document.getElementById('about header').innerHTML
	var about_text = document.getElementById('about text').innerHTML
	var contact_header = document.getElementById('contact header').innerHTML
	var project_header = document.getElementById('project header').innerHTML
	
	var details_dashboard_header = document.getElementById('details dashboard header').innerHTML
	var details_dashboard = document.getElementById('details dashboard').innerHTML
	var deployment_dashboard_header = document.getElementById('deployment dashboard header').innerHTML
	var deployment_dashboard = document.getElementById('deployment dashboard').innerHTML
	var code_dashboard_header = document.getElementById('code dashboard header').innerHTML
	var code_dashboard = document.getElementById('code dashboard').innerHTML

	var details_tournament_header = document.getElementById('details tournament header').innerHTML;
	var details_tournament = document.getElementById('details tournament').innerHTML
	var deployment_tournament_header = document.getElementById('deployment tournament header').innerHTML
	var deployment_tournament = document.getElementById('deployment tournament').innerHTML
	var deployment_tournament_2 = document.getElementById('deployment tournament 2').innerHTML
	var code_tournament_header = document.getElementById('code tournament header').innerHTML
	var code_tournament_1 = document.getElementById('code tournament 1').innerHTML
	var code_tournament_2 = document.getElementById('code tournament 2').innerHTML
	
	var details_periodic_header = document.getElementById('details periodic header').innerHTML
	var details_periodic = document.getElementById('details periodic').innerHTML
	var deployment_periodic_header = document.getElementById('deployment periodic header').innerHTML
	var deployment_periodic = document.getElementById('deployment periodic').innerHTML
	var code_periodic_header = document.getElementById('code periodic header').innerHTML
	var code_periodic = document.getElementById('code periodic').innerHTML;
	
	var details_pacman_header = document.getElementById('details pacman header').innerHTML
	var details_pacman = document.getElementById('details pacman').innerHTML
	var deployment_pacman_header = document.getElementById('deployment pacman header').innerHTML
	var deployment_pacman = document.getElementById('deployment pacman').innerHTML
	var code_pacman_header = document.getElementById('code pacman header').innerHTML
	var code_pacman = document.getElementById('code pacman').innerHTML

	var details_sicklists_header = document.getElementById('details sicklists header').innerHTML
	var details_sicklists = document.getElementById('details sicklists').innerHTML
	var deployment_sicklists_header = document.getElementById('deployment sicklists header').innerHTML
	var deployment_sicklists = document.getElementById('deployment sicklists').innerHTML
	var code_sicklists_header = document.getElementById('code sicklists header').innerHTML
	var code_sicklists = document.getElementById('code sicklists').innerHTML

	var details_chatroom_header = document.getElementById('details chatroom header').innerHTML
	var details_chatroom = document.getElementById('details chatroom').innerHTML
	var deployment_chatroom_header = document.getElementById('deployment chatroom header').innerHTML
	var deployment_chatroom = document.getElementById('deployment chatroom').innerHTML
	var code_chatroom_header = document.getElementById('code chatroom header').innerHTML
	var code_chatroom = document.getElementById('code chatroom').innerHTML


	var footer_header = document.getElementById('footer_header').innerHTML
	var footer_details = document.getElementById('footer_details').innerHTML
	var footer_copyright = document.getElementById('footer_copyright').innerHTML

	return function(){
	document.getElementById('nav aboutme').innerHTML = nav_aboutme
	document.getElementById('nav contact').innerHTML = nav_contact
	document.getElementById('nav projects').innerHTML = nav_projects
	document.getElementById('nav aboutsite').innerHTML = nav_aboutsite

	document.getElementById('top pic 1').innerHTML = top_pic_1
	document.getElementById('top pic 2').innerHTML = top_pic_2
	document.getElementById('top pic 3').innerHTML = top_pic_3
	document.getElementById('about header').innerHTML = about_header
	document.getElementById('about text').innerHTML = about_text
	document.getElementById('contact header').innerHTML = contact_header
	document.getElementById('project header').innerHTML = project_header
	
	document.getElementById('details dashboard header').innerHTML = details_dashboard_header
	document.getElementById('details dashboard').innerHTML = details_dashboard
	document.getElementById('deployment dashboard header').innerHTML = deployment_dashboard_header
	document.getElementById('deployment dashboard').innerHTML = deployment_dashboard
	document.getElementById('code dashboard header').innerHTML = code_dashboard_header
	document.getElementById('code dashboard').innerHTML = code_dashboard


	document.getElementById('details tournament header').innerHTML = details_tournament_header
	document.getElementById('details tournament').innerHTML = details_tournament
	document.getElementById('deployment tournament header').innerHTML = deployment_tournament_header
	document.getElementById('deployment tournament').innerHTML = deployment_tournament
	document.getElementById('deployment tournament 2').innerHTML = deployment_tournament_2
	document.getElementById('code tournament header').innerHTML = code_tournament_header
	document.getElementById('code tournament 1').innerHTML = code_tournament_1
	document.getElementById('code tournament 2').innerHTML = code_tournament_2
	
	document.getElementById('details periodic header').innerHTML = details_periodic_header
	document.getElementById('details periodic').innerHTML = details_periodic
	document.getElementById('deployment periodic header').innerHTML = deployment_periodic_header
	document.getElementById('deployment periodic').innerHTML = deployment_periodic
	document.getElementById('code periodic header').innerHTML = code_periodic_header
	document.getElementById('code periodic').innerHTML = code_periodic
	
	document.getElementById('details pacman header').innerHTML = details_pacman_header
	document.getElementById('details pacman').innerHTML = details_pacman
	document.getElementById('deployment pacman header').innerHTML = deployment_pacman_header
	document.getElementById('deployment pacman').innerHTML = deployment_pacman
	document.getElementById('code pacman header').innerHTML = code_pacman_header
	document.getElementById('code pacman').innerHTML = code_pacman

	document.getElementById('details sicklists header').innerHTML = details_sicklists_header
	document.getElementById('details sicklists').innerHTML = details_sicklists
	document.getElementById('deployment sicklists header').innerHTML = deployment_sicklists_header
	document.getElementById('deployment sicklists').innerHTML = deployment_sicklists
	document.getElementById('code sicklists header').innerHTML = code_sicklists_header
	document.getElementById('code sicklists').innerHTML = code_sicklists

	document.getElementById('details chatroom header').innerHTML = details_chatroom_header
	document.getElementById('details chatroom').innerHTML = details_chatroom
	document.getElementById('deployment chatroom header').innerHTML = deployment_chatroom_header
	document.getElementById('deployment chatroom').innerHTML = deployment_chatroom
	document.getElementById('code chatroom header').innerHTML = code_chatroom_header
	document.getElementById('code chatroom').innerHTML = code_chatroom

	document.getElementById('footer_header').innerHTML = footer_header
	document.getElementById('footer_details').innerHTML = footer_details
	document.getElementById('footer_copyright').innerHTML = footer_copyright
	}
}
