import React, { useState } from "react";
import { toast } from "react-toastify";

import Section from "@/components/Section";

const delear1 = {
  ingresos: [2000, 0],
  domicilio: [6, 25],
  edad: [18, 50],
  cuotaInicial: [2000, 25],
};
const delear2 = {
  ingresos: [4000, 25],
  domicilio: [12, 25],
  edad: [25, 25],
  cuotaInicial: [500, 25],
};
const delear3 = {
  ingresos: [2000, 15],
  domicilio: [12, 10],
  edad: [28, 25],
  cuotaInicial: [4000, 50],
};

let porcentaje1 = 0;
let porcentaje2 = 0;
let porcentaje3 = 0;

const Financing = ({ email }) => {
  const [edad, setEdad] = useState(0);
  const [domicilio, setDomicilio] = useState(0);
  const [cuotaInicial, setCuotaInicial] = useState(0);
  const [ingresos, setIngresos] = useState(0);

  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);

  const calcularSolicitud = (e) => {
    e.preventDefault();
    if (ingresos >= delear1.ingresos[0]) {
      porcentaje1 += delear1.ingresos[1];
    }
    if (domicilio >= delear1.domicilio[0]) {
      porcentaje1 += delear1.ingresos[1];
    }
    if (edad >= delear1.edad[0]) {
      porcentaje1 += delear1.edad[1];
    }
    if (cuotaInicial >= delear1.cuotaInicial[0]) {
      porcentaje1 += delear1.cuotaInicial[1];
    }
    // evaluar para dealer 2
    if (ingresos >= delear2.ingresos[0]) {
      porcentaje2 += delear2.ingresos[1];
    }
    if (domicilio >= delear2.domicilio[0]) {
      porcentaje2 += delear2.ingresos[1];
    }
    if (edad >= delear2.edad[0]) {
      porcentaje2 += delear2.edad[1];
    }
    if (cuotaInicial >= delear2.cuotaInicial[0]) {
      porcentaje2 += delear2.cuotaInicial[1];
    }
    // evaluar para dealer 3
    if (ingresos >= delear3.ingresos[0]) {
      porcentaje3 += delear3.ingresos[1];
    }
    if (domicilio >= delear3.domicilio[0]) {
      porcentaje3 += delear3.ingresos[1];
    }
    if (edad >= delear3.edad[0]) {
      porcentaje3 += delear3.edad[1];
    }
    if (cuotaInicial >= delear3.cuotaInicial[0]) {
      porcentaje3 += delear3.cuotaInicial[1];
    }
    toast.success("Procesando Solicitud...");

    setResultado1(porcentaje1);
    setResultado2(porcentaje2);
    setResultado3(porcentaje3);
  };

  return (
    <>
      <Section title="Calcular Financiacion">
        <div className="pt-10">
          <form className="flex flex-col mx-10 gap-4 my-16 p-6 shadow-lg rounded-lg shadow-black">
            <label className="ml-4">Edad</label>
            <input
              type="text"
              className="input input-primary"
              name="edad"
              onChange={(e) => setEdad(e.target.value)}
            />
            <label className="ml-4">Ingresos</label>
            <input
              type="text"
              className="input input-primary"
              name="ingresos"
              onChange={(e) => setIngresos(e.target.value)}
            />
            <label className="ml-4">Domicilio</label>
            <input
              type="text"
              className="input input-primary"
              name="domicilio"
              onChange={(e) => setDomicilio(e.target.value)}
            />
            <label className="ml-4">Cuota Inicial</label>
            <input
              type="text"
              className="input input-primary"
              name="cuotaInicial"
              onChange={(e) => setCuotaInicial(e.target.value)}
            />
            <button className="btn brn-primary  " onClick={calcularSolicitud}>
              Iniciar solicitud
            </button>
          </form>

          <div className=" flex flex-col gap-4 items-center justify-center mx-10 ">
            <div className="flex flex-col md:flex-row gap-6 w-full items-start md:items-center justify-between shadow-black shadow-lg rounded-xl p-4">
              <article className="flex gap-2 items-center justify-center">
                <p className="font-bold text-xl">Edad:</p>
                <p>{edad}</p>
              </article>
              <article className="flex gap-2 items-center justify-center">
                <p className="font-bold text-xl">ingresos:</p>
                <p>{ingresos}</p>
              </article>
              <article className="flex gap-2 items-center justify-center">
                <p className="font-bold text-xl">domicilio:</p>
                <p>{domicilio}</p>
              </article>
              <article className="flex gap-2 items-center justify-center">
                <p className="font-bold text-xl">Couta Inicial:</p>
                <p>{cuotaInicial}</p>
              </article>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
              <article className=" max-w-[300px] shadow-md shadow-black p-6 rounded-xl ">
                <p className="text-lg">
                  Porcentaje con el Dealer{" "}
                  <span className="text-primary">#1</span>
                </p>
                <p className="text-center mt-6 text-primary font-bold text-3xl">
                  {resultado1}%
                </p>
              </article>
              <article className=" max-w-[300px] shadow-md shadow-black p-6 rounded-xl ">
                <p className="text-lg">
                  Porcentaje con el Dealer{" "}
                  <span className="text-primary">#2</span>
                </p>
                <p className="text-center mt-6 text-primary font-bold text-3xl">
                  {resultado2}%
                </p>
              </article>
              <article className=" max-w-[300px] shadow-md shadow-black p-6 rounded-xl ">
                <p className="text-lg">
                  Porcentaje con el Dealer{" "}
                  <span className="text-primary">#3</span>
                </p>
                <p className="text-center mt-6 text-primary font-bold text-3xl">
                  {resultado3}%
                </p>
              </article>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Financing;
