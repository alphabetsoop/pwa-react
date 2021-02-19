import React, { Component } from "react";

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?q=recycling&language=en&apiKey=4c7835df1ae94b67af7b489d0c5bcaa7')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    articles: myJson.articles
                });
            });
    }

    render() {
        console.log(this.state);
        return (
            <div className="News">
                {this.state.articles.map((item, index) => {
                    return (
                        <div class="news-card">
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                            <a href={item.url} target="_blank">Read Article</a>
                        </div>
                    )
                })}
            </div>
        );
    }

}