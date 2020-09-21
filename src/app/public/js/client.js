const deleteTask = (event) => {
  const id = event.target.parentNode.parentNode.dataset.idTarefa;
  const card = document.getElementById(`card_${id}`);

  fetch(`http://localhost:9000/deleteTask/${id}`,{method: "DELETE"})
    .then(resp => {
      if (resp.ok)
        card.remove();
        setTimeout(() => alert('Task Deleted!'), 120);
    })
    .catch(err => console.log(err));
}

const editTask = (event) => {
  const id = event.target.parentNode.parentNode.dataset.idTarefa;
  const card = document.getElementById(`card_${id}`);

  console.log(`${card.id} updated`);
  //fetch()
}