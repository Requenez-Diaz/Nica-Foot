import React from 'react';
import { Image, Text, View, StyleSheet } from "react-native";
import StylesText from "./stylesText";

interface Props {
    ownerAvatarUrl: string;
    nombre: string;
    id?: string;
    nombreMedicamento: string;
    description?: string;
  }
  
  const InventarioHeader = ({ ownerAvatarUrl, nombre, id, nombreMedicamento, description, }: Props)  => {
    return(
      <View>
          <View style={{ flexDirection: "row", paddingBottom: 6 }}>
            <View style={{ paddingRight: 10 }}>
              <Image style={Styles.image} source={{ uri: ownerAvatarUrl }} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={Styles.container2}>Nombre Restaurante</Text>
                <Text>{nombre}</Text>
                <StylesText estilo="vencidas" children={id} type="ID" />
                <StylesText
                estilo="vencidas"
                children={nombreMedicamento}
                type="Tipo servicio"
                />
                <Text>Descripcion: {description}</Text>
            </View>
          </View>
      </View>
        
    );
  }

  export default InventarioHeader;

  const Styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 5,
      paddingTop: 5,
      paddingVertical: 5,
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 4,
    },
    container2: {
      fontWeight: "bold",
      padding: 5,
      color: "blue",
      alignSelf: "flex-start",
      backgroundColor: "#ffeb",
      borderRadius: 3,
      overflow: "hidden",
    },
  });