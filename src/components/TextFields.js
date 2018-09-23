import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import List from "./List";
import Grid from "./Grid";

const link =
"https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class TextFields extends React.Component {
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

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
   const name = this.state.keyword;

    this.setState({
        displayKeyword: name
    });
  }; 

  handleForm = event => {
    this.setState({
        keyword: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.children} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            className={classes.textField}
            placeholder="Search Anything..."
            onChange={this.handleForm}
            margin="normal"
          />
          <Button variant="contained" color="primary" className={classes.button}>
            <SearchIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Search
          </Button>
        </form>
        {this.state.list && this.state.list.filter( article => { return article.title.toLowerCase().includes(this.state.displayKeyword) || article.content.toLowerCase().includes(this.state.displayKeyword)
        }).map(article => {
          console.log(article)
          return (<div key={article.id} style={{marginBottom: 10}}>
            <Grid><List title={article.title} content={article.content} /></Grid>
          </div>)
          })}
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);