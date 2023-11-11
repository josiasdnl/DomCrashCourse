//EXAMINANDO OS OBJETOS DO DOCUMENTO

    //Exibir todos os métodos e propriedades do documento
        //console.dir(document);

    //Acessar informação específica, no exemplo abaixo, a URL
        //console.log(document.URL)

//MÉTODOS DE SELEÇÃO PARA CONSULTAR O DOM

    //getElementById
        /*
        console.log(document.getElementById('header-title'));

        let headerTitle = document.getElementById('header-title');
        console.log(headerTitle);

        let header = document.getElementById('main-header');

        //Alterando o conteúdo
        headerTitle.textContent = 'Hello';                  //Altera o conteúdo independentemente do estilo
        headerTitle.innerText = 'Goodbye';                  //Respeita o estilo 
        headerTitle.innerHTML = '<h3>See you soon</h3>';    //Insere conteúdo dentro do elemento 

        console.log(headerTitle.textContent);
        console.log(headerTitle.innerText);
        console.log(headerTitle.innerHTML);

        //Alterando estilo
        header.style.borderBottom = 'solid 3px #000';
        */

    //getElementsByClassName
        /*
        let itens = document.getElementsByClassName('item-da-lista');
        console.log(itens);
        console.log(itens[1]);
        
        //Alterando estilo
        itens[1].textContent = 'Surprise';
        itens[1].style.fontWeight = 'bold';

        //Para alterar todos os itens de uma coleção HTML

            for(let i = 0; i < itens.length; i++) {
                itens[i].style.backgroundColor = 'yellow';
            }
        */

    //getElementsByTagName
        /*
        let li = document.getElementsByTagName('li');
        console.log(li);
        console.log(li[1]);

        //Alterando estilo
        li[1].textContent = 'Surprise';
        li[1].style.fontWeight = 'bold';
        */

    //querySelector - Para apenas um item (o primeiro)
        /*
        let header = document.querySelector('#main-header');
        let input = document.querySelector('input');
        let submit = document.querySelector('input[type="submit"]');
        let item = document.querySelector('.item-da-lista');
        let utlimoItem = document.querySelector('.item-da-lista:last-child');
        let outroItem = document.querySelector('.item-da-lista:nth-child(3)'); //Escolher item específico, neste caso o item 3

        //Alterando conteúdo
        input.value = 'Hello World';
        submit.value = 'Enviar';

        //Alterando estilo
        header.style.borderBottom = 'solid 4px #ccc';
        item.style.color = 'red';
        utlimoItem.style.color = 'blue';
        outroItem.style.color = 'green';
        */
    
    //querySelectorAll
        let titles = document.querySelectorAll('.title');
        console.log(titles);

        let impares = document.querySelectorAll('li:nth-child(odd)');
        let pares = document.querySelectorAll('li:nth-child(even)');

        //Alterando conteúdo
        titles[0].textContent = 'Congrats';

        //Alterando estilo
            for(let i = 0; i < impares.length; i++) {
                impares[i].style.backgroundColor = '#ccc';
            }
            for(let i = 0; i <pares.length; i++) {
                pares[i].style.backgroundColor = '#dee';
            }
