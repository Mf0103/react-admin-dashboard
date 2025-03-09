import React from 'react'
import { transactions } from '../../data'
import './WidgetLg.css'

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={'widgetLgButton' + type}>{type}</button>
    }


  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Transactions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amout</th>
                <th className="widgetLgTh">Status</th>
            </tr>

            {transactions.map(transaction => (

                <tr key={transaction.id} className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={transaction.img} alt="widgetLg-profile" className='widgetLgImg' />
                        <span className='widgetLgName'>{transaction.customer}</span>
                    </td>
                    <td className="widgetLgDate">{transaction.date}</td>
                    <td className="widgetLgAmount">{transaction.amount}</td>
                    <td className="widgetLgStatus">
                        <Button type={transaction.status}/>
                    </td>
                </tr>
            ))}

        </table>
    </div>
  )
}
