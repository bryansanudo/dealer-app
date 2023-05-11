import React, { useEffect, useState } from "react";
import { db } from "@/configFirebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Financing = () => {
  const [data, setData] = useState({
    edad: "",
    ingresos: "",
    ciudad: "",
    cuotaInicial: "",
  });

  const [mostrarData, setmostrarData] = useState([]);

  const capturarInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const x = [];

  const enviarData = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "requisitos"), data);
    console.log("Requisito agregado en base de datos ");
    setData({ edad: "", ingresos: "", ciudad: "", cuotaInicial: "" });
  };

  const traerData = async () => {
    const querySnapshot = await getDocs(collection(db, "requisitos"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      x.push(doc.data());
    });
    setmostrarData(x);
  };

  return (
    <div className="pt-40">
      <form onSubmit={enviarData} className="flex flex-col mx-8">
        <input
          type="text"
          placeholder="edad"
          className="input input-primary"
          name="edad"
          onChange={capturarInput}
          value={data.edad}
        />
        <input
          type="text"
          placeholder="ingresos"
          className="input input-primary"
          name="ingresos"
          onChange={capturarInput}
          value={data.ingresos}
        />
        <input
          type="text"
          placeholder="ciudad"
          className="input input-primary"
          name="ciudad"
          onChange={capturarInput}
          value={data.ciudad}
        />
        <input
          type="text"
          placeholder="Cuota Inicial"
          className="input input-primary"
          name="cuotaInicial"
          onChange={capturarInput}
          value={data.cuotaInicial}
        />
        <button className="mx-8 btn btn-primary mt-2">enviar data</button>
      </form>
      <div className="container bg-yellow-500">
        {mostrarData.map((obj) => (
          <div
            key={obj.ciudad}
            className="flex justify-between mx-10 bg-blue-500"
          >
            <article className="">
              <p>Edad:</p>
              <p>{obj.edad}</p>
            </article>
            <article className="">
              <p>ingresos:</p>
              <p>{obj.ingresos}</p>
            </article>
            <article className="">
              <p>ciudad:</p>
              <p>{obj.ciudad}</p>
            </article>
            <article className="">
              <p>CoutaInicial:</p>
              <p>{obj.cuotaInicial}</p>
            </article>
          </div>
        ))}
      </div>
      <button onClick={traerData}>mostrar data</button>
    </div>
  );
};

export default Financing;
