import Jato from "./jato.js";
import Turboelice from "./turboelice.js";

/* Cria um novo Jato */
function acionaJato() {
    console.log("** Jato **");

    const jato = new Jato("F18");
    console.log(JSON.stringify(jato));

    jato.decolar();
    console.log(JSON.stringify(jato));

    jato.acelerar();
    console.log(JSON.stringify(jato));

    jato.desacelerar();
    console.log(JSON.stringify(jato));

    jato.pousar();
    console.log(JSON.stringify(jato));
}

/* Cria um novo Turboélice */
function acionaTurboelice() {
    console.log("** Turboélice **");

    const turboelice = new Turboelice("ATR");
    console.log(JSON.stringify(turboelice));

    turboelice.decolar();
    console.log(JSON.stringify(turboelice));

    turboelice.acelerar();
    console.log(JSON.stringify(turboelice));

    turboelice.desacelerar();
    console.log(JSON.stringify(turboelice));

    turboelice.pousar();
    console.log(JSON.stringify(turboelice));
}

acionaJato();
acionaTurboelice();
