function generateCard(task) {
  return `
    <div class="card w-100 mt-2 col-lg-5 col-md-12 pr-4 pl-4">
      <div class="card-body">
        <div class="text-center">
          <h4 class="card-title border-bottom">${task.titulo}</h4>
          <p class="card-text">${task.descricao}</p>
          <br>
          <p class="text-secondary">${task.status}</p>
          <br>
          <div id="btn-task_${task.id}" class=" d-flex justify-content-around">
            <button type="button" class="rounded btn-primary">Edit</button>
            <button type="button" class="rounded btn-info">Archive</button>
          </div>
        </div>
      </div>
    </div>
  `;
};

module.exports = generateCard;