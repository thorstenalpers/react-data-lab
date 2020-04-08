import React, { Fragment } from 'react'
import MaterialTable from 'material-table'
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts'
import 'react-virtualized/styles.css' // only needs to be imported once

export const Dashboard = () => {
  const columns = [
    { title: 'Name', field: 'name', width: 150 },
    { title: 'Age', field: 'age', hozAlign: 'left', formatter: 'progress' },
    { title: 'Favourite Color', field: 'col' },
    { title: 'Date Of Birth', field: 'dob', hozAlign: 'center' },
    { title: 'Rating', field: 'rating', hozAlign: 'center', formatter: 'star' },
    {
      title: 'Passed?',
      field: 'passed',
    },
  ]
  const data = [
    { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '' },
    { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' },
    {
      id: 3,
      name: 'Christine Lobowski',
      age: '42',
      col: 'green',
      dob: '22/05/1982',
    },
    {
      id: 4,
      name: 'Brendon Philips',
      age: '125',
      col: 'green',
      dob: '01/08/1980',
    },
    {
      id: 5,
      name: 'Margret Marmajuke',
      age: '16',
      col: 'yellow',
      dob: '31/01/1999',
    },
  ]
  const areadata = [
    { name: 'Page A', uv: 0, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: -2000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ]

  return (
    <Fragment>
      <div className="container">
        <h1>React Data Laboratory</h1>

        <MaterialTable columns={columns} data={data} title="Demo Title" />


        <AreaChart
          width={600}
          height={400}
          data={areadata}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </div>
    </Fragment>
  )
}
