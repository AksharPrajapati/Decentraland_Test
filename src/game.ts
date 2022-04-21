import { BaseScene } from "./Components/baseScene";
import { CreateRoom1 } from "./Scenes/room1";
import { CreateRoom2 } from "./Scenes/room2";
import { CreateRoom3 } from "./Scenes/room3";

// BaseScene();
// CreateRoom1();
// CreateRoom2();
// CreateRoom3();

const box = new Entity();
engine.addEntity(box);
box.addComponent(new BoxShape());

box.setParent(Attachable.FIRST_PERSON_CAMERA);

const box1 = new Entity();
engine.addEntity(box1);
box1.addComponent(new BoxShape());

box1.addComponent(
  new Transform({
    position: new Vector3(5, 0, 3),
  })
);

box1.setParent(Attachable.AVATAR);
