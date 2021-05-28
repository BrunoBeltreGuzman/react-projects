import Model from "./model";

export default class Controller {
       constructor() {
              this.model = new Model();
       }

       async insert(name, email, password) {
              if (name !== "" && email !== "" && password !== "") {
                     const result = await this.model.insert(
                            name,
                            email,
                            password
                     );
                     return result;
              } else {
                     return "inputs missing, incomplete inputs";
              }
       }

       async update(id, name, email, password) {
              if (id !== "" && name !== "" && email !== "" && password !== "") {
                     const result = await this.model.update(
                            id,
                            name,
                            email,
                            password
                     );
                     return result;
              } else {
                     return "inputs missing, incomplete inputs";
              }
       }

       async delete(id) {
              if (id !== "") {
                     const result = await this.model.delete(id);
                     return result;
              } else {
                     return "inputs missing, incomplete inputs";
              }
       }

       async fetchAll() {
              const result = await this.model.fetchAll();
              return result;
       }

       async fetchById(id) {
              if (id !== "") {
                     const result = await this.model.fetchById(id);
                     return result;
              } else {
                     return "inputs missing, incomplete inputs";
              }
       }
}
