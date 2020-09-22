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

  // Form elements
  const idInput = document.getElementById('taskId');
  const titleInput = document.getElementById('taskTitle');
  const descInput = document.getElementById('taskDesc');

  // Insert Values into FORM
  idInput.value = id;
  titleInput.value = title;
  descInput.value = desc;
}