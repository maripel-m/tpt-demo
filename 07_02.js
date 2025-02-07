function hello(name){
    return 'hello ' + name;
  }
  
  let greeting = hello('maribel');
  console.log(greeting);
  
  greeting = hello('mar');
  console.log(greeting);
  
  let goodbye = function(name){
    return 'goodbye ' + name;
  }
  
  goodbye = (name) => {
    return 'goodbye ' + name;
  }
  
  goodbye = name => {
    return 'goodbye ' + name;
  }
  
  goodbye = (name) => 'goodbye ' + name;
  
  let farewell = goodbye('maribel');
  console.log(farewell);
  
  farewell = goodbye('mar');
  console.log(farewell);
  
  let person = {
    name: 'maripel',
    age: 20,
    greeting(){
      console.log(this);
      return 'hello';
    },
    goodbye: () => {
      console.log(this);
      return 'goodbye';
    }
  }
  
  console.log(person.greeting());
  console.log(person.goodbye());
  
  function recursive(i){
    console.log(i);
    if(i<10){
    recursive(i+1);
    }
  }
  
  recursive(0);
  
  for(let i=0; i<10; i++){
    console.log(i);
  }
  
  let boo = 'scary';
  let template = `hello
    world
    ${person.name}
    ${boo}
    !!!!`;

    console.log(template);
    console.log(template.lenght);

    console.log('💩'.lenght);

    console.log('hello'.toLocaleLowerCase());

    console.log(0xFF);
    console.log(0o15);

    console.log(100_000_000_000_000_000);

    let array = [
        'asdasd',
        1,
        true,
        () => 'hello',
        {cat: 'nuustik'},
        [1, 2, 'hello'],
    ];

 array[8] = 'something';
 

 console.log(array);
 console.log(array[0]);
 console.log(array[4].cat);
 console.log(array[5][2]);
 let i = 10;
 if(i<10){
    console.log('i on väiksem kui 10');
 } else if(i>10){
    console.log('i on suurem kui 10');
 } else {
    console.log('i võrdne 10');
 }
let day = new Date().getDay();
console.log(day);

let answer = '';
 if(day==0){
    answer = 'pühapäev'
 } else if(day==1){
    answer = 'esmaspäev'
 } else if(day==2){
    answer = 'teisipäev'
 } else if(day==3){
    answer = 'kolmapäev'
 } else if(day==4){
    answer = 'neljapäev'
 } else if(day==5 || day==6){
    answer = 'pidupäev'
 } else {
    answer = 'weird day';
 }
 console.log(answer);

 switch(day){
    case 0:
        answer = 'pühapäev';
        break;
    case 1:
        answer = 'esmaspäev';
        break;
    case 2:
        answer = 'teisipäev';
        break;
    case 3:
        answer = 'kolmapäev';
        break;
    case 4:
        answer = 'neljapäev';
        break;
    case 5:
         console.log('reede');
    case 6:
        answer = 'pidupäev';
        break;
    default:
        answer = 'weirdday';
 }
 console.log(answer);

 for(let i=1;i<100_000_000;i*=2){
    console.log(i);
 }

 let startSec = new Date().getSeconds();
 let currentSec = new Date().getSeconds();
 let count = 0;
 while(currentSec == startSec){
    currentSec = new Date().getSeconds();
    console.log(count);
    count++;
 }

 // while(true){
 //
 //}
let a = 1;
//teeb aint kui a<1
while(a<1){
    console.log('did stuff');
}

//kontrollib lõpus, do teeb vähemalt yhe korra ära
 do {
    console.log('did stuff');
 } while(a<1);

 //in konstantide jaoks
for(let key in person){
    console.log(key, person[key]);

}
//of arrayde jaoks
for(let value of array){
    console.log(value);
}

for(let i=0; 0<10; i++){
    if(i==3){
        continue; //jäta see loop pooleli
    }
    if(i==7){
        break; //lõhub loopist välja, loop täiesti lõpetatud
    }
    console.log(i);
}