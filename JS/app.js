

/**
 * ?inputs de la calculadora
 */
let inputValue = document.querySelector('.input-value-calculator');
let inputResult = document.querySelector('.input-result-calculator');
let inputEqual = document.querySelector('.input-equal-calculator');

/**
 * ?botones para los operadores
 */
let btnMultiply = document.querySelector('.btn-multiply');
let btnPorcentage = document.querySelector('.btn-porcentage');
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
 * ?separando los números mil, millón, billón, trillón, cuatrillón
 */
// funnción para separar los números de acuerdo a su tamaño ejemplo: mil, dos mil, un millón, dos millones.
separateNumber();
function separateNumber() {
    /**
    * !1,000 hasta 9,999
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    if (inputResult.value.length == 4) {
        let eatNumber = `${inputResult.value.slice(0, 1)},${inputResult.value.slice(1)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !10,000 hasta 99,999
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 5) {
        let eatNumber = `${inputResult.value.slice(0, 2)},${inputResult.value.slice(2)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !100,000 hasta 999,999
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 6) {
        let eatNumber = `${inputResult.value.slice(0, 3)},${inputResult.value.slice(3)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !1,000,000 hasta 9,999,999 
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 7) {
        let eatNumber = `${inputResult.value.slice(0, 1)},${inputResult.value.slice(1, 4)},${inputResult.value.slice(4)}`;

        inputResult.value = eatNumber;
    }
};

/**
 *? añadiendo todos los números a la entrada de texto
 */
// función para añadir todos los números a la entrada de valores 
setNumbers();
function setNumbers() {
    /**
     * !añadiendo 0...
     */
    setZero();
    function setZero() {
        // cada vez que se escuche un evento en el btn 0 se ejecutará lo siguiente...
        btnZero.addEventListener('click', () => {
            inputValue.value = inputValue.value + 0;
        });
    };
    /**
     * !añadiendo 1...
     */
    setOne();
    function setOne() {
        // cada vez que se escuche un evento en el btn 1 se ejecutará lo siguiente...
        btnOne.addEventListener('click', () => {
            inputValue.value = inputValue.value + 1;
        });
    };
    /**
     * !añadiendo 2...
     */
    setTwo();
    function setTwo() {
        // cada vez que se escuche un evento en el btn 2 se ejecutará lo siguiente...
        btnTwo.addEventListener('click', () => {
            inputValue.value = inputValue.value + 2;
        });
    };
    /**
     * !añadiendo 3...
     */
    setThree();
    function setThree() {
        // cada vez que se escuche un evento en el btn 3 se ejecutará lo siguiente...
        btnThree.addEventListener('click', () => {
            inputValue.value = inputValue.value + 3;
        });
    };
    /**
     * !añadiendo 4...
     */
    setFour();
    function setFour() {
        // cada vez que se escuche un evento en el btn 4 se ejecutará lo siguiente...
        btnFour.addEventListener('click', () => {
            inputValue.value = inputValue.value + 4;
        });
    };
    /**
     * !añadiendo 5...
     */
    setFive();
    function setFive() {
        // cada vez que se escuche un evento en el btn 5 se ejecutará lo siguiente...
        btnFive.addEventListener('click', () => {
            inputValue.value = inputValue.value + 5;
        });
    };
    /**
     * !añadiendo 6...
     */
    setSix();
    function setSix() {
        // cada vez que se escuche un evento en el btn 6 se ejecutará lo siguiente...
        btnSix.addEventListener('click', () => {
            inputValue.value = inputValue.value + 6;
        });
    };
    /**
     * !añadiendo 7...
     */
    setSeven();
    function setSeven() {
        // cada vez que se escuche un evento en el btn 7 se ejecutará lo siguiente...
        btnSeven.addEventListener('click', () => {
            inputValue.value = inputValue.value + 7;
        });
    };
    /**
     * !añadiendo 8...
     */
    setHeight();
    function setHeight() {
        // cada vez que se escuche un evento en el btn 8 se ejecutará lo siguiente...
        btnHeight.addEventListener('click', () => {
            inputValue.value = inputValue.value + 8;
        });
    };
    /**
     * !añadiendo 9...
     */
    setNine();
    function setNine() {
        // cada vez que se escuche un evento en el btn 9 se ejecutará lo siguiente...
        btnNine.addEventListener('click', () => {
            inputValue.value = inputValue.value + 9;
        });
    };
};

/**
 * ?añadiendo los operadores a la entrada de texto "inputValue"
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
            inputValue.value = inputValue.value + '*';
        });
    }

    /**
     * !añadiendo %
     */
    porcentage();
    function porcentage() {
        // cada vez que se escuche un evento en el btn de multiplicar se ejecutará lo siguiente...
        btnPorcentage.addEventListener('click', () => {
            inputValue.value = inputValue.value + '%';
        });
    }

    /**
     * !añadiendo /
     */
    setDivide();
    function setDivide() {
        // cada vez que se escuche un evento en el btn de "Dividir" se ejecutará lo siguiente...
        btnDivide.addEventListener('click', () => {
            inputValue.value = inputValue.value + '/';
        });
    }

    /**
     * !añadiendo -
     */
    setMinus();
    function setMinus() {
        // cada vez que se escuche un evento en el btn de "restar" se ejecutará lo siguiente...
        btnMinus.addEventListener('click', () => {
            inputValue.value = inputValue.value + '-';
        });
    }

    /**
     * !añadiendo +
     */
    setMore();
    function setMore() {
        // cada vez que se escuche un evento en el btn de "sumar" se ejecutará lo siguiente...
        btnMore.addEventListener('click', () => {
            inputValue.value = inputValue.value + '+';
        });
    }
};

