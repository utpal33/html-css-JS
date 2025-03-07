const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authos.json')
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
    console.log(authorDataArr);
  })
  .catch((err) => {
    // console.error(`There was an error: ${err}`);
    authorContainer.innerHTML += `<p class="error-msg">Kindly visit Later. Authors are at different place.</p>`
  });

const fetchMoreAuthor = ()=>{
    startingIndex+=8;
    endingIndex+=8;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));

    if(authorDataArr.length <= endingIndex){
        loadMoreBtn.textContent = "No More Data To Load"
    }
}

// button-click event to load more Data
loadMoreBtn.addEventListener("click", fetchMoreAuthor)

// displaying authors in chunks(8 in one lot)
const displayAuthors = (authors)=> {
    authors.forEach(({author, image, url, bio}, index)=>{
        authorContainer.innerHTML +=
                `<div class="user-card" id=${index}>
                    <h2 class="author-name">${author}</h2>
                    <img class="author-img" src=${image} alt="${author}'s avatar">
                    <div class="purple-divider"></div>
                    <p class="bio">${authors.length > 50 ? bio.slice(0, 50) + "...":bio}</p>
                    <a class="author-link" href="${url}" target="_blank">"${author} page"</a>
                </div>`; 
            });
};





