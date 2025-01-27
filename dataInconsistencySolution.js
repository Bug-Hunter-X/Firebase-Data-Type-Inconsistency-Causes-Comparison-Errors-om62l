The solution involves explicitly converting retrieved data to the correct types before making comparisons:

```javascript
// ... Firebase initialization ...

const database = firebase.database();

database.ref('data').on('value', (snapshot) => {
  const data = snapshot.val();
  // Explicit type checking and conversion
  const value1 = parseInt(data.value1, 10); 
  const value2 = parseFloat(data.value2);
  
  if (typeof value1 === 'number' && typeof value2 === 'number') {
    if (value1 > value2) {
      console.log('value1 is greater than value2');
    } else {
      console.log('value1 is not greater than value2');
    }
  } else {
    console.error('Invalid data types encountered.'); 
  }
});
```
By enforcing type checking and performing explicit type conversions before comparisons or computations, you can ensure reliable and predictable results when working with Firebase's Realtime Database.