/**
 * ?calculando operaciones
 */
setResult();
function setResult() {
    let allBtns = document.querySelector('.btns').children;

    // mostrando resultado en el input "inputResult" al dar click en cualquier btn
    for (let i = 0; i < allBtns.length; i++) {
        allBtns[i].addEventListener('click', function () {
            if (inputValue.value != '') {
                inputResult.value = eval(inputValue.value);

                separateNumber();
            }
        });
    }
};

/**
 * ?resultado de la operación en grande
 */
resultBig();
function resultBig() {
    btnEqual.addEventListener('click', function () {
        if (inputResult.value != '') {
            // activando el input de igualdad "inputEqual"
            inputEqual.classList.add('active');
            // añadiendo resultados de la operación al input "inputEqual" (solo si hay valores)
            inputEqual.value = inputResult.value;
        }
    });
};

/**
 * ?borrando el último dígito escrito de la entrada de texto
 */
// borrando el último dígito de la entrada de texto
deleteOne();
function deleteOne() {
    btnDelete.addEventListener('click', () => {
        // eliminando el último caracter de la cadena de texto
        let del = inputValue.value.substring(0, inputValue.value.length - 1)

        if (inputValue.value == "NaN") {
            inputValue.value = '';
        }
        if (inputValue.value != '' && inputValue.value != 'NaN') {
            inputValue.value = del;
        }
    });
}

/**
 * ?limpiador de input superficial
 */
function cleanMagic() {
    let clean = document.querySelector('.clean');
    clean.classList.add('active');

    // eliminando clase luego de 1 segundo transcurrido
    setTimeout(function () {
        let clean = document.querySelector('.clean');
        clean.classList.remove('active');
    }, 1000)
};



/**
 * ?borrando todo de las entradas de texto
 */
// función para borrar todo de la entrada de texto
deleteAll();
function deleteAll() {
    btnDeleteAll.addEventListener('click', () => {
        // limpiando todo lo que hay en los inputs luego de medio segundo transcurrido
        setTimeout(() => {
            inputValue.value = '';
            inputResult.value = '';
        }, 200);

        // desactivando el input "inputEqual" que muestra el resultado en grande luego de haber transcurrido 
        setTimeout(() => {
            inputEqual.classList.remove('active');
        }, 200);

        cleanMagic();
    });
}

// ========================================================================================================

/**
 * !settings colors app
 * !settings colors app 
 * !settings colors app
 */
settingsColors();
function settingsColors() {
    let RebeccaPurple = document.querySelector('.RebeccaPurple');
    let LimeGreen = document.querySelector('.LimeGreen');
    let MediumSpringGreen = document.querySelector('.MediumSpringGreen');
    let LightSeaGreen = document.querySelector('.LightSeaGreen');
    let Yellow = document.querySelector('.Yellow');
    let DarkGray = document.querySelector('.DarkGray');
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
        inputValue.addEventListener('click', () => {
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
        DarkGray.addEventListener('click', () => {
            localStorage.setItem('color_calculator', 'DarkGray');
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
                document.documentElement.style.setProperty('--color_darkGray', '#663399');
            }
            if (localStorage.getItem('color_calculator') == 'LimeGreen') {
                document.documentElement.style.setProperty('--color_darkGray', '#32cd32');
            }
            if (localStorage.getItem('color_calculator') == 'MediumSpringGreen') {
                document.documentElement.style.setProperty('--color_darkGray', '#00fa9a');
            }
            if (localStorage.getItem('color_calculator') == 'LightSeaGreen') {
                document.documentElement.style.setProperty('--color_darkGray', '#20b2aa');
            }
            if (localStorage.getItem('color_calculator') == 'Yellow') {
                document.documentElement.style.setProperty('--color_darkGray', '#fafa41');
            }
            if (localStorage.getItem('color_calculator') == 'DarkGray') {
                document.documentElement.style.setProperty('--color_darkGray', '#909090');
            }
            if (localStorage.getItem('color_calculator') == 'DarkSlateGray') {
                document.documentElement.style.setProperty('--color_darkGray', '#305050');
            }
            if (localStorage.getItem('color_calculator') == 'Crimson') {
                document.documentElement.style.setProperty('--color_darkGray', '#dc143c');
            }
            if (localStorage.getItem('color_calculator') == 'DeepPink') {
                document.documentElement.style.setProperty('--color_darkGray', '#ff1493');
            }
            if (localStorage.getItem('color_calculator') == 'Tomato') {
                document.documentElement.style.setProperty('--color_darkGray', '#ff6347');
            }
        }
    }
}