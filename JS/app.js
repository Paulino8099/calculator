

/**
 * ?entrada de la calculadora
 */
let input = document.querySelector('.input-calculator');

/**
 * ?botones para los operadores
 */
let btnMultiply = document.querySelector('.btn-multiply');
let btnDivide = document.querySelector('.btn-divide');
let btnMinus = document.querySelector('.btn-minus');
let btnMore = document.querySelector('.btn-more');

/**
 * ?botones para los números, 
 */
let btnZero = document.querySelector('.btn-zero');
let btnOne = document.querySelector('.btn-one');
let btnTwo = document.querySelector('.btn-two');
let btnThree = document.querySelector('.btn-three');
let btnFour = document.querySelector('.btn-four');
let btnFive = document.querySelector('.btn-five');
let btnSix = document.querySelector('.btn-six');
let btnSeven = document.querySelector('.btn-seven');
let btnHeight = document.querySelector('.btn-height');
let btnNine = document.querySelector('.btn-nine');

/**
 * ?igualdad, borrar y borrar todo
 */
let btnEqual = document.querySelector('.btn-equal');
let btnDelete = document.querySelector('.btn-delete');
let btnDeleteAll = document.querySelector('.btn-delete-all');

/**
 *? añadiendo todos los números a la entrada de texto
 */
// función para añadir todos los números a la entrada de texto
setNumbers();
function setNumbers() {
    /**
     * !añadiendo 0...
     */
    setZero();
    function setZero() {
        // cada vez que se escuche un evento en el btn 0 se ejecutará lo siguiente...
        btnZero.addEventListener('click', () => {
            input.value = input.value + 0;
        });
    };
    /**
     * !añadiendo 1...
     */
    setOne();
    function setOne() {
        // cada vez que se escuche un evento en el btn 1 se ejecutará lo siguiente...
        btnOne.addEventListener('click', () => {
            input.value = input.value + 1;
        });
    };
    /**
     * !añadiendo 2...
     */
    setTwo();
    function setTwo() {
        // cada vez que se escuche un evento en el btn 2 se ejecutará lo siguiente...
        btnTwo.addEventListener('click', () => {
            input.value = input.value + 2;
        });
    };
    /**
     * !añadiendo 3...
     */
    setThree();
    function setThree() {
        // cada vez que se escuche un evento en el btn 3 se ejecutará lo siguiente...
        btnThree.addEventListener('click', () => {
            input.value = input.value + 3;
        });
    };
    /**
     * !añadiendo 4...
     */
    setFour();
    function setFour() {
        // cada vez que se escuche un evento en el btn 4 se ejecutará lo siguiente...
        btnFour.addEventListener('click', () => {
            input.value = input.value + 4;
        });
    };
    /**
     * !añadiendo 5...
     */
    setFive();
    function setFive() {
        // cada vez que se escuche un evento en el btn 5 se ejecutará lo siguiente...
        btnFive.addEventListener('click', () => {
            input.value = input.value + 5;
        });
    };
    /**
     * !añadiendo 6...
     */
    setSix();
    function setSix() {
        // cada vez que se escuche un evento en el btn 6 se ejecutará lo siguiente...
        btnSix.addEventListener('click', () => {
            input.value = input.value + 6;
        });
    };
    /**
     * !añadiendo 7...
     */
    setSeven();
    function setSeven() {
        // cada vez que se escuche un evento en el btn 7 se ejecutará lo siguiente...
        btnSeven.addEventListener('click', () => {
            input.value = input.value + 7;
        });
    };
    /**
     * !añadiendo 8...
     */
    setHeight();
    function setHeight() {
        // cada vez que se escuche un evento en el btn 8 se ejecutará lo siguiente...
        btnHeight.addEventListener('click', () => {
            input.value = input.value + 8;
        });
    };
    /**
     * !añadiendo 9...
     */
    setNine();
    function setNine() {
        // cada vez que se escuche un evento en el btn 9 se ejecutará lo siguiente...
        btnNine.addEventListener('click', () => {
            input.value = input.value + 9;
        });
    };
};

/**
 * ?añadiendo los operadores a la entrada de texto "input"
 */
setOperators();
function setOperators() {
    /**
     * !añadiendo *
     */
    multiply();
    function multiply() {
        // cada vez que se escuche un evento en el btn de multiplicar se ejecutará lo siguiente...
        btnMultiply.addEventListener('click', () => {

            if (!((input.value.includes('*')) || (input.value.includes('*1')))) {
                input.value = input.value + '*';
            }
        });
    }

    /**
     * !añadiendo /
     */
    setDivide();
    function setDivide() {
        // cada vez que se escuche un evento en el btn de "Dividir" se ejecutará lo siguiente...
        btnDivide.addEventListener('click', () => {
            input.value = input.value + '/';
        });
    }

    /**
     * !añadiendo -
     */
    setMinus();
    function setMinus() {
        // cada vez que se escuche un evento en el btn de "restar" se ejecutará lo siguiente...
        btnMinus.addEventListener('click', () => {
            input.value = input.value + '-';
        });
    }

    /**
     * !añadiendo +
     */
    setMore();
    function setMore() {
        // cada vez que se escuche un evento en el btn de "sumar" se ejecutará lo siguiente...
        btnMore.addEventListener('click', () => {
            input.value = input.value + '+';
        });
    }
};

/**
 * ?borrando el último número escrito de la entrada de texto
 */
