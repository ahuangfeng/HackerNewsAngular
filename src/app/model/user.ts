export class User {

    id: string;
    name: string;
    about: string;
    created_at: string;
    api_key: string;
    email: string;    
  
    constructor(
        init?: {
            id: string;
            name: string;
            about: string;
            created_at: string;
            api_key: string;
            email: string; 
        }
    ) {
      if (init) Object.assign(this, init);
    }
  }
