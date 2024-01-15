const p=document.querySelector('.field');
const vis=document.querySelector('.invalid');
const main=document.querySelector('.container');
const main2=document.querySelector('.container2');
const show=document.querySelector('.edisplay');
const display = () => {
    let i=0,ans=0;
    for(i;i<p.value.length;i++){
        if(p.value [i]=='@'){
            ans=1;
             break;
        }else{
             ans=0;
        }
    }
    if(ans==0){
        vis.style='visibility:visible';
    }else{
        main.style='visibility:hidden';
        main2.style='visibility:visible';
    }
    show.innerHTML=`A conformation email has been sent to ${p.value}.Please open it and click the button inside to confirm your subscription`;
}