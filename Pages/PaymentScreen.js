import React from 'react';
import { Paystack } from 'react-native-paystack-webview';
import { View } from 'react-native';

function PaymentScreen({ route }) {
  // Destructure total from route.params, providing a default if not passed
  const { total = 0 } = route.params || {};

  return (
    <View style={{ flex: 1 }}>
      <Paystack  
        paystackKey="pk_test_83cc29f38b42ed879380c7af93c42c027c30d80f"
        amount={total.toString()} // Convert to string as Paystack expects
        currency='ZAR'
        billingEmail="paystackwebview@something.com"
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here.
        }}
        onSuccess={(res) => {
          // handle response
        }}
        autoStart={true}
      />
    </View>
  );
}
export default PaymentScreen;