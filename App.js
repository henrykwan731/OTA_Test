import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
performUpdate =async()=> {
	
	alert("Start Update ");
	
	try {
  const update = await Expo.Updates.checkForUpdateAsync();
  if (update.isAvailable) {
    await Expo.Updates.fetchUpdateAsync();
    // ... notify user of update ...
	
	alert("Update completed");
    Expo.Updates.reload();
  }
} catch (e) {
  // handle or log error
}
	
}	
	
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! ssssss88~ !!!</Text>
		
		
		<TouchableOpacity onPress={this.performUpdate}>
			<Text>Update</Text>
		</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
