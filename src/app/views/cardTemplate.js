function generateCard(task) {
  let noTitle = '', noDesc = '';
  
  if (task.titulo == 'Blank Title') {
    noTitle = 'text-warning font-weight-bold';
  }

  if (task.descricao == 'Blank Description') {
    noDesc = 'text-warning font-weight-bold';
  }

  return `
    <div id="task_${task.id}" class="card w-100 mt-2 col-lg-5 col-md-12 pr-4 pl-4">
      <div class="card-body">
        <div class="text-center" data-id-tarefa="${task.id}">
          <h4 class="card-title border-bottom ${noTitle}" id="title-task_${task.id}">${task.titulo}</h4>
          <p class="card-text ${noDesc}" id="desc-task_${task.id}">${task.descricao}</p>
          <br>
          <p class="text-secondary" id="status-task_${task.id}" data-status="${task.status}">${task.status_name}</p>
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