function generateCard(task) {
  return `
    <div class="card w-50 mt-3 col-lg-4 col-12 p-0">
      <div class="card-body">
        <div class="text-center">
          <h4 class="card-title border-bottom">${task.titulo}</h4>
          <p class="card-text">${task.descricao}</p>
          <br>
          <p class="text-secondary">${task.status}</p>
        </div>
      </div>
    </div>
  `;
};

module.exports = generateCard;