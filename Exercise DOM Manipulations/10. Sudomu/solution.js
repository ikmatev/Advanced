function solve() {
    const tableRows = document.querySelectorAll('tbody > tr');
    const submitButton = document.getElementsByTagName('button')[0];
    const clearBtn = document.getElementsByTagName('button')[1];
    const cells = document.querySelectorAll('tbody td');
    const table = document.getElementsByTagName('table')[0];
    const outputDiv = document.querySelector('#check p');

    submitButton.addEventListener('click', checkRowsAndcolumns);
    clearBtn.addEventListener('click', claer);

    function claer(e){
        for (let i = 0; i < cells.length; i++) {
            cells[i].children[0].value = null;
        }
        table.style.border = null;
        outputDiv.textContent = null;
        outputDiv.style.color = null;
    }

    function checkRowsAndcolumns(e){
        let isSudoku = true;
        for (let i = 1; i < tableRows.length; i++) {
            let rowSet = new Set();
            let rowArr = []
            let columnSet = new Set();
            let colArr =[]; 
            for (let y = 0; y < tableRows[i].children.length; y++) {
                let rowTd = tableRows[i].children[y].children[0].value;
                let columnTd = tableRows[y].children[i].children[0].value;
                    rowSet.add(rowTd);   
                    rowArr.push(rowTd);            
                    columnSet.add(columnTd);
                    colArr.push(columnTd);
            }
            if (rowSet.size !== rowArr.length || colArr.length !== columnSet.size) {
                isSudoku = false;
                break;
            }
        }

        if (isSudoku) {
            table.style.border = '2px solid green';
            outputDiv.textContent = 'You solve it! Congratulations!'
            outputDiv.style.color = 'green'
        }else{
            table.style.border = '2px solid red';
            outputDiv.textContent = 'NOP! You are not done yet...'
            outputDiv.style.color = 'red'
        }
    }
}