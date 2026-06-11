const somarnumeros= require('./soma');
test ('somadenumeros 10 e 20 deve ser igual a 30',()=>{
       expect( somarnumeros(10,20)).toBe(30);
    });