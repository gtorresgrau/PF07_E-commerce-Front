import * as React from 'react';import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from "../Actions/Actions";
import { useAuth0 } from '@auth0/auth0-react';
import TableCell from '@mui/material/TableCell';

const OrderHistory = () => {

    const Orders = useSelector((state) => state.orders);
    const dispatch = useDispatch();
    const { user } = useAuth0();

    useEffect(() => {
        dispatch(getAllOrders())
      }, [dispatch]);


      const OrderByUser = Orders.filter(e => e.email === user.email );

      return (
        <div>

        {
            OrderByUser.map(row => {
            return (
                <div key={row.id}>
                   
                    <h3>Purchase History</h3>
      

  <ul style={{display: 'flex', flexDirection: 'row'}}>
   <li>
     <TableCell>
       <strong>Title:</strong> {row.items.map((r) => <div>{r.title}</div>)}
     </TableCell>
   </li>
   <br />
   <li>
     <TableCell>
       <strong>Quantity:</strong> {row.items.map((r) => <div>{r.quantity}</div>)}
     </TableCell>
   </li>
   <br />
   <li>
     <TableCell>
       <strong>Price:</strong> {row.items.map((r) => <div>{r.price}</div>)}
     </TableCell>
   </li>
   <br />
   <br />
  
   <li>
     <TableCell>
       <strong>Total :</strong>  {row.items.map((r) => (r.price * r.quantity)).reduce((a, b) => a + b, 0)}
     </TableCell>
   </li>
   <li>
     <TableCell>
       <strong>Status:   </strong> {row.status}
     </TableCell>
   </li>
   <br />
   <li>
     <TableCell>
       <strong>Date:     </strong> {row.createdAt}
     </TableCell>
   </li>
   
</ul>


                  
                
                </div>
            )
        })}

        </div>
        

      )

};


export default OrderHistory;