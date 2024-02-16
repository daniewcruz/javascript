// recebendo o formulario de cadastro
const formulario = document.getElementById('cadastro') as HTMLFormElement;
// adicionando um evento ao formulario de casdatro, tipo subimit
formulario.addEventListener('submit',(evento) => {
    evento.preventDefault();
    

        // adicionando a variavel nome pelo id nome
        const nome = (document.getElementById('nome') as HTMLInputElement).value
        // adicionando a variavel cpf pelo  id cpf
        const cpf = (document.getElementById('cpf') as HTMLInputElement).value
        // adicionando a variavel email pelo id email
        const email = (document.getElementById('email') as HTMLInputElement).value

      


        const dados = `
        <h1> Dados coletados</h1>
        <p>Nome:${nome} <br>
        <p>cpf:${cpf} <br>
        <p>email:${email} <br>
        `

        const dadosform = document.getElementById('resposta')
        if(dadosform){
            dadosform.innerHTML = dados 

        }

        
        
        
        
        






    })