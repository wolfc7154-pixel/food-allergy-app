import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

const AllergiesScreen = () => {
  // Example allergies - you can modify this
  const [allergies, setAllergies] = useState([
    { id: '1', name: 'Peanuts', severity: 'Severe' },
    { id: '2', name: 'Tree Nuts', severity: 'Moderate' },
  ]);

  // Function to add a new allergy
  const addAllergy = () => {
    Alert.prompt(
      'Add Allergy',
      'Enter the name of your allergy:',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Add',
          onPress: (text) => {
            if (text.trim()) {
              const newAllergy = {
                id: Date.now().toString(),
                name: text,
                severity: 'Moderate',
              };
              setAllergies([...allergies, newAllergy]);
            }
          },
        },
      ]
    );
  };

  // Function to remove an allergy
  const removeAllergy = (id) => {
    Alert.alert(
      'Remove Allergy',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            setAllergies(allergies.filter(allergy => allergy.id !== id));
          },
          style: 'destructive',
        },
      ]
    );
  };

  // Render each allergy item
  const renderAllergyItem = ({ item }) => {
    const severityColor =
      item.severity === 'Severe'
        ? '#FF4444'
        : item.severity === 'Moderate'
        ? '#FFB84D'
        : '#4CAF50';

    return (
      <View style={styles.allergyCard}>
        <View style={styles.allergyInfo}>
          <Text style={styles.allergyName}>{item.name}</Text>
          <View style={[styles.severityBadge, { backgroundColor: severityColor }]}>
            <Text style={styles.severityText}>{item.severity}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeAllergy(item.id)}
        >
          <Text style={styles.deleteButtonText}>✕</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🚨 My Allergies</Text>
        <Text style={styles.headerSubtitle}>Track your food allergies here</Text>
      </View>

      {/* Allergies List */}
      {allergies.length > 0 ? (
        <FlatList
          data={allergies}
          renderItem={renderAllergyItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No allergies added yet</Text>
          <Text style={styles.emptySubtext}>Tap the button below to add your first allergy</Text>
        </View>
      )}

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={addAllergy}>
        <Text style={styles.addButtonText}>+ Add Allergy</Text>
      </TouchableOpacity>
    </View>
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
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FFE0E0',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  allergyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  allergyInfo: {
    flex: 1,
  },
  allergyName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  severityBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  severityText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  deleteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFE0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    fontSize: 20,
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FF6B6B',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default AllergiesScreen;
