const prompt = require('prompt-sync')({sigint: true});

let consultas = [];

while (true) {
    console.log(`
    === Menu de Agendamento de Consultas Médicas ===
    1. Adicionar uma nova consulta
    2. Listar todas as consultas
    3. Atualizar uma consulta existente
    4. Cancelar uma consulta
    0. Sair
    `);

    let opcao = prompt('Escolha uma opção: ');

    if (opcao === '1') {
        let paciente = prompt('Nome do paciente: ');
        let medico = prompt('Nome do médico: ');
        let data = prompt('Data da consulta (AAAA-MM-DD): ');
        let hora = prompt('Hora da consulta (HH:MM): ');
        consultas.push({ paciente, medico, data, hora });
        console.log('Consulta adicionada com sucesso!');
    } else if (opcao === '2') {
        if (consultas.length === 0) {
            console.log('Nenhuma consulta agendada.');
        } else {
            consultas.forEach((consulta, index) => {
                console.log(`${index + 1}. ${consulta.paciente} - ${consulta.medico} - ${consulta.data} - ${consulta.hora}`);
            });
        }
    } else if (opcao === '3') {
        let num = prompt('Digite o número da consulta que deseja atualizar: ');
        const index = parseInt(num) - 1;
        if (index < 0 || index >= consultas.length) {
            console.log('Consulta não encontrada.');
        } else {
            let paciente = prompt('Nome do paciente: ');
            let medico = prompt('Nome do médico: ');
            let data = prompt('Data da consulta (AAAA-MM-DD): ');
            let hora = prompt('Hora da consulta (HH:MM): ');
            consultas[index] = { paciente, medico, data, hora };
            console.log('Consulta atualizada com sucesso!');
        }
    } else if (opcao === '4') {
        let num = prompt('Digite o número da consulta que deseja cancelar: ');
        const index = parseInt(num) - 1;
        if (index < 0 || index >= consultas.length) {
            console.log('Consulta não encontrada.');
        } else {
            consultas.splice(index, 1);
            console.log('Consulta cancelada com sucesso!');
        }
    } else if (opcao === '0') {
        console.log('Saindo do sistema. Até logo!');
        break;
    } else {
        console.log('Opção inválida. Tente novamente.');
    }
}