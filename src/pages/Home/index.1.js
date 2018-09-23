import React from 'react';
import Status from "../../components/Status";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
      flexGrow: 1,
    },
  };

  function SimpleAppBar(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            name: "FBDC Jakarta",
            nameDisplay: "FBDC Jakarta"
        };
    }

    handleLogin = () => {
        this.setState({
            isAuthenticated: true
        });
    };

    handleForm = event => {
        this.setState({
            name: event.target.value
        });
    };

    
    handleSubmit = event => {
        event.preventDefault();
       const name = this.state.name;

        this.setState({
            nameDisplay: name
        });
    };

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleForm} value={this.state.name}/>
                    <Button variant="contained" color="default" size="medium" onClick={this.handleLogin}>
                        Search
                    </Button>
                </form>
                <Status
                 isAuthenticated={this.state.isAuthenticated}
                 name={this.state.nameDisplay}
                />
            </div>
        );
    }
}

export default Home;