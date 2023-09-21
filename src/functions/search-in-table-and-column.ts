import { Database } from 'node-firebird'

import { searchQuery } from '../utils/search-query'

export const searchInTableAndColumn = (
   db: Database,
   tableName: string,
   columnName: string
): Promise<any[]> => {
   return new Promise<any[]>((resolve, reject) => {
      const sql = `SELECT * FROM "${tableName}" WHERE "${columnName}" LIKE ?`
      const searchValue = `${searchQuery}`

      db.query(sql, [searchValue], (err, result) => {
         if (err) reject(err)
         else {
            const results: any[] = result || []
            resolve(results)
         }
      })
   })
}
