import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";

import React, { useEffect } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Divider } from "react-native-paper";

export default function TabTwoScreen() {
  const params = useLocalSearchParams();

  const [data, setData] = React.useState([
    {
      type: "Net Sales",
      value: "₹2,50,000",
      growth: "10%",
      ordered: "15,000",
      returned: "15,000",
    },
    {
      type: "Net Commission",
      value: "₹50,000",
      growth: "3%",
      ordered: "1,000",
      returned: "500",
    },
  ]);

  useEffect(() => {
    setData([
      {
        type: "Net Sales",
        value: "₹" + Math.floor(Math.random() * 1000000),
        growth: Math.floor(Math.random() * 10) + "%",
        ordered: Math.floor(Math.random() * 1000).toString(),
        returned: Math.floor(Math.random() * 1000).toString(),
      },
      {
        type: "Net Commission",
        value: "₹" + Math.floor(Math.random() * 1000000),
        growth: Math.floor(Math.random() * 10) + "%",
        ordered: Math.floor(Math.random() * 1000).toString(),
        returned: Math.floor(Math.random() * 1000).toString(),
      },
    ]);
  }, [params.days]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      <View
        style={{
          padding: 10,
          shadowOffset: {
            height: 3,
            width: 2,
          },
          shadowRadius: 5,
          shadowOpacity: 0.2,
          borderWidth: 0.1,
          borderRadius: 12,
          shadowColor: "black",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Overview</Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          {data.map((item, index) => (
            <View style={{ flex: 1, padding: 4 }}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text>{item.type} </Text>
                <Ionicons
                  name="information-circle-outline"
                  color={"#E3DC44"}
                  size={16}
                />
              </View>
              <Text
                style={{
                  justifyContent: "center",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {item.value.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,")}
                {"     "}
                <Text
                  style={{
                    marginLeft: 40,
                    fontSize: 12,
                    fontWeight: "normal",
                    color: "grey",
                  }}
                >
                  <Ionicons name="arrow-up" color={"green"} />
                  {item.growth}
                </Text>
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <View>
                  <Text style={{ color: "grey" }}>Ordered</Text>
                  <Text style={{ color: "green" }}>{item.ordered}</Text>
                </View>
                <View>
                  <Text style={{ color: "grey" }}>Returned</Text>
                  <Text style={{ color: "red" }}>{item.returned}</Text>
                </View>
                <View></View>
              </View>
            </View>
          ))}
        </View>
        <View style={{ alignSelf: "center", marginTop: 15 }}>
          <Pressable
            style={{
              backgroundColor: "lightgrey",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <Text>
              Withdrawable Amount{" "}
              <Text style={{ fontWeight: "bold" }}>₹2,50,000</Text>
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "black",
              padding: 15,
              borderRadius: 8,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Generate Invoice
            </Text>
          </Pressable>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Ionicons
          name="information-circle-outline"
          color={"#E3DC44"}
          size={20}
        />
        <Text
          style={{ flexWrap: "wrap", color: "grey", marginLeft: 5, flex: 1 }}
        >
          The amount shown under 'Adjusted Earnings' can be withdrawn on the
          last 10 days of each month. (eg. 22nd July - 31st July) Read the{" "}
          <Text style={{ color: "#E3DC44" }}>Terms & Conditions</Text> for
          further details.
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Ionicons
          name="information-circle-outline"
          color={"#E3DC44"}
          size={20}
        />
        <Text
          style={{ flexWrap: "wrap", color: "grey", marginLeft: 5, flex: 1 }}
        >
          Earnings reflect after 2 days of transactions.
        </Text>
      </View>

      <Divider style={{ marginTop: 20 }} />

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: "bold" }}>Transaction History</Text>
        <Pressable
          style={{
            backgroundColor: "#efefef",
            padding: 10,
            borderRadius: 8,
            alignSelf: "flex-start",
            marginTop: 12,
          }}
        >
          <Text>Total Amount Withdrawn</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>₹2,50,000</Text>
        </Pressable>
        <Text style={{ marginTop: 10, color: "grey" }}>October 2023</Text>
        {[
          { date: "October 28,2023 at 12:30pm", amount: "₹2,500" },
          { date: "October 28,2023 at 12:30pm", amount: "₹2,500" },
          { date: "October 28,2023 at 12:30pm", amount: "₹2,500" },
          { date: "October 28,2023 at 12:30pm", amount: "₹2,500" },
          { date: "October 28,2023 at 12:30pm", amount: "₹2,500" },
        ].map((item, index) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              marginTop: 10,
              borderRadius: 8,
              borderBottomWidth: 0.25,
            }}
          >
            <View>
              <Text>Withdrawl</Text>
              <Text style={{ color: "grey" }}>{item.date}</Text>
            </View>
            <Text style={{ color: "green" }}>{item.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
