import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import style from './Homepage.module.scss';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { createTasks, deleteTasks, getTasks } from '../../actions';

const Homepage = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const tasks = useSelector((state) => state.task);

  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [taskData, setTaskData] = useState({
    title: "",
    date: "",
    activeState: false,
  })
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createTasks(taskData));
    handleClose();
  }

  useEffect(() => {
    dispatch(getTasks());
    console.log(tasks)
  }, [dispatch])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (e, deleteId) => {
    dispatch(deleteTasks(deleteId))
    // console.log(id);
  }


  return (
    <div className={style.container}>
      <div className={style.body}>
        <div className={style.searchBar}>
          <TextField
            fullWidth
            id="standard-basic"
            label="What are you searching for?"
            variant="standard"
          />
        </div>
        <div className={style.contents}>
          <div className={style.items}>
            <button className={classNames(style.card, style.addItem)} onClick={handleClickOpen}>
              <div className={style.addIcon}>
                <i className='feather-plus' />
              </div>
              <div className={style.addItemTxt}>
                Add Item
              </div>
            </button>
            {
              tasks.map((i, j) => (
                <div key={j}>
                  <div className={style.card}>
                    <div className={style.deleteIcon}>
                      <IconButton
                        // onClick={() => handleDelete(i._id)} 
                        // There is a error here and i couldn't find a solution on time. "tasks.map is not a function" (Backend is working)
                        // Can update a state here. tried to run the function when "deleteId" state changes using useEffect, but then the deleteId state returns undefined
                        aria-label="delete">
                        <i className='feather-trash-2'></i>
                      </IconButton>
                    </div>
                    <div className={style.checkBox}>
                      <Checkbox 
                      {...label} 
                      onChange={(e) => setTaskData({...taskData, activeState: e.target.value})}
                      value={i.activeState}
                      color="success" />
                    </div>
                    {i.title}
                  </div>
                </div>
              )).reverse()
            }
            <Dialog open={open} onClose={handleClose}>
              <form autoComplete='off' onSubmit={handleSubmit}>
                <DialogTitle>Create a new Task</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please FIll the following form to create a new task
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    value={taskData.title}
                    onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button variant='contained' type='submit' >Create</Button>
                </DialogActions>
              </form>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage