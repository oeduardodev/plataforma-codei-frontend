export interface Moment {
  id?: number;
  title: string;
  description: string;
  image: string;
  likes_count: number;
  created_at?: string;
  updated_at?: string;
  comments?: [{ text: string; username: string }];
  user?: { username: string; email: string }; // Ajuste para objeto único
}
