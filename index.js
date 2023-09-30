const change = document.getElementById('change');
const result = document.getElementById('result');

change.addEventListener('click', () => {
    const colorChanger = () => {
        const color = "ABCDEF1234567890";
        let hex = "#"
        for(let i=0; i<6; i++) {
            hex += color[Math.floor(Math.random()*16)];
        }
        result.innerHTML = `Background Color Code : ${hex}`
        return hex;
    }
    document.body.style.backgroundColor = colorChanger();

})