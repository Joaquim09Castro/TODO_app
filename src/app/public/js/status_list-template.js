const statusListGen = () => `
  <input type="radio" id="Not_Started" value="1" name="taskStatus">
  <label class="pr-3 pl-1 mb-0" for="Not_Started">Not Started</label>

  <input type="radio" id="Ongoing" value="2" name="taskStatus">
  <label class="pr-3 pl-1 mb-0" for="Ongoing">Ongoing</label>

  <input type="radio" id="Continuous" value="3" name="taskStatus">
  <label class="pr-3 pl-1 mb-0" for="Continuous">Continuous</label>

  <input type="radio" id="TODO" value="4" name="taskStatus">
  <label class="pr-3 pl-1 mb-0" for="TODO">TODO</label>

  <input type="radio" id="Finished" value="5" name="taskStatus">
  <label class="pr-3 pl-1 mb-0" for="Finished">Finished</label>
`;