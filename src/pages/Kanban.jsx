import React from 'react'
import {kanbanData, kanbanGrid } from '../data/dummy'
import {kanbanComponent,ColumnsDirective,ColumnDirective, KanbanComponent} from '@syncfusion/ej2-react-kanban';
import { Header } from '../components';
console.log(kanbanData)

const Kanban = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="App" title="Kanban"/>
    <KanbanComponent
    id="kanban"
    dataSource={kanbanData}
    cardSettings={{ contentField:'Summary', headerField :'Id' }}
    keyField='Status'>
      <ColumnsDirective>
      {
        kanbanGrid.map((items,index)=><ColumnDirective key={index} {...items}/>)
      }
      </ColumnsDirective>
    </KanbanComponent>
    </div>
  )
}

export default Kanban