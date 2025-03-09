import React from 'react'
import { useState } from 'react'
import { products } from '../../data'
import './Products.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Products() {

  const [productsData, setProductsData] = useState(products)

  const productDelete = (productID) => {
    setProductsData(productsData.filter(product => product.id !== productID))
  }

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'title',
      headerName: 'Product',
      width: 300,
      renderCell: (params) => {
        return(
          <Link to={`/product/${params.row.id}`} className='link'>
            <div className="userListUser">
              <img src={params.row.avatar} alt="avatar" className='userListImg' />
              {params.row.title}
            </div>
          </Link>
        )
      }
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 120
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return(
          <div className='usrListActions'>
          <Link to={`/product/${params.row.id}`}>
            <button className='userListEdit'>View Details</button>
          </Link>
          <DeleteOutlineIcon className='userListDelete' onClick={() => productDelete(params.row.id)}/>
          </div>
        )
      }
    }
  ]

  return (
    <div className='userList'>
      <div className='dataGridWidth'>
        <DataGrid rows={productsData} columns={columns} disableRowSelectionOnClick />
      </div>
    </div>
  )
}
