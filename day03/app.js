
let array = [];
increment = 0;
let container = document.querySelector('.container');

//fast
while (increment < 100000000000000000000 /* if you use 10000(or small number) then your error solve auto */) {
    array.push(++increment);
}
container.innerHTML = array.join(' ');