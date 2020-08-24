function solve () {
    let template = { 
        iD: null,
        author: null,
        description: null,
        reproducible: null,
        severity: null,
        status: 'Open' 
    }
    let obj = {
        reportsArr: [],
        lastID: 0,
        currentSelector: null,
        report: function (author, description, reproducible, severity){
            let inputObj = {...template};
                inputObj.iD = this.lastID;
                inputObj.author = author;
                inputObj.description = description;
                inputObj.reproducible = reproducible;
                inputObj.severity = +severity;

            this.reportsArr.push(inputObj);
            this.lastID++;
            this.render()
        },
        setStatus: function(id, newStatus){
            let currentObj = this.reportsArr.filter(a => a.iD == id)[0];
            currentObj.status = newStatus;
            this.render()
        },
        remove: function(id){
            let allObj = this.reportsArr.filter(a => a.iD != id);
            this.reportsArr = allObj;
            this.render()
        },
        sort: function(method){
            switch (method) {
                case 'author':
                    this.reportsArr.sort((a, b) => a.author.localeCompare(b.author));
                    this.render()
                    break;
            
                case 'severity':
                    this.reportsArr.sort((a, b) => a.severity - b.severity);
                    this.render()
                    break;
                case 'ID':
                    this.reportsArr.sort((a, b) => a.iD - b.iD);
                    this.render()
                    break;
                default:
                    this.reportsArr.sort((a, b) => a.iD - b.iD);
                    this.render()
                    break
            }
        },
        output: function(selector){
            this.currentSelector = document.querySelector(selector);
        },
        render: function(){
            this.currentSelector.innerHTML = null;
            for (let i = 0; i < this.reportsArr.length; i++) {
                let currentReport = this.reportsArr[i];
                let mainDiv = document.createElement('div');
                    mainDiv.setAttribute('id',`report_${currentReport.iD}`);
                    mainDiv.setAttribute('class',`report`);
                let divBody = document.createElement('div');
                    divBody.setAttribute('class', 'body');
                let descPar = document.createElement('p');
                    descPar.innerText = currentReport.description;
                let titleDiv = document.createElement('div');
                    titleDiv.setAttribute('class', 'title');
                let authorSpan = document.createElement('span');
                    authorSpan.setAttribute('class', 'author')
                    authorSpan.innerText = `Submitted by: ${currentReport.author}`;
                let statusSpan = document.createElement('span');
                    statusSpan.setAttribute('class', 'status');
                    statusSpan.innerText = `${currentReport.status} | ${currentReport.severity}`;
                titleDiv.appendChild(authorSpan);
                titleDiv.appendChild(statusSpan);
                divBody.appendChild(descPar);
                mainDiv.appendChild(divBody);
                mainDiv.appendChild(titleDiv);
                this.currentSelector.appendChild(mainDiv);
            }
        }
    }
    return obj;      
}
