class MatricaView{
    #elem;
    constructor(elem, szuloElem){
        this.#elem=elem;

        szuloElem.append(`<div class="elem"><p class="id">${elem.id}</p>
        <p>Fajta: ${elem.fajta}</p>
        <p>Tulajdonos: ${elem.tulajdonos}</p>
        <p>Színe: ${elem.szine}</p>
        <p>Darabszám: ${elem.darabszam}</p>
        <button id="kivon${elem.id}">Lopás</button></div>`)

        this.sorElem = szuloElem.children("div:last-child");
        //console.log(this.sorElem)

        
        

        //gomb eseménykezelője
        this.kivonElem = $(`#kivon${elem.id}`);

        this.kivonElem.on("click", ()=>{
            console.log("kivon a viewban", elem.id)
            this.kattintastrigger("kivon");
        })
    }

    kattintastrigger(esemenyNeve){
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.id})
        window.dispatchEvent(esemeny);
    }



    
}

export default MatricaView;