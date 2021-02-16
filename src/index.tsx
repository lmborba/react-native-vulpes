import { NativeModules } from 'react-native';

type VulpesType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Vulpes } = NativeModules;

export default Vulpes as VulpesType;
