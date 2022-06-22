import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style={styles.statbar} barStyle='dark-content'/>
        <Navbar />
          <Content />
        <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app:{
    backgroundColor: 'grey',
    marginTop: 20,
  },
});
