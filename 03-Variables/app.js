
const inputs = document.querySelectorAll('input');

const proc= document.querySelector('.proc');

function handleChange() {
    // console.log(this.value);
    proc.innerHTML=this.value;
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    
    
}

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener("mousemove", handleChange));

console.log(inputs);
