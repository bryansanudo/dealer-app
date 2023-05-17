import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import { MdLibraryAdd } from "react-icons/md";
import { toast } from "react-toastify";

import Input from "@/components/Input";

const Admin = () => {
  const [file, setFile] = useState({
    modelo: "",
    marca: "",
    color: "",
    referencia: "",
    precio: "",
    transmision: "",
    combustible: "",
    kilometraje: "",
    urlImagen: "",
  });
  const {
    modelo,
    marca,
    color,
    referencia,
    precio,
    transmision,
    combustible,
    kilometraje,
    urlImagen,
  } = file;

  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value });
  };

  const postFile = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "vehiculos"), file);
      toast.success("Expediente guardado en base de datos");
    } catch (error) {
      error.message;
    }

    setFile({
      modelo: "",
      marca: "",
      color: "",
      referencia: "",
      precio: "",
      transmision: "",
      combustible: "",
      kilometraje: "",
      urlImagen: "",
    });
  };
  return (
    <>
      <section className="container px-5 py-40 mx-auto flex flex-col items-center justify-between overflow-hidden ">
        <h1 className="sm:text-4xl text-3xl mb-10 text-primary">
          Crear Expediente
        </h1>

        <form className=" flex flex-col p-10 gap-4 w-full">
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Modelo"
              name="modelo"
              handleChange={handleChange}
              value={modelo}
            />
            <Input
              label="Marca"
              name="marca"
              handleChange={handleChange}
              value={marca}
            />
          </div>
          <Input
            label="Color"
            name="color"
            handleChange={handleChange}
            value={color}
          />
          <Input
            label="Referencia"
            name="referencia"
            handleChange={handleChange}
            value={referencia}
          />
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Precio"
              name="precio"
              handleChange={handleChange}
              value={precio}
            />
            <Input
              label="Transmision"
              name="transmision"
              handleChange={handleChange}
              value={transmision}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Tipo de combustible"
              name="combustible"
              handleChange={handleChange}
              value={combustible}
            />
            <Input
              label="Kilometraje"
              name="kilometraje"
              handleChange={handleChange}
              value={kilometraje}
            />
          </div>

          <Input
            label="url de la imagen del carro"
            name="urlImagen"
            handleChange={handleChange}
            value={urlImagen}
          />

          <button
            className="flex items-center justify-center gap-4 mt- 
                mt-10 text-white bg-black border-0 py-2 px-4 w-[130px] focus:outline-none  hover:scale-105 duration-300 rounded"
          >
            Agregar
            <MdLibraryAdd />
          </button>
        </form>
      </section>
    </>
  );
};

export default Admin;
