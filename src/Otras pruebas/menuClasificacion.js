import { render } from "@testing-library/react";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const Clasificacion = ({ clasificacion }) => {
    return (
        <view style={styles.row} >
            <TouchableOpacity style={styles.button}>
                <Text>{clasificacion.ranking}</Text>
            </TouchableOpacity><TouchableOpacity style={styles.button}>
                <Text>{clasificacion.nombre}</Text>
            </TouchableOpacity><TouchableOpacity style={styles.button}>
                <Text>{clasificacion.puntos}</Text>
            </TouchableOpacity>
        </view >

    );
}
const renderClasificacion = ({ clasificacion }) => {
    return
    <Clasificacion clasificacion={clasificacion} />;
};
//https://reactnative.dev/docs/flatlist (ver uso flatlist) o https://reactnative.dev/docs/using-a-listview
render() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Clasificación</Text>
            <FlatList
                style={styles.flatList}
                data={this.state.data}
                renderClasificacion={renderClasificacion}
                keyExtractor={clasificacion => clasificacion.name}
            />
        </SafeAreaView>
    );
}
/* Styles modelo según plantilla seguida. Hay que modidicar
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  */