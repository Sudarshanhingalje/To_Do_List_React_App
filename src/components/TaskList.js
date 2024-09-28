import React, { useState, useEffect } from 'react';
import './TaskList.css';

// TaskList Component: Displays a list of tasks with search, select, edit, and delete functionalities
const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  // State to manage dropdown visibility for editing tasks
  const [dropdownTaskId, setDropdownTaskId] = useState(null);

  // State to manage the search term for filtering tasks
  const [searchTerm, setSearchTerm] = useState('');
  // State to manage the select all checkbox functionality
  const [selectAll, setSelectAll] = useState(false);
  // State to track selected tasks
  const [selectedTasks, setSelectedTasks] = useState([]);
  // State to manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage, setTasksPerPage] = useState(6); 

  // Ensure the component re-renders when tasks are updated
  useEffect(() => {
    setSelectedTasks([]);
    setSelectAll(false);
  }, [tasks]);

  // Toggles the visibility of the dropdown for a specific task
  const handleDropdownToggle = (taskId) => {
    setDropdownTaskId(dropdownTaskId === taskId ? null : taskId);
  };


  // Updates the search term based on user input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handles the select all checkbox functionality
  const handleSelectAll = (event) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);
    setSelectedTasks(isChecked ? tasks.map((task) => task.id) : []);
  };

  // Toggles the selection of a single task
  const handleSelectTask = (taskId) => {
    setSelectedTasks(prevSelectedTasks =>
      prevSelectedTasks.includes(taskId)
        ? prevSelectedTasks.filter((id) => id !== taskId) // Deselect
        : [...prevSelectedTasks, taskId] // Select
    );
  };

  // Deletes selected tasks after user confirmation
  const handleDeleteTasks = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedTasks.length} tasks?`)) {
      onDeleteTask(selectedTasks);
      setSelectedTasks([]);
    }
  };

  // Refreshes the page
  const handleRefresh = () => {
    window.location.reload(true);
  };

  // Filters tasks based on the search term
  const filteredTasks = tasks.filter((task) => {
    const searchTermLowercase = searchTerm.toLowerCase();
    return (
      task.assignedTo.toLowerCase().includes(searchTermLowercase) ||
      task.status.toLowerCase().includes(searchTermLowercase) ||
      task.priority.toLowerCase().includes(searchTermLowercase) ||
      task.comments?.toLowerCase().includes(searchTermLowercase) // Safely handle missing comments
    );
  });

  // Paginates tasks
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  // Handles pagination button clicks
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Adds new tasks to the next page when the first page is full
  const handleAddTask = (newTask) => {
    const newTasks = [...tasks, newTask];
    const newFilteredTasks = newTasks.filter((task) => {
      const searchTermLowercase = searchTerm.toLowerCase();
      return (
        task.assignedTo.toLowerCase().includes(searchTermLowercase) ||
        task.status.toLowerCase().includes(searchTermLowercase) ||
        task.priority.toLowerCase().includes(searchTermLowercase) ||
        task.comments?.toLowerCase().includes(searchTermLowercase) // Safely handle missing comments
      );
    });
    const newPaginatedTasks = newFilteredTasks.slice(
      (currentPage - 1) * tasksPerPage,
      currentPage * tasksPerPage
    );
    if (newPaginatedTasks.length >= tasksPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    
    <div className="task-list">
      {/* Task List Header */}
      <div className="task-header">
        <div className="title-container">
          <div className="icon">☰</div>
          <div className="title">
            <h2>Tasks</h2>
            <span>All Tasks</span>
          </div>
        </div>
        <div className="task-actions">
          <button className="refresh" onClick={handleRefresh}>Refresh</button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-icon"><span role="img" aria-label="search">🔍 </span></button>
      </div>

      {/* Task Table */}
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th> Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTasks.map((task) => (
            <tr key={task.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(task.id)}
                  onChange={() => handleSelectTask(task.id)}
                />
              </td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments || 'No comments available'}</td> {/* Show a message if no comments */}
              <td>
                {/* Dropdown for Edit and Delete Actions */}
                <div className="dropdown">
                  <button onClick={() => handleDropdownToggle(task.id)}>▼</button>
                  {dropdownTaskId === task.id && (
                    <div className="dropdown-content">
                      <button onClick={() => onEditTask(task)}>Edit</button>
                      <button onClick={() => onDeleteTask(task)}>Delete</button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => handlePagination(1)}>▴ First</button>
        <button onClick={() => handlePagination(currentPage - 1)}>{'< Prev'}</button>
        <span>{currentPage}</span>
        <button onClick={() => handlePagination(currentPage + 1)}>{'Next >'}</button>
        <button onClick={() => handlePagination(Math.ceil(filteredTasks.length / tasksPerPage))}>Last {'\u25BC'}</button>
      </div>
      
      {/* Delete Selected Tasks Button */}
      {selectedTasks.length > 0 && (
        <div className="delete-button">
          <button onClick={handleDeleteTasks}>Delete Selected Tasks</button>
        </div>
      )}
    </div>
  );
};

export default TaskList;