import React from 'react';
import Button from "../../components/Button";
import HeadBar from "../../components/HeadBar";
import Grid from "../../components/Grid";

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            keyword: "",
            displayKeyword: ""
        };
    }

    componentDidMount () {
        this.fetchData();
    }

    fetchData = () => {
        return fetch(link)
            .then(res => res.json())
            .then( res => {
                console.log(res)
                this.setState({
                    list: res
                });
            });
    };

    handleLogin = () => {
        this.setState({
            isAuthenticated: true
        });
    };

    handleForm = event => {
        this.setState({
            keyword: event.target.value
        });
    };

    
    handleSubmit = event => {
        event.preventDefault();
       const name = this.state.keyword;

        this.setState({
            displayKeyword: name
        });
    };

    render () {
        return (
            <div>
                <div><HeadBar /></div>
                <div>
                    <Grid>
                        <form onSubmit={this.handleSubmit}>
                            <input placeholder="Search Anything..." onChange={this.handleForm}/>
                            <Button onClick={this.handleLogin}>
                                Search
                            </Button>
                        </form>
                        {this.state.list && this.state.list.filter( article => {
                            return article.title.toLowerCase().includes(this.state.displayKeyword) || article.content.toLowerCase().includes(this.state.displayKeyword)
                        }).map(article => {
                            console.log(article)
                            return (<div key={article.id} style={{marginBottom: 10}}>
                                    <div><strong>{article.title}</strong></div>
                                    <div>{article.content}</div>
                            </div>)
                        })}
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Home;