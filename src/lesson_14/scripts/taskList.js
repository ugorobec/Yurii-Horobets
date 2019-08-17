const DEFAULT_TARGET = document.querySelector('body');
export class TaskList {
    constructor(target = DEFAULT_TARGET) {
        this.target = target;
        this.tasks = [];
        this.renderForm();
        this.fetchTasks();
    }

    fetchTasks() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://evening-dawn-11092.herokuapp.com/list');
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.tasks = JSON.parse(xhr.response);
                    this.render();
                } else {
                    alert('Something happened!');
                }
            }
        }
    }

    createTask(data) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://evening-dawn-11092.herokuapp.com/list');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const task = JSON.parse(xhr.response);
                    this.tasks.push(task);
                    this.renderLi(task);
                } else {
                    alert('Something happened!');
                }
            }
        }
    }

    renderForm() {
        this.form = document.createElement('form');
        this.input = document.createElement('input');
        this.button = document.createElement('button');

        this.form.onsubmit = (e) => {
            e.preventDefault();
            const title = this.input.value;
            this.createTask({ title });
        };

        this.form.appendChild(this.input);
        this.form.appendChild(this.button);
        this.target.appendChild(this.form);
    }

    renderLi(task) {
        const li = document.createElement('li');
        li.textContent = task.title;
        this.ul.appendChild(li);
        this.lis.push(li);
    }

    render() {
        this.ul = document.createElement('ul');
        this.lis = [];
        for (let task of this.tasks) {
          this.renderLi(task);
        }
        this.target.appendChild(this.ul);
    }
}