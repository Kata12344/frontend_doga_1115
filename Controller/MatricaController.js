import MatricaModell from "../Model/MatricaModell.js";
import MatricakView from "../View/MatricakView.js";

class MatricaController{
    constructor(){
        const matricamodel = new MatricaModell();
        matricamodel.adatBe("../matricak.json", this.matricaAdatok);

        $(window).on("kivon",(event)=>{
            console.log("controllerben kivon", event.detail)
            matricamodel.darabszamKivon(event.detail, this.matricaAdatok)
            
        })
    }

    matricaAdatok(tomb){
        const szuloElem = $("main");
        new MatricakView(tomb, szuloElem);
        console.log(tomb);
    }
}

export default MatricaController;