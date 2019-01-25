let treesArray = [ "oak", "Pine", "aspen", "Maple"];



/*------------ List of all the trees in the Array --------------*/
let displayTreeArray = function() {
    let treeListItems = " ";
    let i;
    for (i=0; i<treesArray.length; i++) {
            treeListItems += treesArray[i] + "<br>";
        }
    document.getElementById('treeList').innerHTML = treeListItems;

};//displayTreeArray




/*---------------- Adding items to the array --------------------*/

let addRedwoodTree = function(){
    treesArray.push('Redwood');
    displayTreeArray();
};

let addRedwood = document.getElementById('addRedwood');
addRedwood.onclick = addRedwoodTree;

let addPearTree = function(){
    treesArray.unshift('Pear');
    displayTreeArray();
};

let addPear = document.getElementById('addPear');
addPear.onclick = addPearTree;

/*---------------- Removing items from the array -------------------*/

let removefirstTree = function(){
    treesArray.shift();
    displayTreeArray();
};

let removefirst = document.getElementById('removeTreeOne');
removefirst.onclick = removefirstTree;

let removeSecondTree = function(){
    treesArray.splice(1,1);
    displayTreeArray();
};

let removeSecond = document.getElementById('removeTreeTwo');
removeSecond.onclick = removeSecondTree;

let removeLastTree = function(){
    treesArray.pop();
    displayTreeArray();
};

let removeLast = document.getElementById('removeLast');
removeLast.onclick = removeLastTree;
/*--------------- Asking for specific items in the array -------------------*/

let displayItem3 = function(){
    if(treesArray.length<3){
        document.getElementById('errorMessages').innerHTML = "There are not three items in the list."
    }else{
    document.getElementById('results').innerHTML = treesArray[2];
    displayTreeArray();
    }
};//displayItem3

let displayItem4 = function(){
    if(treesArray.length<4){
        document.getElementById('errorMessages').innerHTML = "There are not four items in the list."
    }else{
    document.getElementById('results').innerHTML = treesArray[3];
    displayTreeArray();
    }
};//displayItem4


let treethree = document.getElementById('nameTreeThree');
treethree.onclick = displayItem3;

let treeFour = document.getElementById('nameTreeFour');
treeFour.onclick = displayItem4;