import React, { Fragment, useEffect, useState } from 'react'
import MaterialTable from 'material-table'
import * as d3 from 'd3'
import 'react-tabulator/lib/styles.css' // required styles
import 'react-tabulator/lib/css/tabulator.min.css' // theme
import { Line } from 'react-chartjs-2'
import moment from 'moment'


export const GermanDistricts = () => {
  const [columns, setColumnsState] = useState<any[]>([])
  const [data, setDataState] = useState<any[]>([])

  // const [chartData, setChartDataState] = useState<number[]>()
  // const [chartLabels, setChartLabelsState] = useState<string[]>([])

  const areaData = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    datasets: [
      {
        label: 'Recovered Germany',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          65,
          59,
          80,
          81,
          56,
          55,
          40,
        ],
      },
    ],
  }
  
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv'
    )
      .then((response) => {
        return response.ok ? response.text() : Promise.reject(response.status)
      })
      .then((text) => {
        const parsedData = d3.csvParse(text)
        setDataState(parsedData)
        const germanData = parsedData.find(
          (e) => e['Country/Region'] === 'Germany'
        )
        const chartDataNew: number[] = []
        Object.entries(JSON.parse(JSON.stringify(germanData))).map((value) => {
          const date = moment(value['0'])
          if (date.isValid()) {
            chartDataNew.push(parseInt(value['1'] as string, 10))
          }
        })

        // setChartDataState(chartDataNew.slice(70))

        const cols: any[] = []
        parsedData.columns.forEach((value) => {
          const col = { title: value, field: value }
          cols.push(col)
        })
        const colsFormated = JSON.parse(JSON.stringify(cols))
        setColumnsState(colsFormated)
        const lables = parsedData.columns.slice(4)
        // setChartLabelsState(lables.slice(70))
      })
  }, [])

  return (
    <Fragment>
      <div className="container">
        <h1>React Data Laboratory</h1>

        <MaterialTable
          columns={columns}
          data={data}
          options={{
            pageSize: 10,
            doubleHorizontalScroll: true,
            pageSizeOptions: [10, 20, 500],
          }}
          title="Todo"
        />
        <Line data={areaData} />
      </div>
    </Fragment>
  )
}
