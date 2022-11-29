import React from "react";
import { View } from "react-native";
import { Text } from "react-native";

const parseThousands = (value: number) => {
    return value >= 2000
    ? `${Math.round(value / 100) / 10 }K`
    : String(value)
  }
  
  interface Props {
    totalesDiarias: number,
    inventarioActual: number,
    ventasDiarias: number,
    precio: number,
    vencidas: number,
  }
  
  const InventarioStats = ({totalesDiarias, inventarioActual, ventasDiarias, precio, vencidas}: Props) => {
    return (
      <View style={{backgroundColor :'white', borderRadius:5, padding:8, margin:4,flexDirection: "row", justifyContent: "space-around" }}>
        <View>
          <Text style={{textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>Horario:</Text>
          <Text>{totalesDiarias}</Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', color: 'blue', fontWeight: 'bold' }} >Inventario</Text>
          <Text>{inventarioActual}</Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', color: '#FFB533', fontWeight: 'bold' }} >Ventas Diarias</Text>
          <Text style={{textAlign: 'center', color: '#33DD', fontWeight: 'bold' }} >{parseThousands(ventasDiarias)}</Text>
        </View >
        <View>
          <Text style={{textAlign: 'center', color: 'green', fontWeight: 'bold' }} >Precio</Text>
          <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold' }} >{precio}</Text>
        </View>
        <View>
          <Text style={{textAlign: 'center', color: 'red', fontWeight: 'bold' }} >Disponibles</Text>
          <Text style={{textAlign: 'center', color: 'red', fontWeight: 'bold' }} >{vencidas}</Text>
        </View>
      </View>
    );
  };

  export default InventarioStats