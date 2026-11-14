
// const prompt=require("prompt-sync")();
// const dias=["SEG","TER","QUA","QUI","SEX","SAB","DOM"];
// // let diasReservados=["SEG","TER","QUA","QUI","SEX","SAB","DOM"];
// let diasReservados=[];
// let CdiasEscolhido;
let reserva=true;



const cliente={

	 prompt:require("prompt-sync")(),
	 CdiasEscolhid:[],
	 reserva: true,
	 diaReservado:0,
	 diaValor:0,
	 quadraEscolhida:0,


};




const quadra={

	diasReservados:[],
 	dias:["SEG","TER","QUA","QUI","SEX","SAB","DOM"],
 	valoresQuadras:[150,200,350],
 	quadraDisponiveis:["Quadra 1","Quadra 2","Quadra 3","Quadra 4","Quadra 5"],

};




// console.log(quadra.quadraDisponiveis.length)

function Reserva(){


		if (cliente.reserva=== true && quadra.diasReservados.length<=7 && quadra.quadraDisponiveis.length>0){

		console.log("Qual dia escolhe:  " + quadra.dias);	

		cliente.CdiasEscolhido=cliente.prompt("Qual dia deseja usar:");
		
		quadra.diasReservados+= quadra.dias[cliente.CdiasEscolhido-1];

		cliente.diaReservado=cliente.CdiasEscolhido-1;

		console.log("Quadras disponiveis?  " + quadra.quadraDisponiveis);	

		cliente.quadraEscolhida=cliente.prompt("Qual quadra deseja alugar?  ")

		quadra.quadraDisponiveis.splice((cliente.quadraEscolhida-1),1)

		console.log(quadra.quadraDisponiveis)


		if (cliente.diaReservado=== 0 || cliente.diaReservado=== 1) {


	     cliente.diaValor=quadra.valoresQuadras[0];

		}


		else if (cliente.diaReservado===2  ||   cliente.diaReservado===3 || cliente.diaReservado===4) {


	     cliente.diaValor=quadra.valoresQuadras[1];

		}

		else if (cliente.diaReservado=== 5 || cliente.diaReservado===6) {


	     cliente.diaValor=quadra.valoresQuadras[2];

		}



		console.log("O dia escolhido foi  " + quadra.dias[cliente.diaReservado] + " na   " + quadra.quadraDisponiveis[cliente.quadraEscolhida-1] + "   e o valor sera " + cliente.diaValor);

		quadra.dias.splice((cliente.CdiasEscolhido-1),1);
	
		}

		else if(cliente.reserva===true && quadra.diasReservados.length>=7){

		console.log("Não há mais quadras nessa semana");		


		}
	
	return;

}



Reserva();


// console.log(quadra.diasReservados)
// console.log("Dias restantes:  " + dias);



Reserva();