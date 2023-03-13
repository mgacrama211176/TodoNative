import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemsLeft}>
        <Text style={styles.square}></Text>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.cicular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemsLeft: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "white",
    opacity: 0.4,
    borderWidth: 2,
    borderRadius: 10,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  cicular: {
    width: 12,
    height: 12,
    borderColor: "#FF7F00",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
