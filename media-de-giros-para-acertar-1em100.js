let numeroAleatorio;
let i = 0;
let arr = [];
let tentativas = 9999999;

for(let g = 0; g < tentativas; g++){
while(numeroAleatorio !== 100){
    numeroAleatorio = Math.floor(Math.random() * 101);  
    i++;
    if(numeroAleatorio == 100){       
        arr.push(i);
        
    }    
}   
        i = 0;
        numeroAleatorio = 0;
}
let total = 0;
for (let h = 0; h < arr.length; h++){
    total += arr[h];
}
mediaSorteios = total / arr.length;

console.log("quantidade: ", arr.length);
console.log("media: ", mediaSorteios);
console.log("total: ", total);
