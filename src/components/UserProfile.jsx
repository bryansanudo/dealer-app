import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "@/configFirebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Loader from "@/components/Loader";
import { Link } from "react-router-dom";
import Section from "@/components/Section";

const UserProfile = ({ email }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [admin, setAdmin] = useState(false);
  const fakeData = [
    {
      rol: "usuario",
    },
  ];

  const buscarDocumentoOCrearDocumento = async (idDocumento) => {
    setIsLoading(true);
    //crear referencia al documento
    const docRef = doc(db, "usuarios", idDocumento);
    //buscar documento

    const consulta = await getDoc(docRef);
    //revissar si existe
    if (consulta.exists()) {
      //si si existe
      const infoDocu = consulta.data();
      setIsLoading(false);
      return infoDocu.rol[0].rol;
    } else {
      //si no existe
      await setDoc(docRef, { rol: [...fakeData] });
      const consulta = await getDoc(docRef);
      const infoDocu = consulta.data();
      setIsLoading(false);
      return infoDocu.rol[0].rol;
    }
  };

  useEffect(() => {
    async function fetch() {
      const userRol = await buscarDocumentoOCrearDocumento(email);
      if (userRol === "admin") {
        setAdmin(true);
      }
    }

    fetch();
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Section title="perfil">
        <h1 className="sm:text-4xl text-3xl my-10 text-gray-600">
          Bienvenido, {email}
        </h1>
        {admin ? (
          <Link to="/admin" className="btn btn-primary ">
            vista de admin
          </Link>
        ) : (
          ""
        )}
      </Section>
    </>
  );
};

export default UserProfile;
