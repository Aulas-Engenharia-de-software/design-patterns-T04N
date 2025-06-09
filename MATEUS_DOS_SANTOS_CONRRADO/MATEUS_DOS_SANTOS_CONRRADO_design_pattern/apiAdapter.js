class AppService {
  getUser() {
    throw new Error("Método getUser() deve ser implementado.");
  }
}

class ExternalAPI {
  fetchData() {
    return {
      full_name: "Mateus Conrrado",
      years_old: 20
    };
  }
}

class APIAdapter extends AppService {
  constructor() {
    super();
    this.api = new ExternalAPI();
  }

  getUser() {
    const data = this.api.fetchData();
    return {
      nome: data.full_name,
      idade: data.years_old
    };
  }
}

const service = new APIAdapter();
const user = service.getUser();
console.log(user); 