// función para borrar el último número de la entrada de texto
deleteOne();
function deleteOne() {
    btnDelete.addEventListener('click', () => {
        // convirtiendo los valores de la entrada de texto a string o cadena de texto
        let inputToString = input.value.toString();

        // eliminando el último caracter de la cadena de texto
        let deleteEndCaracter = inputToString.substring(0, inputToString.length - 1)

        // convirtiendo a número entero
        let inputToNumber = parseInt(deleteEndCaracter);


        if (input.value == "NaN") {
            input.value = '';
        }
        if (input.value != '' && input.value != 'NaN') {
            input.value = inputToNumber;
        }
    });
}

/**
 * ?borrando todo de la entrada de texto
 */
// función para borrar todo de la entrada de texto
deleteAll();
function deleteAll() {
    btnDeleteAll.addEventListener('click', () => {
        input.value = '';
    });
}

/**
 * !settings colors
 */
let RebeccaPurple = document.querySelector('.RebeccaPurple');
let LimeGreen = document.querySelector('.LimeGreen');
let MediumSpringGreen = document.querySelector('.MediumSpringGreen');
let LightSeaGreen = document.querySelector('.LightSeaGreen');
let Yellow = document.querySelector('.Yellow');
let Chocolate = document.querySelector('.Chocolate');
let DarkSlateGray = document.querySelector('.DarkSlateGray');
let Crimson = document.querySelector('.Crimson');
let DeepPink = document.querySelector('.DeepPink');
let Tomato = document.querySelector('.Tomato');
/**
 * ?activando la paleta de colores
 */
activeColor();
function activeColor() {
    let btnColors = document.querySelector('.container-colors');

    // activando la paleta de colores al hacer click en el botón de la paleta de colores
    btnColors.addEventListener('click', () => {
        btnColors.classList.toggle('active');
    });
};

/**
 * ?desactivando la paleta de colores
 */
colorsOff();
function colorsOff() {
    let btnColors = document.querySelector('.container-colors');
    // agregando eventos "click" a todos los botones numéricos y operacionales para que cuando se le haga click en cuanquiera de ellos se desaparazca la paleta de colores
    let btns = document.querySelector('.btns').children;
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            btnColors.classList.remove('active');
        });
    };
    // agregando evento "click" a la entrada de texto para cuando se le haga click la paleta de colores se esconda
    input.addEventListener('click', () => {
        btnColors.classList.remove('active');
    });
};

/**
 * ?guardando color en localStorage
 */
saveColors()
function saveColors() {
    RebeccaPurple.addEventListener('click', () => {
        localStorage.setItem('color_calculator', 'RebeccaPurple');
    });
    LimeGreen.addEventListener('click', () => {
        localStorage.setItem('color_calculator', 'LimeGreen');
    });
    MediumSpringGreen.addEventListener('click', () => {
        localStorage.setItem('color_calculator', 'MediumSpringGreen');
    });
    LightSeaGreen.addEventListener('click', () => {
        localStorage.setItem('color_calculator', 'LightSeaGreen');
    });
    Yellow.addEventListener('click', () => {
        localStorage.setItem('color_calculator', 'Yellow');
    });
    Chocolate.addEventListener('click', () => {
        localStorage.setItem('color_calculator', 'Chocolate');
    });
    DarkSlateGray.addEventListener('click', () => {
        localStorage.setItem('color_calculator', 'DarkSlateGray');
    });
    Crimson.addEventListener('click', () => {
        localStorage.setItem('color_calculator', 'Crimson');
    });
    DeepPink.addEventListener('click', () => {
        localStorage.setItem('color_calculator', 'DeepPink');
    });
    Tomato.addEventListener('click', () => {
        localStorage.setItem('color_calculator', 'Tomato');
    });
};

/**
 * ?coloreando app
 */
getColor();
function getColor() {
    let btnsColors = document.querySelector('.container-colors').children;
    for (let i = 0; i < btnsColors.length; i++) {
        // añadiendo eventos a cada boton númerico y operacional de la calculadora
        btnsColors[i].addEventListener('click', () => {
            color();
        });
    };

    color()
    function color() {
        if (localStorage.getItem('color_calculator') == 'RebeccaPurple') {
            document.documentElement.style.setProperty('--color_green', '#663399');
        }
        if (localStorage.getItem('color_calculator') == 'LimeGreen') {
            document.documentElement.style.setProperty('--color_green', '#32cd32');
        }
        if (localStorage.getItem('color_calculator') == 'MediumSpringGreen') {
            document.documentElement.style.setProperty('--color_green', '#00fa9a');
        }
        if (localStorage.getItem('color_calculator') == 'LightSeaGreen') {
            document.documentElement.style.setProperty('--color_green', '#20b2aa');
        }
        if (localStorage.getItem('color_calculator') == 'Yellow') {
            document.documentElement.style.setProperty('--color_green', '#fafa41');
        }
        if (localStorage.getItem('color_calculator') == 'Chocolate') {
            document.documentElement.style.setProperty('--color_green', '#d2691e');
        }
        if (localStorage.getItem('color_calculator') == 'DarkSlateGray') {
            document.documentElement.style.setProperty('--color_green', '#305050');
        }
        if (localStorage.getItem('color_calculator') == 'Crimson') {
            document.documentElement.style.setProperty('--color_green', '#dc143c');
        }
        if (localStorage.getItem('color_calculator') == 'DeepPink') {
            document.documentElement.style.setProperty('--color_green', '#ff1493');
        }
        if (localStorage.getItem('color_calculator') == 'Tomato') {
            document.documentElement.style.setProperty('--color_green', '#ff6347');
        }
    }
}