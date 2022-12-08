import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

import TendenciasProps from './TendenciasProps'
import TendenImg from './TendenImg'

const Tendencias = () => {
  return (

    <ScrollView>
      <TendenciasProps
        title='Tendencias'
      />
      <ScrollView horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      >
        <View style={styles.tendencias}>
          <TendenImg
            avatar={{ uri: "https://www.cocinacaserayfacil.net/wp-content/uploads/2020/04/Recetas-de-comidas-para-ni%C3%B1os.jpg" }}
            name='carlos'
          />
          <TendenImg
            avatar={{ uri: "https://ep00.epimg.net/elpais/imagenes/2021/10/05/album/1633449011_402027_1633454467_album_normal.jpg" }}
            name='carlos'
          />
          <TendenImg
            avatar={{ uri: "https://ep00.epimg.net/elpais/imagenes/2021/10/05/album/1633449011_402027_1633454467_album_normal.jpg" }}
            name='carlos'
          />
          <TendenImg
            avatar={{ uri: "https://ep00.epimg.net/elpais/imagenes/2021/10/05/album/1633449011_402027_1633454467_album_normal.jpg" }}
            name='carlos'
          />
          <TendenImg
            avatar={{ uri: "https://ep00.epimg.net/elpais/imagenes/2021/10/05/album/1633449011_402027_1633454467_album_normal.jpg" }}
            name='carlos'
          />
          <TendenImg
            avatar={{ uri: "https://ep00.epimg.net/elpais/imagenes/2021/10/05/album/1633449011_402027_1633454467_album_normal.jpg" }}
            name='carlos'
          />
          <TendenImg
            avatar={{ uri: "https://ep00.epimg.net/elpais/imagenes/2021/10/05/album/1633449011_402027_1633454467_album_normal.jpg" }}
            name='carlos'
          />
        </View>

      </ScrollView>
    </ScrollView>
  )
}

export default Tendencias

const styles = StyleSheet.create({
  tendencias: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  scrollView: {
    marginTop: 15,
  },
})