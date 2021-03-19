import React, { Component } from "react";

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            numArticles: 4
        }
        // this.loadMoreArticles = this.loadMoreArticles.bind(this);
    }

    componentDidMount() {
        console.log("DIDMOUNT")
        // this.dropdown.addEventListener('select', (event) => {
        let dropdown = document.getElementById("choice");

        dropdown.addEventListener('input', (event) => {
            let category = event.target.value;
            let query = null;

            if (category == null) {
                query = "https://newsapi.org/v2/everything?q=recycling&pageSize=100&apiKey=4c7835df1ae94b67af7b489d0c5bcaa7"
            } else {
                query = "https://newsapi.org/v2/everything?q=recycling&sources=" + category + "&pageSize=100&apiKey=4c7835df1ae94b67af7b489d0c5bcaa7"
            }

            this.fetchArticles(query)
        })
    }

    fetchArticles(query) {
        console.log("FETCH")
        fetch(query)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson)
            this.setState({
                articles: myJson.articles
            });
            // console.log(this.articles)
        });
    }

    render() {
        console.log("RENDER")
        console.log(this.state.articles)
        return (
            <>
                <div>
                    <select id="choice">
                        <option value="all" defaultValue>All articles</option>
                        <option value="reuters">Reuters</option>
                    </select>
                </div>
                <div className="News">
                    {this.state.articles.slice(0, this.state.numArticles).map((item, index) => {
                        return (
                            <div class="news-card">
                                <img src={item.urlToImage}></img>
                                <br />
                                <h2>{item.title}</h2>
                                <br />
                                <p>{item.content}</p>
                                <br />
                                <a href={item.url} target="_blank">Read Article</a>
                            </div>
                        )
                    })}
                </div>
                <div className="news-button">
                    <button type="button" onClick={this.loadMoreArticles}>Load More</button>
                </div>
            </>
        );
    }

}