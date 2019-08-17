const DEFAULT_TARGET = document.querySelector('body');
export class GetData {
    constructor(target = DEFAULT_TARGET) {
        this.target = target;
        this.tasks = [];
        this.fetchTasks();
    }
    fetchTasks() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:4001/comments');
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
    render() {
        this.names = [];
        this.times = [];
        this.coments = [];
        for (let task of this.tasks) {
            const name = document.createElement('div');
            name.classList.add('author');
            name.textContent = task.author;
            this.names.push(name);
            this.target.appendChild(name);
            const time = document.createElement('div');
            time.classList.add('time');
            time.textContent = task.date;
            this.names.push(time);
            this.target.appendChild(time);
            const coment = document.createElement('div');
            coment.classList.add('coment');
            coment.textContent = task.text;
            this.coments.push(coment);
            this.target.appendChild(coment);
        }
    }
}