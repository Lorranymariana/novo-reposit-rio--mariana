
const multiplicar = require('./multiplicação')
test ("deve multiplicar dois numeros inteiros",()=>{
    expect(multiplicar(3,2)).toBe(6);
 }); 


 test ("deve falhar ao multiplicar 1 string por um número negativo.",( )=>
 {expect(multiplicar(-5,"#")).tothrow();});


 test ("deve falhar ao multiplicar uma string por um número negativo",()=>{
    expect(multiplicar(2.5,3.)).
     toBe (7.75)
 }); 


 test ("está função deve falhar, pois está multiplicando uma string e um valor númerico.", ()=>{
      expect (multiplicação (127,'case') ).tothrow ()
});