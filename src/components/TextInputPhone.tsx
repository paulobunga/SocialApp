import React, { useState, useRef } from "react";
import { View } from "react-native";
import PhoneInput from 'react-native-phone-input'

import CountryPicker from 'react-native-country-picker-modal'


export const TextInputPhone = () => {
    const [countryModalOpen, setCountryModalOpen] = useState(false);
  
    const refInput = useRef<any>();
  
    const onPressFlag = () => {
      setCountryModalOpen(!countryModalOpen);
    };
  
    return (
      <View>
        

<PhoneInput
          ref={(ref) => {
            this.phone = ref;
          }}
          onPressFlag={onPressFlag}

        />


        <CountryPicker
          onSelect={({ cca2 }) =>
            refInput.current && refInput.current.selectCountry(cca2.toLowerCase())
          }
          modalProps={{
            visible: countryModalOpen,
          }}
          onClose={() => setCountryModalOpen(false)}
        />
      </View>
    );
  };