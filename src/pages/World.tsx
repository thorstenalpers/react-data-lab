import React, { Fragment, useState, useEffect } from 'react'
import Papa from 'papaparse'
import MaterialTable from 'material-table'
import 'materialize-css/dist/css/materialize.min.css'

export const World = () => {
  const [columns, setColumnsState] = useState<any[]>([])
  const [data, setDataState] = useState<any[]>([])

  useEffect(() => {
    Papa.parse('/data/GermanyValues.csv', {
      header: true,
      download: true,
      encoding: 'utf-8',
      dynamicTyping: true,
      skipEmptyLines: true,
      beforeFirstChunk(chunk: string) {
        return chunk.replace(/"Data(.|\n|\r|")+/, '')
      },
      complete(parsedData) {
        setDataState(parsedData.data)
        const cols: any[] = []
        parsedData.meta.fields.forEach((value) => {
          const hide = false
          const newTitle = value

          // // Hide columns
          // const filterColumns = [
          //   'ISO',
          //   'Source',
          //   'Quelle 2',
          //   'Name_old',
          //   'BEZ',
          //   'Density',
          //   'Date',
          //   'Mortality',
          //   'Lethality',
          // ]
          // if (filterColumns.some((e) => e === value)) {
          //   hide = true
          // }

          // // Rename column header
          // if (value === 'Cumulative') {
          //   newTitle = 'Total'
          // }
          // if (value === 'Cases') {
          //   newTitle = 'Active'
          // }

          const col = { title: newTitle, field: value, hidden: hide }
          cols.push(col)
        })
        const myObjStr = JSON.stringify(cols)
        const coll = JSON.parse(myObjStr)
        setColumnsState(coll)
      },
      error(err) {
        console.log(err)
      },
    })

    // Your code here
  }, [])

  return (
    <Fragment>
      <div className="container">
        <h1>React Data Laboratory</h1>
        <MaterialTable
          columns={columns}
          data={data}
          options={{
            pageSize: 5,
            pageSizeOptions: [10, 20, 500],
          }}
          title="Demo Title"
        />
      </div>
    </Fragment>
  )
}
