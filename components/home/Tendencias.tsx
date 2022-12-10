import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";

import TendenciasProps from "./TendenciasProps";
import TendenImg from "./TendenImg";

import { HttpClient } from "../../services/http.service";
import { ListTendenciaResponse } from "../../interfaces";
import {useState, useEffect} from 'react'

const tendencias = new HttpClient();

const Tendencias = () => {
  const [tenden, setTenden] = useState<ListTendenciaResponse>({
    data: [],
    metadata: {
      nextPage: 1,
      currentPage: 1,
      perPage: 1,
    },
  });
  const getTendencias = async () => {
    const response = await tendencias.get<ListTendenciaResponse>("Tendencias");
    setTenden(response);
    console.log(response);
  };

  useEffect(() => {
    getTendencias();
  }, []);
  return (
    <ScrollView>
      <TendenciasProps title="Tendencias" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {tenden.data.map((tendencias, index) => (
        <View style={styles.tendencias} key={index}>
          <TendenImg
            avatar={{
              uri: tendencias.image
            }}
            name= {tendencias.nameProduct}
          />
          <TendenImg
            avatar={{
              uri: "https://recetasdecocina.elmundo.es/wp-content/uploads/2022/04/pollo-asado-al-horno.jpg",
            }}
            name="Pollo asado"
          />
          <TendenImg
            avatar={{
              uri: "https://t1.rg.ltmcdn.com/es/posts/7/4/9/arroz_con_pollo_ecuatoriano_56947_orig.jpg",
            }}
            name="Arroz"
          />
          <TendenImg
            avatar={{
              uri: "https://thumbs.dreamstime.com/b/londres-reino-unido-de-enero-botella-cristal-fr%C3%ADa-bebida-coca-cola-con-hielo-y-roc%C3%ADo-en-blanco-se-produce-la-manufact-108098777.jpg",
            }}
            name="Coca cola"
          />
        </View>
         ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Tendencias;

const styles = StyleSheet.create({
  tendencias: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  scrollView: {
    marginTop: 10,
  },
});
