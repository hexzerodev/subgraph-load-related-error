import { newMockEvent } from "matchstick-as";
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts";
import { ExampleEvent } from "../generated/ExampleSubgraph/ExampleContract";

export function createExampleEvent(): ExampleEvent {
  let e = changetype<ExampleEvent>(newMockEvent());

  e.parameters = new Array();

  e.parameters.push(
    new ethereum.EventParam("exampleParam", ethereum.Value.fromString(""))
  );

  return e;
}
