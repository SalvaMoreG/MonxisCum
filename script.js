const textDataElement = document.getElementById('textData');
const textoLines = JSON.parse(textDataElement.textContent);
const ruleta = document.getElementById('ruleta');
const spinButton = document.getElementById('spinButton');
const repButton = document.getElementById('repButton');
const tema = document.getElementById('tema');
const resultado = document.getElementById('resultado');
const container = document.querySelector('.container');
const indicador = document.querySelector('.indicador');

linea = 0;
selectedColor = '';

spinButton.addEventListener('click',  () => {
    const randomDeg = Math.floor(Math.random() * 360) + 360 * 2;
    ruleta.style.transform = `rotate(${randomDeg}deg)`;
    indicador.classList.add('pendulo');

    tema.style.opacity = 0;
    tema.style.transform = "scale(0.5)";
    tema.textContent = "";

    setTimeout( () => {
        const finalDeg = randomDeg % 360;
        let texto;

        if (finalDeg >= 0 && finalDeg < 45 || finalDeg > 325) {
            selectedColor = 'Rojo';
            texto = "Cuando fokin pagan (invita monxi)";
            tema.style.color = "red";
            resultado.style.color = "red";

        } else if (finalDeg >= 45 && finalDeg < 135) {
            selectedColor = 'Amarillo';
            texto = "Sero porsiento movimienx";
            tema.style.color = "yellow";
            resultado.style.color = "yellow";

        } else if (finalDeg >= 135 && finalDeg < 225) {
            selectedColor = 'Azul';
            texto = "Así es, a esta imbito yop";
            tema.style.color = "blue";
            resultado.style.color = "blue";

        } else {
            selectedColor = 'Verde';
            texto = "A tokar un xin de yerba xat";
            tema.style.color = "green";
            resultado.style.color = "green";

        }

        indicador.classList.remove('pendulo');

        setTimeout( () => {
            ruleta.classList.add('hidden');
            spinButton.classList.add('hidden');
            indicador.classList.add('hidden');

            
            tema.textContent = texto;
            tema.style.animation = 'aparecer 2s ease-out forwards';

            tema.textContent = texto;
            tema.style.animation = 'aparecer 2s ease-out forwards';
            repButton.classList.remove('hidden');

            setTimeout( () => {
                resultado.textContent = GetXat(selectedColor);
                resultado.style.animation = 'aparecer 2s ease-out forwards';
            }, 2000);
        }, 2500);
    }, 3000);       
    
});

repButton.addEventListener('click', () => {

        resultado.textContent = GetXat(selectedColor);
});

 function GetXat(selectedColor)
{
    const randomInt = Math.floor(Math.random(0, 1)*10);
    if( selectedColor == 'Rojo'){
        linea = 0;
        console.log(linea + randomInt);
        return textoLines[linea + randomInt];
    } 
    else if (selectedColor == 'Amarillo') {
        linea = 10;
        console.log(linea + randomInt);
        return textoLines[linea + randomInt];
    } 
    else if (selectedColor == 'Azul') {
        linea = 20;
        console.log(linea + randomInt);
        return textoLines[linea + randomInt];
    } 
    else {
        linea = 30;
        console.log(linea + randomInt);
        return textoLines[linea + randomInt];
    }
}