import React from 'react';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?q=recycling&apiKey=4c7835df1ae94b67af7b489d0c5bcaa7')
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
                        <h2>{item.title}</h2>
                    )
                })}
            </div>
        );
    }

}