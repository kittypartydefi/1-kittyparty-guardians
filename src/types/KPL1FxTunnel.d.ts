/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface KPL1FxTunnelInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "SEND_MESSAGE_EVENT_SIG()": FunctionFragment;
    "bringForthTheApprentices(uint256)": FunctionFragment;
    "checkpointManager()": FunctionFragment;
    "fxChildTunnel()": FunctionFragment;
    "fxRoot()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "guardian()": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "processedExits(bytes32)": FunctionFragment;
    "receiveMessage(bytes)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setFxChildTunnel(address)": FunctionFragment;
    "setKPGuardian(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SEND_MESSAGE_EVENT_SIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bringForthTheApprentices",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkpointManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fxChildTunnel",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fxRoot", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "processedExits",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveMessage",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFxChildTunnel",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setKPGuardian",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SEND_MESSAGE_EVENT_SIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bringForthTheApprentices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkpointManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fxChildTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fxRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processedExits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFxChildTunnel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setKPGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "SetKPGuardian(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetKPGuardian"): EventFragment;
}

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type SetKPGuardianEvent = TypedEvent<[string] & { _kpGuardian: string }>;

export class KPL1FxTunnel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: KPL1FxTunnelInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<[string]>;

    bringForthTheApprentices(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkpointManager(overrides?: CallOverrides): Promise<[string]>;

    fxChildTunnel(overrides?: CallOverrides): Promise<[string]>;

    fxRoot(overrides?: CallOverrides): Promise<[string]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    guardian(overrides?: CallOverrides): Promise<[string]>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    receiveMessage(
      inputData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFxChildTunnel(
      _fxChildTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKPGuardian(
      _kpGuardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

  bringForthTheApprentices(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkpointManager(overrides?: CallOverrides): Promise<string>;

  fxChildTunnel(overrides?: CallOverrides): Promise<string>;

  fxRoot(overrides?: CallOverrides): Promise<string>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  guardian(overrides?: CallOverrides): Promise<string>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  processedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  receiveMessage(
    inputData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFxChildTunnel(
    _fxChildTunnel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKPGuardian(
    _kpGuardian: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<string>;

    bringForthTheApprentices(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    checkpointManager(overrides?: CallOverrides): Promise<string>;

    fxChildTunnel(overrides?: CallOverrides): Promise<string>;

    fxRoot(overrides?: CallOverrides): Promise<string>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    guardian(overrides?: CallOverrides): Promise<string>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    receiveMessage(
      inputData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFxChildTunnel(
      _fxChildTunnel: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setKPGuardian(
      _kpGuardian: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "SetKPGuardian(address)"(
      _kpGuardian?: null
    ): TypedEventFilter<[string], { _kpGuardian: string }>;

    SetKPGuardian(
      _kpGuardian?: null
    ): TypedEventFilter<[string], { _kpGuardian: string }>;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    SEND_MESSAGE_EVENT_SIG(overrides?: CallOverrides): Promise<BigNumber>;

    bringForthTheApprentices(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkpointManager(overrides?: CallOverrides): Promise<BigNumber>;

    fxChildTunnel(overrides?: CallOverrides): Promise<BigNumber>;

    fxRoot(overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    guardian(overrides?: CallOverrides): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    receiveMessage(
      inputData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFxChildTunnel(
      _fxChildTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKPGuardian(
      _kpGuardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SEND_MESSAGE_EVENT_SIG(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bringForthTheApprentices(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkpointManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxChildTunnel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fxRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    receiveMessage(
      inputData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFxChildTunnel(
      _fxChildTunnel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKPGuardian(
      _kpGuardian: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
