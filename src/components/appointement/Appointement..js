import React from "react";
import ReactDOM from "react-dom";
import CRUDTable, {
  Fields,
  Field,
  UpdateForm,
  DeleteForm
 
} from "react-crud-table";

// Component's Base CSS
import "./Appointement.css";

const DescriptionRenderer = ({ field }) => <textarea {...field} />;
 

function Appointement() {
  


let appointements = [
  { id: "1", nom: "Fatmata Ndiaye",tel: "778555555",email: "exeample@gmail.com", date: "12/10/2023" },
  {id: "2", nom: "Fatmata Ndiaye",tel: "778555555", email: "exeample@gmail.com",date: "12/10/2023"},
  { id: "3", nom: "Fatmata Ndiaye", tel: "778555555",email: "exeample@gmail.com",date: "12/10/2023" },
  { id: "4", nom: "Fatmata Ndiaye", tel: "778555555",email: "exeample@gmail.com",date: "12/10/2023" },
  { id: "5", nom: "Fatmata Ndiaye",tel: "778555555",email: "exeample@gmail.com", date: "12/10/2023" },
  { id: "6",nom: "Fatmata Ndiaye",tel: "778555555",email: "exeample@gmail.com", date: "12/10/2023"},
  {id: "7", nom: "Fatmata Ndiaye",tel: "778555555", email: "exeample@gmail.com",date: "12/10/2023" },
  { id: "8", nom: "Fatmata Ndiaye", tel: "778555555",email: "exeample@gmail.com",date: "12/10/2023" },
  { id: "9",nom: "Fatmata Ndiaye",tel: "778555555", email: "exeample@gmail.com",date: "12/10/2023"},
  { id: "10", nom: "Fatmata Ndiaye",tel: "778555555",email: "exeample@gmail.com", date: "12/10/2023" },
  
];

const SORTERS = {
  NUMBER_ASCENDING: (mapper) => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: (mapper) => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: (mapper) => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: (mapper) => (a, b) => mapper(b).localeCompare(mapper(a))
};

const getSorter = (data) => {
  const mapper = (x) => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);

  if (data.field === "id") {
    sorter =
      data.direction === "ascending"
        ? SORTERS.NUMBER_ASCENDING(mapper)
        : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter =
      data.direction === "ascending"
        ? SORTERS.STRING_ASCENDING(mapper)
        : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};


const service = {
  fetchItems: (payload) => {
    let result = Array.from(appointements);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
 
  update: (data) => {
    const appointement = appointements.find((t) => t.id === data.id);
    appointement.title = data.title;
    appointement.description = data.description;
    return Promise.resolve(appointement);
  },
  delete: (data) => {
    const appointement = appointements.find((t) => t.id === data.id);
    appointements = appointements.filter((t) => t.id !== appointement.id);
    return Promise.resolve(appointement);
  }
};

const styles = {
  container: { margin: "auto", width: "fit-content" }
};

const Example = () => (
  <div style={styles.container}>
    <CRUDTable
      caption="Gestion de rendez vous"
      fetchItems={(payload) => service.fetchItems(payload)}
    >
      <Fields>
        <Field name="id" label="Id" hideInCreateForm />
        <Field name="nom" label="Nom-Prenom" placeholder="Title" />
        <Field name="tel" label="Numero Telephone" placeholder="Title" />
        <Field name="email" label="Email" placeholder="Title" />
        <Field name="date" label="Date"render={DescriptionRenderer}/>
      </Fields>
      

      <UpdateForm
        title="Appointement Update Process"
        message="Update appointement"
        trigger="Update"
        onSubmit={(appointement) => service.update(appointement)}
        submitText="Update"
        validate={(values) => {
       
        }}
      />

      <DeleteForm
        title="Appointement Delete Process"
        message="Etes vous sûr de vouloir decliné le rendez vous?"
        trigger="Decliner"
        onSubmit={(appointement) => service.delete(appointement)}
        submitText="Decliner"
        validate={(values) => {
          const errors = {};
          if (!values.id) {
            errors.id = "Please, provide id";
          }
          return errors;
        }}
      />
    </CRUDTable>
  </div>
);

Example.propTypes = {};

ReactDOM.render(<Example />, document.getElementById("root"));

      }

export default Appointement;