function generateCard(task) {
  return `
    <div class="card w-25 m-2">
      <div class="card-body">
        <div class="text-center border-bottom">
          <h5 class="card-title">${task.title}</h5>
          <p class="card-text">${task.desc}</p>
        </div>
        <br>
        <div>
          <input type="submit" value="Not Started" onclick="alert('${task.title}')">
        </div>
      </div>
    </div>
  `;
}

module.exports = generateCard;