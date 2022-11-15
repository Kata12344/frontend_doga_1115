import MatricaView from "../View/MatricaView.js";

class MatricaModell{
    #matricakTomb = [];
    
    constructor(){
        console.log("MatricaModell")
    }

    darabszamKivon(adat, myCallBack){
        console.log("modellben darabszamkivon", adat)
        
        //console.log(this.#matricakTomb)
        this.#matricakTomb.forEach(matrica => {
            if (adat == matrica.id) {
                matrica.darabszam--
                console.log(matrica.darabszam)
            }
            myCallBack(this.#matricakTomb);
        });
        
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#matricakTomb = data.matrica;
                console.log(this.#matricakTomb);
                myCallBack(this.#matricakTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    
    

}

export default MatricaModell;