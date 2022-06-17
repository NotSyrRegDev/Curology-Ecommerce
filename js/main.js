
// SELECTION LIST FUNCTIONALITY
const selectionsList = document.querySelectorAll('#clicked--selection');
const selectionArea = document.getElementById('selection--area');






 for (let i =0; i < selectionsList.length; i++ ) {
     selectionsList[i].addEventListener('click' , addToSelection);
 }
 
 function addToSelection(e) {
     e.preventDefault();
     console.log(e.target);
     let beforeElm = document.createElement('div');
     beforeElm.classList.add('checkbox--your__selection');
     
     beforeElm.textContent = 'X';
     beforeElm.setAttribute('id' , 'removeAble--selection');

    if (e.target.hasAttribute('id' , 'clicked--selection')) {
        selectionArea.appendChild(beforeElm);
        let newClone = e.target.cloneNode(true);
        console.log(newClone);
        beforeElm.appendChild(newClone);
        
    }
    e.target.removeAttribute('id');

    // REMOVING IT
    const RemoveSelectionList = document.querySelectorAll('#removeAble--selection');
    console.log(RemoveSelectionList);
      for (let o =0; o < RemoveSelectionList.length; o++ ) {
    RemoveSelectionList[o].addEventListener('click' , function(e) {
        console.log(e.target)
        console.log(e.target.parentNode)
       e.target.remove();
       
      
       
    } );
    
  }



    

 }





// function removeFromSelection(e) {
//     alert("work")
//     e.preventDefault();
//     console.log(e.target);

// }