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
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CommonInterface extends ethers.utils.Interface {
  functions: {
    "current()": FunctionFragment;
    "doubleUpdate(bytes32,bytes32[2],bytes,bytes)": FunctionFragment;
    "homeDomainHash()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "localDomain()": FunctionFragment;
    "state()": FunctionFragment;
    "updater()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "current", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "doubleUpdate",
    values: [BytesLike, [BytesLike, BytesLike], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "homeDomainHash",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "localDomain",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "state", values?: undefined): string;
  encodeFunctionData(functionFragment: "updater", values?: undefined): string;

  decodeFunctionResult(functionFragment: "current", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "doubleUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "homeDomainHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "localDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "updater", data: BytesLike): Result;

  events: {
    "DoubleUpdate(bytes32,bytes32[2],bytes,bytes)": EventFragment;
    "Update(uint32,bytes32,bytes32,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DoubleUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Update"): EventFragment;
}

export class Common extends BaseContract {
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

  interface: CommonInterface;

  functions: {
    current(overrides?: CallOverrides): Promise<[string]>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    localDomain(overrides?: CallOverrides): Promise<[number]>;

    state(overrides?: CallOverrides): Promise<[number]>;

    updater(overrides?: CallOverrides): Promise<[string]>;
  };

  current(overrides?: CallOverrides): Promise<string>;

  doubleUpdate(
    _oldRoot: BytesLike,
    _newRoot: [BytesLike, BytesLike],
    _signature: BytesLike,
    _signature2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  homeDomainHash(overrides?: CallOverrides): Promise<string>;

  initialize(
    _updater: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  localDomain(overrides?: CallOverrides): Promise<number>;

  state(overrides?: CallOverrides): Promise<number>;

  updater(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    current(overrides?: CallOverrides): Promise<string>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    homeDomainHash(overrides?: CallOverrides): Promise<string>;

    initialize(_updater: string, overrides?: CallOverrides): Promise<void>;

    localDomain(overrides?: CallOverrides): Promise<number>;

    state(overrides?: CallOverrides): Promise<number>;

    updater(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    DoubleUpdate(
      oldRoot?: null,
      newRoot?: null,
      signature?: null,
      signature2?: null
    ): TypedEventFilter<
      [string, [string, string], string, string],
      {
        oldRoot: string;
        newRoot: [string, string];
        signature: string;
        signature2: string;
      }
    >;

    Update(
      homeDomain?: BigNumberish | null,
      oldRoot?: BytesLike | null,
      newRoot?: BytesLike | null,
      signature?: null
    ): TypedEventFilter<
      [number, string, string, string],
      {
        homeDomain: number;
        oldRoot: string;
        newRoot: string;
        signature: string;
      }
    >;
  };

  estimateGas: {
    current(overrides?: CallOverrides): Promise<BigNumber>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    homeDomainHash(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    localDomain(overrides?: CallOverrides): Promise<BigNumber>;

    state(overrides?: CallOverrides): Promise<BigNumber>;

    updater(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    current(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    doubleUpdate(
      _oldRoot: BytesLike,
      _newRoot: [BytesLike, BytesLike],
      _signature: BytesLike,
      _signature2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    homeDomainHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _updater: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    localDomain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    state(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updater(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
