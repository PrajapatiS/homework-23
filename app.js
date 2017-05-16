

window.addEventListener('load',function(){

let CarshopModel= require('./carshopmodel');
let CarshopView= require('./carshopview');

let cShopModel= new CarshopModel();
cShopModel.funcTires =0;
cShopModel.paintcolor='red';
cShopModel.exhaust= false;
cShopModel.horsepower= 20;
cShopModel.mpgallon=80;
cShopModel.total=0;

let shopview= new CarshopView({
 el: document.querySelector('section'),
model: cShopModel,

});
shopview.render();

 let btnTires= document.querySelector('#btn_tires');
 btnTires.addEventListener('click',function(){
     console.log('clicking');   
    if( cShopModel.funcTires < 4 ){
        cShopModel.funcTires= cShopModel.funcTires + 1;
        cShopModel.total= cShopModel.total + 200; 
        console.log('click3') ;
    }
   
 });

  let btnPntColor= document.querySelector('#btn_color');
 btnPntColor.addEventListener('click',function(){
     if(cShopModel.paintcolor ==='red'){
        cShopModel.paintcolor='green';
       cShopModel.total= cShopModel.total + 300;
     }else if(cShopModel.paintcolor === 'green'){
         cShopModel.paintcolor ='orange';
        cShopModel.total= cShopModel.total + 300; 
     }else if(cShopModel.paintcolor === 'orange'){
         cShopModel.paintcolor = 'black';
          cShopModel.total= cShopModel.total + 300;
     }else if(cShopModel.paintcolor === 'black'){
         cShopModel.paintcolor ='red';
          cShopModel.total= cShopModel.total + 300;
     }
 });

  let btnExhaust= document.querySelector('#btn_exhaust');
     btnExhaust.addEventListener('click',function(){

    if(cShopModel.exhaust !== true ){
         cShopModel.exhaust = true;
        cShopModel.total= cShopModel.total + 300;
    }else{
        cShopModel.exhaust = false;
    }
 });

  let btnhrsPower= document.querySelector('#btn_h_power');
     btnhrsPower.addEventListener('click',function(){
         cShopModel.horsepower= cShopModel.horsepower + 10;
         cShopModel.total= cShopModel.total + 100;
 });

  let btnPerGallon= document.querySelector('#btn_p_gallon');
    btnPerGallon.addEventListener('click',function(){
      if( cShopModel.mpgallon > 0){
          cShopModel.mpgallon= cShopModel.mpgallon + 5;
          cShopModel.horsepower= cShopModel.horsepower -1;
          cShopModel.total= cShopModel.total +100;
      }

 });

});