import { ExampleEvent } from "../generated/ExampleSubgraph/ExampleContract";
import { User } from "../generated/schema";

export function hanldeExampleEvent(event: ExampleEvent): void {
  // create user if necessary
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
  let user = User.load(id);
  if (user == null) {
    user = new User(id);
    user.save();
  }

  user.objects.load();
}
