const deleteTask = (event) => {
  const id = event.target.parentNode.parentNode.dataset.idTarefa;
  const card = document.getElementById(`card_${id}`)

  fetch(`http://localhost:9000/deleteTask/${id}`,{method: "DELETE"})
    .then(resp => {
      if (resp.ok)
        card.remove();
    })
    .catch(err => console.log(err))
}