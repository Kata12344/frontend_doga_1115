import MatricaView from "./matricaView.js";

class MatricakView{
    constructor(tomb, szuloElem){
        szuloElem.html(`
        <h1> Matricák a szomszédból</h1>
        <div id="fodiv"></div>`)
        this.divElem = szuloElem.children("div:last-child");

        tomb.forEach(matrica => {
            const matricam = new MatricaView(matrica,this.divElem);
        });
    }
}

export default MatricakView