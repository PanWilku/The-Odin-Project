class HashMap {
  constructor(initialCapacity = 8, loadFactor = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.size = 0;r
    // creating bbuckets, filling with null, then replacing with [] to make actual space
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  // Hash function with modulo to avoid exceeding max safe integer
  _hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  // Set or update a key-value pair
  set(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    // Check if key already exists, update value if found
    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    // If key does not exist, add new key-value pair
    bucket.push([key, value]);
    this.size++;

    // Resize if the load factor is exceeded
    if (this.size / this.capacity > this.loadFactor) {
      this._resize();
    }
  }

  // Get the value associated with a key
  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return null;
  }

  // Check if a key exists
  has(key) {
    return this.get(key) !== null;
  }

  // Remove a key-value pair
  remove(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  // Get the number of stored keys
  length() {
    return this.size;
  }

  // Clear all key-value pairs
  clear() {
    this.capacity = 8;
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  // Get all keys in the hash map
  keys() {
    const allKeys = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        allKeys.push(key);
      }
    }
    return allKeys;
  }

  // Get all values in the hash map
  values() {
    const allValues = [];
    for (const bucket of this.buckets) {
      for (const [, value] of bucket) {
        allValues.push(value);
      }
    }
    return allValues;
  }

  // Get all key-value pairs
  entries() {
    const allEntries = [];
    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        allEntries.push(pair);
      }
    }
    return allEntries;
  }

  // Resize the hash map when load factor is exceeded
  _resize() {
    const newCapacity = this.capacity * 2;
    const newBuckets = new Array(newCapacity).fill(null).map(() => []);

    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        const newIndex = this._rehash(key, newCapacity);
        newBuckets[newIndex].push([key, value]);
      }
    }

    this.capacity = newCapacity;
    this.buckets = newBuckets;
  }

  // Rehash function for resizing
  _rehash(key, newCapacity) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % newCapacity;
    }
    return hashCode;
  }
}
