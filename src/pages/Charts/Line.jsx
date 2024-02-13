import React from 'react'
import { Header } from '../../components'
import { lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis } from '../../data/dummy'
import { ChartComponent,SeriesCollectionDirective,SeriesDirective,Inject,LineSeries,DateTime,Legend,Tooltip } from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../contexts/ContextProvider'

const Line = () => {
  const {currentMode} = useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Inflation Rate"/>
      <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable:true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
        <Inject services={[LineSeries,DateTime,Legend,Tooltip]}/>
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item,index)=>
            <SeriesDirective key={index} {...item}
            />
          )}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Line