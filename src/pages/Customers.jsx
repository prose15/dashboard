import React from 'react'
import {GridComponent,ColumnsDirective,Page,Inject,Search,ColumnDirective, Toolbar,Edit,Selection, Filter,Sort} from '@syncfusion/ej2-react-grids';
import {customersData,customersGrid} from'../data/dummy';
import { Header } from '../components';
import { sort } from '@syncfusion/ej2-react-charts';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl max-sm:mt-[60px]'>
      <Header category="Page" title="Employees"/>
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{ allowDeleting: true, allowEditing: true}}
      width="auto"
      >
        <ColumnsDirective>
               {customersGrid.map((item, index)=>(
                <ColumnDirective key= {index}{...item}/>
               ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar,Selection,Edit,Sort,Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers