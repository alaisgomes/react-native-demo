import React from "react"
import { View, Button, Text, StyleSheet, FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit"
import { thunks } from "@store"

const UserComponent = () => {
  const { entities, api } = useSelector(state => state.users)
  const dispatch = useDispatch()

  const onClick = async () => {
    try {
      const resultAction = await dispatch(thunks.api_v1_user_list())
      // In case you need to access the newly returned value by the api call, use the code below:
      const users = unwrapResult(resultAction)
      console.log(
        "success",
        `Refreshed pets list: ${users.length} before was ${entities.length}`
      )
      // end
    } catch (err) {
      console.log("error", `Fetch failed: ${err.message}`)
      console.log(`error can also be here: ${api.error?.message}`)
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text>
        Full Name: {item.first_name} {item.last_name}
      </Text>
      <Text>
        Just Name: {item.name}
      </Text>
      <Text>{item.email}</Text>
    </View>
  )

  return (
    <View style={styles.body}>
      <Text>There's {entities.length} users in the database.</Text>
      <FlatList
        data={entities}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} title="Refresh" onPress={onClick} />
        <Button
          title="Get User 1"
          onPress={() => dispatch(thunks.api_v1_user_read({ id: 1 }))}
        />
        <Button
          title="Update user 1 with first_name"
          onPress={() =>
            dispatch(thunks.api_v1_user_partial_update({ id: 1, data: {first_name: 'Aline'} }))
          }
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#d4f2e5",
    marginBottom: 5,
    borderColor: "#a9c1b7",
    borderWidth: 1
  },
  text: {
    fontSize: 28,
    color: "#ffffff"
  },
  button: {
    margin: 15
  },
  buttons: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: 130,
    marginTop: 10
  },
  body: {
    padding: 10,
    fontSize: 16
  }
})

export default UserComponent
