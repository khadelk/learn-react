import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Question 1"
              label="Question 1?"
              onChange={handleChange('question1')}
              defaultValue={values.question1}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Question 2"
              label="Question 2?"
              onChange={handleChange('question2')}
              defaultValue={values.question2}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Question 3"
              label="Question 3?"
              onChange={handleChange('question3')}
              defaultValue={values.question3}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;