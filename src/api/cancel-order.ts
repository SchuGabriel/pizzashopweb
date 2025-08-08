import { api } from '@/lib/axios';

export interface CancelOderParams {
  orderId: string;
}

export async function cancelOrder({ orderId }: CancelOderParams) {
  await api.patch(`/orders/${orderId}/cancel`);
}
