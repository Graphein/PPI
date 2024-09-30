import Evento from './Modelo/Evento.js';

const testarEventos = async () => {
    const evento = new Evento('Rock in Rio - Travis Scott', new Date('2024-09-13 00:00:00'), 'Rio De Janeiro', 490.00, 'Um evento incrível!');


        // Incluir
          await evento.incluir();
          console.log('Evento incluído com sucesso!');

        // Consultar 
            const eventos = await evento.consultar({ nome: 'Rock in Rio - Travis Scott' });
                
        // Exibindo os eventos encontrados no console
           eventos.forEach(evento => {
               console.log(evento.toString()); 

           });

         // Atualizar evento - Aqui você pode alterar as informações do evento.

           // evento.nome = 'Rock in Rio - Travis Scott (Atualizado)';
           // evento.data = new Date('2024-09-14 22:00:00'); 
           // evento.local = 'São Paulo'; 
           // evento.preco = 500.00; 
           // evento.descricao = 'Evento atualizado!';

           //  await evento.alterar();
           //  console.log('Evento atualizado com sucesso!');
    
        //Excluir 
          await evento.excluir();
          console.log('Evento excluído com sucesso!');

};

testarEventos();
