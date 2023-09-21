import { Database } from 'node-firebird'

import { searchInTableAndColumn } from './search-in-table-and-column'

export const processTable = async (db: Database, tableName: string) => {
   const columnsResult = await new Promise((resolve, reject) => {
      db.query(
         `SELECT "RDB$FIELD_NAME" FROM "RDB$RELATION_FIELDS" WHERE "RDB$RELATION_NAME" = ?`,
         [tableName],
         (err, columns) => {
            if (err) reject(err)
            else resolve(columns)
         }
      )
   })

   if (Array.isArray(columnsResult)) {
      for (const column of columnsResult) {
         const columnName = column.RDB$FIELD_NAME
         const results = await searchInTableAndColumn(db, tableName, columnName)

         if (results.length > 0) {
            console.log(`Resultados encontrados em ${tableName}.${columnName}:`)
            console.log(results)
         }
      }
   }
}
