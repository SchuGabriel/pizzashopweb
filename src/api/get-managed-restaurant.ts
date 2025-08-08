import { api } from '@/lib/axios';

export interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  createdAt: Date | null;
  updateAt: Date | null;
  description: string | null;
  managedId: string | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  );

  return response.data;
}
