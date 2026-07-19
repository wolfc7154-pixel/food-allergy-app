import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

const ScannerScreen = () => {
  const [scannedData, setScannedData] = useState(null);

  // Simulated barcode scanner
  const simulateScan = () => {
    const mockFoods = [
      {
        name: 'Peanut Butter',
        ingredients: 'Peanuts, Salt, Sugar',
        allergens: ['Peanuts'],
      },
      {
        name: 'Milk Chocolate',
        ingredients: 'Cocoa, Sugar, Milk',
        allergens: ['Milk'],
      },
      {
        name: 'Almond Granola',
        ingredients: 'Oats, Almonds, Honey',
        allergens: ['Tree Nuts'],
      },
    ];

    const randomFood = mockFoods[Math.floor(Math.random() * mockFoods.length)];
    setScannedData(randomFood);
  };

  const clearScan = () => {
    setScannedData(null);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📱 Barcode Scanner</Text>
        <Text style={styles.headerSubtitle}>Scan product barcodes to check allergens</Text>
      </View>

      {/* Camera Placeholder */}
      <View style={styles.cameraPlaceholder}>
        <Text style={styles.cameraIcon}>📷</Text>
        <Text style={styles.cameraText}>Camera View (Coming Soon)</Text>
        <Text style={styles.cameraSubtext}>Currently showing mock scanner</Text>
      </View>

      {/* Scan Button */}
      <TouchableOpacity style={styles.scanButton} onPress={simulateScan}>
        <Text style={styles.scanButtonText}>📸 Simulate Scan</Text>
      </TouchableOpacity>

      {/* Results */}
      {scannedData ? (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>✓ Scan Results</Text>

          {/* Product Name */}
          <View style={styles.resultCard}>
            <Text style={styles.label}>Product Name:</Text>
            <Text style={styles.productName}>{scannedData.name}</Text>
          </View>

          {/* Ingredients */}
          <View style={styles.resultCard}>
            <Text style={styles.label}>Ingredients:</Text>
            <Text style={styles.ingredients}>{scannedData.ingredients}</Text>
          </View>

          {/* Allergens */}
          <View style={[styles.resultCard, styles.allergenCard]}>
            <Text style={styles.label}>Contains Allergens:</Text>
            <View style={styles.allergenList}>
              {scannedData.allergens.map((allergen, index) => (
                <View key={index} style={styles.allergenTag}>
                  <Text style={styles.allergenTagText}>🚨 {allergen}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Clear Button */}
          <TouchableOpacity style={styles.clearButton} onPress={clearScan}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>👆 Tap the button above to scan</Text>
          <Text style={styles.emptySubtext}>Or use your camera to scan a real barcode</Text>
        </View>
      )}

      {/* Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>💡 How to Use</Text>
        <Text style={styles.infoText}>1. Point your camera at a product barcode</Text>
        <Text style={styles.infoText}>2. The app will scan and identify the product</Text>
        <Text style={styles.infoText}>3. Check for allergens in the results</Text>
        <Text style={styles.infoText}>4. Get alerted if it matches your allergies</Text>
      </View>
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
  cameraPlaceholder: {
    backgroundColor: '#333',
    marginHorizontal: 16,
    height: 300,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cameraIcon: {
    fontSize: 60,
    marginBottom: 8,
  },
  cameraText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 4,
  },
  cameraSubtext: {
    fontSize: 12,
    color: '#AAA',
  },
  scanButton: {
    backgroundColor: '#FF6B6B',
    marginHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  scanButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  resultsContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  resultCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  allergenCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    marginBottom: 6,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  ingredients: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  allergenList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  allergenTag: {
    backgroundColor: '#FFE0E0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  allergenTagText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6B6B',
  },
  clearButton: {
    backgroundColor: '#DDD',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  clearButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  emptyContainer: {
    paddingHorizontal: 16,
    paddingVertical: 40,
    alignItems: 'center',
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
  },
  infoSection: {
    backgroundColor: '#FFF3E0',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E65100',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 12,
    color: '#E65100',
    marginBottom: 6,
    lineHeight: 18,
  },
});

export default ScannerScreen;
