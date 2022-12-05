import axios from "axios";
import router from 'next/router'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function EditCategory({ categoryId, categories }) {
  const [categoryName, setCategoryName] = useState("");
  const [categoryIsActive, setCategoryIsActive] = useState(0);
  const [id_, setId_] = useState(0);

  const [addCategories, setCategories] = useState({
    name: "",
    active: "",
    id: "",
  });

  useEffect(() => {
    categories?.map(item => {
      if(item.id === categoryId ) {

        setCategoryName(item.name);
        setCategoryIsActive(item.active);
        setId_(item.id)
        setCategories({
          name: item.name,
          active: item.active,
          id: item.id,
        })

      }
    })
  }, [categoryId]);



  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(addCategories)
    let data = await axios.put(`/api/category/` + id_, {
      name: categoryName,
      active: categoryIsActive,
      id: id_,
    });
    mutate(`/api/category`);
    if (data.data) router.push("/b2b/login");
    setCategories({
      name: "",
      active: "",
      id: "",
    });
  };

  console.log(categoryName, categoryIsActive)

  return (
    <div className="card-body">
      <div className="ec-cat-form">
        <h4>Editar Categoria</h4>

        <form onSubmit={onSubmit}>
          <div className="form-group row">
            <label htmlFor="text" className="col-12 col-form-label">
              Nome
            </label>
            <div className="col-12">
              <input
                id="text"
                name="text"
                className="form-control here slug-title"
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
          </div>

          <div className="col-12">
            <h5 className="col-form-label">Ativado</h5>
          </div>

          <div className="row">
            <div className="col-auto form-group row align-items-center">
              <label htmlFor="actived" className="col-auto d-inline m-0">
                Sim
              </label>
              <div className="col-auto">
                {categoryIsActive === 1 ? 
                  <input
                    type="radio"
                    id="actived"
                    name="category"
                    defaultChecked
                    value={1}
                    onClick={(e) => setCategoryIsActive(e.target.value)}
                  />
                 : 
                  <input
                    type="radio"
                    id="actived"
                    name="category"
                    value={1}
                    onClick={(e) => setCategoryIsActive(e.target.value)}
                  />
                }
              </div>
            </div>

            <div className="col-auto form-group row align-items-center">
              <label htmlFor="disabled" className="col-auto d-inline m-0">
                Não
              </label>
              <div className="col-auto">
                {categoryIsActive === 0 ? 
                  <input
                    type="radio"
                    id="disabled"
                    name="category"
                    defaultChecked
                    value={0}
                    onClick={(e) => setCategoryIsActive(e.target.value)}
                  />
                 : 
                  <input
                    type="radio"
                    id="disabled"
                    name="category"
                    value={0}
                    onClick={(e) => setCategoryIsActive(e.target.value)}
                  />
                }
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
            <button name="submit" type="submit" className="btn btn-primary">
            Editar Categoria
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
