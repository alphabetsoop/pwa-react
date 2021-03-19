import React, { Component } from "react";

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            numArticles: 4
        }
        this.loadMoreArticles = this.loadMoreArticles.bind(this);
    }

    componentDidMount() {
        console.log(this.getSelectedValue())
        var newsUrl;
        if (this.getSelectedValue() == "all-articles") {
            console.log("You want all of the articles")
            newsUrl = 'https://newsapi.org/v2/everything?q=recycling&pageSize=100&apiKey=4c7835df1ae94b67af7b489d0c5bcaa7';
        }
        if (this.getSelectedValue() == "reuters-articles") {
            console.log("You only want articles from reuters")
            newsUrl = 'https://newsapi.org/v2/everything?q=recycling&sources=reuters&pageSize=100&apiKey=4c7835df1ae94b67af7b489d0c5bcaa7';
        }
        fetch(newsUrl)
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
            if (this.getSelectedValue == "all-articles") {
                maxArticles = 100;
            }
            if (this.getSelectedValue == "reuters-articles") {
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
        var selectedValue = document.getElementById("choice").value;
        return { selectedValue }
    }


    render() {
        //console.log(this.state);
        return (
            <>
                <div>
                    <select id="choice" onChange={this.getSelectedValue}>
                        <option value="all-articles" defaultValue>All articles</option>
                        <option value="reuters-articles">Reuters</option>
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