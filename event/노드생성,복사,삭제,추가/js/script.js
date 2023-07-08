
/* nodeType
리턴상수	타입	                예제
1	        element	                <p />, <div />
3	        text	                Hello
4	        CDATASection	        <!CDATA[[...]] >
7	        ProcessingInstruction	<?xml-stylesheet... ?>
8	        Comment	                <!-- comment -->
9	        Document	            document
10	        DocumentType	        <!DOCTYPE html>
11	        DocumentFragment
*/
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const blue=document.getElementById('blue');
console.log(blue)

const ul=document.getElementById('color');
console.log(ul)

// 삽입
const newLi     = document.createElement('li');
const newLi1    = document.createElement('li');
const textNode  = document.createTextNode('black');
const textNode1 = document.createTextNode('yellow');
newLi.appendChild(textNode);
newLi1.appendChild(textNode1);
const green=document.getElementById('green');
ul.insertBefore(newLi, red)
insertAfter(newLi1, red);
//insertAfter(newLi1, ul.lastElementChild);

// 복제
const newYellow=newLi.cloneNode(true);
console.log(newYellow);
ul.appendChild(newYellow);

// 삭제
ul.removeChild(newYellow);
ul.removeChild(green);
