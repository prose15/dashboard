import React from 'react'
import {GridComponent,ColumnsDirective,Columndirective,Resize,Sort,COntextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject, ColumnDirective, ContextMenu} from '@syncfusion/ej2-react-grids';
import {ordersData,contextMenuItems,orderGrid, ordersGrid} from'../data/dummy';
import { Header } from '../components';

const Orders = () => {
  console.log(ordersGrid)
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl max-sm:mt-[60px]'>
      <Header category="Page" title="Orders"/>
      <GridComponent
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
      allowSorting>
        <ColumnsDirective>
               {ordersGrid.map((item, index)=>(
                <ColumnDirective key= {index}{...item}/>
               ))}
        </ColumnsDirective>
        <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,Edit,PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Orders