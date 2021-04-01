const dropdown = document.getElementById("category-select")
const newsUrlDefault = "https://newsapi.org/v2/everything?q=recycling&pageSize=100&apiKey=9880200ea032447db312afdcd153a44e";

dropdown.addEventListener('input', (event) => {
    let category = event.target.value;
    let newsUrl
    if (category == "all") {
        console.log("You want all articles!")
        newsUrl = "https://newsapi.org/v2/everything?q=recycling&pageSize=100&apiKey=9880200ea032447db312afdcd153a44e";
    } else {
        console.log("You only want " + category + " articles")
        newsUrl = "https://newsapi.org/v2/everything?q=recycling&sources=" + category + "&pageSize=100&apiKey=9880200ea032447db312afdcd153a44e";
    }
    fetchNews(newsUrl)
})

fetchNews(newsUrlDefault)

function fetchNews(query) {
    fetch(query)
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        displayArticles(myJson.articles);
    });
}

function displayArticles(articles) {
    console.log(articles)
}

// loadMoreArticles() {
//     this.setState((previousNumArticles) => {
//         let maxArticles;
//         if (this.state.newsSource == "all") {
//             maxArticles = 100;
//         }
//         if (this.state.newsSource == "reuters") {
//             maxArticles = 16;
//         }
//         if (previousNumArticles.numArticles + 4 > maxArticles) {
//             alert("Maximum number of articles have been loaded")
//         } else {
//             return { numArticles: previousNumArticles.numArticles + 4 }
//         }
//     })
// }

// getSelectedValue() {
//     this.setState(() => {
//         let selectedValue = document.getElementById("choice").value;
//         return { newsSource: selectedValue }
//     })
// }


{/* <div class="news-card">
    <img src={item.urlToImage}></img>
    <br />
    <h2>{item.title}</h2>
    <br />
    <p>{item.content}</p>
    <br />
    <a href={item.url} target="_blank">Read Article</a>
</div> */}