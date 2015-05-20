// <reference path="typings/angular2/angular2.d.ts" >

// Importo i moduli che mi servono dal file di definizione
// Component -> per creare nuovi elementi (tipo vecchie direttive)
// View -> per renderizzazione e data-binding
// bootstrap -> inizializza elementi
import {Component, View, bootstrap} from 'angular2/angular2';


// Definisco il nome del tag | <salutatore />
@Component({
	selector: 'salutatore'
})
// La marcatura che voglio renderizzare (può anche essere file esterno)
// #testo -> binding a variabile
// (evento) -> event listener
// `` necessario per template multilinea
@View({
	template: `<h2>Buonasera {{nome}}!</h2>
		<input #testo (keyup)="update(testo.value)" type="text" placeholder="digita del testo qui..." >`
})

// Classe "controller" del componente
class salutatoreComponent{
	nome: string;

	constructor(){
		this.nome = 'Appsterdamers';
	}

	update(testo:string){
		(testo.length !== 0) ? this.nome = testo : this.nome = 'Appsterdamers';
	}
}

// Inizializzo il componente
bootstrap(salutatoreComponent);