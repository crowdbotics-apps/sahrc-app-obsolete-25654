import React from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import BottomModalIOS from '../BottomModalIOS';

function CustomDateTimePicker ({
  visible, mode, value, onChange, onClose,
}) {
  const handleChange = (event, date) => {
    if (date) {
      onChange(date);
    }

    if (Platform.OS === 'android') {
      onClose();
    }
  };

  const getDateTimePicker = () => (
    <DateTimePicker
      is24Hour
      mode={mode}
      value={value}
      onChange={handleChange}
      display="default"
      testID="dateTimePicker"
      timeZoneOffsetInMinutes={0}
    />
  );

  if (Platform.OS === 'ios') {
    return (
      <BottomModalIOS visible={visible} onClose={onClose}>
        {getDateTimePicker()}
      </BottomModalIOS>
    );
  }

  // fIX: Opens up again after the first OK
  return visible ? getDateTimePicker() : null;
}

CustomDateTimePicker.defaultProps = {
  mode: 'date', // 'date' or 'time'
};

export default React.memo(CustomDateTimePicker);