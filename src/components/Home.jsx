import React, { useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { db } from "@/configFirebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Label from "@/components/Label";
import { v4 } from "uuid";
import { MdLibraryAdd } from "react-icons/md";
const Home = () => {
  const [data, setData] = useState([]);

  const getFiles = async () => {
    const x = [];

    try {
      const querySnapshot = await getDocs(collection(db, "vehiculos"));
      querySnapshot.forEach((doc) => {
        const y = doc.data();
        y["id"] = doc.id;
        x.push(y);
      });
      setData(x);
    } catch (error) {
      error.message;
    }
  };

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <>
      <section className="container px-5 py-40 mx-auto flex flex-col items-center justify-between overflow-hidden ">
        <h1 className="sm:text-4xl text-3xl my-10 text-primary">
          Lista de Vehiculos.
        </h1>

        <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8  items-center justify-center">
          {data.map((data) => (
            <div
              key={v4()}
              className="h-full p-6 rounded-lg flex flex-col  relative overflow-hidden shadow-gray-400 w-[full] shadow-md items-center justify-between "
            >
              <p className="text-3xl text-gray-900 pb-4 mb-4 border-b font-semibold border-gray-200 leading-none">
                {data.referencia}
              </p>

              <div className="grid grid-cols-2 gap-4 my-8  ">
                <Label
                  label="Modelo"
                  dataLabel={data.modelo}
                  className={"flex gap-2 items-center justify-end"}
                />
                <Label
                  label="Marca"
                  dataLabel={data.marca}
                  className={"flex gap-2 items-center justify-end"}
                />
                <Label
                  label="Color"
                  dataLabel={data.color}
                  className={"flex gap-2 items-center justify-end"}
                />
                <Label
                  label="Referencia Vehiculo"
                  dataLabel={data.referencia}
                  className={"flex gap-2 items-center justify-end"}
                />
                <Label
                  label="Precio"
                  dataLabel={data.precio}
                  className={"flex gap-2 items-center justify-end"}
                />
                <Label
                  label="Tipo de transmision"
                  dataLabel={data.transmision}
                  className={"flex gap-2 items-center justify-end"}
                />
                <Label
                  label="Tipo de combustible"
                  dataLabel={data.combustible}
                  className={"flex gap-2 items-center justify-end"}
                />
                <Label
                  label="Kilometraje"
                  dataLabel={data.kilometraje}
                  className={"flex gap-2 items-center justify-end"}
                />
              </div>
              <img
                src={data.urlImagen}
                className="h-[330px] md:h-[500px] shadow-md shadow-primary w-full  object-cover rounded-xl "
                alt="404"
              />
              <button
                className="flex items-center justify-center gap-4 mt- 
                mt-10 text-white bg-black border-0 py-2 px-4 w-[130px] focus:outline-none  hover:scale-105 duration-300 rounded "
              >
                Comprar
                <MdLibraryAdd className="animate-pulse text-2xl" />
              </button>
            </div>
          ))}
        </div>
        <div className="btn-group mt-36 ">
          <button className="btn bg-primary">1</button>
          <button className="btn bg-primary">2</button>
          <button className="btn bg-primary">3</button>
          <button className="btn bg-primary">4</button>
        </div>
      </section>
    </>
  );
};

export default Home;
