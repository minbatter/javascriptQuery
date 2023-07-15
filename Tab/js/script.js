const targetLink=document.querySelectorAll('.tab-menu li a')
const tabContent=document.querySelectorAll('#tabContent>div')
/* console.log(targetLink)
console.log(tabContent) */

for(let i=0; i<targetLink.length; i++){
    targetLink[i].addEventListener('click', function(e){
        const orgTarget=e.target.getAttribute('href');
        //console.log(orgTarget)

        let tabTarget=orgTarget.replace('#','');
        //console.log(tabTarget)
        for(let j=0; j<tabContent.length; j++){
            tabContent[j].style.display='none';
        }
        document.getElementById(tabTarget).style.display='block';

        for( let k=0; k<targetLink.length; k++ ) {
            targetLink[k].classList.remove('active'); 
            e.target.classList.add('active');
         }
    });
}
