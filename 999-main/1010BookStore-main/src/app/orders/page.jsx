// 'use client'

// import React, { useContext, useState, useEffect } from 'react'
// import MyContext from '../contextUser'
// import { Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
// import Link from 'next/link';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const {userName,setUserName} = useContext(MyContext)

// //       // 這裡應該從後端 API 獲取訂單數據
// //       const fetchOrders = async () => {
// //         // 模擬從 API 獲取數據
// //         const mockOrders = [
// //             { id: 1, date: '2024-05-01', total: 59.98, status: '已發貨' },
// //             { id: 2, date: '2023-05-15', total: 29.99, status: '處理中' },
// //         ];
// //         setOrders(mockOrders);
// //     };

// //   useEffect(() => {
// //     fetchOrders();
// // }, []);
//   return (
//     <>
//     {
//       userName ?
//       <p>Rendering Your orders... {userName}</p>
//       :
//       <p>You don't have any orders / No such user.</p>
//     }
//         <Container maxWidth="md" className="my-8">
//             <Typography variant="h4" component="h1" gutterBottom>
//                 我的訂單
//             </Typography>
//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>訂單編號</TableCell>
//                             <TableCell>日期</TableCell>
//                             <TableCell>總額</TableCell>
//                             <TableCell>狀態</TableCell>
//                             <TableCell>操作</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {orders.map((order) => (
//                             <TableRow key={order.id}>
//                                 <TableCell>{order.id}</TableCell>
//                                 <TableCell>{order.date}</TableCell>
//                                 <TableCell>${order.total.toFixed(2)}</TableCell>
//                                 <TableCell>{order.status}</TableCell>
//                                 <TableCell>
//                                     <Link href={`/orders/${order.id}`} passHref legacyBehavior>
//                                         <Button variant="outlined" size="small">
//                                             查看詳情
//                                         </Button>
//                                     </Link>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </Container>
//     </>
// )}

// export default Orders

'use client'

import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../contextUser';
import { Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Link from 'next/link';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { userName, setUserName } = useContext(MyContext);

  // 模擬從 API 獲取數據
  const fetchOrders = async () => {
    // const mockOrders = [
    //   { id: 1, date: '2024-05-01', total: 59.98, status: '已發貨' },
    //   { id: 2, date: '2023-05-15', total: 29.99, status: '處理中' },
    // ];
    // setOrders(mockOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      {userName ? (
        <p>Rendering Your orders... {userName}</p>
      ) : (
        <p>You don't have any orders / No such user.</p>
      )}
      <Container maxWidth="md" className="my-8 min-h-[75vh]">
        <Typography variant="h4" component="h1" className='mt-[15vh]' gutterBottom>
          我的訂單
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>訂單編號</TableCell>
                <TableCell>日期</TableCell>
                <TableCell>總額</TableCell>
                <TableCell>狀態</TableCell>
                <TableCell>操作</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    <Link href={`/orders/${order.id}`} passHref>
                      <Button variant="outlined" size="small">
                        查看詳情
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Orders;
