import { Button } from "src/Components/button";
import { Door } from "src/Components/door";
import { MovableEntity } from "src/Components/movableEntity";
import * as utils from "@dcl/ecs-scene-utils";

export const CreateRoom3 = () => {
  const door: any = new Door(
    new GLTFShape("models/room3/Puzzle03_Door.glb"),
    { position: new Vector3(24.11, 7.17, 15.78) },
    new AudioClip("sounds/door_squeak.mp3")
  );

  const button: any = new Button(
    new GLTFShape("models/generic/Round_Button.glb"),
    { position: new Vector3(22.44, 5.92, 24.18) },
    new AudioClip("sounds/button.mp3")
  );

  const trigger = new Entity();
  engine.addEntity(trigger);
  trigger.addComponent(
    new Transform({
      position: new Vector3(25.5, 7.17, 19.5),
    })
  );

  trigger.addComponent(
    new utils.TriggerComponent(
      new utils.TriggerBoxShape(new Vector3(4.2, 3, 8), Vector3.Zero()),
      {
        onCameraEnter: () => {
          door.openDoor();
        },
      }
    )
  );

  const plant1 = new MovableEntity(
    new GLTFShape("models/room3/Puzzle03_Plant1.glb"),
    { position: new Vector3(23.24, 5.5, 23.81) },
    new AudioClip(""),
    new Vector3(0, 0, -0.5)
  );

  plant1.addComponent(
    new OnPointerDown(() => {
      plant1.getComponent(utils.ToggleComponent).toggle();
    })
  );

  const plant2 = new MovableEntity(
    new GLTFShape("models/room3/Puzzle03_Plant1.glb"),
    { position: new Vector3(26.93, 5.5, 23.48) },
    new AudioClip(""),
    new Vector3(0, 0, -0.5)
  );

  plant2.addComponent(
    new OnPointerDown(() => {
      plant2.getComponent(utils.ToggleComponent).toggle();
    })
  );

  const plant3 = new MovableEntity(
    new GLTFShape("models/room3/Puzzle03_Plant1.glb"),
    { position: new Vector3(23.45, 5.5, 16.82) },
    new AudioClip(""),
    new Vector3(0, 0, 0.5)
  );

  plant3.addComponent(
    new OnPointerDown(() => {
      plant3.getComponent(utils.ToggleComponent).toggle();
    })
  );

  const plant4 = new MovableEntity(
    new GLTFShape("models/room3/Puzzle03_Plant1.glb"),
    { position: new Vector3(26.98, 5.5, 16.82) },
    new AudioClip(""),
    new Vector3(0, 0, 0.5)
  );

  plant4.addComponent(
    new OnPointerDown(() => {
      plant4.getComponent(utils.ToggleComponent).toggle();
    })
  );

  button.addComponent(
    new OnPointerDown((): void => {
      button.press();
      door.openDoor();

      trigger.getComponent(utils.TriggerComponent).enabled = false;
    })
  );
};
