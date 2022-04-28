const init = () => {
    const inputForm = document.querySelector('form')
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
  
      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => { 
        let title = document.querySelector('section#movieDetails h4');
        let summary = document.querySelector('section#movieDetails p')
       if(data.title === undefined) {
         title.innerText = "Sorry, data not found"
         summary.innerText = "Sorry, data not found"
        }
        else {
          title.innerText = data.title;
          summary.innerText = data.summary;
          }
         console.log( typeof data.title)
      })
      // hey next time do an if else buddy
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);