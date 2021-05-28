export default class Model {
       constructor() {}

       async insert(name, email, password) {
              const data = {
                     name,
                     email,
                     password,
              };
              try {
                     const request = await fetch(
                            "http://localhost/apis-rest-php/apis/users/insert",
                            {
                                   method: "POST",
                                   dataType: "json",
                                   body: JSON.stringify(data),
                            }
                     );
                     const response = await request.text();
                     return response;
              } catch (error) {
                     throw error;
              }
       }

       async update(id, name, email, password) {
              const data = {
                     id,
                     name,
                     email,
                     password,
              };
              try {
                     const request = await fetch(
                            "http://localhost/apis-rest-php/apis/users/update",
                            {
                                   method: "POST",
                                   dataType: "json",
                                   body: JSON.stringify(data),
                            }
                     );
                     const response = await request.text();
                     return response;
              } catch (error) {
                     throw error;
              }
       }

       async delete(id) {
              const data = {
                     id,
              };
              try {
                     const request = await fetch(
                            "http://localhost/apis-rest-php/apis/users/delete",
                            {
                                   method: "DELETE",
                                   dataType: "json",
                                   body: JSON.stringify(data),
                            }
                     );
                     const response = await request.text();
                     return response;
              } catch (error) {
                     throw error;
              }
       }

       async fetchAll() {
              try {
                     const request = await fetch(
                            "http://localhost/apis-rest-php/apis/users/fetchAll"
                     );
                     const response = await request.text();
                     console.log(response);
                     return response;
              } catch (error) {
                     throw error;
              }
       }

       async fetchById(id) {
              try {
                     let data = "id=" + id;
                     const request = await fetch(
                            "http://localhost/apis-rest-php/apis/users/fetchById?" +
                                   data
                     );
                     const response = await request.text();
                     this.setState({ users: JSON.parse(response) });
                     console.log(JSON.parse(response));
              } catch (error) {
                     throw error;
              }
       }
}
