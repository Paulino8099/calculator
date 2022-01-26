
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
// funnción para separar los números con una coma de acuerdo a su longitud de tamaño ejemplo: mil, dos mil, un millón, dos millones.
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
    * !10,000 hasta 99,999 (100 millones a 1 millón menos 1)https://us04web.zoom.us/j/5973801957?pwd=ZytBOHFwUXlTTXQwa1NDY3daZWw5dz09
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 5) {
        let eatNumber = `${inputResult.value.slice(0, 2)},${inputResult.value.slice(2)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !100,000 hasta 999,999 (100 mil a 1 millón menos 1)
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 6) {
        let eatNumber = `${inputResult.value.slice(0, 3)},${inputResult.value.slice(3)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !1,000,000 hasta 9,999,999 (1 millón a 10 millones menos 1)
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 7) {
        let eatNumber = `${inputResult.value.slice(0, 1)},${inputResult.value.slice(1, 4)},${inputResult.value.slice(4)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !10,000,000 hasta 99,999,999 (10 millones a 100 millones menos 1)
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 8) {
        let eatNumber = `${inputResult.value.slice(0, 2)},${inputResult.value.slice(2, 5)},${inputResult.value.slice(5)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !100,000,000 hasta 999,999,999 (100 millones a 1 millón menos 1)
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 9) {
        let eatNumber = `${inputResult.value.slice(0, 3)},${inputResult.value.slice(3, 6)},${inputResult.value.slice(6)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !1,000,000,000 hasta 9,999,999,999 (1 billón a 10 billones menos 1 )
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 10) {
        let eatNumber = `${inputResult.value.slice(0, 1)},${inputResult.value.slice(1, 4)},${inputResult.value.slice(4, 7)},${inputResult.value.slice(7)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !10,000,000,000 hasta 99,999,999,999 (10 billones a 100 billones menos 1 )
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 11) {
        let eatNumber = `${inputResult.value.slice(0, 2)},${inputResult.value.slice(2, 5)},${inputResult.value.slice(5, 8)},${inputResult.value.slice(8)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !100,000,000,000 hasta 999,999,999,999 (100 billón a 1 trillón menos 1 )
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 12) {
        let eatNumber = `${inputResult.value.slice(0, 3)},${inputResult.value.slice(3, 6)},${inputResult.value.slice(6, 9)},${inputResult.value.slice(9)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !1,000,000,000,000 hasta 9,999,999,999 (1 trillón a 10 trillones menos 1 )  
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 13) {
        let eatNumber = `${inputResult.value.slice(0, 1)},${inputResult.value.slice(1, 4)},${inputResult.value.slice(4, 7)},${inputResult.value.slice(7, 10)},${inputResult.value.slice(10)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !10,000,000,000,000 hasta 99,999,999,999 (10 trillones a 100 trillones menos 1) 
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 14) {
        let eatNumber = `${inputResult.value.slice(0, 2)},${inputResult.value.slice(2, 5)},${inputResult.value.slice(5, 8)},${inputResult.value.slice(8, 11)},${inputResult.value.slice(11)}`;

        inputResult.value = eatNumber;
    }
    /**
    * !100,000,000,000,000 hasta 999,999,999,999 (100 trillones a 1000 trillones menos 1) 
    */
    // si los dígitos escritos llegan a tener mas de 3 dígitos se le añadira una coma (,) después del primer dígito de izquierda a derecha
    else if (inputResult.value.length == 15) {
        let eatNumber = `${inputResult.value.slice(0, 3)},${inputResult.value.slice(3, 6)},${inputResult.value.slice(6, 9)},${inputResult.value.slice(9, 12)},${inputResult.value.slice(12)}`;

        inputResult.value = eatNumber;
    }
};

/**
 * ?reduciendo "fontSize" del "inputValue"...
 */
// reduciendo  eltamaño del input al pasar la cantidad de 11 digítos escritos
function reductionFont() {
    /**
     * !reduciendo fuente "inputValue"
     */
    if (inputValue.value.length > 11) {
        inputValue.classList.add('reductionFont');
    } else {
        inputValue.classList.remove('reductionFont');
    }
    /**
     * !reduciendo fuente del "inputEqual"
     */
    if (inputValue.value.length > 11) {
        inputEqual.classList.add('reductionFont');
    } else {
        inputEqual.classList.remove('reductionFont');
    };
};
/**
 * ?limite de operadores...
 */
// función para limitar el número de operadores para que así no se repita mas de 2 o de tres operadores en una misma secuencia ejemplo: ++,--,***,///
function limitOpertators() {
    inputValue.value.replace('***', '*');
};
/**
 *? añadiendo números...
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
 * ?añadiendo operadores...
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

            sound();
            vibration();
        });
    };

    /**
     * !añadiendo %
     */
    porcentage();
    function porcentage() {
        // cada vez que se escuche un evento en el btn de multiplicar se ejecutará lo siguiente...
        btnPorcentage.addEventListener('click', () => {
            inputValue.value = inputValue.value + '%';

            sound();
            vibration();
        });
    };

    /**
     * !añadiendo /
     */
    setDivide();
    function setDivide() {
        // cada vez que se escuche un evento en el btn de "Dividir" se ejecutará lo siguiente...
        btnDivide.addEventListener('click', () => {
            inputValue.value = inputValue.value + '/';

            sound();
            vibration();
        });
    };

    /**
     * !añadiendo -
     */
    setMinus();
    function setMinus() {
        // cada vez que se escuche un evento en el btn de "restar" se ejecutará lo siguiente...
        btnMinus.addEventListener('click', () => {
            inputValue.value = inputValue.value + '-';

            sound();
            vibration();
        });
    };

    /**
     * !añadiendo +
     */
    setMore();
    function setMore() {
        // cada vez que se escuche un evento en el btn de "sumar" se ejecutará lo siguiente...
        btnMore.addEventListener('click', () => {
            inputValue.value = inputValue.value + '+';

            sound();
            vibration();
        });
    };
};

/**
 * ?calculando operaciones...
 */
// mostrando resultados de las operaciones aritméticas en el input "inputResult" al presionar cualquier btn exepto los btns "igual", borrar el último dígito y el de lipiar toda la pantalla 
setResult();
function setResult() {
    // creando lista con todos los botones exepto los btns igual, borrar y limpiar pantalla
    let allBtns = document.querySelectorAll('.btn');

    // mostrando resultado en el input "inputResult" al dar click en cualquier btn exepto en el btn de igualdad, btn de borrar un dígito y btn de limpiar la pantalla
    allBtns.forEach((e) => {
        e.addEventListener('click', function () {
            // sentencia if para obligar a que el input de entrada de valores tenga que estar con algún tipo de dato para que no de ningún error al hacer cálculos
            if (inputValue.value != '') {
                inputResult.value = eval(inputValue.value);

                // // si hay puntos decimales se va a escoger solor 2 de ellos y el resto se eliminará
                // if (inputResult.value.includes('.')) {
                //     inputResult.value.substring(-1, -13);
                // };
            };

            // si la pantalla que muestra el resultado final de las operaciones está activa, se desactivará
            if (localStorage.getItem('equal') == 1) {
                // desactivando el input "inputEqual" que muestra el resultado en grande
                inputEqual.classList.remove('active');

                localStorage.setItem('equal', 0);
            };

            separateNumber();
            reductionFont();
            sound();
            vibration();
        });
    });
};

/**
 * ?mostrando: resultado de la operación en grande...
 */
// mostrando resultados de la operación en grande (solo si hay valores escritos) y borrando "inputResult" y "inputValue"
resultBig();
function resultBig() {
    btnEqual.addEventListener('click', function () {
        if (inputResult.value != '') {
            // dándole una transición diferente
            inputEqual.style.transition = 'height .3s, width .5s';
            // activando el input de igualdad "inputEqual"
            inputEqual.classList.add('active');
            // añadiendo resultados de la operación al input "inputEqual" (solo si hay valores)
            inputEqual.value = inputResult.value;

            // limpiando todo lo que hay en los inputs luego de medio segundo transcurrido
            setTimeout(() => {
                inputValue.value = '';
                inputResult.value = '';
            }, 200);

            localStorage.setItem('equal', 1);
            reductionFont();
        };
    });
};

/**
 * ?borrando último dígito...
 */
// borrando el último dígito de la entrada de texto
deleteOne();
function deleteOne() {
    btnDelete.addEventListener('click', () => {
        // eliminando el último caracter de la cadena de texto
        let del = inputValue.value.substring(0, inputValue.value.length - 1);

        if (inputValue.value == "NaN") {
            inputValue.value = '';
        }
        if (inputValue.value != '' && inputValue.value != 'NaN') {
            inputValue.value = del;
        };
        // sentencia if para obligar a que el input de entrada de valores tenga que estar con algún tipo de dato para que no de ningún error al hacer cálculos
        if (inputValue.value != '') {
            inputResult.value = eval(inputValue.value);
        };
        // si no hay valores en el "inputValue" el "inputResult" se limpiará 
        if (inputValue.value == '') {
            inputResult.value = '';
        };
        // si la pantalla que muestra los resultados está activa, remover al presionar este btn 
        if (localStorage.getItem('equal') == 1) {
            // limpiando todo lo que hay en los inputs luego de medio segundo transcurrido
            setTimeout(() => {
                inputValue.value = '';
                inputResult.value = '';
            }, 500);

            // desactivando la pantalla del "inputEqual"
            setTimeout(() => {
                // dándole una transición de cero al "inputEqual"
                inputEqual.style.transition = '0s';
                // desactivando el input "inputEqual" que muestra el resultado en grande luego de haber transcurrido 2ms
                inputEqual.classList.remove('active');
            }, 500);


            cleanMagic();
        }
    });
}

/**
 * ?limpiador de input superficial...
 */
function cleanMagic() {
    let clean = document.querySelector('.clean');
    clean.classList.add('active');

    // eliminando clase luego de 1 segundo transcurrido
    setTimeout(function () {
        clean.classList.remove('active');
    }, 1000);
};

/**
 * ?cleaning screen...
 */
// función para borrar todo de las entradas de texto
deleteAll();
function deleteAll() {
    btnDeleteAll.addEventListener('click', () => {
        if (inputValue.value != '' || inputEqual.value != '') {
            // limpiando todo lo que hay en los inputs luego de medio segundo transcurrido
            setTimeout(() => {
                inputValue.value = '';
                inputResult.value = '';
            }, 500);

            // desactivando la pantalla del "inputEqual"
            setTimeout(() => {
                // dándole una transición de cero al "inputEqual"
                inputEqual.style.transition = '0s';
                // desactivando el input "inputEqual" que muestra el resultado en grande luego de haber transcurrido 2ms
                inputEqual.classList.remove('active');
            }, 500);

            cleanMagic();
        };
    });
};

// ========================================================================================================

/**
 * !setting colors app
 * !setting colors app 
 * !setting colors app
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
                document.documentElement.style.setProperty('--color_changed', '#663399');
            }
            if (localStorage.getItem('color_calculator') == 'LimeGreen') {
                document.documentElement.style.setProperty('--color_changed', '#32cd32');
            }
            if (localStorage.getItem('color_calculator') == 'MediumSpringGreen') {
                document.documentElement.style.setProperty('--color_changed', '#00fa9a');
            }
            if (localStorage.getItem('color_calculator') == 'LightSeaGreen') {
                document.documentElement.style.setProperty('--color_changed', '#20b2aa');
            }
            if (localStorage.getItem('color_calculator') == 'Yellow') {
                document.documentElement.style.setProperty('--color_changed', '#fafa41');
            }
            if (localStorage.getItem('color_calculator') == 'DarkGray') {
                document.documentElement.style.setProperty('--color_changed', '#909090');
            }
            if (localStorage.getItem('color_calculator') == 'DarkSlateGray') {
                document.documentElement.style.setProperty('--color_changed', '#305050');
            }
            if (localStorage.getItem('color_calculator') == 'Crimson') {
                document.documentElement.style.setProperty('--color_changed', '#dc143c');
            }
            if (localStorage.getItem('color_calculator') == 'DeepPink') {
                document.documentElement.style.setProperty('--color_changed', '#ff1493');
            }
            if (localStorage.getItem('color_calculator') == 'Tomato') {
                document.documentElement.style.setProperty('--color_changed', '#ff6347');
            }
        }
    }
}

// ========================================================================================================

/**
 * !settings app
 * !settings app
 * !settings app
 */
let btnConfig = document.querySelector('.btn-setting');
let settingContainer = document.querySelector('.setting-container');

/**
 * ?abriendo configuraciones...
 */
btnConfig.addEventListener('click', function () {
    settingContainer.classList.toggle('active');
});

/**
 * ?activando/desactivando sonidos...
 */
// activando vibración al dar click en btn de sonidos dentro de los ajustes
btnMute();
function btnMute() {
    let btnMute = document.querySelector('.btn-mute');

    btnMute.addEventListener('click', function () {
        // si en "localStorage" hay 1 se cambiará a 0 y si hay 0 se cambiará a 1
        if (localStorage.getItem('sound') === null || localStorage.getItem('sound') == 0) {
            localStorage.setItem('sound', 1);
        } else if (localStorage.getItem('sound') == 1) {
            localStorage.setItem('sound', 0);
        };

        onOffSound();
    });

    // si localStorage es igual a 1 se desactivará el sonido
    onOffSound();
    function onOffSound() {
        if (localStorage.getItem('sound') == 1) {
            btnMute.classList.add('active');
        } else {
            btnMute.classList.remove('active');
        }
    }
};

/**
 * ?sonido al pulsar teclas...
 */
function sound() {
    if (localStorage.getItem('sound') == 1) {
        document.querySelector('.tono').innerHTML = '<audio class="tono" src="AUDIOS/AAAmp3.mp3" autoplay></audio>'
    };
};

/**
 * ?activando/desactivando vibración...
 */
btnVibrate();
function btnVibrate() {

    let btnVibration = document.querySelector('.btn-vibration');

    btnVibration.addEventListener('click', function () {
        // si en "localStorage" hay 1 se cambiará a 0 y si hay 0 se cambiará a 1
        if (localStorage.getItem('vibration') === null || localStorage.getItem('vibration') == 0) {
            localStorage.setItem('vibration', 1);
        } else if (localStorage.getItem('vibration') == 1) {
            localStorage.setItem('vibration', 0);
        };

        onOffvibration();
    });

    // si localStorage es igual a 1 se desactivará el sonido
    onOffvibration();
    function onOffvibration() {
        if (localStorage.getItem('vibration') == 1) {
            btnVibration.classList.add('active');
        } else {
            btnVibration.classList.remove('active');
        }
    }
};

/**
 * ?vibración al pulsar teclas...
 * todo crear configuraciones para poder modular o regular la fuerza de vibración mediante la configuración
 */
function vibration() {
    if (localStorage.getItem('vibration') == 1) {
        window.navigator.vibrate(25);
    };
};