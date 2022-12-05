import axios from "axios";
import router from 'next/router'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSwr, { mutate } from "swr";

export default function EditCategory({ colorId, colors }) {
  const [colorName, setColorName] = useState("");
  const [color, setColor] = useState("");
  const [id_, setId_] = useState(0);


  useEffect(() => {
    colors?.map(item => {
      if(item.id === colorId ) {
        setColorName(item.name);
        setColor(item.color);
        setId_(item.id)
      }
    })
  }, [colorId]);



  const onSubmit = async (e) => {
    e.preventDefault();
    let data = await axios.put(`/api/colors/` + id_, {
      name: colorName,
      color: color,
      id: id_,
    });
    mutate(`/api/colors`);
    if (data.data) router.push("/b2b/color");
  };

  console.log(colorName, color)

  return (
    <div className="card-body">
      <div className="ec-cat-form">
        <h4>Editar Cor</h4>

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
                value={colorName}
                onChange={(e) => setColorName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="color" className="col-12 col-form-label">
              Cor
            </label>
            <div className="col-12">
              <input
                id="color"
                name="color"
                className="form-control here slug-title"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
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
