function watchForm(){
  $('#send-search').submit(e => {
    e.preventDefault();
    const userTerm = $('#user-handles').val();
    githubApiData(userTerm);
  })
}

function githubApiData(userTerm){
  fetch(`https://api.github.com/users/${userTerm}/repos`)
  .then(res => res.json())
  .then(data =>{
    renderResults(data);
  })
}

function renderResults(data){
  const content = data.map(item => `
    <div>
    <h3> ${item.name} </h3>
    <a href=${item.html_url}> Link </a>

    </div>
  `)
  $('.repos').html(content)
}

$(watchForm);