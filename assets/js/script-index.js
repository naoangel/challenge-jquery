$(document).ready( function(){

/*
* Dándole un ID a cada span en su documento, 
* removemos para que se muestre solo el indicado
*/
$('#flechita-cont').remove();
$('#menu-bars').remove();
// Se invoca función que agrega contenido al <p> de news
printNews("NUEVAS RECETAS"); 


/*
*  La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
*/
	renderHighlightedRecipes(recipesArray);

	renderActivities(activities);

});



//----------------------------------------------------------------------------


/*
* Fiunción para agregar contenido al parrafo de título en News
*/
//variable de apoyo.
  var tituloNewsP = $('#titulo-news');
//inicia función
  function printNews(text){
//se inserta texto en el párrafo determinado.
    $(tituloNewsP).append(text);

  }

//-----------------------------------------------------------------------------

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
  
// inicia función.
  function renderHighlightedRecipes(recipesArray) {
//var de apoyo que recibe el nuevo array de las recetas destacadas
  var highlightedRecipes =[];
//Ciclo for para recorrer el  array original de recetas
  for(var i = 0; i< recipesArray.length; i++){
//Condicional para extraer las recetas que tengan como verdadera la key de destacado.	
   	if(recipesArray[i].highlighted == true){
// Se pushean finalmente las recetas al nuevo array creado   		
   		highlightedRecipes.push(recipesArray[i]);
   	}
   }
//se inserta la otra función. 
   renderRecipe(highlightedRecipes);
//se imprimen en consola las recetas.
	console.log('Recipes: ', recipesArray);
}

//-----------------------------------------------------------------------------



/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/


function renderRecipe(recipe) {
//recorriendo el array que se entregue. 	
  for(var i=0; i<recipe.length; i++){
// Aquí se agrega el theme dado con el contenido de recetas destacadas  	
  	$('.list-recipes').append('<a class="item-recipe" href="#">'+
                              '<span class="attribution">'+
                              '<span class="title-recipe">'+ recipe[i].title + '</span>'+
                              '<span class="metadata-recipe">'+ 
                              '<span class="author-recipe">'+ recipe[i].source.name + '</span>'+
                              '<span class="bookmarks-recipe">'+
                              '<span class="icon-bookmark"></span>'+
                              '</span></span></span>'+
                              '<img src="assets/img/recipes/320x350/'+ recipe[i].name +'.jpg"></a>' );
  }

	console.log('Voy a pintar la receta: ', recipe[i]);
}

//-------------------------------------------------------------------------------

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	for(var i=0 ; i<activities.length ; i++){
		renderActivity(activitiesArray);
	}
  if (activitiesArray.length > 0) {
    $('.wrapper-message').remove();
  }
	console.log('Activities: ', recipe[i]);
	}

//--------------------------------------------------------------------------------


/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
   $('.list-activities').append('<a href="#" class="item-activity">'+
                                 '<span class="attribution">'+
                                 '<span class="avatar">'+
                                 '<img src="assets/img/activity/'+ activities[i].userAvatar+ '" class="image-avatar">'+
                                 '</span><span class="meta">'+
                                 '<span class="author">'+ activities[i].userName + '</span>' + 'made' + 
                                 '<span class="recipe">'+ activities[i].recipeName+'</span>:'+ activities[i].text+ 
                                 '<span class="location">&mdash;'+activities[i].place+'</span></span></span>'+
                                 '<div class="bg-image" style="background-image: url("'+ activities[i].image+ '")>'+'</div>'+
                                 '</a>'

			)



}


