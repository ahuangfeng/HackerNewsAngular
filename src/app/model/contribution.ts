export class Contribution {

  created_at: string;
  id: string;
  numComments: number;
  points: number;
  text: string;
  title: string;
  url: string;
  user_id: string;
  username: string;

  hasUrl: boolean;

  constructor(
    created_at: string,
    id: string,
    numComments: number,
    points: number,
    text: string,
    title: string,
    url: string,
    user_id: string,
    username: string
  ) {
    this.created_at = created_at;
    this.id = id;
    this.numComments = numComments;
    this.points = points;
    this.text = text;
    this.title = title;
    this.url = url;
    this.user_id = user_id;
    this.username = username;
    if (this.url != '') {
      this.hasUrl = true;
    } else {
      this.hasUrl = false;
    }
  }

}