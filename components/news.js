import React, { Component } from "react";

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            numArticles: 4,
            newsSource: "all",
        }
        this.loadMoreArticles = this.loadMoreArticles.bind(this);
        this.getSelectedValue = this.getSelectedValue.bind(this);
    }

    componentDidMount() {
        let dropdown = document.getElementById("choice")
        let newsUrlDefault = "https://newsapi.org/v2/everything?q=recycling&pageSize=100&apiKey=4c7835df1ae94b67af7b489d0c5bcaa7";
        dropdown.addEventListener('input', (event) => {
            let category = event.target.value;
            let newsUrl
            if (category == "all") {
                console.log("You want all articles!")
                newsUrl = "https://newsapi.org/v2/everything?q=recycling&pageSize=100&apiKey=4c7835df1ae94b67af7b489d0c5bcaa7";
            } else {
                console.log("You only want " + category + " articles")
                newsUrl = "https://newsapi.org/v2/everything?q=recycling&sources=" + category + "&pageSize=100&apiKey=4c7835df1ae94b67af7b489d0c5bcaa7";
            }
            this.fetchNews(newsUrl)
        })
        this.fetchNews(newsUrlDefault)
    }

    fetchNews(query) {
        fetch(query)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    articles: myJson.articles
                });
            });
    }

    loadMoreArticles() {
        this.setState((previousNumArticles) => {
            var maxArticles;
            if (this.state.newsSource == "all") {
                maxArticles = 100;
            }
            if (this.state.newsSource == "reuters") {
                maxArticles = 16;
            }
            if (previousNumArticles.numArticles + 4 > maxArticles) {
                alert("Maximum number of articles have been loaded")
            } else {
                return { numArticles: previousNumArticles.numArticles + 4 }
            }
        })
    }

    getSelectedValue() {
        this.setState(() => {
            var selectedValue = document.getElementById("choice").value;
            return { newsSource: selectedValue }
        })
    }

    render() {
        return (
            <>
                <div className="newsOverview">
                    <select id="choice" onChange={this.getSelectedValue}>
                        <option value="all" defaultValue>All articles</option>
                        <option value="reuters">Reuters</option>
                    </select>
                </div>
                <div className="News">
                    {this.state.articles.slice(0, this.state.numArticles).map((item, index) => {
                        return (
                            <div className="news-card">
                                <h2>{item.title}</h2>
                                <br />
                                <p>{item.content}</p>
                                <a href={item.url} target="_blank">Read Article</a>
                            </div>
                        )
                    })}
                </div>
                <div className="news-button mobile">
                    <button type="button" onClick={this.loadMoreArticles}>+</button>
                </div>
                <div className="news-button desktop">
                    <button type="button" onClick={this.loadMoreArticles}>Load More</button>
                </div>
            </>
        );
    }
}