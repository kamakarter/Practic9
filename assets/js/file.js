const error = document.querySelector('.error');

const form = document.querySelector('.my-form');
const nameInput = form.querySelector('.nameForm');
const dateInput = form.querySelector('.dateForm');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    error.classList.remove('succes');
    error.classList.add('error');

    const name = nameInput.value;
    const date = parseInt(dateInput.value);

    const currentYear = new Date().getFullYear();
    let ageUser = currentYear - date;


    if (!name){
        error.innerHTML = 'Поле с именем должно быть заполнено!';
        nameInput.style.border = 'thin solid red';
    }

    if (name.length < 2){
        error.innerHTML = 'Имя должно содеражать минимум 2 символа!';
        nameInput.style.border = 'thin solid red';
    }

    if (!date){
        error.innerHTML = 'Поле с годом рождения должно быть заполнено!'
        dateInput.style.border = 'thin solid red';
    }
        
    if (ageUser <= 18){
        error.innerHTML = 'Должно быть больше 18 лет!';
        dateInput.style.border = 'thin solid red';
    }

    else {
        dateInput.style.border = 'thin solid green';
        nameInput.style.border = 'thin solid green';
        error.innerHTML = 'Успешно';
        error.classList.remove('error');
        error.classList.add('succes');
    }    
})
