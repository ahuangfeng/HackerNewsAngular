export class Comment {

  body: string;
  contribution_id: number;
  created_at: string;
  id: string;
  parent_id: number;
  points: number;
  username: string;

  constructor(init?: {
    body: string,
    contribution_id: number,
    created_at: string,
    id: string,
    parent_id: number,
    points: number,
    username: string
  }) {
    if (init) Object.assign(this, init);
  }
}
