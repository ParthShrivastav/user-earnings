import React from "react";
import { View, FlatList, ListRenderItem, StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-paper";

const API_URL = "https://reqres.in/api/users";

export default function HomeScreen() {
  const [users, setUsers] = React.useState<any[]>([]);
  const [page, setPage] = React.useState<number>(1);

  const getData = React.useCallback(async () => {
    const response = await fetch(`${API_URL}?page=${page}`, {
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setUsers((prev) => [...prev, ...data.data]);
  }, [page]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  const handleEnd = React.useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        renderItem={renderItem}
        onEndReached={handleEnd}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
const renderItem: ListRenderItem<any> = ({ item }) => (
  <Card style={styles.card}>
    <Card.Title
      title={`${item.first_name} ${item.last_name}`}
      subtitle={item.email}
      left={(props) => (
        <Avatar.Image {...props} source={{ uri: item.avatar }} />
      )}
    />
  </Card>
);

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 12,
    borderWidth: 0.05,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "#fff",
  },
});
