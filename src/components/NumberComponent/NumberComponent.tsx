import { Box, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";

const NumberComponent = (): JSX.Element => {
  return (
    <Box alignItems="center" justifyContent="center" margin="0px auto">
      <FormLabel textAlign="center" as="legend" fontSize="30px" m="0">
        Puntua de 0 a 10 tu satisfacción con la empresa
      </FormLabel>
      <NumberInput m="0" p="0" size="sm" w="65px" step={1} defaultValue={1} min={1} max={10}>
        <NumberInputField borderRadius="100" />
        <NumberInputStepper borderColor="blue" alignItems="center" justifyContent="center">
          <NumberIncrementStepper color="#179bf6" />
          <NumberDecrementStepper color="#179bf6" />
        </NumberInputStepper>
      </NumberInput>
    </Box>
  );
};

export default NumberComponent;