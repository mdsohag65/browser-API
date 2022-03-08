console.log('I am alert');

// alert('Ma is coming !!!');

const maComing = () => {
    alert('Amma Astase..porte bos');
}

const askPicnic = () => {
    const response = confirm('Are You Going To Picnic?');
    console.log(response);

    if (response === true) {
        alert('Amare tk de pathay de..')
    }
    else {
        console.log('mor ga jabo na');
    }
};

const askName = () => {
    const name = prompt('WHat is your name?');
    if (name) {
        console.log(name);
    }
}

// practice....
const police = () => {
    alert('Thief: Police Astese re vag');
};

const biriKhabi = () => {
    const res = confirm('Hey!! Mama biri khabi naki??');
    console.log(res);
    if (res === true) {
        alert('Hmmm!! khabo.Dhora biri..')
    }
    else {
        alert('Dhur beta esob kew khai naki');
    }
};

const gfName = () => {
    const name = prompt('Vabir nam ki? mama...');
    if (name) {
        console.log(name);
    }
}