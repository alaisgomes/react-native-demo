import React, { Component } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"

import { connect } from "react-redux"
import { thunks, slices } from "@store"

export class New extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentDidMount() {
    this.props.load({ country: "Japan", name: "Technology" })
  }
  renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.country}>{item.country}</Text>
    </View>
  )

  render() {
    const { universities } = this.props
    return (
      <FlatList
        data={universities}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => `${item.alpha_two_code}${index}`}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#C8A2C8"
  },
  text: {
    fontSize: 28,
    color: "#ffffff"
  },
  country: {
    fontSize: 18,
    color: "#f2f2f2"
  },
  body: {
    padding: 10,
    fontSize: 16
  }
})

const mapStateToProps = state => {
  // console.log(JSON.stringify(state))
  return {
    universities: state.universitiesapi_response_get_Searches.entities
  }
}
const mapDispatchToProps = dispatch => {
  return {
    load: param => dispatch(thunks.universitiesapi_get_search_list(param))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(New)
