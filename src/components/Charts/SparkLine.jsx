import React from 'react'
import { SparklineComponent,Inject,SparklineTooltip} from '@syncfusion/ej2-react-charts';

const SparkLine = ({id,height,width,data,color}) => {

  return(
    <div>
    {/* <SparklineComponent 
    id={id} 
    height={height} 
    width={width}
    fill={color}
    dataSource={data} 
    xName='xval' 
    yName='yval'
    tooltipSettings={{
      visible: true,
      format: '${xval} : data ${yval}',
      trackLineSettings:{
        visible: true
      }
    }}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent> */}
    </div>
    )
}


export default SparkLine
