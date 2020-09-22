const card = require('./cardTemplate');

function todoAppPageLoad(tasks) {

    let taskList = "";

    if (tasks) {
        tasks.forEach( item => taskList += card(item));
    }

    return `
        <!DOCTYPE html5>
        <html lang="pt-br">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TODO App</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
            <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon">
        </head>

        <body>
            <header>
                <nav class="nav bg-dark mb-4" style="text-align: center;">
                    <h1 class=" py-2 text-light" style="font-family: 'Indie Flower'; width:100%">TODO app</h1>
                </nav>
            </header>

            <main>
                <div class="d-flex justify-content-center">
                    <div class="col-7 p-4 border rounded shadow-sm">
                        <h2 class="text-center border-bottom pb-2">ADD TASK</h2>
                        <form class="flex-fill" id="form" action="/addTask" method="POST">
                            <input type="hidden" name="_method" value="PUT">
                            <input type="hidden" id="taskId" name="taskId" value="null">
                            <div class="form-group">
                                <label for="taskTitle"><b>Title:</b></label>
                                <input type="text" class="form-control" id="taskTitle" name="title" placeholder="Tarefa">
                            </div>
                            <div class="form-group">
                                <label for="taskDesc"><b>Description:</b></label>
                                <textarea class="form-control" id="taskDesc" name="desc" rows="3"
                                    placeholder="Descreva a tarefa"></textarea>
                            </div>
                            <div class="d-flex form-group border rounded justify-content-center align-items-center" id="status-list">
                                <input type="radio" id="Not_Started" data-statusId="1" name="status" checked>
                                <label class="pr-3 pl-1 mb-0" for="Not_Started">Not Started</label>

                                <input type="radio" id="Ongoing" data-statusId="2" name="status">
                                <label class="pr-3 pl-1 mb-0" for="Ongoing">Ongoing</label>

                                <input type="radio" id="Continuous" data-statusId="3" name="status">
                                <label class="pr-3 pl-1 mb-0" for="Continuous">Continuous</label>

                                <input type="radio" id="TODO" data-statusId="4" name="status">
                                <label class="pr-3 pl-1 mb-0" for="TODO">TODO</label>

                                <input type="radio" id="Finished" data-statusId="5" name="status">
                                <label class="pr-3 pl-1 mb-0" for="Finished">Finished</label>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="submit" class="rounded btn-success btn-block">
                            </div>
                        </form>
                    </div>
                </div>
                <div id="todoCard" class="d-flex justify-content-center mt-4 card-columns w-75 mr-auto ml-auto flex-wrap">
                    ${taskList}
                </div>
            </main>

            <footer class="mt-5">
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
                </script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
                </script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
                </script>
                <script src="/static/js/client.js"></script>
            </footer>
        </body>
        </html>
    `;
};

// export view
module.exports = todoAppPageLoad;