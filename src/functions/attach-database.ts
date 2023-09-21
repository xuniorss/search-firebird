import firebird, { Database } from 'node-firebird'

export const attachDatabase = (options: any): Promise<Database> => {
   return new Promise<Database>((resolve, reject) => {
      firebird.attach(options, (err, db: Database) => {
         if (err) reject(err)
         else resolve(db)
      })
   })
}
