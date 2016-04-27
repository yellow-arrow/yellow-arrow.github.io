var GeneratePage = {
    
    jsDiv: document.createElement('div'),
    jsHeader: document.createElement('h6'),
    jsForm: document.createElement('form'),
    jsInput: document.createElement('input'),
    
    makeOptions: function() {
        var i = 1, jsOption, jsCheck;
        for (i; i <= 3; i++) {
             this.jsOption = document.createElement('label');
             this.jsOption.classList.add('checkbox');
             this.jsOption.setAttribute('for','option' + i);
             this.jsCheck = document.createElement('input')
             this.jsCheck.setAttribute('type','checkbox');
             this.jsCheck.setAttribute('id','option' + i);
             
             this.jsParagraph.appendChild(this.jsOption);
             this.jsOption.appendChild(this.jsCheck);
             this.jsOption.innerHTML += 'Вариант ответа №' + i;
        }//test options for each question
    },
        
    makeForm: function() {
        this.jsDiv.classList.add('wrapper');
        document.body.appendChild(this.jsDiv);
        //div inserted to the body
        
        this.jsHeader.innerHTML = 'Тест по программированию';
        this.jsHeader.classList.add('text-center');
        this.jsDiv.appendChild(this.jsHeader);
        //header is put to the div
        
        this.jsForm.classList.add('quiz');
        this.jsForm.setAttribute('method','POST');
        this.jsForm.setAttribute('id','form1');
        this.jsDiv.appendChild(this.jsForm);
        //form inserted to the div
    },
    
    makeQuestions: function() {
        var i = 1, jsParagraph;
        for (i; i <= 3; i++) {
             this.jsParagraph = document.createElement('p');
             this.jsParagraph.innerHTML = i + '. Вопрос №' + i;
             this.jsParagraph.classList.add('question');            
             this.jsForm.appendChild(this.jsParagraph);
             this.makeOptions();
        } 
    },//test questions inserted to the form
    
    makeButton: function() {
        this.jsInput.classList.add('btn', 'btn-default');
        this.jsInput.setAttribute('type', 'submit');
        this.jsInput.setAttribute('form', 'form1');
        this.jsInput.setAttribute('id', 'button');
        this.jsInput.setAttribute('value', 'Проверить мои результаты');
        this.jsForm.appendChild(this.jsInput);
    }//button inserted to the form
};

GeneratePage.makeForm();
GeneratePage.makeQuestions();
GeneratePage.makeButton();
