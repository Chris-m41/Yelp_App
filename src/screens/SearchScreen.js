import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import SerachBar from '../components/SearchBar';

const SearchScreen = () => {
    return (
        <View>
            <SerachBar />
            <Text>Search Screen</Text>
        </View>

    );
};

const styles = StyleSheet.create({});

export default SearchScreen;