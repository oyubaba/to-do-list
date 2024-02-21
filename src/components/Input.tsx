import { FormControl, FormLabel, Input } from '@chakra-ui/react';

type InputProps = {
    label: string;
    type: string;
    placeholder?: string;
    height?: string;
  }
  
  const CustomInput: React.FC<InputProps> = ({ label, type, placeholder, height }) => {  return (
    <FormControl mb="35px">
      <FormLabel>{label}</FormLabel>
      <Input type={type} h={height || '48px'} w="250px" backgroundColor="#0D1D25" color="#fff" placeholder={placeholder} />
    </FormControl>
  );
};

export default CustomInput;
