function fetchData( event ){
    event.preventDefault();
    //console.log( this );
    //console.log( event.target );
    let username = $( '#githubsearch' ).val();
    
    $.ajax({
        url : `https://api.github.com/users/${username}`,
        method : 'GET',
        success : function( data ){
            $( '.results' ).empty();
            $( '.results' ).append( `<img  style="width:100px;" src="${data.avatar_url}"/><h5>The user name is ${data.login}</h5>`);
            console.log(data);
            
        },
        error : function( err ){
            console.log( err );
            $( '.results' ).empty();
            $( '.results' ).append(`No results available`);
        }
    }); 
}

$( '.githubsearch' ).on( 'submit', fetchData )