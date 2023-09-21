import { searchInAllTablesAndColumns } from './functions/search-in-all-tables-and-columns'

console.log('Iniciando o processo de busca...')

searchInAllTablesAndColumns()
   .then(() => console.log('Processo concluído.'))
   .catch((err) => console.error('Erro durante o processo:', err))
