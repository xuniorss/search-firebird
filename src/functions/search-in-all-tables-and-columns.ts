import { options } from '../utils/database-options'
import { attachDatabase } from './attach-database'
import { processTable } from './process-table'

export const searchInAllTablesAndColumns = async () => {
   try {
      const db = await attachDatabase(options)

      const tablesResult = await new Promise<any[]>((resolve, reject) => {
         db.query(
            'SELECT "RDB$RELATION_NAME" FROM "RDB$RELATIONS" WHERE "RDB$SYSTEM_FLAG" = ?',
            [0],
            (err, result) => {
               if (err) reject(err)
               else resolve(result)
            }
         )
      })

      if (!Array.isArray(tablesResult))
         throw new Error(
            'A consulta de tabelas não retornou um conjunto de resultados válido.'
         )

      for (const table of tablesResult) {
         const tableName = table.RDB$RELATION_NAME

         try {
            await processTable(db, tableName)
         } catch (error) {
            continue
         }
      }

      db.detach()
   } catch (err) {
      console.error('Erro:', err)
   }
}
