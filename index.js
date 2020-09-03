'use scrict'

let dogBreed = 'unknown'; 


function getDogBreed(){
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then( response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('you done messed up!')); 
}

function displayResults(responseJson){

    console.log('displayResults running'); 
    $('.image').empty(); 

    if(responseJson.status == 'success'){
        $('.error').empty(); 
        $('.results').removeClass('hidden');
        $('.image').append(`<img src="${responseJson.message}" class="results-img">`);
    }
    else{
        $('results').addClass('hidden'); 
        $('.error').append("<p> Your dog breed was not found</p>"); 
    }
    
}


function watchForm(){
    $('form').submit( function(event){ 
        dogBreed = document.getElementById("dogChosen").value; 
        console.log(dogBreed); 
        event.preventDefault(); 
        getDogBreed(); 
    });
}

$(function (){
    console.log('app loaded! waiting for submit');
    watchForm(); 
})