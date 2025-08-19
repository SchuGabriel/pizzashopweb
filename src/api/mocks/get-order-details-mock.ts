import { http, HttpResponse } from 'msw';

import {
  type getOrderDetailsParams,
  type GetOrderDetailsResponse,
} from '../get-order-details';

export const getOrderDetailsMock = http.get<
  getOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'Jhondow@example.com',
      phone: '12345674891',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-1',
        priceInCents: 2000,
        product: { name: 'Pizza Calabresa' },
        quantity: 2,
      },
    ],
  });
});
