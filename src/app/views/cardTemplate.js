function generateCard(task) {
  return `
    <div id="card_${task.id}" class="card w-100 mt-2 col-lg-5 col-md-12 pr-4 pl-4">
      <div class="card-body">
        <div class="text-center" data-id-tarefa="${task.id}">
          <h4 class="card-title border-bottom">${task.titulo}</h4>
          <p class="card-text">${task.descricao}</p>
          <br>
          <p class="text-secondary">${task.status_name}</p>
          <br>
          <div id="task-btn_div" class=" d-flex justify-content-around">
            <button type="button" class="rounded btn-primary" id="edit_btn-task_${task.id}"  onclick="editTask(event)">Edit</button>
            <button type="button" class="rounded btn-danger" id="delete_btn-task_${task.id}" onclick="deleteTask(event)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `;
};

module.exports = generateCard;