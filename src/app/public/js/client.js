const deleteTask = (event) => {
  const id = event.target.parentNode.parentNode.dataset.idTarefa;
  const task = document.getElementById(`task_${id}`);

  fetch(`/deleteTask/${id}`,{method: "DELETE"})
    .then(resp => {
      if (resp.ok)
        task.remove();
    })
    .catch(err => console.log(err));
}

const editTask = (event) => {
  // Task elements
  const id = event.target.parentNode.parentNode.dataset.idTarefa;
  const title = document.getElementById(`title-task_${id}`).innerText;
  const desc = document.getElementById(`desc-task_${id}`).innerText;
  const status = document.getElementById(`status-task_${id}`).dataset.status;

  // Form elements
  const idInput = document.getElementById('taskId');
  const titleInput = document.getElementById('taskTitle');
  const descInput = document.getElementById('taskDesc');
  const currStatusInput = document.getElementById('currStatus');
  const statusLabel = document.getElementById('status-label');
  const statusListDiv = document.getElementById('status-list');

  // Insert Values into FORM
  idInput.value = id;
  titleInput.value = title;
  descInput.value = desc;
  currStatusInput.value = status;
  statusListDiv.innerHTML = statusListGen();

  // Remove status list label hidden class
  statusLabel.classList.remove('hidden');

  // Go to the top of the page
  window.scrollTo(0,0);
}