import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  estilo?: "deffault" | "vencidas" | "Activo" ;
  type?: string;
  children?: string;
}

export default function StylesText({ estilo, children, type}: Props) {
  return (
    <Text style={[estilo === "vencidas" ? styles.vencidas : styles.deffault]}>
      {type}: {children}
    </Text>
    
  );
}

const styles = StyleSheet.create({
  deffault: {
    fontSize: 12,
    color: "blue",
  },
  vencidas: {
    fontSize: 12,
    color: "red",
  },
  textAlignCenter: {
    textAlign: 'center'
  }
});
