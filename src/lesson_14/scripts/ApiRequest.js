export const get = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://evening-dawn-11092.herokuapp.com/list');
    xhr.send();

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr.response);
            } else {
                alert('Something happened!');
            }
        }
    }
}