import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  paper: { margin: 20, padding: 20, maxWidth: 400 },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly",
  },
  button: {
    margin: 10,
  },
};

export default withStyles(styles)(
  class App extends Component {
    state = {
      exercises: [
        { id: 1, title: "Bench Press" },
        { id: 2, title: "Deadlift" },
        { id: 3, title: "Squats" },
      ],
      title: "",
    };

    handleChange = ({ target: { name, value } }) =>
      this.setState({ [name]: value });

    handleCreate = (e) => {
      e.preventDefault();
      if (this.state.title) {
        this.setState(({ exercises, title }) => ({
          exercises: [...exercises, { title, id: Date.now() }],
          title: "",
        }));
      }
    };

    handleDelete = (id) =>
      this.setState(({ exercises }) => ({
        exercises: exercises.filter((ex) => ex.id !== id),
      }));

    render() {
      console.log("this.props", this.props);
      const { title, exercises } = this.state;
      const { classes } = this.props;
      return (
        <>
          <Paper className={classes.paper}>
            <Typography variant="body1" align="center" gutterBottom>
              {" "}
              Exercises{" "}
            </Typography>
            <form onSubmit={this.handleCreate} className={classes.form}>
              {" "}
              <TextField
                name="title"
                label="Exercise"
                value={title}
                onChange={this.handleChange}
                margin="normal"
              />{" "}
              <Button type="submit" variant="contained" color="primary">
                {" "}
                Create{" "}
              </Button>
            </form>
            <List>
              {" "}
              {exercises.map(({ id, title }) => (
                <ListItem key={id}>
                  <ListItemText primary={title} />{" "}
                  <ListItemSecondaryAction>
                    {" "}
                    <IconButton
                      color="primary"
                      onClick={() => this.handleDelete(id)}
                    >
                      {" "}
                      <Delete />
                    </IconButton>{" "}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}{" "}
            </List>
          </Paper>
        </>
      );
    }
  }
);
