import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { allergenDatabase } from '../data/allergenDatabase';

const HomeScreen = () => {
  // State to store search input
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Handle search function
  const handleSearch = (text) => {
    setSearchText(text);
    
    if (text.length === 0) {
      setSearchResults([]);
      return;
    }

    // Filter foods that match search text
    const results = allergenDatabase.filter(food =>
      food.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🥗 Food Allergy Checker</Text>
        <Text style={styles.subtitle}>Search for foods and check allergens</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search foods... (e.g., peanuts, milk)"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>

      {/* Results */}
      {searchResults.length > 0 ? (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Search Results ({searchResults.length})</Text>
          {searchResults.map((food) => (
            <View key={food.id} style={styles.foodCard}>
              <Text style={styles.foodName}>{food.name}</Text>
              <Text style={styles.allergenLabel}>Allergens:</Text>
              <Text style={styles.allergens}>{food.allergens.join(', ')}</Text>
            </View>
          ))}
        </View>
      ) : searchText.length > 0 ? (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResults}>❌ No foods found</Text>
          <Text style={styles.noResultsSubtext}>Try searching for: peanuts, milk, eggs, shellfish</Text>
        </View>
      ) : (
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>👋 Welcome!</Text>
          <Text style={styles.welcomeSubtext}>Start by searching for a food above</Text>
          <Text style={styles.tip}>💡 Tip: Try searching "peanuts" or "milk"</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFE0E0',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  resultsContainer: {
    paddingHorizontal: 16,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  foodCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  foodName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  allergenLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    marginBottom: 4,
  },
  allergens: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: '500',
  },
  noResultsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    alignItems: 'center',
  },
  noResults: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  noResultsSubtext: {
    fontSize: 14,
    color: '#666',
  },
  welcomeContainer: {
    paddingHorizontal: 16,
    paddingVertical: 60,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  welcomeSubtext: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  tip: {
    fontSize: 14,
    color: '#FF6B6B',
    fontStyle: 'italic',
  },
});

export default HomeScreen;
