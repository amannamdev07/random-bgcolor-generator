const change = document.getElementById('change');
const result = document.getElementById('result');

change.addEventListener('click', () => {
    const colorChanger = () => {
        const hex = "ABCDEF1234567890";
        let color = "#"
        for(let i=0; i<6; i++) {
            color += hex[Math.floor(Math.random()*16)];
        }
        result.innerHTML = `Background Color Code : ${color}`
        return color;
    }
    document.body.style.backgroundColor = colorChanger();

})