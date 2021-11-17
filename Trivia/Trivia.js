$(document).ready(() => {
    $("#questions").hide();
    search();
});

function search() {
    new Promise((resolve, reject) => {
    $.get({
        url: `https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=boolean`,
        success: resolve,
        error: reject,
    });
    })
    .then(createQuestions)
    .catch(error => {
        
        console.log(`Something went wrong...`);
    });
}

function createQuestions(result) {
    console.log("this is results", result.results );
    $("#questions").empty().show()
    for (let i=0; i < result.results.length ; i++){
        $("#questions").append(`
            <div class="question q${i} mb-3">
            <p>${i+1} - ${result.results[i].question}</p>
            <form>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="question${i}" id="true${i}">
            <label class="form-check-label" for="true${i}">True</label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="question${i}" id="false${i}" >
            <label class="form-check-label" for="false${i}">False</label>
            </div>
            </div>
            </form>
        `)
    }
    // const element = `
    // <div #id='card' class='card'>
    //     <img class='img avatar' src="${user.avatar_url}" alt="avatar">
    //     <p>Login: ${user.login}</p>
    //     <p>Name: ${user.name || 'N/A'}</p>
    //     <p>Repos: ${user.public_repos}</p>
    //     <p>Gists: ${user.public_gists}</p>
    // </div>
    // `;

    // $('.user-content').first().empty().show().append(element);
}


