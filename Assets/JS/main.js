var profiles = document.querySelectorAll('.profile');
// profiles[0].classList.add('block');
let index = 0;

const indexHanlder = ({ target: { id } }) => {
    let prevIndex = index
    if (index == profiles.length - 1 && id === 'add') {
        prevIndex = index;
        index = -1;
    }
    if (index == 0 && id === 'minus') {
        index = profiles.length;
    }

    if (id == "add") index += 1
    else index -= 1
        // call htmlHandler
    console.log(index, prevIndex)
    htmlHandler(prevIndex, index);
}

const htmlHandler = (prevIndex, index) => {
    profiles[index].classList.add("block");
    if (prevIndex !== -1) profiles[prevIndex].classList.remove("block");
}

document.querySelectorAll(".handles").forEach(item => addEventListener('click', indexHanlder));