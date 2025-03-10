import React from 'react'
import Features from '../../components/features/Features'
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { xAxisData } from '../../data'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <Features />
      <Chart grid title='Month Sale' data={xAxisData} dataKey='Sale'/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
