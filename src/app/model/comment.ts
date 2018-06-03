export class Comment {

  body: string;
  contribution_id: number;
  created_at: string;
  id: string;
  parent_id: number;
  points: number;
  username: string;
  hasVoted: boolean;
  user_id:string;
  replies: [any];

  constructor(init?: {
    body: string,
    contribution_id: number,
    created_at: string,
    id: string,
    parent_id: number,
    points: number,
    username: string,
    hasVoted: boolean,
    user_id:string,
    replies : [any]
  }) {
    if (init) Object.assign(this, init);
  }
}
