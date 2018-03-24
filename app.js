console.log('allClear');
const col1 = document.querySelector('#t0');
const col2 = document.querySelector('#t1');
const col3 = document.querySelector('#t2');
const col4 = document.querySelector('#t3');
const col5 = document.querySelector('#t4');
const col6 = document.querySelector('#t5');
const col7 = document.querySelector('#t6');
const col8 = document.querySelector('#t7');
const col9 = document.querySelector('#t8');
const refresh = document.querySelector('#reload');

col1.addEventListener('click',runEvent);
col2.addEventListener('click',runEvent);
col3.addEventListener('click',runEvent);
col4.addEventListener('click',runEvent);
col5.addEventListener('click',runEvent);
col6.addEventListener('click',runEvent);
col7.addEventListener('click',runEvent);
col8.addEventListener('click',runEvent);
col9.addEventListener('click',runEvent);
refresh.addEventListener('click',function(){
    location.reload()});

var arr =[9];

for(var i =0;i<9;i++){
    arr[i]=0;
}

var count = 0;
function runEvent(e){
    
    var val = parseInt(this.id.substring(1));
    console.log(`event type ${e.type}`)
    
   
    if(count%2===0)
    {   console.log(val);
        if(arr[val]===0){
            this.textContent="X";
            count= count+1;
            arr[val]=-1;
        }
    }

    else{
        console.log(val);
        if(arr[val]===0){
            this.textContent="O";
            count= count+1;
            arr[val]=+1;
        }
    

    }
    if(check()){
        if((count-1)%2===0)
           {
             alert("X wins");
             location.reload();
           }
        else{
             alert("O wins");
             location.reload();
        }
        
        
    }
    if(!check()&&count===9){
        alert("draw")
        location.reload();
    }
console.log(arr);
console.log(count);

}

function check(){
    
    if(arr[0]===arr[1]&&arr[1]===arr[2]&&arr[0]!=0){
        return true;
    }
    else if(arr[3]===arr[4]&&arr[4]===arr[5]&&arr[3]!=0){
        return true;
    }
    else if(arr[6]===arr[7]&&arr[7]===arr[8]&&arr[6]!=0){
        return true;
    }
    else if(arr[0]===arr[3]&&arr[3]===arr[6]&&arr[0]!=0){
        return true;
    }
    else if(arr[1]===arr[4]&&arr[4]===arr[7]&&arr[1]!=0){
        return true;
    }
    else if(arr[2]===arr[5]&&arr[5]===arr[8]&&arr[2]!=0){
        return true;
    }
    else if(arr[0]===arr[4]&&arr[4]===arr[8]&&arr[0]!=0){
        return true;
    }
    else if(arr[6]===arr[4]&&arr[4]===arr[2]&&arr[6]!=0){
        return true;
    }
    else{
        return false;
    }

    
}