import React from "react";
import Section from "@/components/Section";
import carro1 from "@/assets/1.jpg";
import carro2 from "@/assets/2.jpg";
import carro3 from "@/assets/3.jpg";
import carro4 from "@/assets/4.jpg";

const Home = () => {
  const carros = [
    {
      id: 1,
      img: carro1,
      modelo: "2022",
      marca: "larbogini",
      color: "azul",
      precio: "$50.000.000",
    },
    {
      id: 2,
      img: carro2,
      modelo: "2022",
      marca: "larbogini",
      color: "azul",
      precio: "$50.000.000",
    },
    {
      id: 3,
      img: carro3,
      modelo: "2022",
      marca: "larbogini",
      color: "azul",
      precio: "$50.000.000",
    },
    {
      id: 4,
      img: carro4,
      modelo: "2022",
      marca: "larbogini",
      color: "azul",
      precio: "$50.000.000",
    },
  ];

  return (
    <>
      <Section
        title="Inicio"
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia autem minus excepturi quia temporibus blanditiis iure esse, et placeat eaque voluptatum quidem nemo repellat alias aut repudiandae velit, neque a."
      >
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
          {carros.map((carro) => (
            <div className="w-[200px] h-[400px] rounded-xl shadow-md shadow-black">
              <img src={carro.img} alt="" />
              <div>
                <p>modelo:{carro.modelo}</p>
                <p>marca:{carro.marca}</p>
                <p>color:{carro.color}</p>
                <p>precio:{carro.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
