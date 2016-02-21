var tableFirstRow = document.getElementById("firstRow");
var firstRowCells = tableFirstRow.getElementsByTagName('input');

var tableSecondRow = document.getElementById('secondRow');
var secondRowCells = tableSecondRow.getElementsByTagName('input');

var tableThirdRow = document.getElementById('thirdRow');
var thirdRowCells = tableThirdRow.getElementsByTagName('input');

var firstColCells = document.getElementsByClassName('firstColumn');
var secondColCells = document.getElementsByClassName('secondColumn');
var thirdColCells = document.getElementsByClassName('thirdColumn');

var firstRowSum, secondRowSum, thirdRowSum, firstColSum, secondColSum, thirdColSum;

document.getElementById('calculate').onclick = function onButtonClick() {
    firstRowSum = getSum(firstRowCells);
    appendTd(firstRowSum, tableFirstRow);

    secondRowSum = getSum(secondRowCells);
    appendTd(secondRowSum, tableSecondRow);

    thirdRowSum = getSum(thirdRowCells);
    appendTd(thirdRowSum, tableThirdRow);

    firstColSum = getSum(firstColCells);
    secondColSum = getSum(secondColCells);
    thirdColSum = getSum(thirdColCells);
    appendTr(firstColSum, secondColSum, thirdColSum);
};

function getSum(arr) {
    var sum = 0, i;
    for (i in arr) {
        if (!isNaN(i)) {
            var number=Number(arr[i].value);
            var element=arr[i].value;
            if(isNaN(number) || element==""){
                return 'Invalid input!';
            }
            else {
                sum += number;
            }
        }
    }

    return sum.toString();
}

function appendTd(result, row) {
    var td = document.createElement('td');
    var input = document.createElement('input');
    input.value = result;
    td.appendChild(input);
    row.appendChild(td);
}

function appendTr(col1, col2, col3) {
    var table = document.getElementById('body');
    var tr = document.createElement('tr');

    var first = document.createElement('td');
    var second = document.createElement('td');
    var third = document.createElement('td');

    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');

    input1.value = col1;
    input2.value = col2;
    input3.value = col3;

    first.appendChild(input1);
    second.appendChild(input2);
    third.appendChild(input3);

    tr.appendChild(first);
    tr.appendChild(second);
    tr.appendChild(third);

    table.insertBefore(tr, table.childNodes[table.childNodes.length - 2]);
}

